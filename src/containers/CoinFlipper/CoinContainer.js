import React, { Component } from 'react';

import './CoinContainer.scss';

class CoinContainer extends Component {
  static defaultProps = [
    {},
    {}
  ];

  state = {
    currCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  };

  render() {
    return (
      <div className='coinflip'>
        <div className='coinflip__coins'>Coin</div>
        <div className='coinflip__res'>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}
          heads and {this.state.nTails} tails
        </div>
        <button className='btn'>Flip me</button>
      </div>
    );
  }
}

export default CoinContainer;
