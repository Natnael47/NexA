import React from 'react'
import About from '../components/About'
import All_Projects from '../components/All_Projects'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Testimonials from '../components/Testimonials '

const Home = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Header />
            <All_Projects />
            <About />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default Home