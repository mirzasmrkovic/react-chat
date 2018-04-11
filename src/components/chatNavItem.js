import React, { Component } from 'react';

class ChatNavItem extends Component {
  _handleClick (item, itemNum, e) {
    this.props.setActiveLink(item, itemNum)
    this.props.handleHeaderClick(e, itemNum)
  }

  render(){
    return(
      <div onClick={(e) => this._handleClick(this.props.item, this.props.itemNum, e)} className={(this.props.openChat ? 'chat-nav-item-open' : '') + ' chat-nav-item title-m flex-property align-items-center cursor-pointer'}><li className='margin-left-10 margin-right-10'>{this.props.navItem}</li></div>
    )
  }
}

export default ChatNavItem;
