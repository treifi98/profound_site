import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import HeroVideo from '@/Components/HeroVideo'
import SwiperType1A from '@/Components/Home/SwiperType1A'
import SwiperType1B from '@/Components/Home/SwiperType1B'
const Home = () => {
  return (
    <MainLayout>

        <HeroVideo/>

        <SwiperType1A/>
        <div className='mt-[34px]'>

            <SwiperType1B/>
        </div>
    </MainLayout>
  )
}

export default Home
