import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { AppContext } from './context/AppContext';
import Add_Elevators from './pages/Add_Elevators';
import Add_Project from './pages/Add_Project';
import Dashboard from './pages/Dashboard';
import Elevators from './pages/Elevators';
import Login from './pages/Login';
import Projects from './pages/Projects';
import View from './pages/View';
import View_Elevator from './pages/View_Elevator';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {

  const { token } = useContext(AppContext);

  return token ? (
    <div className='bg-gray-100'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/new-project' element={<Add_Project />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/add' element={<Add_Project />} />
          <Route path='/view/:projectId' element={<View />} />
          <Route path='/view2/:projectId' element={<View_Elevator />} />
          <Route path='/new-elevators' element={<Add_Elevators />} />
          <Route path='/elevator-list' element={<Elevators />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App