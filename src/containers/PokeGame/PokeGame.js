import React, { Component } from 'react';

import Pokedex from './Pokedex';

import './PokeGame.scss'

import DATA from '../../data/PokeGame';

class PokeGame extends Component {
  static defaultProps = {
    pokemon: DATA,
  };

  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];

    while (hand1.length < hand2.length) {
      let randomIndex = Math.floor(Math.random() * hand2.length);
      let randomPokemon = hand2.splice(randomIndex, 1)[0];
      hand1.push(randomPokemon);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div className='Pokegame'>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default PokeGame;
