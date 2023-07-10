import React, { useEffect, useRef, useState } from 'react'
import InElementSeperator from '../Cards/Common/InElementSeperator'
import plus from '../../../../assets/plus.svg'
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OneCardSwiperMobile from './Nav/OneCardSwiperMobile';
import NewTag from '../Cards/Common/NewTag';
import MenueChild from './MenueChild';
import hauseIcon from '../../../../assets/house.svg'
import OneCardSwiperProjectMobile from './Nav/OneCardSwiperProjectMobile';
import OneCardSwiperAreaMobile from './Nav/OneCardSwiperAreaMobile';
import OneCardSwiperDeveloperMobile from './Nav/OneCardSwiperDeveloperMobile';
import impossible_DsDev from '../../../../assets/impossible_DsDev.svg'
import OneCardSwiperInsiderMobile from './Nav/OneCardSwiperInsiderrMobile';
import ElegantRect from '@/Components/Developer/Cards/ElegantRect';
import cach from '../../../../assets/cach.svg'
import construction from '../../../../assets/construction.svg'
import imposible_DsLarge from '../../../../assets/imposible_DsLarge.svg'
import binociolars from '../../../../assets/binociolars.svg'
import eng_flag from '../../../../assets/engflag.svg'
import f from '../../../../assets/f.svg'
import AboutSwiperMobile from './Nav/AboutSwiperMobile';
import { Link } from '@inertiajs/react';




const MenuItems = () => {

//     const [scaleFactor,setScaleFactor] = useState(1.0)
// const [mainScreen,setMainScreen] = useState(375)
// const [changer,setChanger] = useState(1)
// // const [currentScreen,setCurrentScreen] = useState(375)
// const initChange = () => {
//     setChanger(window.innerWidth)
// }
// const ScaleforMobile = () => {
//     let x = window.innerWidth / 375
//     setScaleFactor(x)
//     alert("menue")


// }
// useEffect(()=>{
//     console.log(mainScreen)
//     ScaleforMobile()
//     setMainScreen(window.innerWidth)
//     console.log(scaleFactor)
// },[changer])

// useEffect(()=>{
//     // document.querySelectorAll('.mobil-comp').forEach((elmnt)=>{
//     //     elmnt.parentElement.style.scale = scaleFactor.toString()
//     //     // elmnt.parentElement.style.marginTop = (5 * scaleFactor).toString()+'rem'
//     //     // alert((elmnt.parentElement.style.marginTop))
//     // })
//     if(window.innerWidth < 1530){

//         document.querySelector('.scalable').style.scale = scaleFactor
//     }
//     else{

//         document.querySelector('.scalable').style.scale = 1
//     }
// },[scaleFactor])

// useEffect(()=>{
//     if(window.innerWidth < 1530){

//         document.querySelector('.scalable').style.scale = scaleFactor
//     }
//     else{

//         document.querySelector('.scalable').style.scale = 1
//     }
// },[])


// const multiplyDimensions = (element, factor) => {
//     // first, get the computed style of the element

//     let style = window.getComputedStyle(element);

//     // get the width and height of the element
//     let width = parseFloat(style.width.replace("rem", ""));
//     let height = parseFloat(style.height.replace("rem", ""));
//     let textSize = parseFloat(style.fontSize.replace("rem", ""));

//     // multiply the width and height by the factor
//     width *= factor;
//     height *= factor;
//     textSize *= factor;

//     // set the new width and height
//     element.style.width = `${width}px`;
//     element.style.height = `${height}px`;
//     element.style.fontSize = `${textSize}px`;

//     // repeat for each child element
//     for (let i = 0; i < element.children.length; i++) {
//         // console.log(element.children[i].classList)
//         if(element.children[i].classList.contains('except')){
//             continue
//         }
//         console.log('-------')
//         console.log(scaleFactor)
//         multiplyDimensions(element.children[i], factor);
//     }

// }


// useEffect(() => {
//     const updateScreenWidth = () => {
//         if (window.innerWidth >= 1530){

//             setScreenLG(true);
//         }
//         else{
//             setScreenLG(false);

//         }
//         initChange()
//     }
//     updateScreenWidth()
//     window.addEventListener('resize', updateScreenWidth);
//     return () => window.removeEventListener('resize', updateScreenWidth);
//   }, []);

// // const dispatch = useDispatch()

// const [screenLG,setScreenLG] = useState(true)
// useEffect(() => {
//     const updateScreenWidth = () => {
//         if (window.innerWidth >= 1530){

//             setScreenLG(true);
//         }
//         else{
//             setScreenLG(false);

//         }


//     }
//     // dispatch(addGracePeriod())
//     // dispatch(setHoverState(false))
//     // alert('d')
//     updateScreenWidth()
//     window.addEventListener('resize', updateScreenWidth);
//     return () => window.removeEventListener('resize', updateScreenWidth);
//   }, []);

    const item1 = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    const item4 = useRef(null)
    const item5 = useRef(null)
    const item6 = useRef(null)
    const item7 = useRef(null)
    const item8 = useRef(null)
    const item9 = useRef(null)
    const item10 = useRef(null)
    const item11= useRef(null)

    const [oppened,setOppened] = useState('-1')
    const [isOppened,setIsOppened] = useState(false)
    const toggleOpen = (e,id) => {
        // document.querySelectorAll('.menueItemNav').forEach((elmnt)=>{
        //     elmnt.parentElement.querySelector('img:not(.xd)').style.transform = 'rotate(0deg)'
        // })
        // document.querySelectorAll('.menuItemList').forEach((elmnt)=>{
        //     elmnt.style.maxHeight = '0px'
        // })
        setOppened(e.target.id)
        if(oppened != e.target.id ){

            e.target.parentElement.querySelector('img:not(.xd)').style.transform = 'rotate(45deg)'
            document.querySelector(`#${id}`).style.maxHeight = '2000px'
            // document.querySelector('#anchor').scrollIntoView(true)

            setIsOppened(true)
        }else{
            if(isOppened){

                setIsOppened(false)
            document.querySelector(`#${id}`).style.maxHeight = '0px'
            e.target.parentElement.querySelector(`img:not(.xd)`).style.transform = 'rotate(0deg)'
            }
            else{
                e.target.parentElement.querySelector('img:not(.xd)').style.transform = 'rotate(45deg)'
            document.querySelector(`#${id}`).style.maxHeight = '2000px'
            // document.querySelector('#anchor').scrollIntoView(true)

                setIsOppened(true)
            }
        }
    }
  return (



    <div
      role="presentation"
    //   onClick={toggleDrawer(false)}
    //   onKeyDown={toggleDrawer(false)}
        className='w-full'
    >
      <List className='!w-full !mx-0 !px-0 !my-0 !py-0   flex flex-col justify-evenly items-center '>

          <ListItem button key={'list1'} className='!w-full !mx-0 !px-0 !my-0 !py-0 '  disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center  relative overflow-hidden z-[99]'>
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'ff')} id = '2' >

                    </div>
                    <Link href="/buy" className='text-grade text-[0.925rem] font-[400] relative z-[999] ' >
                        Buy
                    </Link>
                    <img src={plus} alt=""   className='transition-all '/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='ff'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[0.375rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all properties
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Apartments for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Villas for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Town houses for sale in Dubai  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Penthouses for sale in Dubai  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Lands for sale in Dubai  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Studio  for sale in Dubai  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='One bed room for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Offices for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Shops for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Commercial for sale in Dubai '/>
                    </div>
                    <div className='scale-[0.67] origin-[15%_20%] mb-[-4rem]'>
                    <MenueChild icon={hauseIcon} title={'HOW TO BUY PROPERTY IN DUBAI'} titleWidth='16rem' text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonTextSize='1.1rem' textMT='1rem'/>


                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>
          <ListItem button key={'list3'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center  relative overflow-hidden z-[99]'>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'rent')} id = '3'>

                    </div>

                    {/*  */}

                    <Link href="/rent" className='text-grade text-[0.925rem] font-[400] relative z-[999] 'id='anchor'>
                        Rent
                    </Link>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='rent'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[0.375rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all properties
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Apartments for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Villas for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Town houses for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Penthouses for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Hotel apartment for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Studio  for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='One bed room for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Offices for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Shops for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Commercial for rent in Dubai '/>
                    </div>
                    <div className='scale-[0.67] origin-[15%_20%] mb-[-4rem]'>
                        <MenueChild icon={hauseIcon} title={'HOW TO RENT PROPERTY IN DUBAI'} titleWidth='20rem' text="Everything you need to know when renting a property in Dubai. From legal requirements to cultural norms, we'll provide you with the knowledge you need to make informed decisions" buttonTextSize='1.1rem' textMT='1rem'/>

                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>
          <ListItem button key={'list4'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center relative overflow-hidden z-[99] '>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'projects')} id = '4'>

                    </div>

                    {/*  */}

                    <Link href="/" className='text-grade text-[0.925rem] font-[400] relative z-[999] '>
                        Projects
                    </Link>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='projects'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperProjectMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[0.375rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all Projects
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan apartments for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan villas for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan town houses for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan penthouses for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan hotel apartment for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan studio  for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan One bed room for sale in Dubai'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan Offices for sale Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan Shops for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan Commercial for sale in Dubai '/>
                    </div>
                    <div className='scale-[0.67] origin-[15%_20%] mb-[-4rem]'>
                        <MenueChild icon={hauseIcon}  titleWidth='26.0625rem' titleSize='1.4375rem' title={'HOW TO BUY OFF-PLAN PROPERTY IN DUBAI'} text="Explore insightful tips for buying off-plan properties in Dubai and simplify your search with our comprehensive guide. Begin your journey to finding your dream home today." buttonMT='1.075rem' buttonTextSize='1.2rem' textMT='1rem'  />

                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>
          <ListItem button key={'list5'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center relative overflow-hidden z-[99] '>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'area')} id = '5'>

                    </div>

                    {/*  */}

                    <Link href="/areas" className='text-grade text-[0.925rem] font-[400] relative z-[999] '>
                        Areas
                    </Link>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='area'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperAreaMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[0.375rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all Areas
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Beachfront properties In Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Waterfront properties In Dubai'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai properties Luxury Living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai properties Green Nature Living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai properties urban city Living  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='  Dubai iconic island living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai Vibrant Island living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai Dynamic Business Hub living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai Mediterranean Style living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai Entertainment Central living'/>
                    </div>
                    <div className='scale-[0.67] origin-[15%_20%] mb-[-4.5rem]'>
                        <MenueChild icon={hauseIcon}  titleWidth='24.75rem' titleSize='1.4375rem' title={'ABOUT COMMUNITY AREAS'} text="Beachfront homes, waterfront homes, villas, flats, penthouses, townhouses, and land. Buyers can opt to invest in high-end projects or locate properties for under AED 1 million. Green living possibilities include golf course or natural environment residences." buttonMT='1.2625rem' textMT='0.6875rem' texteSize='1.15rem' buttonTextSize='1.2rem' mainHeight='25rem'/>


                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>

          <ListItem button key={'list6'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center relative overflow-hidden z-[99] '>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'developer')} id = '6'>

                    </div>

                    {/*  */}

                    <Link href="/developers" className='text-grade text-[0.925rem] font-[400] relative z-[999] '>
                        Developers
                    </Link>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='developer'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperDeveloperMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[-9.075rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all Developers
                            </div>
                        </div>
                    </div>

                    <div className='scale-[0.67] origin-[15%_20%] mb-[-5rem]'>
                    <MenueChild icon={hauseIcon} title={'DUBAI REAL ESTATE DEVELOPERS'} titleWidth='20rem' text="There are several reputable real estate developers in Dubai, with various specializations, project portfolios, and expertise. To select a developer, factors such as design styles, development strategies, construction quality, customer service, and project timelines must be considered" buttonTextSize='1.1rem' textMT='1rem' mainHeight='27rem' />


                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>
          <ListItem button key={'list7'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center relative overflow-hidden z-[99] '>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'insider')} id = '7'>

                    </div>

                    {/*  */}

                    <Link href="/" className='text-grade text-[0.925rem] font-[400] relative z-[999] '>
                        Insider
                    </Link>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='insider'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperInsiderMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[-11.075rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all News
                            </div>
                        </div>
                    </div>

                    <div className='scale-[0.67] origin-[15%_20%] mb-[-5rem]'>
                    <MenueChild icon={hauseIcon} title={'PROFOUND INSIDER MARKET / NEWS'} titleWidth='20rem' text="Insights into market trends and news can give you a competitive edge. A deep understanding of real estate market dynamics and emerging trends can help you make informed decisions and seize opportunities that others may overlook. By staying up-to-date on the latest news and analysis." buttonTextSize='1.1rem' textMT='1rem' mainHeight='27rem'/>


                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>
          <ListItem button key={'list8'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center relative overflow-hidden z-[99] '>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'services')} id = '8'>

                    </div>

                    {/*  */}

                    <Link href="/" className='text-grade text-[0.925rem] font-[400] relative z-[999] '>
                        Services
                    </Link>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='services'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <div className='w-[90%]  mx-auto h-max border-[#DCE3E3] border-[0.0625rem] rounded-[0.5375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] flex justify-center items-center py-[1rem] mt-[1rem] '>
                                <div className='w-min h-max flex flex-wrap gap-x-[1.455625rem] gap-y-[1.5625rem]'>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[0.2rem]'>

                                        <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.281875rem' imgHeight='2.825rem'  textWidth='200rem'  />
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={construction} text='OFF PLAN INVESTMENT' imgWidth='3.529375rem' imgHeight=' 1.929375rem' textWidth='200rem'   />
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.281875rem' imgHeight='2.825rem'  textWidth='6rem'/>
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.281875rem' imgHeight='2.825rem'  />
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.281875rem' imgHeight='2.825rem'  />
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.281875rem' imgHeight='2.825rem'  />
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.281875rem' imgHeight='2.825rem'  />
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.281875rem' imgHeight='2.825rem'  />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='scale-[0.67] origin-[15%_20%] mb-[-7rem]'>
                        <MenueChild icon={hauseIcon} title={'WHAT ASPECT OF DUBAI REAL ESTATE ARE YOU INTERSTED IN'} titleWidth='20rem' text="Let Profound Properties guide you towards a bright future in Dubai real estate with our data-driven analysis and insider information. We're always one step ahead, believing that reality is the key factor to making smart decisions. By taking into account real estate behavior, patterns, and changes, we enable our clients to get the best deal possible when buying or selling a property. Our research and preparation help our clients anticipate any future circumstances, ensuring a successful outcome." buttonTextSize='1.1rem' textMT='1rem' mainHeight='36rem' titleSize='1.4rem'/>


                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>
          <ListItem button key={'list9'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center relative overflow-hidden z-[99] '>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'about')} id = '9'>

                    </div>

                    {/*  */}

                    <Link href="/" className='text-grade text-[0.925rem] font-[400] relative z-[999] '>
                        About us
                    </Link>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='about'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <div className='w-[90%]  mx-auto h-max border-[#DCE3E3] border-[0.0625rem] rounded-[0.5375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] flex justify-center items-center py-[1rem] mt-[1rem] '>
                                <div className='w-min h-max flex flex-wrap gap-x-[1.455625rem] gap-y-[1.5625rem]'>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[0.4rem]'>

                                        <ElegantRect img={cach} text='OUER STORY' imgWidth='2.281875rem' imgHeight='2.825rem'  textWidth='6rem'/>
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={cach} text='OUER STORY' imgWidth='2.281875rem' imgHeight='2.825rem' />
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={cach} text='OUER STORY' imgWidth='2.281875rem' imgHeight='2.825rem' />
                                    </div>
                                    <div className='scale-x-[0.9691] scale-y-[0.8691] origin-top mt-[-0.7rem]'>

                                        <ElegantRect img={cach} text='OUER STORY' imgWidth='2.281875rem' imgHeight='2.825rem' />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[2.075rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all Nesws
                            </div>
                        </div>
                    </div> */

                    <div className='mx-auto w-full mt-[0.25rem]'>
                        <AboutSwiperMobile/>
                    </div>}


                </div>
            </div>
          </ListItem>
          <ListItem button key={'list10'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center relative overflow-hidden z-[99] '>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'lang')} id = '10'>

                    </div>

                    {/*  */}
                    <div className='w-min flex gap-[0.3rem]'>

                        <Link href="/" className='text-grade text-[0.925rem] font-[400] relative z-[999] '>
                            EN
                        </Link>
                        <img src={eng_flag} alt="" className='xd' />
                    </div>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList !mb-[0rem]' id='lang'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem] mb-[1rem]'>
                            <div className='w-[85%]  mx-auto h-max  flex justify-start gap-[2rem] items-center py-[1rem] mt-[1rem] flex-wrap gap-y-[1.9rem] '>
                                <div className='w-[3.675rem] text-[0.9rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[3px] flex items-center gap-[0.3rem] justify-center'>
                                    <div>
                                        EN
                                    </div>
                                    <img src={eng_flag} alt="" className='w-[1.5rem] h-[1.5rem]'/>
                                </div>
                                <div className='w-[3.675rem] text-[0.9rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[3px] flex items-center gap-[0.3rem] justify-center'>
                                    <div>
                                        EN
                                    </div>
                                    <img src={eng_flag} alt="" className='w-[1.5rem] h-[1.5rem]'/>
                                </div>
                                <div className='w-[3.675rem] text-[0.9rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[3px] flex items-center gap-[0.3rem] justify-center'>
                                    <div>
                                        EN
                                    </div>
                                    <img src={eng_flag} alt="" className='w-[1.5rem] h-[1.5rem]'/>
                                </div>
                                <div className='w-[3.675rem] text-[0.9rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[3px] flex items-center gap-[0.3rem] justify-center'>
                                    <div>
                                        EN
                                    </div>
                                    <img src={eng_flag} alt="" className='w-[1.5rem] h-[1.5rem]'/>
                                </div>
                                <div className='w-[3.675rem] text-[0.9rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[3px] flex items-center gap-[0.3rem] justify-center'>
                                    <div>
                                        EN
                                    </div>
                                    <img src={eng_flag} alt="" className='w-[1.5rem] h-[1.5rem]'/>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
          </ListItem>
          <ListItem button key={'list11'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center relative overflow-hidden z-[99] '>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'currency')} id = '11'>

                    </div>

                    {/*  */}
                    <div className='w-min flex gap-[0.3rem]'>

                        <Link href="/" className='text-grade text-[0.925rem] font-[400] relative z-[999] '>
                            AED
                        </Link>
                    </div>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList !mb-[0rem]' id='currency'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem] mb-[1rem]'>
                            <div className='w-[85%]  mx-auto h-max  flex justify-start gap-[1rem] items-center py-[1rem] mt-[1rem] flex-wrap gap-y-[1.9rem] '>
                                <div className='w-[3.05rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[5px] text-[0.8rem] font-[500] flex items-center gap-[0.3rem] justify-center'>
                                    AED
                                </div>
                                <div className='w-[3.05rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[5px] text-[0.8rem] font-[500] flex items-center gap-[0.3rem] justify-center'>
                                    USD
                                </div>
                                <div className='w-[3.05rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[5px] text-[0.8rem] font-[500] flex items-center gap-[0.3rem] justify-center'>
                                    EUR
                                </div>
                                <div className='w-[3.05rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[5px] text-[0.8rem] font-[500] flex items-center gap-[0.3rem] justify-center'>
                                    RUB
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
          </ListItem>
          <ListItem button key={'list12'} className='!w-full !mx-0 !px-0 !my-0 !py-0 'disableRipple disableTouchRipple disableGutters>
            <div className='w-full flex flex-col min-h-[3.225rem] h-full menueItemNav' >
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.225rem] my-auto w-[85%] ml-[5%] flex justify-between items-center relative overflow-hidden z-[99] '>
                    {/*  */}
                    <div className='absolute w-[200%] h-[200%] top-0 left-0 z-[99]' onClick={(e)=>toggleOpen(e,'size')} id = '12'>

                    </div>

                    {/*  */}
                    <div className='w-min flex gap-[0.3rem]'>

                        <Link href="/" className='text-grade text-[0.925rem] font-[400] relative z-[999] '>
                            SQ.FT
                        </Link>
                    </div>
                    <img src={plus} alt=""  className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList ' id='size'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem] '>
                            <div className='w-[85%]  mx-auto h-max  flex justify-start gap-[1rem] items-center py-[1rem] mt-[1rem] flex-wrap gap-y-[1.9rem] '>
                                <div className='w-[3.45rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[5px] text-[0.8rem] font-[500] flex items-center gap-[0.3rem] justify-center'>
                                    SQ.FT
                                </div>
                                <div className='w-[3.45rem] h-[1.75rem] shadow-[4.230769157409668px_4.230769157409668px_5.923077583312988px_#B6C3C5,-3.54px_-3.54px_4.23px_#fff] rounded-[5px] text-[0.8rem] font-[500] flex items-center gap-[0.3rem] justify-center'>
                                    SQ.MT
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
          </ListItem>

      </List>
    </div>

  )
}

export default MenuItems
