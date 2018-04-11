import React, { Component } from 'react';

class GroupBtn extends Component {
  render() {
    return(
      <div onClick={(e) => this.props.setActiveLink(e, this.props.btnNum)} className={(this.props.btnOpened ? 'chat-group-btn-open' : '') + ' chat-group-btn flex-property justify-content-center align-items-center cursor-pointer'}><i className={"fa fa-" + this.props.iconName}></i></div>
    )
  }
}

let iconName = ['user', 'users']

class GroupBtnContainer extends Component {
  state = {
    btnOpened: -1,
  }

  _setActiveLink = (e, num) => {
    this.setState({
      btnOpened: num,
    })
  }

  render() {
    return(
      <div className='chat-group-btn-container margin-bottom-10 flex-property justify-content-around title-xl'>
        {iconName.map((i,n) =>
          <GroupBtn
            iconName={i}
            btnOpened={this.state.btnOpened == n}
            setActiveLink={this._setActiveLink}
            btnNum={n}
          />
        )}
      </div>
    )
  }
}

export default GroupBtnContainer;
