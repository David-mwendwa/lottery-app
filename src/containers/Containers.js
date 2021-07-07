import { Route } from 'react-router-dom';

import Lottery from './LotteryGame/Lottery/Lottery';
import PokeGame from './PokeGame/PokeGame';

import './Containers.scss';

const Container = () => {
  return (
    <div className='container'>
      <Route path='/lottery' component={Lottery} />
      <Route path='/dice' component={Lottery} />
      <Route path='/pokedex' component={PokeGame} />
      <Route path='/coinflip' component={Lottery} />
    </div>
  );
};

export default Container;
