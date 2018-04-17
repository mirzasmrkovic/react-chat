import React, { Component } from 'react';

class ItemPopup extends Component {
  state = {
    openPopup: false,
  }

  _handlePopup = (e) => {
    if (e.target.className.split(' ')[0] !== 'chat-icon-item-popup') {
      this.setState({
        openPopup: !this.state.openPopup,
      })
    }
  }

  handleClickOutside = (e) => {
    if ((this.state.openPopup === true) && (e.target.className !== 'chat-icon-item') && (e.target.className !== 'chat-icon-item-popup')) {
      this._handlePopup(e)
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  render() {
    return(
      <div onClick={this._handlePopup} className='chat-icon-item'>
        <i className={"popup-img fa fa-" + this.props.popupImg}></i>
        {this.state.openPopup && <div className='chat-icon-item-popup flex-property justify-content-center'>
          {this.props.children}
        </div>}
      </div>
    )
  }
}

export default ItemPopup
