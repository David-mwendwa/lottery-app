import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

import './Deck.scss';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class Deck extends Component {
  state = { deck: null, drawn: [] };

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    this.setState({ deck: deck.data });
  }

  getCard = async () => {
    let id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${id}/draw`;
      let cardRes = await axios.get(cardUrl);
      console.log(cardRes);
      if (!cardRes.data.success) {
        throw new Error('No card remaining');
      }
      let card = cardRes.data.cards[0];
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} ${card.value}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const cards = this.state.drawn.map((c) => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));
    return (
      <div className='deck-container'>
        <div className='Deck-cardarea'>{cards}</div>
        <div>
          <h1>Card Dealer</h1>
          <button onClick={this.getCard}>Get Card!</button>
        </div>
      </div>
    );
  }
}

export default Deck;
