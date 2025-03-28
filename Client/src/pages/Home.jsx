import React from 'react'
import About from '../components/About'
import All_Projects from '../components/All_Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Testimonials from '../components/Testimonials '

const Home = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Header />
            <About />
            <All_Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home