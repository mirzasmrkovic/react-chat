import React, { Component } from 'react';

class GroupUser extends Component {
  render(){
    return(
      <a href={this.props.userLink} className='group-user flex-property align-items-center'><img src={this.props.groupUserImg}/><span className='margin-left-10'>{this.props.groupUsername}</span></a>
    )
  }
}

export default GroupUser
