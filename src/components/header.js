import React, { Component } from 'react';
import ChatNavItem from './chatNavItem.js'

let navItems = ['women', 'men', 'transexual']

class Header extends Component {
  state = {
    msgNum: (this.props.msgNum) < 100 ? (this.props.msgNum) : 99 + '+',
    openChat: -1,
  }

  _setActiveLink = (item, chatNum) => {
    this.setState({
      openChat: chatNum,
    })
  }

  render(){
    return(
      <div className='chat-header flex-property justify-content-between align-items-center'>
        <div className='header-items flex-property margin-left-20'>
          <img className='chat-logo' src='https://i.imgur.com/TindFVo.png'/>
        </div>
          <ul className='chat-nav flex-property'>
            {navItems.map((item, num) =>
              <ChatNavItem
                setActiveLink={this._setActiveLink}
                key={num}
                item={item}
                itemNum={num}
                openChat={this.props.openGroupChat ? this.state.openChat === num : false}
                navItem={item}
                handleHeaderClick={this.props.handleHeaderClick}
              />
            )}
          </ul>
        <div className='header-items flex-property align-items-center'>
          <div className='chat-msgs flex-property align-items-center'><i className="fa fa-envelope" aria-hidden="true"></i> <div className='msg-number flex-property align-items-center justify-content-center white title-xxs bold-title'>{this.state.msgNum}</div></div>
          <div className='chat-user-container flex-property align-items-center margin-right-20'>
            <div className='chat-username margin-left-20 margin-right-10 title-m'>{this.props.username.split(' ')[0] + ' ' + this.props.username.split(' ')[1][0] + '.'}</div>
            <img src={this.props.userImg} />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
