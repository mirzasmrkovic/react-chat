import React, { Component } from 'react';

class ChatUserItem extends Component {
  state = {
    openChat: this.props.openChat && true ? 'chat-user-item-open' : '',
    onlineStatus: this.props.onlineStatus && true ? 'chat-online' : 'chat-offline',
  }

  render() {
    return (
      <div className={this.state.openChat + ' chat-user-item flex-property align-items-center'}>
        <div className='chat-user-img-container'>
          <img src={this.props.chatFriendImg}/>
          <div className={this.state.onlineStatus + ' chat-online-status'}></div>
        </div>
        <div className='user-item-text-container margin-left-10'>
          <div className='user-item-name title-l thin-title'>{this.props.friendName}</div>
          <div className='user-item-last-msg'>{this.props.friendLastMsg}</div>
        </div>
      </div>
    )
  }
}

export default ChatUserItem;
