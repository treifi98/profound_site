import React, { useRef, useState } from 'react'
import header_background from '../../assets/header.svg'
import logo_img from '../../../../assets/Plogo.svg'
import search_logo from '../../../../assets/magnifying_glass.svg'
import Nav from './Nav/Nav'
import Lang from './Lang/Lang'
import Search from './Search'
import { Link } from '@inertiajs/react'
import MenueHover from '../MenueHover'

import Drawer from '@mui/material/Drawer';
import { ThemeProvider, createTheme } from '@mui/material'
import MenuItems from './MenuItems'
// or
// import { Drawer } from '@mui/material';

interface Props{
    screen:Boolean
}

const Header = (props:Props) => {
    const up = useRef(null)
    const mid = useRef(null)
    const down = useRef(null)
    const toggleOppen = () => {
        if(!openstatus){
            // alert('f')
            window.scrollTo({top: -100, behavior: 'auto'});
            up.current.style.transform = 'rotate(-45deg)'
            down.current.style.transform = 'rotate(45deg)'
            down.current.parentElement.style.height = 'min-content'
            mid.current.style.display = 'none'
        }
        else{
            // alert('f')
            up.current.style.transform = 'rotate(0deg)'
            down.current.style.transform = 'rotate(0deg)'
            down.current.parentElement.style.height = '0.634375rem'

            mid.current.style.display = 'block'
        }
        setoOpenstatus((prev)=>!prev)
    }
    const theme = createTheme({
        components: {
          // Name of the component
          MuiButton: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                        fontSize: '10rem',
              },
            },
          },
          MuiDrawer:{
            styleOverrides:{
                paper:{
                    backgroundColor:'#E6EDED',
                    width:'80%',
                        height:'calc(100dvh - 3.75rem)',
                    // height:'max-content',
                    top:'3.75rem',
                    overflow:'auto'
                }
            }
          }
        },
      });

    const [openstatus,setoOpenstatus] = useState(false)
    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <ThemeProvider theme={theme}>

            <Drawer
                anchor={'left'}
                open={openstatus}
                onClose={()=>toggleOppen( )}



        //   onClose={toggleDrawer('left', false)}
        >
        {/* {list('left')} */}
                <MenuItems/>
            </Drawer>
        </ThemeProvider>

        {
            props.screen ?
            <div className={`w-full h-[6.25rem] relative z-10 font-[nova] bg-[url('../../../../assets/header.svg')] bg-no-repeat bg-cover bg-right-bottom`}>
            <div className='w-[calc(100%-5rem)] flex justify-between items-center h-[calc(100%-0.625rem)] mr-[5rem]'>
                <Link href='/' className=' ml-[1rem] rounded-[0.4665625rem] max-h-[100%] flex justify-center items-center self-center w-[13.3125rem] h-[4.375rem] shadow-[3.8469839096069336px_3.8469839096069336px_5.030787467956543px_2.132950782775879px_#002023,_-3.8469839096069336px_-3.8469839096069336px_6.398853302001953px_-2.132950782775879px_#007580] '>

                    <img src={logo_img} alt="" className='lg:w-[11.3125rem] lg:h-[2.7825rem] w-[7.4375rem] h-[2.444375rem]  object-cover object-center'/>
                </Link>
                    <div className='mx-[1.25rem] flex justify-center gap-[1.340625rem] items-center w-[calc(100%-15.81rem)]'>
                        <Search/>
                        <Nav/>
                    </div>
                    <MenueHover/>
                </div>
            </div>:
            <div className='w-full bg-[#002D31] h-[60px] relative z-[3]'>
                <div className='w-[95%] mx-auto h-full flex justify-between items-center'>
                    {/* <img src={logo_img} alt="" className='lg:w-[13.31rem] w-[9.6875rem] h-[2.8325rem] lg:h-auto object-cover object-center'/> */}
                    <div className='w-[9.6875rem] h-[2.8325rem] flex items-center justify-center shadow-[-1.44402px_-1.44402px_1.92536px_#04626B,1.92536px_1.92536px_2.88804px_#011618] rounded-[0.28125rem]'>
                        <img src={logo_img} alt="" className='object-cover object-center w-[8.89rem] h-[2.2025rem]'/>

                    </div>
                    <div className='flex w-[5rem] justify-between items-center'>
                        <div className='w-[1.875rem] h-[1.875rem] rounded-full shadow-[-1.44402px_-1.44402px_1.92536px_#04626B,1.92536px_1.92536px_2.88804px_#011618] hover:shadow-[inset_-1.44402px_-1.44402px_1.92536px_#04626B,inset_1.92536px_1.92536px_2.88804px_#011618] flex justify-center items-center'>
                            <img src={search_logo} alt="" className='w-[1.5rem] h-[1.5rem]'/>
                        </div>
                        <div className='w-[1.875rem] h-[1.875rem] shadow-[-2.01493px_-2.01493px_3.35151px_-1.11717px_#007580,2.01493px_2.01493px_2.63496px_1.11717px_#002023] rounded-[0.24375rem] flex justify-center items-center' onClick={()=>toggleOppen()}>
                            <div className='flex flex-col justify-between items-center h-[0.634375rem] '>

                                <span className='w-[1.07375rem] h-[1px] bg-[#fff] transition-all origin-bottom' ref={up}></span>
                                <span className='w-[1.07375rem] h-[1px] bg-[#fff]' ref={mid}></span>
                                <span className='w-[1.07375rem] h-[1px] bg-[#fff] transition-all origin-top' ref={down}></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        }
        </>
    )
}

export default Header
