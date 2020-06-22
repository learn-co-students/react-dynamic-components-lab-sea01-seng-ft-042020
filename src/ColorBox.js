import React from 'react';

export default class ColorBox extends React.Component {

  // state = {
  //   todos: [
      
  //   ]
  // }
  
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }
}

