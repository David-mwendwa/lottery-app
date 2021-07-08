import React from 'react';
import { choice } from '../../helpers/helpers';

import './Box.scss';

class Box extends React.Component {
  static defaultProps = {
    allColors: [
      'purple',
      'magenta',
      'lighgreen',
      'pink',
      'skyblue',
      'indigo',
      'orangered',
      'lightgreen',
      'yellow',
      'brown',
      'darkgray',
      'coral',
      'red',
      'black',
      'skyblue',
      'white',
    ],
  };

  state = { color: choice(this.props.allColors) };

  changeColor = () => {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  };

  handleClick = () => this.changeColor();

  render() {
    return (
      <div
        className='box'
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}></div>
    );
  }
}

export default Box;
