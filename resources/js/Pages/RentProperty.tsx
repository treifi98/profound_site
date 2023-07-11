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
import SecondaryRent from '@/Components/Developer/SecondaryRent'
import SquareTextLR from '@/Components/Developer/SquareTextLR'
import SquareTextRL from '@/Components/Developer/SquareTextRL'
import HeroSection1 from '@/Components/HeroSection1'
import BarMobile from '@/Components/Home/Cards/Common/BarMobile'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import CardMobile from '@/Components/Home/Cards/New/CardMobile'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import SwiperDeveloper from '@/Components/Home/SwiperDeveloper'
import SwiperMobile from '@/Components/Home/SwiperMobile'
import SwiperType1B from '@/Components/Home/SwiperType1B'
import MainLayout1 from '@/Layouts/MainLayout1'
import React, { useEffect, useRef, useState } from 'react'
import priceIcon from '../../assets/price_tag_og.svg'
import beatchFront from '../../assets/Newcircle.png'
import paymentIcon from '../../assets/paymentIcon.svg'
import compleationIcon from '../../assets/compleationIcon.svg'
import bed_icon from '../../assets/bed.svg'
import size_icon from '../../assets/size.svg'
import dubai from '../../assets/dli.png'
import krane from '../../assets/construction.svg'



const RentProperty = () => {
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
        {
            screenLG?(

                <div className=' mt-[7.4375rem] w-[91.25rem] flex justify-start mx-auto'>
                    <Tracer crumbs={[{title:'Home',link:'/'},{title:'Buy',link:'/buy'},{title:'Creek Rise Tower',link:'/buy/test'}]}/>
                </div>
            ):
            (
                <div className=' mt-[0.5375rem] w-max flex justify-start ml-[0rem] scale-[0.8] origin-[-140%_0%]'>
                    <Tracer crumbs={[{title:'Home',link:'/'},{title:'Areas',link:'/areas'},{title:'Dubai Marina',link:'/area/marina'}]}/>
                </div>
            )
        }
      <div className='mx-auto mt-[0.625rem] w-[91.25rem]'>
        <ImgGallery screen={screenLG}/>
      </div>
      <div className='w-max  mx-auto mt-[5rem]'>
        <SecondaryRent screen={screenLG}/>
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
      {/* <div className='w-max mx-auto mt-[5rem]'>
        <MortgageCalculator/>

      </div> */}
      <div className='w-max mx-auto mt-[5rem]'>
        <Attraction screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <MapContainer screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <AboutProperty screen={screenLG}/>

      </div>
      <div className='w-max mx-auto mt-[5rem]'>
        <InquiryFormWiht screen={screenLG}/>

      </div>
      <div className='w-full mt-[5rem] mb-[4rem]' style={{ marginTop:screenLG?'5rem':'50px',marginBottom:screenLG?'4rem':'40px' }}>
        {
            screenLG?(

                <BuySwiper barTitle=' Projects in Dubai Marina' cardMB='1rem' cardMT='1.875rem'/>
            ):
            (
                <div className='w-full h-[42.5625rem] rounded-[0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5]'>
                    <BarMobile img={krane} title='Off-plan Latest Launches'/>
                    <div className='w-full h-[calc(100%-2.625rem)] flex justify-center items-center'>
                        <div className='w-[100%]  mx-auto'>

                        <SwiperMobile>
                            <div className='mx-auto w-max shadow-[4px_4px_8px_0px_#BABFBF,_-4px_-4px_7px_0px_#FFF] my-[1rem] rounded-[0.625rem] '>

                                <CardMobile img={dubai} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                            args:{
                                img:priceIcon,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                textMT:'0.19875rem',
                                textMB:'0.213125rem',
                                lineHeight:'0.718125rem',
                                imgWidth:'1.535rem',
                                imgHeight:'1.535rem',
                                imgMT:'0.295rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.48875rem',

                            },
                            flipArgs:{
                                content:[{bed:'studio',price:'11,000,000'},{bed:"one bed",price:'11,000,000'},{bed:"one bed",price:'11,000,000'}],
                                isPrice:true,


                            }
                        }}
                        bedBox={{
                            args:{
                                img:bed_icon,
                                text:'Number of Bedrooms',
                                lowerText:'1,2,3,4,5,6',
                                imgWidth:'1.705rem',
                                imgHeight:'1.27875rem',
                                imgMT:'0.393125rem',
                                textMT:'0.316875rem',
                                textMB:'0.271875rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'2.8125rem',

                            },
                            flipArgs:{
                                content:['Studio','One Bedroom','Tow Bedrooms','Penthouses','Townhouse'],
                                isPrice:false,


                            }
                        }}
                        sizeBox={{
                            args:{
                                img:size_icon,
                                text:'Area in Sq.ft (Min-Max)',
                                lowerText:'881 - 4590',
                                imgWidth:'1.6925rem',
                                imgHeight:'1.544375rem',
                                imgMT:'0.360725rem',
                                lineHeight:'0.718125rem',
                                textMT:'0.16rem',
                                textMB:'0.16rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.97rem',

                            },
                            flipArgs:{
                                content:['1 BR','800 sq.ft','2 BR','1200 sq.ft','3 BR','2200 sq.ft'],
                                isPrice:false,


                            }
                        }}
                        paymentBox={{
                            args:{
                                img:paymentIcon,
                                text:'Payment Plan',
                                lowerText:'60% / 40%',
                                imgWidth:'1.621875rem',
                                imgHeight:'1.621875rem',
                                textMT:'0.1375rem',
                                textMB:'0.206875rem',
                                imgMT:'0.295rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'2.3125rem',


                            },
                            flipArgs:{
                                // text:'The handover of the properties',
                                // lowerText:'Q1 / 2024 ',
                                // lowerSectionHeight:'1.326875rem',
                                // textHeight:'3.5rem',
                                // textSize:'0.625rem',
                                content:[{installment:'Down Payment',precentage:'20%'},{installment:'During Construction',precentage:'40%'},{installment:'Pricre Starting',precentage:'40%'}]


                            }
                        }}
                        compleationBox={{
                            args:{
                                img:compleationIcon,
                                text:'Completion Date',
                                lowerText:'60% / 40%',
                                imgWidth:'1.420625rem',
                                imgHeight:'1.451875rem',
                                imgMT:'0.26625rem',
                                textMB:'0.21625rem',
                                textMT:'0.295625rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.04625rem',


                            },
                            flipArgs:{
                                text:'The handover of the properties',
                                lowerText:'Q1 / 2024 ',
                                lowerSectionHeight:'1.326875rem',
                                textHeight:'3.5rem',
                                textSize:'0.589375rem'


                            }
                        }}
                        agentBox={{
                            Args:{
                                langs:['Arabic', 'English',],
                                name:'Nassif',
                                speciality:'Downtown',
                                imgWrapperWidth:'3.48875rem',
                                imgWrapperHeight:'2.9975rem',
                                img1Width:'3.2925rem',
                                img1Height:'2.800625rem',
                                img2Width:'0rem',
                                img2Height:'3.42875rem',
                                agentSectionHeight:'1.326875rem',
                                lineHeight:'1.0675rem',
                                nameTextSize:'0.688125rem',
                                nameFontWaight:'0.688125rem'

                            }
                                }}
                                />
                            </div>
                            <div className='mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem] '>

                                <CardMobile img={dubai} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                            args:{
                                img:priceIcon,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                textMT:'0.19875rem',
                                textMB:'0.213125rem',
                                lineHeight:'0.718125rem',
                                imgWidth:'1.535rem',
                                imgHeight:'1.535rem',
                                imgMT:'0.295rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.48875rem',

                            },
                            flipArgs:{
                                content:[{bed:'studio',price:'11,000,000'},{bed:"one bed",price:'11,000,000'},{bed:"one bed",price:'11,000,000'}],
                                isPrice:true,


                            }
                        }}
                        bedBox={{
                            args:{
                                img:bed_icon,
                                text:'Number of Bedrooms',
                                lowerText:'1,2,3,4,5,6',
                                imgWidth:'1.705rem',
                                imgHeight:'1.27875rem',
                                imgMT:'0.393125rem',
                                textMT:'0.316875rem',
                                textMB:'0.271875rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'2.8125rem',

                            },
                            flipArgs:{
                                content:['Studio','One Bedroom','Tow Bedrooms','Penthouses','Townhouse'],
                                isPrice:false,


                            }
                        }}
                        sizeBox={{
                            args:{
                                img:size_icon,
                                text:'Area in Sq.ft (Min-Max)',
                                lowerText:'881 - 4590',
                                imgWidth:'1.6925rem',
                                imgHeight:'1.544375rem',
                                imgMT:'0.360725rem',
                                lineHeight:'0.718125rem',
                                textMT:'0.16rem',
                                textMB:'0.16rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.97rem',

                            },
                            flipArgs:{
                                content:['1 BR','800 sq.ft','2 BR','1200 sq.ft','3 BR','2200 sq.ft'],
                                isPrice:false,


                            }
                        }}
                        paymentBox={{
                            args:{
                                img:paymentIcon,
                                text:'Payment Plan',
                                lowerText:'60% / 40%',
                                imgWidth:'1.621875rem',
                                imgHeight:'1.621875rem',
                                textMT:'0.1375rem',
                                textMB:'0.206875rem',
                                imgMT:'0.295rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'2.3125rem',


                            },
                            flipArgs:{
                                // text:'The handover of the properties',
                                // lowerText:'Q1 / 2024 ',
                                // lowerSectionHeight:'1.326875rem',
                                // textHeight:'3.5rem',
                                // textSize:'0.625rem',
                                content:[{installment:'Down Payment',precentage:'20%'},{installment:'During Construction',precentage:'40%'},{installment:'Pricre Starting',precentage:'40%'}]


                            }
                        }}
                        compleationBox={{
                            args:{
                                img:compleationIcon,
                                text:'Completion Date',
                                lowerText:'60% / 40%',
                                imgWidth:'1.420625rem',
                                imgHeight:'1.451875rem',
                                imgMT:'0.26625rem',
                                textMB:'0.21625rem',
                                textMT:'0.295625rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.04625rem',


                            },
                            flipArgs:{
                                text:'The handover of the properties',
                                lowerText:'Q1 / 2024 ',
                                lowerSectionHeight:'1.326875rem',
                                textHeight:'3.5rem',
                                textSize:'0.589375rem'


                            }
                        }}
                        agentBox={{
                            Args:{
                                langs:['Arabic', 'English',],
                                name:'Nassif',
                                speciality:'Downtown',
                                imgWrapperWidth:'3.48875rem',
                                imgWrapperHeight:'2.9975rem',
                                img1Width:'3.2925rem',
                                img1Height:'2.800625rem',
                                img2Width:'0rem',
                                img2Height:'3.42875rem',
                                agentSectionHeight:'1.326875rem',
                                lineHeight:'1.0675rem',
                                nameTextSize:'0.688125rem',
                                nameFontWaight:'0.688125rem'

                            }
                                }}
                                />
                            </div>
                            <div className='mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem] '>

                                <CardMobile img={dubai} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                            args:{
                                img:priceIcon,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                textMT:'0.19875rem',
                                textMB:'0.213125rem',
                                lineHeight:'0.718125rem',
                                imgWidth:'1.535rem',
                                imgHeight:'1.535rem',
                                imgMT:'0.295rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.48875rem',

                            },
                            flipArgs:{
                                content:[{bed:'studio',price:'11,000,000'},{bed:"one bed",price:'11,000,000'},{bed:"one bed",price:'11,000,000'}],
                                isPrice:true,


                            }
                        }}
                        bedBox={{
                            args:{
                                img:bed_icon,
                                text:'Number of Bedrooms',
                                lowerText:'1,2,3,4,5,6',
                                imgWidth:'1.705rem',
                                imgHeight:'1.27875rem',
                                imgMT:'0.393125rem',
                                textMT:'0.316875rem',
                                textMB:'0.271875rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'2.8125rem',

                            },
                            flipArgs:{
                                content:['Studio','One Bedroom','Tow Bedrooms','Penthouses','Townhouse'],
                                isPrice:false,


                            }
                        }}
                        sizeBox={{
                            args:{
                                img:size_icon,
                                text:'Area in Sq.ft (Min-Max)',
                                lowerText:'881 - 4590',
                                imgWidth:'1.6925rem',
                                imgHeight:'1.544375rem',
                                imgMT:'0.360725rem',
                                lineHeight:'0.718125rem',
                                textMT:'0.16rem',
                                textMB:'0.16rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.97rem',

                            },
                            flipArgs:{
                                content:['1 BR','800 sq.ft','2 BR','1200 sq.ft','3 BR','2200 sq.ft'],
                                isPrice:false,


                            }
                        }}
                        paymentBox={{
                            args:{
                                img:paymentIcon,
                                text:'Payment Plan',
                                lowerText:'60% / 40%',
                                imgWidth:'1.621875rem',
                                imgHeight:'1.621875rem',
                                textMT:'0.1375rem',
                                textMB:'0.206875rem',
                                imgMT:'0.295rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'2.3125rem',


                            },
                            flipArgs:{
                                // text:'The handover of the properties',
                                // lowerText:'Q1 / 2024 ',
                                // lowerSectionHeight:'1.326875rem',
                                // textHeight:'3.5rem',
                                // textSize:'0.625rem',
                                content:[{installment:'Down Payment',precentage:'20%'},{installment:'During Construction',precentage:'40%'},{installment:'Pricre Starting',precentage:'40%'}]


                            }
                        }}
                        compleationBox={{
                            args:{
                                img:compleationIcon,
                                text:'Completion Date',
                                lowerText:'60% / 40%',
                                imgWidth:'1.420625rem',
                                imgHeight:'1.451875rem',
                                imgMT:'0.26625rem',
                                textMB:'0.21625rem',
                                textMT:'0.295625rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.04625rem',


                            },
                            flipArgs:{
                                text:'The handover of the properties',
                                lowerText:'Q1 / 2024 ',
                                lowerSectionHeight:'1.326875rem',
                                textHeight:'3.5rem',
                                textSize:'0.589375rem'


                            }
                        }}
                        agentBox={{
                            Args:{
                                langs:['Arabic', 'English',],
                                name:'Nassif',
                                speciality:'Downtown',
                                imgWrapperWidth:'3.48875rem',
                                imgWrapperHeight:'2.9975rem',
                                img1Width:'3.2925rem',
                                img1Height:'2.800625rem',
                                img2Width:'0rem',
                                img2Height:'3.42875rem',
                                agentSectionHeight:'1.326875rem',
                                lineHeight:'1.0675rem',
                                nameTextSize:'0.688125rem',
                                nameFontWaight:'0.688125rem'

                            }
                                }}
                                />
                            </div>
                            <div className='mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem] '>

                                <CardMobile img={dubai} title='Creek Rise tower 2 west side' subTitle='New project coming soon High ROI ' brochure={{  }} priceBox={{
                            args:{
                                img:priceIcon,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                textMT:'0.19875rem',
                                textMB:'0.213125rem',
                                lineHeight:'0.718125rem',
                                imgWidth:'1.535rem',
                                imgHeight:'1.535rem',
                                imgMT:'0.295rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.48875rem',

                            },
                            flipArgs:{
                                content:[{bed:'studio',price:'11,000,000'},{bed:"one bed",price:'11,000,000'},{bed:"one bed",price:'11,000,000'}],
                                isPrice:true,


                            }
                        }}
                        bedBox={{
                            args:{
                                img:bed_icon,
                                text:'Number of Bedrooms',
                                lowerText:'1,2,3,4,5,6',
                                imgWidth:'1.705rem',
                                imgHeight:'1.27875rem',
                                imgMT:'0.393125rem',
                                textMT:'0.316875rem',
                                textMB:'0.271875rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'2.8125rem',

                            },
                            flipArgs:{
                                content:['Studio','One Bedroom','Tow Bedrooms','Penthouses','Townhouse'],
                                isPrice:false,


                            }
                        }}
                        sizeBox={{
                            args:{
                                img:size_icon,
                                text:'Area in Sq.ft (Min-Max)',
                                lowerText:'881 - 4590',
                                imgWidth:'1.6925rem',
                                imgHeight:'1.544375rem',
                                imgMT:'0.360725rem',
                                lineHeight:'0.718125rem',
                                textMT:'0.16rem',
                                textMB:'0.16rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.97rem',

                            },
                            flipArgs:{
                                content:['1 BR','800 sq.ft','2 BR','1200 sq.ft','3 BR','2200 sq.ft'],
                                isPrice:false,


                            }
                        }}
                        paymentBox={{
                            args:{
                                img:paymentIcon,
                                text:'Payment Plan',
                                lowerText:'60% / 40%',
                                imgWidth:'1.621875rem',
                                imgHeight:'1.621875rem',
                                textMT:'0.1375rem',
                                textMB:'0.206875rem',
                                imgMT:'0.295rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'2.3125rem',


                            },
                            flipArgs:{
                                // text:'The handover of the properties',
                                // lowerText:'Q1 / 2024 ',
                                // lowerSectionHeight:'1.326875rem',
                                // textHeight:'3.5rem',
                                // textSize:'0.625rem',
                                content:[{installment:'Down Payment',precentage:'20%'},{installment:'During Construction',precentage:'40%'},{installment:'Pricre Starting',precentage:'40%'}]


                            }
                        }}
                        compleationBox={{
                            args:{
                                img:compleationIcon,
                                text:'Completion Date',
                                lowerText:'60% / 40%',
                                imgWidth:'1.420625rem',
                                imgHeight:'1.451875rem',
                                imgMT:'0.26625rem',
                                textMB:'0.21625rem',
                                textMT:'0.295625rem',
                                lineHeight:'0.718125rem',
                                textSize:'0.589375rem',
                                lowerSectionHeight:'1.326875rem',
                                lowerTextSize:'0.688125rem',
                                textWidth:'3.04625rem',


                            },
                            flipArgs:{
                                text:'The handover of the properties',
                                lowerText:'Q1 / 2024 ',
                                lowerSectionHeight:'1.326875rem',
                                textHeight:'3.5rem',
                                textSize:'0.589375rem'


                            }
                        }}
                        agentBox={{
                            Args:{
                                langs:['Arabic', 'English',],
                                name:'Nassif',
                                speciality:'Downtown',
                                imgWrapperWidth:'3.48875rem',
                                imgWrapperHeight:'2.9975rem',
                                img1Width:'3.2925rem',
                                img1Height:'2.800625rem',
                                img2Width:'0rem',
                                img2Height:'3.42875rem',
                                agentSectionHeight:'1.326875rem',
                                lineHeight:'1.0675rem',
                                nameTextSize:'0.688125rem',
                                nameFontWaight:'0.688125rem'

                            }
                                }}
                                />
                            </div>


                        </SwiperMobile>
                        </div>

                    </div>
                </div>
            )
        }
      </div>







    </MainLayout1>
    </div>
  )
}

export default RentProperty
