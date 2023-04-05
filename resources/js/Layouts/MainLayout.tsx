import React, { ReactNode } from 'react'
import Header from '@/Components/Home/Header/Header'

interface Props{
    children:ReactNode
}
const MainLayout = (props:Props) => {
  return (
    <>
        <Header/>
        {props.children}
    </>
  )
}

export default MainLayout
