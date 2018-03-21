import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'

import './css/index.css'
import './css/colorsFonts.css'
import './css/medias.css'
import './App.css';

import Header from './components/header.js'
import ChatUserItem from './components/chatUserItem.js'
import ChatItem from './components/chatItem.js'
import ChatProfileContainer from './components/chatProfileContainer.js'

import ChatTextarea from './components/chatTextarea.js'

import {chatUserItem} from './chatUserItem.json'
import {friendReplies} from './friendReplies.json'

class Chat extends Component {
  state = {
    reply: '',
    friendReplies: friendReplies,
    chatUserItem: chatUserItem,
    test: true,
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({reply: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.reply != '') {
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

  _handleFriendMsg = () => {
    this.setState({
      test: false,
    })
  }

  render() {
    return (
      <div className="chat-container">
        <Header msgNum={150}/>
        <div className='chat-content-container flex-property flex-wrap-wrap'>
          <div className='chat-side-container flex-1'>
          <div className='msg-search-bar flex-property justify-content-center align-items-center'>
            <input placeholder='Search messages'/>
          </div>
            <div className='chat-msg-container'>
              {this.state.chatUserItem.map((item, num) =>
                <ChatUserItem
                  key={num}
                  chatFriendImg={item.chatFriendImg}
                  onlineStatus={item.onlineStatus}
                  friendName={item.friendName}
                  friendLastMsg={item.friendLastMsg}
                  openChat={false}
                />
              )}
            </div>
          </div>
          <div className='chat-middle-container flex-property flex-direction-column flex-2'>
            <div ref={(el) => { this.chatTextContainer = el; }} className='chat-text-container'>
              {this.state.friendReplies.map((item, num) =>
                <ChatItem
                  comments={this.state.friendReplies}
                  value={this.state.reply}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  chatFriendImg={item.chatFriendImg}
                  onlineStatus={item.onlineStatus}
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
