import { Link } from 'react-router-dom';

//import Logo from '../Logo/Logo';

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='logo'>
        <Link to='/'>Gaming Master</Link>
      </h1>

      <nav className='navigation'>
        <Link to='/lottery'>Lotto</Link>
        <Link to='/hangman'>Hangman</Link>
        <Link to='/pokedex'>Pokedex</Link>
        <Link to='/coinflip'>Coinflip</Link>
        <Link to='/colorbox'>Colorbox</Link>
      </nav>
    </div>
  );
};

export default Header;
