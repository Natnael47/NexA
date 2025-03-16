import React from 'react'
import About from './components/About'
import Header from './components/Header'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
    </div>
  )
}

export default App