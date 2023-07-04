import AboutDeveloper from '@/Components/Developer/AboutDeveloper'
import AboutProperty from '@/Components/Developer/AboutProperty'
import Amenities from '@/Components/Developer/Amenities'
import Areas from '@/Components/Developer/Areas'
import Attraction from '@/Components/Developer/Attraction'
import BuySwiper from '@/Components/Developer/BuySwiper'
import AreaCard from '@/Components/Developer/Cards/AreaCard'
import Crooked from '@/Components/Developer/Crooked'
import DoublrBoxesDoubleText from '@/Components/Developer/DoublrBoxesDoubleText'
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
import ProjectInfo from '@/Components/Developer/ProjectInfo'
import SecondaryInfo from '@/Components/Developer/SecondaryInfo'
import SquareTextLR from '@/Components/Developer/SquareTextLR'
import SquareTextRL from '@/Components/Developer/SquareTextRL'
import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import SwiperDeveloper from '@/Components/Home/SwiperDeveloper'
import SwiperType1B from '@/Components/Home/SwiperType1B'
import MainLayout1 from '@/Layouts/MainLayout1'
import React, { useEffect, useRef, useState } from 'react'

const BuyProperty = () => {

    const [screenLG,setScreenLG] = useState(true)
    const [scaleFactor,setScaleFactor] = useState(1.0)
    const [mainScreen,setMainScreen] = useState(375)
    const [changer,setChanger] = useState(1)
    // const [currentScreen,setCurrentScreen] = useState(375)
    const initChange = () => {
        setChanger(window.innerWidth)
    }
    const ScaleforMobile = () => {
        let x = window.innerWidth / 375
        setScaleFactor(x)

    }
    useEffect(()=>{
        console.log(mainScreen)
        ScaleforMobile()
        setMainScreen(window.innerWidth)
        console.log(scaleFactor)
    },[changer])

    useEffect(()=>{
        // document.querySelectorAll('.mobil-comp').forEach((elmnt)=>{
        //     elmnt.parentElement.style.scale = scaleFactor.toString()
        //     // elmnt.parentElement.style.marginTop = (5 * scaleFactor).toString()+'rem'
        //     // alert((elmnt.parentElement.style.marginTop))
        // })
        if(window.innerWidth < 1530){

            document.querySelector('.scalable').style.scale = scaleFactor
        }
        else{
            document.querySelector('.scalable').style.scale = 1

        }
    },[scaleFactor])


    const multiplyDimensions = (element, factor) => {
        // first, get the computed style of the element

        let style = window.getComputedStyle(element);

        // get the width and height of the element
        let width = parseFloat(style.width.replace("rem", ""));
        let height = parseFloat(style.height.replace("rem", ""));
        let textSize = parseFloat(style.fontSize.replace("rem", ""));

        // multiply the width and height by the factor
        width *= factor;
        height *= factor;
        textSize *= factor;

        // set the new width and height
        element.style.width = `${width}px`;
        element.style.height = `${height}px`;
        element.style.fontSize = `${textSize}px`;

        // repeat for each child element
        for (let i = 0; i < element.children.length; i++) {
            // console.log(element.children[i].classList)
            if(element.children[i].classList.contains('except')){
                continue
            }
            console.log('-------')
            console.log(scaleFactor)
            multiplyDimensions(element.children[i], factor);
        }

    }
    useEffect(() => {
        const updateScreenWidth = () => {
            if (window.innerWidth >= 1530){

                setScreenLG(true);
                initChange()
            }
            else{
                setScreenLG(false);
                initChange()

            }
        }
        updateScreenWidth()
        window.addEventListener('resize', updateScreenWidth);
        return () => window.removeEventListener('resize', updateScreenWidth);
      }, []);

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
        <Tracer crumbs={[{title:'Home',link:'/'},{title:'Buy',link:'/buy'},{title:'Creek Rise Tower',link:'/buy/test'}]}/>
      </div>
      <div className='mx-auto mt-[0.625rem] w-[91.25rem]'>
        <ImgGallery screen={screenLG}/>
      </div>
      <div className='w-max  mx-auto mt-[5rem]'>
        <SecondaryInfo/>
      </div>
      <div className='w-max mx-auto mt-[5rem] mb-[5rem]'>
        <DoublrBoxesDoubleText screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <Amenities screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <InquiryFormGreen screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <MortgageCalculator/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <Attraction screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <MapContainer screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <AboutProperty/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <InquiryFormWiht screen={screenLG}/>

      </div>
      <div className='w-full mt-[5rem] mb-[4rem]'>
        <BuySwiper barTitle=' Projects in Dubai Marina' cardMB='1rem' cardMT='1.875rem'/>
      </div>







    </MainLayout1>
    </div>
  )
}

export default BuyProperty
