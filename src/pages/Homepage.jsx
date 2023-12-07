import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../elements/homepage/Header'
import News from '../elements/homepage/News'
import Footer from '../components/Footer'
import TopLawyers from '../elements/homepage/TopLawyers'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <News />
            <TopLawyers />
            <Footer />
        </div>
    )
}

export default Homepage
