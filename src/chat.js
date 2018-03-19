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

class Chat extends Component {
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
              <ChatItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={true}
                chatText='da diseee! consectetur adipiscing elit. Vestibulum enim metus, sagittis at metus et, cursus vestibulum lacus. Duis quis varius sapien.'
              />
              <ChatItem
                chatItemPosted='chat-item-posted'
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={true}
                chatText='da diseee! consectetur adipiscing elit. Vestibulum enim metus, sagittis at metus et, cursus vestibulum lacus. Duis quis varius sapien.'
              />
              <ChatItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={true}
                chatText='da diseee! consectetur adipiscing elit. Vestibulum enim metus, sagittis at metus et, cursus vestibulum lacus. Duis quis varius sapien.'
              />
              <ChatItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={true}
                chatText='da diseee! consectetur adipiscing elit. Vestibulum enim metus, sagittis at metus et, cursus vestibulum lacus. Duis quis varius sapien.'
              />
              <ChatItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={true}
                chatText='da diseee! consectetur adipiscing elit. Vestibulum enim metus, sagittis at metus et, cursus vestibulum lacus. Duis quis varius sapien.'
              />
            </div>
            <div className='chat-textarea-container'>
              <textarea className='font-lato title-s' placeholder='write a reply' row='2' />
              <div className='chat-icon-container'>
                <div className='chat-icon-item'>aaa</div>
              </div>
            </div>
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
