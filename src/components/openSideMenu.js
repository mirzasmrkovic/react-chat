import React, { Component } from 'react';

class OpenSideMenu extends Component {
  state = {
    side: this.props.side
  }

  _handleSide = () => {
    this.setState({
      side: !this.state.side,
    })
  }

  render(){
    return(
      <div onClick={this.props.toggleSideMenu} className={'flex-property justify-content-center align-items-center open-side-menu open-' + ((this.props.side && true) ? 'right' : 'left')}><i className={'fa fa-angle-' + ((this.state.side && true) ? 'right' : 'left')}></i></div>
    )
  }
}

export default OpenSideMenu
