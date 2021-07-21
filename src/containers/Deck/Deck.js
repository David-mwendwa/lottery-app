import React, { Component } from 'react';
import axios from 'axios';

import './Deck.scss';

const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle';

class Deck extends Component {
  state = { deck: null };

  async componentDidMount() {
    let deck = await axios.get(API_URL);
    this.setState({ deck: deck.data });
  }
  render() {
    return <div className='deck'></div>;
  }
}

export default Deck;
