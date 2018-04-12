import React, { Component } from 'react';

class GroupBtn extends Component {
  render() {
    return(
      <div onClick={() => this.props.handleBtnOpened(this.props.btnNum)} className={(this.props.btnOpened ? 'chat-group-btn-open' : '') + ' chat-group-btn flex-property justify-content-center align-items-center cursor-pointer'}><i className={"fa fa-" + this.props.iconName}></i></div>
    )
  }
}

let iconName = ['user', 'users']

class GroupBtnContainer extends Component {
  render() {
    return(
      <div className='chat-group-btn-container margin-bottom-10 flex-property justify-content-around title-xl'>
        {iconName.map((i,n) =>
          <GroupBtn
            iconName={i}
            setActiveLink={this._setActiveLink}
            btnNum={n}
            btnOpened={this.props.btnOpened === n}
            handleBtnOpened={this.props.handleBtnOpened}
          />
        )}
      </div>
    )
  }
}

export default GroupBtnContainer;
