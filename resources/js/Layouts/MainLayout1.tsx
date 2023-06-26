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
    <div className='font-[nova] overflow-hidden'>

        <Header1 screen={screenLG}/>
            {props.children}
        <Footer screen={screenLG}/>
    </div>

  )
}

export default MainLayout1
