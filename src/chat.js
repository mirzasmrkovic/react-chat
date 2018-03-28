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

import ChatTextarea from './components/chatTextarea.js'

import {chatUserItem} from './chatUserItem.json'
import {friendReplies} from './friendReplies.json'

class Chat extends Component {
  state = {
    reply: '',
    friendReplies: friendReplies,
    chatUserItem: chatUserItem,
    openSide: true,
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
    if (this.state.reply !== '') {
      this.setState({
        reply: '',
        friendReplies: [...this.state.friendReplies, { chatFriendImg: "https://i.imgur.com/1ls2fTv.png", onlineStatus: false, userPosting: true, chatReply: this.state.reply}],
      })
    }
  }

  scrollToBottom = () => {
    const chatTextContainer = ReactDOM.findDOMNode(this.chatTextContainer);
    chatTextContainer.scrollTop = chatTextContainer.scrollHeight;
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  toggleSideMenu = () => {
    this.setState({
      openSide: !this.state.openSide,
    })
  }

  _setActiveLink = (chatNum) => {
    this.setState({
      openChat: chatNum,
    })
  }

  render() {
    return (
      <div className="chat-container">
        <Header msgNum={150}/>
        <div className='chat-content-container flex-property flex-wrap-wrap'>
          <OpenSideMenu toggleSideMenu={this.toggleSideMenu} side={false}/> {/*false = left*/}
          <OpenSideMenu side={true}/> {/*true = right*/}
          {this.state.openSide && <div className='chat-side-container flex-1'>
            <div className='msg-search-bar flex-property justify-content-center align-items-center'>
              <input placeholder='Search messages'/>
            </div>
            <div className='chat-msg-container'>
              {this.state.chatUserItem.map((item, num) =>
                <ChatUserItem
                  setActiveLink={this._setActiveLink}
                  key={num}
                  itemNum={num}
                  chatFriendImg={item.chatFriendImg}
                  onlineStatus={item.onlineStatus}
                  friendName={item.friendName}
                  friendLastMsg={item.friendLastMsg}
                  openChat={this.state.openChat === num}
                />
              )}
            </div>
          </div>}
            <div className='chat-middle-container flex-property flex-direction-column flex-2'>
              <div ref={(el) => { this.chatTextContainer = el; }} className='chat-text-container'>
                {this.state.chatUserItem[this.state.openChat].chatReplies.map((item, num) =>
                  <ChatItem
                    comments={this.state.friendReplies}
                    value={this.state.reply}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    chatFriendImg={this.state.chatUserItem[this.state.openChat].chatFriendImg}
                    onlineStatus={this.state.chatUserItem[this.state.openChat].onlineStatus}
                    userPosting={item.userPosting}
                    chatReply={item.chatReply}
                  />
                )}
              </div>
              <ChatTextarea value={this.state.reply} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
            <ChatProfileContainer
              chatFriendName='robbie timms'
              friendEmail='robbietimmms@gmail.com'
              friendAge='26 years old'
            />
        </div>
      </div>
    );
  }
}

export default Chat;
