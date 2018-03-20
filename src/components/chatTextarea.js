import React, { Component } from 'react';

class ChatTextarea extends Component {
  // state = {
  //   test: '',
  // }
  //
  // _onKeyUp = (event) => {
  //   if (event.keyCode === 13) {
  //     this.setState({
  //       test: this.props.handleChange,
  //     })
  //   }
  // }
  //
  // componentDidMount () {
  //   document.addEventListener('keyup', this._onKeyUp)
  // }
  //
  // componentWillUnmount () {
  //   document.removeEventListener('keyup', this._onKeyUp)
  // }

  render(){
    return(
      <div className='chat-textarea-container'>
        <form onSubmit={this.props.handleSubmit}>
          <input className='font-lato title-s' row='2' type="text" value={this.props.value} onChange={this.props.handleChange} placeholder='write a reply'/>
        </form>
        <div className='chat-icon-container'>
          <div className='chat-icon-item'>aaa</div>
        </div>
      </div>
    )
  }
}

export default ChatTextarea;
