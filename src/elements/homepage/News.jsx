import React from 'react';
import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';
import Image3 from '../../assets/images/iamge3.png';
import CardNews from '../../components/CardNews';

const News = () => {
    return (
        <div className='max-w-4xl px-16 lg:px-0 py-9 mx-auto'>
            <div className='flex flex-col'>
                <h1 className='text-[#112340] text-[32px] leading-[38px] text-center font-semibold'>Good News</h1>
                <CardNews img={Image1} title='Is it safe to stay at home during pandemic?' />
                <CardNews img={Image2} title='Is it safe to stay at home during pandemic?' />
                <CardNews img={Image3} title='Is it safe to stay at home during pandemic?' />
            </div>
        </div>

    );
};

export default News;
