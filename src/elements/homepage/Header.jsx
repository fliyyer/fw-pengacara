import React from 'react'
import Icons from '../../assets/images/icons header.png'
import CardHeader from '../../components/CardHeader'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center h-auto md:h-[700px] mx-auto my-auto' style={{ background: 'linear-gradient(#7D8797 50%, #ffffff 50%)' }}>
            <h1 className='text-[#112340] text-2xl md:text-[32px] mt-28 md:mt-0 leading-[38px] text-center font-semibold'>Mau Konsultasi Apa Hari Ini?</h1>
            <div className='max-w-7xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 mb-8 gap-4 md:gap-8'>
                    <CardHeader img={Icons} title='Hukum Bisnis' />
                    <CardHeader img={Icons} title='Hukum Pidana' />
                    <CardHeader img={Icons} title='Hukum Kontrak' />
                    <CardHeader img={Icons} title='Hukum Properti' />
                </div>

                <div className='border border-[#112340] w-full'></div>
            </div>
        </div>


    )
}

export default Header
