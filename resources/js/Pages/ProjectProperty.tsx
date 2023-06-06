import AboutDeveloper from '@/Components/Developer/AboutDeveloper'
import AboutProperty from '@/Components/Developer/AboutProperty'
import Amenities from '@/Components/Developer/Amenities'
import Areas from '@/Components/Developer/Areas'
import Attraction from '@/Components/Developer/Attraction'
import BuySwiper from '@/Components/Developer/BuySwiper'
import AreaCard from '@/Components/Developer/Cards/AreaCard'
import Crooked from '@/Components/Developer/Crooked'
import DoublrBoxesDoubleText from '@/Components/Developer/DoublrBoxesDoubleText'
import FloorPlan from '@/Components/Developer/FloorPlan'
import ImgGallery from '@/Components/Developer/ImgGallery'
import InquiryFormGreen from '@/Components/Developer/InquiryFormGreen'
import InquiryFormWiht from '@/Components/Developer/InquiryFormWhit'
import LogoTextRL from '@/Components/Developer/LogoTextRL'
import Map from '@/Components/Developer/Map'
import MapContainer from '@/Components/Developer/MapContainer'
import MortgageCalculator from '@/Components/Developer/MortgageCalculator'
import NoCrooked from '@/Components/Developer/NoCrooked'
import OffPlanSwiper from '@/Components/Developer/OffPlanSwiper'
import Pagination from '@/Components/Developer/Pagination'
import PartLogoTextLR from '@/Components/Developer/PartLogoTextLR'
import PartLogoTextOGLR from '@/Components/Developer/PartLogoTextOGLR'
import PartLogoTextOGRL from '@/Components/Developer/PartLogoTextOGRL'
import PartLogoTextRL from '@/Components/Developer/PartLogoTextRL'
import PaymentPlanNF4 from '@/Components/Developer/PaymentPlanNF4'
import ProjectInfo from '@/Components/Developer/ProjectInfo'
import QA from '@/Components/Developer/QA'
import SecondaryInfo from '@/Components/Developer/SecondaryInfo'
import SecondaryRent from '@/Components/Developer/SecondaryRent'
import SquareTextLR from '@/Components/Developer/SquareTextLR'
import SquareTextRL from '@/Components/Developer/SquareTextRL'
import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import SwiperDeveloper from '@/Components/Home/SwiperDeveloper'
import SwiperType1B from '@/Components/Home/SwiperType1B'
import MainLayout1 from '@/Layouts/MainLayout1'
import React, { useEffect, useRef, useState } from 'react'

const ProjectProperty = () => {

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
        <Tracer crumbs={[{title:'Home',link:'/'},{title:'Projects',link:'/project'},{title:'Creek Rise Tower',link:'/project/test'}]}/>
      </div>
      <div className='mx-auto mt-[0.625rem] w-[91.25rem]'>
        <ImgGallery/>
      </div>
      <div className='w-max  mx-auto mt-[5rem]'>
        <ProjectInfo/>
      </div>
      <div className='w-max mx-auto mt-[5rem] mb-[5rem]'>
        <DoublrBoxesDoubleText/>

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
        <Amenities/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <InquiryFormGreen/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <Attraction/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <MapContainer/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <FloorPlan/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <PaymentPlanNF4/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <AboutProperty/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <InquiryFormWiht/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <QA questions={[{a:'Apartments in Seapoint are an excellent investment, as they will allow you to generate a lucrative rental income, since the average ROI for 1-bedroom apartments in Emaar Beachfront has reached 6.9%, as of Q2 2023.',q:'Is an apartment in Seapoint a good investment?'},{a:'Apartments in Seapoint are an excellent investment, as they will allow you to generate a lucrative rental income, since the average ROI for 1-bedroom apartments in Emaar Beachfront has reached 6.9%, as of Q2 2023.',q:'Is an apartment in Seapoint a good investment?'},{a:'Apartments in Seapoint are an excellent investment, as they will allow you to generate a lucrative rental income, since the average ROI for 1-bedroom apartments in Emaar Beachfront has reached 6.9%, as of Q2 2023.',q:'Is an apartment in Seapoint a good investment?'},{a:'Apartments in Seapoint are an excellent investment, as they will allow you to generate a lucrative rental income, since the average ROI for 1-bedroom apartments in Emaar Beachfront has reached 6.9%, as of Q2 2023.',q:'Is an apartment in Seapoint a good investment?'},{a:'Apartments in Seapoint are an excellent investment, as they will allow you to generate a lucrative rental income, since the average ROI for 1-bedroom apartments in Emaar Beachfront has reached 6.9%, as of Q2 2023.',q:'Is an apartment in Seapoint a good investment?'},{a:'Apartments in Seapoint are an excellent investment, as they will allow you to generate a lucrative rental income, since the average ROI for 1-bedroom apartments in Emaar Beachfront has reached 6.9%, as of Q2 2023.',q:'Is an apartment in Seapoint a good investment?'}]}/>

      </div>
      <div className='w-full mt-[5rem] mb-[4rem]'>
        <BuySwiper barTitle=' Projects in Dubai Marina' cardMB='1rem' cardMT='1.875rem'/>
      </div>
      <div className='w-max mx-auto mt-[5rem] mb-[4rem]'>
        <Areas/>
      </div>







    </MainLayout1>
    </div>
  )
}

export default ProjectProperty
