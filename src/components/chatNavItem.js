import React, { Component } from 'react';

class ChatNavItem extends Component {
  state = {
    openChat: this.props.openChat,
  }

  _handleOpenChat = () => {
    this.setState({
      openChat: !this.state.openChat,
    })
  }

  render(){
    return(
      <div onClick={this._handleOpenChat} className={(this.state.openChat && true ? 'chat-nav-item-open' : '') + ' chat-nav-item title-m flex-property align-items-center cursor-pointer'}><li className='margin-left-10 margin-right-10'>{this.props.navItem}</li></div>
    )
  }
}

export default ChatNavItem;
