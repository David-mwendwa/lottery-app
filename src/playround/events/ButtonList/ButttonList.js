import React from 'react';

import './ButtonList.css';

class ButtonList extends React.Component {
  static defaultProps = {
    colors: ['purple', 'orangered', 'lightgreen', 'orange'],
  };

  state = { bgColor: '' };

  setBgColor = (color) => {
    this.setState({ bgColor: color });
  };
  render() {
    return (
      <div
        className='ButtonList'
        style={{ backgroundColor: this.state.bgColor }}>
        {this.props.colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => this.setBgColor(color)}>
            click me
          </button>
        ))}
      </div>
    );
  }
}

export default ButtonList;
