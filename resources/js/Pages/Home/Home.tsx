import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import HeroVideo from '@/Components/HeroVideo'
import SwiperType1A from '@/Components/Home/SwiperType1A'
import SwiperType1B from '@/Components/Home/SwiperType1B'
const Home = () => {
  return (
    <MainLayout>

        <HeroVideo/>

        <div className='mt-[42px] mb-[54px] w-[660px] h-[50px] border-[1px] border-[#DCE3E3] rounded-[100px] bg-[#E6EDED] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] ml-[383px]'>

        </div>

        <SwiperType1A/>
        <div className='mt-[34px]'>

            <SwiperType1B/>
        </div>
    </MainLayout>
  )
}

export default Home
