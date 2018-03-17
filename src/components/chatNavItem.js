import React, { Component } from 'react';

class ChatNavItem extends Component {
  render(){
    return(
      <a className='chat-nav-item title-m' chat-nav-item-open href='#'><li className='margin-left-10 margin-right-10'>{this.props.navItem}</li></a>
    )
  }
}

export default ChatNavItem;
