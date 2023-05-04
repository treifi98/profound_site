import React, { ReactNode } from 'react'
import Header from '@/Components/Home/Header/Header'
import Footer from '@/Components/Home/Footer/Footer'

interface Props{
    children:ReactNode
}
const MainLayout = (props:Props) => {
  return (
    <div className='font-[nova]'>

        <Header/>
        {props.children}
        <Footer/>
    </div>

  )
}

export default MainLayout
