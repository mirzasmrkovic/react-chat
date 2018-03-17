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
      </div>
    );
  }
}

export default Chat;
