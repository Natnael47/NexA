import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials '

const Home = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Header />
            <About />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home