import React, { Component } from 'react';
import logo from './logo.svg';

import './css/index.css'
import './css/colorsFonts.css'
import './css/medias.css'
import './App.css';

import Header from './components/header.js'

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
              <div className='chat-user-item flex-property align-items-center'>
                <img src='https://i.imgur.com/1ASbjkR.jpg'/>
                <div className='user-item-text-container margin-left-10'>
                  <div className='user-item-name title-l thin-title'>Halid Beslic</div>
                  <div className='user-item-last-msg light-gray'>Masiraj da dise.</div>
                </div>
              </div>
              <div className='chat-user-item flex-property align-items-center'>
                <img src='https://i.imgur.com/1ASbjkR.jpg'/>
                <div className='user-item-text-container margin-left-10'>
                  <div className='user-item-name title-l thin-title'>Halid Beslic</div>
                  <div className='user-item-last-msg light-gray'>Masiraj da dise.</div>
                </div>
              </div>
            </div>
          </div>
          <div className='chat-middle-container flex-property flex-direction-column flex-2'>
            <div className='chat-text-container'>
              <div className='chat-item flex-property align-items-center'>
                <div className='chat-img-container'>
                  <img src='https://i.imgur.com/1ASbjkR.jpg'/>
                </div>
                <div className='chat-text'>da diseee! consectetur adipiscing elit. Vestibulum enim metus,
                sagittis at metus et, cursus vestibulum lacus. Duis quis varius sapien.</div>
              </div>
              <div className='chat-item flex-property align-items-center'>
                <div className='chat-img-container'>
                  <img src='https://i.imgur.com/1ASbjkR.jpg'/>
                </div>
                <div className='chat-text'>da diseee! consectetur adipiscing elit. Vestibulum enim metus,
                sagittis at metus et, cursus vestibulum lacus. Duis quis varius sapien.</div>
              </div>
            </div>
            <div className='chat-textarea-container'>
              <textarea row='2' />
              <div className='chat-icon-container'>
                <div className='chat-icon-item'>aaa</div>
              </div>
            </div>
          </div>
          <div className='chat-side-container flex-1'>
            <div className='chat-profile-container'>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
