import React, { Component } from 'react';

class ChatIconItem extends Component {
  render(){
    return(
      <li className='chat-icon-item cursor-pointer'><i className={"fa fa-" + this.props.chatItem}></i></li>
    )
  }
}

export default ChatIconItem
