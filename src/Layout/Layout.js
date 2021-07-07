import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/Header/Header';
import Container from '../containers/Containers';
import Footer from '../components/Footer/Footer';

import './Layout.scss';

const Layout = () => {
  return (
    <Router>
      <div className='Layout'>
        <Header />
        <Container />
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;