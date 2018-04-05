import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatIconItem from './chatIconItem.js'

class ChatTextarea extends Component {
  state = {
    openPopup: false,
  }

  _handlePopup = () => {
    this.setState({
      openPopup: !this.state.openPopup,
    })
  }

  render(){
    return(
      <div className='chat-textarea-container'>
        <form onKeyDown={(e) => (e.key === 'Enter' ? this.props.handleSubmit(e) : '')} className='flex-property' onSubmit={this.props.handleSubmit}>
          <textarea className='font-lato title-s' row='2' type="text" value={this.props.value} onChange={this.props.handleChange} placeholder='write a reply'/>
          <input type="submit" value="Submit" />
        </form>
        <div className='chat-icon-container flex-property'>
          <div className='chat-icon-item'><i className="fa fa-bold"></i></div>
          <div className='chat-icon-item'><i className="fa fa-italic"></i></div>
          <div className='chat-icon-item'><i className="fa fa-underline"></i></div>
          <div className='chat-icon-item'>
            <i onClick={this._handlePopup} className="fa fa-image"></i>
            {this.state.openPopup && <div className='chat-icon-item-popup flex-property align-items-center justify-content-center'>
              <div className='chat-icon-popup-title title-xs'>Upload image</div>
              <div>
                <i className="fa fa-upload"></i>
                <div className='title-m'>Upload</div>
              </div>
            </div>}
          </div>
          <div className='chat-icon-item'><i className="fa fa-smile-o"></i></div>
        </div>
      </div>
    )
  }
}

export default ChatTextarea;
