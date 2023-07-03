import React, { ReactNode, useEffect, useState } from 'react'
import Header1 from '@/Components/Home/Header/Header1'
import Footer from '@/Components/Home/Footer/Footer'

interface Props{
    children:ReactNode
}
const MainLayout1 = (props:Props) => {
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
        updateScreenWidth()
        window.addEventListener('resize', updateScreenWidth);
        return () => window.removeEventListener('resize', updateScreenWidth);
      }, []);
  return (
    <div className='font-[nova]  !h-max '>

        <Header1 screen={screenLG}/>
        <div className='scalable origin-top-left w-[375px] flex flex-col items-center h-max'>

            {props.children}
        <Footer screen={screenLG}/>
        </div>
    </div>

  )
}

export default MainLayout1
