import Header from "../components/Header/Header";
import Container from "../containers/Containers";
import Footer from "../components/Footer/Footer";

import './Layout.scss'

const Layout = () => {
  return (
    <div className='Layout'>
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default Layout;