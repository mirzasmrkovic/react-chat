import React, { Component } from 'react';

import GroupUser from './groupUser.js'
import {groupChat} from '../groupChat.json'

class GroupProfileContainer extends Component {
  state = {
    groupChat: groupChat,
  }

  render() {
    console.log(this.props.openChat)
    return(
      <div className='chat-profile-container group-profile-container flex-property justify-content-center'>
        <div className='group-info flex-property align-items-center'>
          <img src={this.props.groupLogo}/>
          <span className='margin-left-10'>{this.props.groupName}</span>
        </div>
        <div className='group-members'>
          <div className='margin-left-10 margin-top-10 margin-bottom-10 light-gray'>Members</div>
          {this.state.groupChat[this.props.openChat].groupUsers.map((e,n) =>
            <GroupUser
              groupUsername={e.groupUsername}
              groupUserImg={e.groupUserImg}
              userLink={e.userLink}
            />
          )}
        </div>
        <div className='chat-ad-container'>ad</div>
      </div>
    )
  }
}

export default GroupProfileContainer
