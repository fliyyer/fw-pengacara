import React from 'react'
import { FaStar } from "react-icons/fa";

const CardLawyers = (props) => {
    return (
        <div className='border ml-[4px] mr-[93px] border-[#112340] w-[226px] p-8 flex flex-col items-center space-y-3 rounded-[10px]'>
            <img className='w-24 h-24 rounded-full' src={props.image} alt="" />
            <h1 className='text-[#112340] font-semibold'>{props.name}</h1>
            <p className='text-[#7D8797] text-[12px]'>{props.hukum}</p>
            <div className='flex text-2xl gap-3 text-[#F8B459]'>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
        </div>
    )
}

export default CardLawyers
