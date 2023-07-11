import AreaCard from '@/Components/Developer/Cards/AreaCard'
import Map from '@/Components/Developer/Map'
import Pagination from '@/Components/Developer/Pagination'
import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import MainLayout1 from '@/Layouts/MainLayout1'
import React, { useEffect, useRef, useState } from 'react'
import vidoe_call from '../../assets/video_cam.svg'
import whatsapp_icon from '../../assets/whatsapp_icon.svg'
import phone_icon from '../../assets/phone_icon.svg'
import email_icon from '../../assets/email_icon.svg'
import dubai from '../../assets/dli.png'
import emar_logo from '../../assets/emar_logo.png'
import emar_logo_dev from '../../assets/emar_logo_dev.png'
import DubaiProperties from '../../assets/Dubai-Properties-Logo1.png'
import selectGroup from '../../assets/selectGroup.png'
import DeveloperCard from '@/Components/Home/Cards/DeveloperCard'
import FiltersLineDevelopers from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineDevelopers'
import { addGracePeriod, hideForNav, setHoverState } from '@/Components/Home/MenueHoverSlice'
import { useDispatch } from 'react-redux'
import HeroSwiper from '@/Components/HeroSwiper'
import FliterDeveloperMobile from '@/Components/Home/FiltersAndSearch/FilterDeveloperMobile'
const Developers = () => {
    const dispatch = useDispatch()

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
    const rectifier = useRef(null)
    useEffect(()=>{
        if(!screenLG){

            // let correctionFactor = (-((pfe.current.offsetHeight * scaleFactor) - (pfe.current.offsetHeight)))
            // console.log(correctionFactor)
            // rectifier.current.style.top = correctionFactor+'px'
        }



    },[screenLG])

  return (
    <>
    <MainLayout1>
        {
            screenLG?
            <>
                <HeroSection1/>

                <div className='my-[1.9rem] '>
                    <FiltersLineDevelopers />
                </div>
                <div className='mt-[1.125rem] w-[86.78rem] mx-auto'>
                    <Tracer crumbs={[{title:'Home',link:'/'},{title:'Developers in Dubai',link:'/developers'}]}/>
                </div>

                <div className='w-[86.78rem] gap-y-[5rem]  mx-auto gap-x-[4.930625rem] flex flex-wrap  transition-all mt-[1.125rem] ' >
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                {/* <AreaCard/> */}
                </div>

                <div className='my-[6.25rem]'>
                    <Pagination itemsPerPage={20} prefix='/areas' totalCount={100}/>
                </div>



            </>:
            <>
                <div className='h-[calc(100svh-114px)] w-[100vw] relative z-[-1] font-[nova] origin-[50%_0%]' style={{height:`calc(100svh - ${114* (window.innerWidth / 375)}px)` , scale:`${1/(window.innerWidth/375)}`, marginBottom:`calc( ( ${(1/(window.innerWidth/375))*1} - 1) * (100svh - 114px) )` }}></div>
                    <div className='h-[calc(100svh-114px)] w-[100vw] absolute top-[0px] z-[2] font-[nova] !origin-[50%_0%] top-[60px]' style={{height:`calc(100svh - ${114* (window.innerWidth / 375)}px)` , scale:`${1/(window.innerWidth/375)}`,  }}>
                        <div className='relative h-[100vw]' style={{height:`calc(100svh - ${114* (window.innerWidth / 375)}px)` ,   }}>
                            {/* <div className='absolute right-0 top-[4.375rem] z-10 opacity-[0.2] change_font:text-[0.97vw]'>
                                <img src={logo_completion} alt="" className='w-[8.437em]'/>
                            </div> */}
                            <div className='absolute bg-[#01141666] z-[1] h-[calc(100svh-114px)] w-[100vw] mix-blend-overlay' style={{height:`calc(100svh - ${114* (window.innerWidth / 375)}px)` ,   }}></div>
                            <div className='h-[calc(100svh-114px)] w-[100vw]' style={{height:`calc(100svh - ${114* (window.innerWidth / 375)}px)` ,   }}>
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
                    <div className='mt-[0px] relativez-[1] w-[375px]'>

                        <FliterDeveloperMobile/>
                    </div>
                    <div className='mt-[1.5rem] w-[21.5rem] flex justify-start mx-auto scale-[0.8] origin-[10%_0%]'>
                        <Tracer crumbs={[{title:'Home',link:'/'},{title:'Developers in Dubai',link:'/developers'}]}/>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_0%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_-50%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_-70%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_-90%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_-110%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_-130%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_-150%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_-170%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_-190%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='scale-[0.85461] origin-[35%_-210%] mt-[1.5rem]  mx-auto'>

                        <div className=' mx-auto w-max shadow-[-4px_-4px_8px_#FFFFFF,_4px_4px_8px_#BABFBF] my-[1rem] rounded-[0.625rem] mb-[-10rem]'>

                            <DeveloperCard  img={emar_logo} name="Meraas" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }} MY='0rem'/>
                        </div>
                    </div>
                    <div className='my-[1.55rem] scale-[0.604] origin-[8%_0%] w-min mx-auto'>
                        <Pagination itemsPerPage={20} prefix='/areas' totalCount={100} screen={screenLG}/>
                    </div>
            </>
        }



    </MainLayout1>
</>
  )
}

export default Developers
