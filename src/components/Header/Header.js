import Logo from '../../images/logo.png'

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='logo'>Gamer</h1>

      <nav className='navigation'>
        <a href='##'>Lotto</a>
        <a href='##'>Dice</a>
        <a href='##'>Pokedex</a>
        <a href='##'>Coinflip</a>
        <a href='##'>Cards</a>
      </nav>
    </div>
  );
}

export default Header;