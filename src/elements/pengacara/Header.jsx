import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-col justify-center mt-20 md:mt-0 items-center h-auto md:h-[550px] mx-auto'>
      <div className="bg-[#D6B50E] rounded-[8px] bg-opacity-20 py-[49px] px-4 md:px-8 lg:px-44">
        <h1 className="text-[#112340] text-2xl md:text-3xl lg:text-4xl font-semibold leading-7 md:leading-9 lg:leading-10 text-center">
          Mau konseling masalah apa?
        </h1>
        <div className="flex flex-col md:flex-row mt-4 md:space-x-8">
          <div className="flex items-center mb-2 md:mb-0">
            <input
              type="checkbox"
              name="hukum-bisnis"
              id="hukum-bisnis"
              className="mr-2"
            />
            <label htmlFor="hukum-bisnis">Hukum Bisnis</label>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <input
              type="checkbox"
              name="hukum-pidana"
              id="hukum-pidana"
              className="mr-2"
            />
            <label htmlFor="hukum-pidana">Hukum Pidana</label>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <input
              type="checkbox"
              name="hukum-properti"
              id="hukum-properti"
              className="mr-2"
            />
            <label htmlFor="hukum-properti">Hukum Properti</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="hukum-kontrak"
              id="hukum-kontrak"
              className="mr-2"
            />
            <label htmlFor="hukum-kontrak">Hukum Kontrak</label>
          </div>
        </div>
      </div>
      <div className='border border-[#112340] mt-[90px] w-full'></div>
    </div>
  );
};

export default Header;
