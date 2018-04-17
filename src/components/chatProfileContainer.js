import React, { Component } from 'react';
import ChatFriendContainer from './chatFriendContainer.js'

let navItems = ['profile', 'files']

class ChatProfileContainer extends Component {
  state = {
    onlineStatus: this.props.onlineStatus && true ? 'chat-online' : 'chat-offline',
    selected: false,
    openChat: 0,
  }

  _handleNav = (num) => {
    this.setState({
      openChat: num,
    })
  }

  render() {
    return (
      <div className='chat-profile-container flex-property justify-content-center'>
        <ul className='chat-profile-nav flex-property'>
          {navItems.map((item,num) =>
            <li onClick={() => this._handleNav(num)} className={(this.state.openChat === num ? 'profile-nav-open' : 'profile-nav') + ' flex-property justify-content-center align-items-center'}>{item}</li>
          )}
        </ul>
        {this.state.openChat === 0 ?
          <ChatFriendContainer
            chatFriendImg={this.props.chatFriendImg}
            chatFriendName={this.props.chatFriendName}
            chatFriendName={this.props.chatFriendName}
            friendEmail={this.props.friendEmail}
            friendAge={this.props.friendAge}
          /> :
          'test'
        }
        <div className='chat-ad-container'>ad</div>
      </div>
    )
  }
}

export default ChatProfileContainer;
