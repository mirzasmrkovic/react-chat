import React, { Component } from 'react';

class OpenSideMenu extends Component {
  render(){
    return(
      <div onClick={() => this.props.toggleSideMenu(this.props.side)} className={'flex-property justify-content-center align-items-center open-side-menu open-' + ((this.props.side && true) ? 'right' : 'left')}><i className={'fa fa-angle-' + ((this.props.side && true) ? 'right' : 'left')}></i></div>
    )
  }
}

export default OpenSideMenu
