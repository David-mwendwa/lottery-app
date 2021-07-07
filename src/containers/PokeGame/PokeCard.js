import React, { Component } from 'react';

import './PokeCard.scss';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail';

class PokeCard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;

    const padToThree = (number) =>
      number <= 999 ? `00${number}`.slice(-3) : number;

    return (
      <div className='PokeCard' keys={id}>
        <h3 className='Pokecard__title'>{name}</h3>
        <div className='Pokecard__image'>
          <img src={`${POKE_API}/${padToThree(id)}.png`} alt={name} />
        </div>
        <div>
          <div className='Pokecard__data'>Type: {type}</div>
          <div className='Pokecard__data'>EXP: {base_experience}</div>
        </div>
      </div>
    );
  }
}

export default PokeCard;
