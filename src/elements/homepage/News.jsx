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
                <CardNews img='https://pict-b.sindonews.net/webp/732/pena/news/2023/12/11/13/1273991/ketua-bem-ui-soal-perjuangan-kasus-ham-masa-lalu-upaya-kita-memelihara-harapan-qpz.webp' title='Ketua BEM UI soal Perjuangan Kasus HAM Masa Lalu: Upaya Kita Memelihara Harapan' />
                <CardNews img='https://pict-a.sindonews.net/webp/732/pena/news/2023/12/11/13/1274049/rafael-alun-juga-dituntut-bayar-uang-pengganti-rp189-miliar-cik.webp' title='Rafael Alun Juga Dituntut Bayar Uang Pengganti Rp18,9 Miliar' />
                <CardNews img='https://pict.sindonews.net/webp/732/pena/news/2023/12/11/13/1273915/eks-direktur-prasarana-perkeretaapian-djka-kemenhub-divonis-5-tahun-penjara-aii.webp' title='Eks Direktur Prasarana Perkeretaapian DJKA Kemenhub Divonis 5 Tahun Penjara' />
            </div>
        </div>

    );
};

export default News;
