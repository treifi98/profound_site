import AboutDeveloper from '@/Components/Developer/AboutDeveloper'
import AreaCard from '@/Components/Developer/Cards/AreaCard'
import Map from '@/Components/Developer/Map'
import NoCrooked from '@/Components/Developer/NoCrooked'
import OffPlanSwiper from '@/Components/Developer/OffPlanSwiper'
import Pagination from '@/Components/Developer/Pagination'
import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import SwiperDeveloper from '@/Components/Home/SwiperDeveloper'
import MainLayout1 from '@/Layouts/MainLayout1'
import React, { useEffect, useRef, useState } from 'react'

const Area = () => {

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
        <Tracer crumbs={[{title:'Home',link:'/'},{title:'Areas',link:'/areas'},{title:'Dubai Marina',link:'/area/marina'}]}/>
      </div>
      <div className='mx-auto mt-[0.625rem] w-[91.25rem]'>
        <NoCrooked/>
      </div>
      <div className='w-full mt-[5rem]'>
        <OffPlanSwiper/>
      </div>
      <div className='w-full mt-[5rem]'>
        <SwiperDeveloper/>

      </div>

    </MainLayout1>
</div>
  )
}

export default Area
