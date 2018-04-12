import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import './css/index.css'
import './css/colorsFonts.css'
import './css/medias.css'
import './App.css';

import Header from './components/header.js'
import ChatUserItem from './components/chatUserItem.js'
import ChatItem from './components/chatItem.js'
import ChatProfileContainer from './components/chatProfileContainer.js'
import OpenSideMenu from './components/openSideMenu.js'
import GroupBtnContainer from './components/groupBtnContainer.js'

import ChatTextarea from './components/chatTextarea.js'

import {chatUserItem} from './chatUserItem.json'
import {userInfo} from './userInfo.json'
import {groupChat} from './groupChat.json'

class Chat extends Component {
  state = {
    reply: '',
    chatUserItem: chatUserItem,
    userInfo: userInfo,
    groupChat: groupChat,
    openLeftSide: true,
    openRightSide: true,
    btnOpened: 0,
    openChat: 0,
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  handleChange(event) {
    this.setState({reply: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    if (this.state.btnOpened === 0) {
      const modifiedChatUserItem = {
        ...this.state.chatUserItem[this.state.openChat],
        chatReplies: [
          ...this.state.chatUserItem[this.state.openChat].chatReplies,
          { userPosting: true, chatReply: this.state.reply }
        ]
      }
      if (this.state.reply !== '') {
        this.setState({
          reply: '',
          chatUserItem: this.state.chatUserItem.map((item, num) => {
            if (num === this.state.openChat) {
              return modifiedChatUserItem
            }
            return item
          })
        })
      }
    }
    else {
      if (this.state.reply !== '') {
        const modifiedChatUserItem = {
          ...this.state.groupChat[this.state.openChat],
          groupItems: [
            ...this.state.groupChat[this.state.openChat].groupItems,
            {chatUserImg: this.state.userInfo.userImg, onlineStatus: true, chatUsername: this.state.userInfo.username, chatUserMsg: this.state.reply}
          ]
        }
        if (this.state.reply !== '') {
          this.setState({
            reply: '',
            groupChat: this.state.groupChat.map((item, num) => {
              if (num === this.state.openChat) {
                return modifiedChatUserItem
              }
              return item
            })
          })
        }
      }
    }
  }

  scrollToBottom = () => {
    const chatTextContainer = ReactDOM.findDOMNode(this.chatTextContainer);
    chatTextContainer.scrollTop = chatTextContainer.scrollHeight;
  }

  _focusInput = () => {
    document.getElementById('chat-textarea').focus()
  }

  toggleSideMenu = (side) => {
    if (side) {
      this.setState({
        openRightSide: !this.state.openRightSide,
      })
    }
    else {
      this.setState({
        openLeftSide: !this.state.openLeftSide,
      })
    }
  }

  _setActiveLink = (chatNum) => {
    this.setState({
      openChat: chatNum,
    })
    if (this.state.openChat !== chatNum) {
      this.setState({
        reply: '',
      })
    }
  }

  _handleBtnOpened = (num) => {
    if (num !== this.state.btnOpened) {
      this._setActiveLink(0)
    }
    this.setState({
      btnOpened: num,
    })
  }

  componentDidMount() {
    this.scrollToBottom()
    this._focusInput()
  }

  componentDidUpdate() {
    this.scrollToBottom()
    this._focusInput()
  }

  render() {
    return (
      <div className="chat-container">
        <Header
          username={userInfo.username}
          userImg={userInfo.userImg}
          msgNum={150}
        />
        <div className='chat-content-container flex-property flex-wrap-wrap'>
          <OpenSideMenu toggleSideMenu={this.toggleSideMenu} side={false}/> {/*false = left*/}
          <OpenSideMenu toggleSideMenu={this.toggleSideMenu} side={true}/> {/*true = right*/}
          {this.state.openLeftSide && <div className='chat-side-container flex-1'>
            <div className='msg-search-bar flex-property justify-content-center align-items-center'>
              <input placeholder='Search messages'/>
            </div>
            <div className='chat-msg-container'>
              <GroupBtnContainer
                handleChatType={this._handleChatType}
                handleBtnOpened={this._handleBtnOpened}
                btnOpened={this.state.btnOpened}
              />
              {this.state.btnOpened === 0 ? this.state.chatUserItem.map((item, num) =>
                <ChatUserItem
                  setActiveLink={this._setActiveLink}
                  key={num}
                  itemNum={num}
                  chatFriendImg={item.chatFriendImg}
                  onlineStatus={item.onlineStatus}
                  friendName={item.friendName}
                  friendLastMsg={item.chatReplies[item.chatReplies.length-1].chatReply}
                  userPosting={item.chatReplies[item.chatReplies.length-1].userPosting}
                  openChat={this.state.openChat === num}
                />
              ) :
              this.state.groupChat.map((item,num) =>
                <ChatUserItem
                  setActiveLink={this._setActiveLink}
                  key={num}
                  itemNum={num}
                  groupOpen={true}
                  chatFriendImg={item.groupLogo}
                  onlineStatus={item.onlineStatus}
                  friendName={item.groupChatType}
                  friendLastMsg={item.groupItems[item.groupItems.length-1].chatUserMsg}
                  userPosting={item.groupItems[item.groupItems.length-1].chatUsername.toLowerCase() === this.state.userInfo.username.toLowerCase()}
                  openChat={this.state.openChat === num}
                />
              )
              }
            </div>
          </div>}
            <div className='chat-middle-container flex-property flex-direction-column flex-2'>
              <div ref={(el) => { this.chatTextContainer = el; }} className='chat-text-container'>
                {this.state.btnOpened === 0 ? this.state.chatUserItem[this.state.openChat].chatReplies.map((item, num) =>
                  <ChatItem
                    chatFriendImg={this.state.chatUserItem[this.state.openChat].chatFriendImg}
                    onlineStatus={this.state.chatUserItem[this.state.openChat].onlineStatus}
                    userPosting={item.userPosting}
                    chatReply={item.chatReply}
                    username={userInfo.username}
                    userImg={userInfo.userImg}
                  />
                ) :
                this.state.groupChat[this.state.openChat].groupItems.map((item, num) =>
                    <ChatItem
                      chatFriendImg={item.chatUserImg}
                      onlineStatus={item.onlineStatus}
                      userPosting={item.chatUsername.toLowerCase() === userInfo.username.toLowerCase()}
                      chatReply={item.chatUserMsg}
                      username={userInfo.username}
                      userImg={userInfo.userImg}
                    />
                )
                }
              </div>
              <ChatTextarea value={this.state.reply} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
            {this.state.openRightSide && <ChatProfileContainer
              chatFriendImg={this.state.chatUserItem[this.state.openChat].chatFriendImg}
              chatFriendName={this.state.chatUserItem[this.state.openChat].friendName}
              friendEmail={this.state.chatUserItem[this.state.openChat].friendEmail}
              friendAge={this.state.chatUserItem[this.state.openChat].userAge}
            />}
        </div>
      </div>
    );
  }
}

export default Chat;
