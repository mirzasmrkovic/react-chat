import React, { Component } from 'react';

class ChatFriendContainer extends Component {
  render() {
    return (
      <div className='chat-friend-container flex-property flex-direction-column align-items-center center-title'>
        <img src={this.props.chatFriendImg}/>
        <div className='chat-friend-text-container'>
          <div className='chat-friend-name title-l bold-title margin-top-10 margin-bottom-10'>{this.props.chatFriendName.split(' ')[0] + ' ' + this.props.chatFriendName.split(' ')[1][0] + '.'}</div>
          <div className='margin-bottom-5 title-m'>{this.props.friendEmail}</div>
          <div className='margin-bottom-10 title-m'>{this.props.friendAge} years old.</div>
        </div>
        <div className='chat-profle-icons flex-property'>
          <a href='#' className='chat-profile-icon flex-property align-items-center justify-content-center'><i className="fa fa-phone"></i></a>
          <a href='#' className='chat-profile-icon flex-property align-items-center justify-content-center'><i className="fa fa-envelope-o"></i></a>
        </div>
      </div>
    )
  }
}

export default ChatFriendContainer
