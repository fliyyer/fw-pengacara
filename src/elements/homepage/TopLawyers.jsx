import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CardLawyers from '../../components/CardLawyers';
import Lawyers1 from '../../assets/images/lawyers.png';
import Lawyers2 from '../../assets/images/lawyers2.png';
import Lawyers3 from '../../assets/images/lawyers3.png';
import Lawyers4 from '../../assets/images/lawyers4.png';
import Lawyers5 from '../../assets/images/lawyers5.png';
import Lawyers6 from '../../assets/images/lawyers6.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopLawyers = () => {
  const sliderRef = useRef(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-0">
      <h1 className="text-center text-2xl lg:text-4xl text-[#112340] font-semibold mt-8 lg:mt-16">
        Top Rated Lawyers
      </h1>
      <div className="mt-9 my-24 relative">
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-full flex items-center px-4 md:px-0">
          <CardLawyers
            name="Alexa Rachel"
            image={Lawyers1}
            hukum="Hukum Pidana"
          />
          <CardLawyers
            name="Liu Yue Tian Park"
            image={Lawyers2}
            hukum="Hukum Bisnis"
          />
          <CardLawyers
            name="Nairobi Putri Hayza"
            image={Lawyers3}
            hukum="Hukum Kontrak"
          />
          <CardLawyers
            name="James Rivillia"
            image={Lawyers4}
            hukum="Hukum Properti"
          />
          <CardLawyers
            name="John McParker Steve"
            image={Lawyers5}
            hukum="Hukum Bisnis"
          />
          <CardLawyers
            name="Alexander Jannie"
            image={Lawyers6}
            hukum="Hukum Kontrak"
          />
        </Slider>
        <button
          className="absolute top-1/2 left-4 lg:-left-16 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}>
          <FaArrowLeft />
        </button>
        <button
          className="absolute top-1/2 right-4 lg:-right-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={() => sliderRef.current.slickNext()}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TopLawyers;
