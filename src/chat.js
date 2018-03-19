import React, { Component } from 'react';
import logo from './logo.svg';

import './css/index.css'
import './css/colorsFonts.css'
import './css/medias.css'
import './App.css';

import Header from './components/header.js'
import ChatUserItem from './components/chatUserItem.js'
import ChatItem from './components/chatItem.js'

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
                chatText='Masiraj da dise.'
                openChat={true}
              />
              <ChatUserItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={false}
                friendName='hanka paldum'
                chatText='Masiraj da dise.'
              />
              <ChatUserItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={false}
                friendName='halid beslic'
                chatText='Masiraj da dise.'
              />
              <ChatUserItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={false}
                friendName='halid beslic'
                chatText='Masiraj da dise.'
              />
              <ChatUserItem
                chatFriendImg='https://i.imgur.com/1ASbjkR.jpg'
                onlineStatus={false}
                friendName='halid beslic'
                chatText='Masiraj da dise.'
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
            </div>
            <div className='chat-textarea-container'>
              <textarea className='font-lato title-s' placeholder='write a reply' row='2' />
              <div className='chat-icon-container'>
                <div className='chat-icon-item'>aaa</div>
              </div>
            </div>
          </div>
          <div className='chat-profile-container flex-1'>
            <ul className='chat-profile-nav flex-property'>
              <li className='flex-property justify-content-center'>profile</li>
              <li className='flex-property justify-content-center'>files</li>
            </ul>
            <div className='chat-friend-container flex-property flex-direction-column align-items-center center-title'>
              <img src='https://i.imgur.com/WXXZkXp.png'/>
              <div className='chat-friend-text-container'>
                <div className='chat-friend-name title-l bold-title margin-top-10 margin-bottom-10'>robbie t.</div>
                <div className='margin-bottom-5 title-m'>robbietimmms@gmail.com</div>
                <div className='margin-bottom-10 title-m'>26 years old</div>
              </div>
              <div className='chat-profle-icons flex-property'>
                <a href='#' className='chat-profile-icon flex-property align-items-center justify-content-center'><i className="fa fa-phone"></i></a>
                <a href='#' className='chat-profile-icon flex-property align-items-center justify-content-center'><i className="fa fa-envelope-o"></i></a>
              </div>
            </div>
            <div className='chat-ad-container'>ad</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
