import AboutDeveloper from '@/Components/Developer/AboutDeveloper'
import Areas from '@/Components/Developer/Areas'
import Attraction from '@/Components/Developer/Attraction'
import BuySwiper from '@/Components/Developer/BuySwiper'
import AreaCard from '@/Components/Developer/Cards/AreaCard'
import Crooked from '@/Components/Developer/Crooked'
import DoublrBoxesDoubleText from '@/Components/Developer/DoublrBoxesDoubleText'
import InquiryFormGreen from '@/Components/Developer/InquiryFormGreen'
import InquiryFormWiht from '@/Components/Developer/InquiryFormWhit'
import LogoTextRL from '@/Components/Developer/LogoTextRL'
import Map from '@/Components/Developer/Map'
import MapContainer from '@/Components/Developer/MapContainer'
import NoCrooked from '@/Components/Developer/NoCrooked'
import OffPlanSwiper from '@/Components/Developer/OffPlanSwiper'
import Pagination from '@/Components/Developer/Pagination'
import PartLogoTextLR from '@/Components/Developer/PartLogoTextLR'
import PartLogoTextOGLR from '@/Components/Developer/PartLogoTextOGLR'
import PartLogoTextOGRL from '@/Components/Developer/PartLogoTextOGRL'
import PartLogoTextRL from '@/Components/Developer/PartLogoTextRL'
import SquareTextLR from '@/Components/Developer/SquareTextLR'
import SquareTextRL from '@/Components/Developer/SquareTextRL'
import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import SwiperDeveloper from '@/Components/Home/SwiperDeveloper'
import SwiperType1B from '@/Components/Home/SwiperType1B'
import MainLayout1 from '@/Layouts/MainLayout1'
import React, { useEffect, useRef, useState } from 'react'

const Developer = () => {

    const [points,setPoints] = useState([
        {
            point: [55.2667940551224,25.18752435627845],
            bg:'#002d31'

        },
        {
            point: [55.20497582813278,25.039942764298452],
            bg:'#002d31'

        }
    ])

  return (
    <div>
    <MainLayout1>
        {/* <HeroSection1/> */}
        {/* <div></div> */}
      <div className=' mt-[7.4375rem] w-[91.25rem] flex justify-start mx-auto'>
        <Tracer crumbs={[{title:'Home',link:'/'},{title:'Developers',link:'/developers'},{title:'Emaar',link:'/developer/emar'}]}/>
      </div>
      <div className='mx-auto mt-[0.625rem] w-[91.25rem]'>
        <Crooked/>
      </div>
      <div className='w-full mt-[5rem]'>
        <OffPlanSwiper barTitle=' Projects in Dubai Marina'/>
      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <Areas/>

      </div>
      <div className='w-full mt-[5rem]'>
        <AboutDeveloper/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <LogoTextRL/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextOGRL/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextLR/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextRL/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PartLogoTextOGLR/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <InquiryFormGreen/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <SquareTextLR/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <SquareTextRL/>

      </div>
      <div className='w-max mx-auto mt-[5rem] mb-[5rem]'>
        <DoublrBoxesDoubleText/>

      </div>






    </MainLayout1>
    </div>
  )
}

export default Developer
