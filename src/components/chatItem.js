import React, { Component } from 'react';

class ChatUserItem extends Component {
  state = {
    onlineStatus: this.props.onlineStatus && true ? 'chat-online' : 'chat-offline',
  }

  render() {
    return (
      <div className={this.props.chatItemPosted + ' chat-item flex-property align-items-center'}>
        <div className='chat-img-container'>
          <img src={this.props.chatFriendImg}/>
          {!this.props.chatItemPosted && <div className={this.state.onlineStatus + ' chat-online-status'}></div>}
        </div>
        <div className='chat-text'>{this.props.chatText}</div>
      </div>
    )
  }
}

export default ChatUserItem;
