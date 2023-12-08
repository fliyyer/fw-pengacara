import React from 'react'

const CardTanggal = (props) => {
  return (
    <div className='bg-[#D6B50E] cursor-pointer hover:bg-[#112340] flex justify-center w-[171px] h-[121px] items-center rounded-[14px] py-[50px] px-2'>
        <h1 className='text-base font-semibold text-center text-[#fff]'>{props.tgl}</h1>
    </div>
  )
}

export default CardTanggal