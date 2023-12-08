import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../elements/pengacara/Header'
import SelectPengacara from '../elements/pengacara/SelectPengacara'
import Footer from '../components/Footer'

const Pengacara = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-5xl mx-auto'>
                <Header />
                <SelectPengacara />
            </div>
            <Footer />
        </div>
    )
}

export default Pengacara
