import AreaCard from '@/Components/Developer/Cards/AreaCard'
import Map from '@/Components/Developer/Map'
import Pagination from '@/Components/Developer/Pagination'
import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import MainLayout1 from '@/Layouts/MainLayout1'
import React, { useEffect, useRef, useState } from 'react'

import emar_logo from '../../assets/emar_logo.png'
import emar_logo_dev from '../../assets/emar_logo_dev.png'
import DubaiProperties from '../../assets/Dubai-Properties-Logo1.png'
import selectGroup from '../../assets/selectGroup.png'
import dubai from '../../assets/dubai.png'
import DeveloperCard from '@/Components/Home/Cards/DeveloperCard'
import vidoe_call from '../../assets/video_cam.svg'
import whatsapp_icon from '../../assets/whatsapp_icon.svg'
import phone_icon from '../../assets/phone_icon.svg'
import email_icon from '../../assets/email_icon.svg'
import FiltersLineDevelopers from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineDevelopers'
import FiltersLineBuy from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineBuy'
import SliderButton from '@/Components/Developer/SliderButton'
import FancyCheckeComponent from '@/Components/Home/FiltersAndSearch/CoreFilters/FancyCheckeComponent'
import BuyCard from '@/Components/Developer/Cards/BuyCard'
import { useSelector, useDispatch } from 'react-redux'
import { RootState  } from '@/store'
import{check, unCheck, reset, checkSingle, toggle} from '../Components/Home/FiltersAndSearch/CoreFilters/CheckComponentSlice'
import { setHoverState,hideForNav,addGracePeriod  } from '../Components/Home/MenueHoverSlice'
import HeroSwiper from '@/Components/HeroSwiper'
import FliterAreaMobile from '@/Components/Home/FiltersAndSearch/FilterAreaMobile'
import CardMobile from '@/Components/Home/Cards/New/CardMobile'
import priceIcon from '../../assets/price_tag_og.svg'
import paymentIcon from '../../assets/paymentIcon.svg'
import compleationIcon from '../../assets/compleationIcon.svg'
import bed_icon from '../../assets/bed.svg'
import size_icon from '../../assets/size.svg'
import FilterBuyMobile from '@/Components/Home/FiltersAndSearch/FilterBuyMobile'
import MapListing from '@/Components/Developer/MapListing'
const Buy = () => {
    // const [refs,setRefs] = useState(new Array(10).fill(useRef(null)))

    // useEffect(()=>{
    //     console.log('fffffff')
    //     console.log(refs)
    // },[])



    const dispatch = useDispatch()

    const [changes,setChanges] = useState(-1)
    const [rchanges,setRChanges] = useState(-1)
    const [prev,setPrev] = useState(-1)

    const handleMouseEnter = (i) => {
        setChanges(i)
        // setRChanges(-1)

        // alert ('s'+i)
    }
    const handleMouseLeave = (i) => {
        setRChanges(i)
        // setChanges(-1)

    }


    const pfe = useRef(null)
    // const [screenLG,setScreenLG] = useState(true)
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
            }
            else{
                setScreenLG(false);

            }
            initChange()
        }
        updateScreenWidth()
        window.addEventListener('resize', updateScreenWidth);
        return () => window.removeEventListener('resize', updateScreenWidth);
      }, []);


    const [screenLG,setScreenLG] = useState(true)
    useEffect(() => {
        const updateScreenWidth = () => {
            if (window.innerWidth >= 1530){

                setScreenLG(true);
            }
            else{
                setScreenLG(false);

            }


        }
        dispatch(addGracePeriod())
        dispatch(setHoverState(false))
        // alert('d')
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
    const [mapOn,setMapOn] = useState(false)
    const handleMap = () => {

    }
    const container = useRef(null)
    const map = useRef(null)


    useEffect(()=>{
        if(mapOn){
            container.current.style.width = "50vw"
            container.current.style.margin = "0rem"
            container.current.style.marginTop = "0rem"
            // container.current.style.marginBottom = ""
            container.current.style.overflow = "scroll"
            container.current.style.height = "100vh"
            container.current.querySelectorAll('.buy-card').forEach((card)=>{
                // let x = window.getComputedStyle(card).getPropertyValue('width').split('px')[0]
                // let y = window.getComputedStyle(card.parentElement).getPropertyValue('width').split('px')[0]
                // alert(y)
                // let z = parseFloat(y) - parseFloat(x)
                // // alert(z)
                // let v = (z/2)/16
                // alert(v)

                    card.style.marginLeft = 'calc((50vw - 44.625rem) / 2)'
                // card.style.marginTop = '0.3rem'
                // card.style.marginBottom = '0.3rem'
            })
            document.querySelector('#ayo').scrollIntoView()
        }
        else{
            container.current.style.width = "91.75rem"
            container.current.style.margin = "0 auto"
            container.current.style.marginTop = "0rem"
            container.current.style.overflow = "visible"
            container.current.style.height = "max-content"
            container.current.querySelectorAll('.buy-card').forEach((card)=>{
                card.style.marginLeft = '0rem'
                card.style.marginTop = '0rem'
                card.style.marginBottom = '0rem'
            })

        }
    },[mapOn])





    useEffect(()=>{
        dispatch(addGracePeriod())
        dispatch(hideForNav())


        setMapOn(false)
        try{

            dispatch(check({id:"showMapB",selected:''}))
        }catch(e){

        }
    },[])

  return (
    <div className='scroll-smooth'>
    <MainLayout1>
        {
            screenLG?(
                <>
                        <HeroSection1/>

                    <div className='my-[1.9rem] w-[1530px]'>
                        <FiltersLineBuy />
                    </div>
                    <div className=' w-[91.75rem] mx-auto flex justify-between items-center mt-[1.0625rem]'>
                        <Tracer crumbs={[{title:'Home',link:'/'},{title:'Buy',link:'/buy'}]}/>
                        <div className='w-max flex gap-[1.5625rem] items-center'>
                            <SliderButton options={['AED','EUR','USD']} title='Price by' screen={screenLG}/>
                            <SliderButton options={['AED','EUR','USD']} title='Price by' screen={screenLG}/>
                            <SliderButton options={['AED','EUR','USD']} title='Price by' screen={screenLG}/>
                            <FancyCheckeComponent id='showMapB' off='d' on='o' funcMap={setMapOn} mapStatus={mapOn}/>
                        </div>
                    </div>

                    <div className='w-full flex  mt-[1.0625rem]'>
                        <div className='w-[91.75rem] flex flex-wrap gap-x-[2.5rem] gap-y-[5rem] mx-auto mt-[0rem] transition-all' ref={container}>
                            {/* <div> */}
                            {
                                new Array(9).fill(0).map((item,index) => {
                                    // alert(index)<>
                                    return (<div className='transition-all cursor-pointer' id={`elmnt${index}`} onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>

                                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                                            </div>)


                                })
                            }
                            <div className='transition-all cursor-pointer' id={`elmnt${9}`} onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>

                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                            </div>
                                {/* <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/>
                                <BuyCard cardMB='0rem' cardMT='0rem' cardML='0rem'/> */}
                            {/* </div> */}
                        </div>

                        <div className='w-0 h-0 relative top-[0rem] right-0 transition-all mt-[0rem] mb-[0.3rem]' ref={map} id='ayo'>

                            <div className='w-[50vw] h-[100vh] rounded-[0.9375rem] overflow-hidden transition-all' >
                                <MapListing
                                    points={points}
                                    changes={changes}
                                    rchanges={rchanges}
                                    // zoom={zoom}
                                    isZoom={true}
                                    // refs={refs}
                                />
                            </div>
                        </div>
                    </div>



                    <div className='my-[6.25rem]'>
                        <Pagination itemsPerPage={20} prefix='/areas' totalCount={100}/>
                    </div>
                </>
            ):
            (
                <>
                    <div className='h-[calc(100svh-114px)] w-[100vw] relative z-[-1] font-[nova] origin-[50%_0%] overflow-hidden pf ' style={{height:`calc(100svh - ${114* (window.innerWidth / 375)}px)` , scale:`${1/(window.innerWidth/375)}`, marginBottom:`calc( ( ${(1/(window.innerWidth/375))*1} - 1) * (100svh - 114px) )` }} ></div>
                    <div className='h-[calc(100svh-114px)] w-[100vw]  absolute top-[0px] z-[2] font-[nova] origin-[50%_0%] overflow-hidden top-[60px]' style={{height:`calc(100svh - ${114* (window.innerWidth / 375)}px)` , scale:`${1/(window.innerWidth/375)}`,  }}>
                        <div className='relative h-full'>
                            {/* <div className='absolute right-0 top-[4.375rem] z-10 opacity-[0.2] change_font:text-[0.97vw]'>
                                <img src={logo_completion} alt="" className='w-[8.437em]'/>
                            </div> */}
                            <div className='absolute bg-[#01141666] z-[1] h-[calc(100svh-114px)] w-[100vw] mix-blend-overlay  ' style={{height:`calc(100svh - ${114* (window.innerWidth / 375)}px)` ,  }} ></div>
                            <div className='h-[calc(100svh-114px)] w-[100vw]' style={{height:`calc(100svh - ${114* (window.innerWidth / 375)}px)` ,  }}>
                                <HeroSwiper projects={[{title:'Project 1',image:dubai,subTitle:'3 & 4 Bedroom Villas',price:'338764',slug:'slug'},{title:'Project 2',image:dubai,subTitle:'1, 2, 3, 4 & 5 bedroom apartments',price:'85807998756',slug:'slug'},{title:'Project 3',image:dubai,subTitle:'3 & 4 Bedroom Villas',price:'338764',slug:'slug'}]}/>
                            </div>
                            {/* <div className='absolute top-[11.25rem] z-20 w-[80%] mx-[10%] h-[6.25rem] text-center flex justify-center items-center flex-col'>
                                <div className='text-[2.25rem] text-[#fff] font-[600]'>
                                    WE MAKE THE DREAM OF OWNING PERFECT HOME A REALITY.
                                </div>
                                <div className=' mt-[2.75rem] flex justify-center items-center w-full h-[2.5rem] gap-[2.5rem] select-none'>

                                    <div className='transition-all cursor-pointer hover:bg-[#dbe9e94d] text-[1.125rem] font-[600] w-[15rem] flex justify-center items-center h-[2.5rem] rounded-[3.125rem] border-[2px] border-[#eee] text-[#fff]'>Profound ultimate luxary</div>
                                </div>
                            </div> */}
                        </div>
                        {/* <Contact nodes={[{img:vidoe_call,action:()=>{},w:'1.1875',h:'0.6875'},{img:whatsapp_icon,action:()=>{},w:'1.1875',h:'1.1875'},{img:phone_icon,action:()=>{},w:'1.125',h:'1.125'},{img:email_icon,action:()=>{},w:'1.0625',h:'0.75'}]}/> */}
                        <div className='w-[14.5375rem] ml-auto mr-[1rem] flex justify-between items-center absolute bottom-[1.65875rem] right-0 z-[9999]'>
                            <div className='hover:animate-wiggle select-none cursor-pointer bg-[#00494F] h-[2.8125rem] w-[2.8125rem] rounded-full border-[1px] border-[#19464B] shadow-[inset_-2.08494px_-2.08494px_3.46797px_-1.15599px_#007580,inset_2.08494px_2.08494px_2.72652px_#002D31] flex justify-center items-center'>
                                <div className='bg-[#E6EDED]  border-[#3007680] border-[1px] w-[2.2025rem] h-[2.2025rem] rounded-full shadow-[-1.62941px_-1.62941px_2.71026px_-0.90342px_#007580,1.62941px_1.62941px_2.13081px_#011618] flex justify-center items-center'>
                                    <img src={vidoe_call} className={`w-[1.129375rem] h-[0.6525rem] object-cover object-center `}/>
                                </div>

                            </div>
                            <div className='hover:animate-wiggle select-none cursor-pointer bg-[#00494F] h-[2.8125rem] w-[2.8125rem] rounded-full border-[1px] border-[#19464B] shadow-[inset_-2.08494px_-2.08494px_3.46797px_-1.15599px_#007580,inset_2.08494px_2.08494px_2.72652px_#002D31] flex justify-center items-center'>
                                <div className='bg-[#E6EDED]  border-[#3007680] border-[1px] w-[2.2025rem] h-[2.2025rem] rounded-full shadow-[-1.62941px_-1.62941px_2.71026px_-0.90342px_#007580,1.62941px_1.62941px_2.13081px_#011618] flex justify-center items-center'>
                                    <img src={whatsapp_icon} className={`w-[1.0875rem] h-[1.0875rem] object-cover object-center `}/>
                                </div>

                            </div>
                            <div className='hover:animate-wiggle select-none cursor-pointer bg-[#00494F] h-[2.8125rem] w-[2.8125rem] rounded-full border-[1px] border-[#19464B] shadow-[inset_-2.08494px_-2.08494px_3.46797px_-1.15599px_#007580,inset_2.08494px_2.08494px_2.72652px_#002D31] flex justify-center items-center'>
                                <div className='bg-[#E6EDED]  border-[#3007680] border-[1px] w-[2.2025rem] h-[2.2025rem] rounded-full shadow-[-1.62941px_-1.62941px_2.71026px_-0.90342px_#007580,1.62941px_1.62941px_2.13081px_#011618] flex justify-center items-center'>
                                    <img src={phone_icon} className={`w-[0.896875rem] h-[0.864375rem] object-cover object-center `}/>
                                </div>

                            </div>
                            <div className='hover:animate-wiggle select-none cursor-pointer bg-[#00494F] h-[2.8125rem] w-[2.8125rem] rounded-full border-[1px] border-[#19464B] shadow-[inset_-2.08494px_-2.08494px_3.46797px_-1.15599px_#007580,inset_2.08494px_2.08494px_2.72652px_#002D31] flex justify-center items-center'>
                                <div className='bg-[#E6EDED]  border-[#3007680] border-[1px] w-[2.2025rem] h-[2.2025rem] rounded-full shadow-[-1.62941px_-1.62941px_2.71026px_-0.90342px_#007580,1.62941px_1.62941px_2.13081px_#011618] flex justify-center items-center'>
                                    <img src={email_icon} className={`w-[0.928125rem] h-[0.6525rem] object-cover object-center `}/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-[375px] relative' >

                        <div className='mt-[0rem relativez-[1] w-[375px] relative ' >

                            <FilterBuyMobile/>
                        </div>

                        <div className='mt-[-2.0625rem] w-[21.5rem] flex justify-start mx-auto scale-[0.8] origin-top-left'>
                            <Tracer crumbs={[{title:'Home',link:'/'},{title:'Areas in Dubai',link:'/areas'}]}/>
                        </div>
                        <div className='w-min mx-auto flex flex-col justify-center items-center gap-[50px] mt-[1.5rem]'>
                            <div className='mx-auto w-max shadow-[4px_4px_8px_0px_#BABFBF,_-4px_-4px_7px_0px_#FFF] my-[0rem] rounded-[0.625rem] '>

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
                            <div className='mx-auto w-max shadow-[4px_4px_8px_0px_#BABFBF,_-4px_-4px_7px_0px_#FFF] my-[0rem] rounded-[0.625rem] '>

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
                            <div className='mx-auto w-max shadow-[4px_4px_8px_0px_#BABFBF,_-4px_-4px_7px_0px_#FFF] my-[0rem] rounded-[0.625rem] '>

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
                            <div className='mx-auto w-max shadow-[4px_4px_8px_0px_#BABFBF,_-4px_-4px_7px_0px_#FFF] my-[0rem] rounded-[0.625rem] '>

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
                            <div className='mx-auto w-max shadow-[4px_4px_8px_0px_#BABFBF,_-4px_-4px_7px_0px_#FFF] my-[0rem] rounded-[0.625rem] '>

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
                        </div>
                        <div className='my-[1.55rem] scale-[0.604] origin-[8%_0%] w-min mx-auto'>
                            <Pagination itemsPerPage={20} prefix='/areas' totalCount={100} screen={screenLG}/>
                        </div>
                    </div>
                </>
            )
        }


    </MainLayout1>
</div>
  )
}

export default Buy
