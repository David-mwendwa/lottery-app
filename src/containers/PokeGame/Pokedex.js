import React from 'react';

// import DATA from '../data';
import PokeCard from './PokeCard';

import './Pokedex.scss';

class Pokedex extends React.Component {
  // static defaultProps = {
  //   pokemon: DATA,
  // };

  render() {
    const item = this.props.pokemon.map((p) => (
      <PokeCard
        id={p.id}
        name={p.name}
        type={p.type}
        base_experience={p.base_experience}
      />
    ));

    let isWinner = this.props.isWinner;

    return (
      <div className='Container'>
        <p className={isWinner ? 'Success' : 'Danger'}>
          {isWinner ? 'WINNER!' : 'LOSER!'}
        </p>
        <h4>Total Experience: {this.props.exp}</h4>
        <div className='Pokedex-cards'>{item}</div>
      </div>
    );
  }
}

export default Pokedex;
