import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials '

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonials />
    </div>
  )
}

export default App