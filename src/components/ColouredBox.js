import React, { Component } from 'react';

export default class ColouredBox extends Component {
  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
  }
  handleColor() {
    this.props.onClick(this.props.color)
  }
  render() {
    return (
      <div>
        <button
          onClick={this.handleColor}
          className='btn'
          style={{ backgroundColor: this.props.color }}>
        </button>
      </div >
    )
  }
}

