import React, { ReactNode } from 'react'
import Header1 from '@/Components/Home/Header/Header1'
import Footer from '@/Components/Home/Footer/Footer'

interface Props{
    children:ReactNode
}
const MainLayout1 = (props:Props) => {
  return (
    <div className='font-[nova]'>

        <Header1/>
            {props.children}
        <Footer/>
    </div>

  )
}

export default MainLayout1
