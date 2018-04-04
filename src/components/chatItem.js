import React, { Component } from 'react';

class ChatUserItem extends Component {
  render() {
    return (
      <div className={(this.props.userPosting && true ? 'chat-item-posted' : 'chat-item') + ' flex-property'}>
        <div className='chat-img-container'>
          <img src={this.props.userImg && this.props.userPosting ? this.props.userImg : this.props.chatFriendImg}/>
          {!this.props.userPosting && <div className={(this.props.onlineStatus && true ? 'chat-online' : 'chat-offline') + ' chat-online-status'}></div>}
        </div>
        <div className='chat-text'>{this.props.chatReply}</div>
      </div>
    )
  }
}

export default ChatUserItem;
