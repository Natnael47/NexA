import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
    </div>
  )
}

export default App