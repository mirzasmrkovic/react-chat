import React, { Component } from 'react';

class ChatTextarea extends Component {
  render(){
    return(
      <div className='chat-textarea-container'>
        <form className='flex-property' onSubmit={this.props.handleSubmit}>
          <textarea className='font-lato title-s' row='2' type="text" value={this.props.value} onChange={this.props.handleChange} placeholder='write a reply'/>
          <input type="submit" value="Submit" />
        </form>
        <div className='chat-icon-container'>
          <div className='chat-icon-item'>aaa</div>
        </div>
      </div>
    )
  }
}

export default ChatTextarea;
