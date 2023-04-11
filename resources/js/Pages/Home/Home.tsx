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


const Home = () => {
  return (
    <MainLayout>

        <HeroVideo/>

        <div className='mt-[42px] mb-[54px] w-[660px] h-[50px] border-[1px] border-[#DCE3E3] rounded-[100px] bg-[#E6EDED] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] mx-auto'>

        </div>

        <SwiperType1A/>

        <div className='w-full mt-[7px]'>

            <SwiperType2A/>
        </div>

        <div className='w-full mt-[40px]'>
            <SwiperType3A/>
        </div>
        <div className='mt-[34px]'>

            <SwiperType1B/>
        </div>
        <div className='mt-[40px]'>
            <SwiperAgent/>
        </div>
        <div className='mt-[40px]'>
            <SwiperDeveloper/>
        </div>
        <div className='mt-[40px]'>
            <SwiperNews/>
        </div>
    </MainLayout>
  )
}

export default Home
