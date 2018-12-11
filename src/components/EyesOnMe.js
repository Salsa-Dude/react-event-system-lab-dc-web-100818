// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

  handleFocusBtn = () => {
    console.log('Good!')
  }

  handleBlurBtn = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onBlur={this.handleBlurBtn} onFocus={this.handleFocusBtn}></button>
    )
  }
}

export default EyesOnMe;
