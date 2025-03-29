import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';
import About from './pages/About';
import Construction from './pages/Construction';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && <Navbar2 />}
      <div className={'w-full overflow-hidden'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/construction' element={<Construction />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
