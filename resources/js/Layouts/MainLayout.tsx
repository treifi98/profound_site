import React, { ReactNode } from 'react'
import Header from '@/Components/Home/Header/Header'

interface Props{
    children:ReactNode
}
const MainLayout = (props:Props) => {
  return (
    <div className='font-[nova]'>

        <Header/>
        {props.children}
    </div>

  )
}

export default MainLayout
