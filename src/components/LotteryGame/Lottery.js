import React, { Component } from 'react';

import Ball from './Ball';
//import Button from './Button';

import './Lottery.css';

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
      <div className='Lottery'>
        <h1>{this.props.title}</h1>
        <div className='Lottery__balls'>
          {this.state.nums.map((n) => (
            <Ball key={n} num={n} />
          ))}
        </div>
        <button onClick={this.handleClick} className='Button'>
          Generate
        </button>
      </div>
    );
  }
}

export default Lottery;
