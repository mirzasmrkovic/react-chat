import React, { Component } from 'react';

class ChatNavItem extends Component {
  render(){
    return(
      <div onClick={() => this.props.setActiveLink(this.props.itemNum)} className={(this.props.openChat && true ? 'chat-nav-item-open' : '') + ' chat-nav-item title-m flex-property align-items-center cursor-pointer'}><li className='margin-left-10 margin-right-10'>{this.props.navItem}</li></div>
    )
  }
}

export default ChatNavItem;
