import React from 'react'

const CardNews = (props) => {
    return (
        <div>
            <div className='flex flex-col text-center md:text-left md:flex-row items-center mt-[40px] justify-between'>
                <div className='md:w-1/2'>
                    <h1 className='text-lg md:text-xl lg:text-2xl font-semibold mb-2'>{props.title}</h1>
                    <p className='text-sm md:text-base text-[#7D8797]'>Today</p>
                </div>
                <img src={props.img} className='rounded-[10px] h-[170px] w-[278px] mt-4 md:mt-0' alt='Image1' />
            </div>
            <hr className='mt-[30px]' />
        </div>
    )
}

export default CardNews
