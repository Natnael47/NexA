import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';
import About from './pages/About';
import Construction from './pages/Construction';
import Contact from './pages/Contact';
import Elevators from './pages/Elevators';
import Home from './pages/Home';
import HVAC from './pages/HVAC';
import Privacy_Policy from './pages/Privacy_Policy';
import Product from './pages/Product';
import Software from './pages/Software';
import Tourism from './pages/Tourism';
import Tunnels from './pages/Tunnels';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

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
          <Route path='/elevators' element={<Elevators />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/privacy' element={<Privacy_Policy />} />


          <Route path='/hvac' element={<HVAC />} />
          <Route path='/software' element={<Software />} />
          <Route path='/tunnels' element={<Tunnels />} />
          <Route path='/tourism' element={<Tourism />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
