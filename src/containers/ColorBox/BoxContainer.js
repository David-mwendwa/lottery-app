import React, { Component } from 'react';
import Box from './Box';

import './BoxContainer.scss';

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 16,
  };

  state = {};

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box />
    ));
    return <div className='boxcontainer'>{boxes}</div>;
  }
}

export default BoxContainer;
