import React, { useState } from 'react';
import CardTanggal from '../../components/CardTanggal';
import Pengacara1 from '../../assets/images/lawyers.png';
import Pengacara2 from '../../assets/images/lawyers2.png';
import Pengacara3 from '../../assets/images/lawyers3.png';
import Pengacara4 from '../../assets/images/lawyers4.png';
import Pengacara5 from '../../assets/images/lawyers5.png';
import CardPengacara from '../../components/CardPengacara';

const SelectPengacara = () => {
  const currentDate = new Date();
  const dateArray = [];

  for (let i = 0; i < 5; i++) {
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + i);
    const day = futureDate.getDate();
    const month = futureDate.getMonth() + 1;
    dateArray.push(`${day} Desember`);
  }

  const [selectedTime, setSelectedTime] = useState('');

  const timeOptions = [
    '07:00 AM',
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
  ];

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div>
        <h1 className="text-3xl text-[#112340] font-semibold leading-7 text-center mb-6">
          Pilih Tanggal
        </h1>
        <div className="flex justify-center space-x-6 overflow-x-auto md:space-x-[29px] my-[78px]">
          {dateArray.map((tgl, index) => (
            <CardTanggal key={index} tgl={tgl} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-[#112340] my-10 font-semibold leading-7 text-center">
          Pilih Pengacara
        </h1>
        <div className="flex flex-col space-y-4">
          <CardPengacara
            image={Pengacara1}
            name="Alexander Jannie"
            gender="Wanita"
          />
          <CardPengacara
            image={Pengacara2}
            name="Nairobi Putri Hayza"
            gender="Wanita"
          />
          <CardPengacara
            image={Pengacara3}
            name="Nairobi Putri Hayza"
            gender="Wanita"
          />
          <CardPengacara
            image={Pengacara4}
            name="James Rivillia"
            gender="Pria"
          />
          <CardPengacara
            image={Pengacara5}
            name="Liu Yue Tian Park"
            gender="Wanita"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-[#112340] my-6 font-semibold leading-7 text-center">
          Pilih Jam
        </h1>
        <div className="max-w-[349px] mx-auto p-8 bg-[#f2dd75] mb-8 shadow-md rounded-md">
          <div className="flex justify-center">
            <select
              className="p-3 border cursor-pointer border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
              value={selectedTime}
              onChange={handleTimeChange}>
              <option value="" disabled>
                Pilih waktu
              </option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          {selectedTime && (
            <p className="text-[#112340] mt-4 text-center">
              Waktu yang dipilih: {selectedTime}
            </p>
          )}
        </div>
      </div>
      <div className="flex mt-[70px] justify-center">
        <button className="bg-[#D6B50E] hover:bg-[#112340] w-[349px] text-center text-[#fff] px-4 mt-4 rounded-[8px] py-2">
          Mulai Konsultasi
        </button>
      </div>
    </div>
  );
};

export default SelectPengacara;
