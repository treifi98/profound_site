import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import HeroVideo from '@/Components/HeroVideo'
import SwiperType1A from '@/Components/Home/SwiperType1A'
import SwiperType1B from '@/Components/Home/SwiperType1B'
import SwiperType2A from '@/Components/Home/SwiperType2A'
import SwiperType3A from '@/Components/Home/SwiperType3A'
import SwiperAgent from '@/Components/Home/SwiperAgent'
import SwiperDeveloper from '@/Components/Home/SwiperDeveloper'
import SwiperNews from '@/Components/Home/SwiperNews'
import NewsLetter from '@/Components/Home/Cards/NewsLetter'
import emar from '../../../assets/emar.svg'
import Type1A from '@/Components/Home/Cards/Type1A'


const Home = () => {
  return (
    <MainLayout>

        <HeroVideo/>

        <div className='mt-[42px] mb-[54px] w-[660px] h-[50px] border-[1px] border-[#DCE3E3] rounded-[100px] bg-[#E6EDED] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] mx-auto'>

        </div>

        <div className='w-full'>

            <SwiperType1A counter={7}>
                <Type1A key={1}w='24.875' h='39.75' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
                <Type1A key={2}w='24.875' h='39.75' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
                <Type1A key={3}w='24.875' h='39.75' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
                <Type1A key={4}w='24.875' h='39.75' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
                <Type1A key={5}w='24.875' h='39.75' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
                <Type1A key={6}w='24.875' h='39.75' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
                <Type1A key={6}w='24.875' h='39.75' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
                <Type1A key={6}w='24.875' h='39.75' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
            </SwiperType1A>
        </div>

        <div className='w-full mt-[0.4375rem]'>

            <SwiperType2A/>
        </div>

        <div className='w-full mt-[2.5rem]'>
            <SwiperType3A/>
        </div>
        <div className='mt-[2.125rem]'>

            <SwiperType1B/>
        </div>
        <div className='mt-[2.5rem]'>
            <SwiperAgent/>
        </div>
        <div className='mt-[2.5rem]'>
            <SwiperDeveloper/>
        </div>
        <div className='mt-[2.5rem]'>
            <SwiperNews/>
        </div>
        <div className='w-full flex justify-center items-center mt-[1.875rem]'>
            <NewsLetter/>
        </div>
    </MainLayout>
  )
}

export default Home
