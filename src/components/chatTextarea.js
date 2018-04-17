import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ItemPopup from './itemPopup.js'

class ChatTextarea extends Component {
  render(){
    return(
      <div className='chat-textarea-container'>
        <form onKeyDown={(e) => (e.key === 'Enter' ? this.props.handleSubmit(e) : '')} className='flex-property' onSubmit={this.props.handleSubmit}>
          <textarea id='chat-textarea' className='font-lato title-s' row='2' type="text" value={this.props.value} onChange={this.props.handleChange} placeholder='write a reply'/>
          <input type="submit" value="Submit" />
        </form>
        <div className='chat-icon-container flex-property'>
          <div className='chat-icon-item'><i className="popup-img fa fa-bold"></i></div>
          <div className='chat-icon-item'><i className="popup-img fa fa-italic"></i></div>
          <div className='chat-icon-item'><i className="popup-img fa fa-underline"></i></div>
          <ItemPopup popupImg='image'>
            <div className='chat-icon-popup-title title-xs'>Upload image</div>
            <div>
              <i className="fa fa-upload"></i>
              <div className='title-m'>Upload</div>
            </div>
          </ItemPopup>
          <ItemPopup popupImg='smile-o'>
            <div>smileys</div>
          </ItemPopup>
        </div>
      </div>
    )
  }
}

export default ChatTextarea;
