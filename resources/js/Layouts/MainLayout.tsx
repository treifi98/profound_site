import React, { ReactNode, useEffect, useState } from 'react'
import Header from '@/Components/Home/Header/Header'
import Footer from '@/Components/Home/Footer/Footer'

interface Props{
    children:ReactNode
}
const MainLayout = (props:Props) => {
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
    <div className='font-[nova]'>

        <Header screen={screenLG}/>
            {props.children}
        <Footer/>
    </div>

  )
}

export default MainLayout
