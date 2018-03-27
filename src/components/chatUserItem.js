import React, { Component } from 'react';

class ChatUserItem extends Component {
  state = {
    onlineStatus: this.props.onlineStatus,
  }

  render() {
    return (
      <div onClick={() => this.props.setActiveLink(this.props.itemNum)} key={this.props.itemNum} className={(this.props.openChat && true ? 'chat-user-item-open' : '') + ' chat-user-item flex-property align-items-center'}>
        <div className='chat-user-img-container'>
          <img src={this.props.chatFriendImg}/>
          <div className={(this.state.onlineStatus && true ? 'chat-online' : 'chat-offline') + ' chat-online-status'}></div>
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
