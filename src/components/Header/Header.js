import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='logo'>
        <Link to='/'>Gamer</Link>
      </h1>

      <nav className='navigation'>
        <Link to='/lottery'>Lotto</Link>
        <Link to='##'>Dice</Link>
        <Link to='/pokedex'>Pokedex</Link>
        <Link to='/coinflip'>Coinflip</Link>
        <Link to='##'>Cards</Link>
      </nav>
    </div>
  );
};

export default Header;
