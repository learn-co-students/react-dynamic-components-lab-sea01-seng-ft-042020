import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacity = this.props.opacity;
    return (
      <div className="color-box" style={{opacity: opacity}}>
        {opacity < .2 ? null : (<ColorBox opacity={opacity - .1} />)}
      </div>
    )
  }

}

