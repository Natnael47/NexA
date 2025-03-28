import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Construction from './pages/Construction'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/construction' element={<Construction />} />
      </Routes>
    </div>
  )
}

export default App