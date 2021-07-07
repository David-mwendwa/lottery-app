import React, { Component } from 'react';

import Ball from '../Ball/Ball';
import Button from '../../../components/Button/Button';

import './Lottery.scss';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40,
  };

  state = { nums: Array.from({ length: this.props.numBalls }) };

  genarate = () => {
    this.setState((cst) => ({
      nums: cst.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  };

  handleClick = () => {
    this.genarate();
  };

  render() {
    return (
      <div className='lottery'>
        <h1 className='lottery__title'>{this.props.title}</h1>
        <div className='lottery__balls'>
          {this.state.nums.map((n) => (
            <Ball key={n} num={n} />
          ))}
        </div>
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}

export default Lottery;
