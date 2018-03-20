import React, { Component } from 'react';
import logo from './logo.svg';

import './css/index.css'
import './css/colorsFonts.css'
import './css/medias.css'
import './App.css';

import Header from './components/header.js'
import ChatUserItem from './components/chatUserItem.js'
import ChatItem from './components/chatItem.js'
import ChatProfileContainer from './components/chatProfileContainer.js'

import ChatTextarea from './components/chatTextarea.js'
import {friendReplies} from './friendReplies.json'

class Chat extends Component {
  state = {
    reply: '',
    friendReplies: friendReplies,
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
    this.setState({
      friendReplies: [...this.state.friendReplies, { chatFriendImg: "https://i.imgur.com/1ls2fTv.png", onlineStatus: false, userPosting: true, chatReply: this.state.reply}],
      reply: ''
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
              <ChatUserItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={true}
                friendName='halid beslic'
                friendLastMsg='Masiraj da dise.'
                openChat={true}
              />
              <ChatUserItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={false}
                friendName='hanka paldum'
                friendLastMsg='Masiraj da dise.'
              />
              <ChatUserItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={false}
                friendName='halid beslic'
                friendLastMsg='Masiraj da dise.'
              />
              <ChatUserItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={false}
                friendName='halid beslic'
                friendLastMsg='Masiraj da dise.'
              />
              <ChatUserItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={false}
                friendName='halid beslic'
                friendLastMsg='Masiraj da dise.'
              />
            </div>
          </div>
          <div className='chat-middle-container flex-property flex-direction-column flex-2'>
            <div className='chat-text-container'>
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
            <ChatTextarea value={this.state.comment} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
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
