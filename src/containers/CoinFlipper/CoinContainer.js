import React, { Component } from 'react';

import Coin from './Coin';
import { choice } from '../../helpers/helpers';

import './CoinContainer.scss';

import CoinHeads from '../../images/coin-heads.jpeg';
import CoinTails from '../../images/coin-tails.jpeg';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: CoinHeads },
      { side: 'tails', imgSrc: CoinTails },
    ],
  };

  state = {
    currCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  };

  flipCoin = () => {
    let newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
      };
    });
  };

  handleClick = () => {
    this.flipCoin();
  };

  render() {
    return (
      <div className='coinflip'>
        <h2 className='coinflip__coins'>Lets flip a coin!</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <div className='coinflip__res'>
          Out of <span>{this.state.nFlips}</span> flip(s), you've got{' '}
          <span>{this.state.nHeads}</span> head(s) and{' '}
          <span>{this.state.nTails}</span> tail(s)
        </div>
        <button onClick={this.handleClick} className='btn'>
          Flip a coin!
        </button>
      </div>
    );
  }
}

export default CoinContainer;
