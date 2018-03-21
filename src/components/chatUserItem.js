import React, { Component } from 'react';

class ChatUserItem extends Component {
  state = {
    openChat: this.props.openChat,
    onlineStatus: this.props.onlineStatus,
  }

  _handleOpenChat = () => {
    this.setState({
      openChat: !this.state.openChat,
    })
  }

  render() {
    return (
      <div onClick={this._handleOpenChat} className={(this.state.openChat && true ? 'chat-user-item-open' : '') + ' chat-user-item flex-property align-items-center'}>
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
