import React from 'react'
import NavElement from './NavElement'
import Lang from '../Lang/Lang'
const Nav = () => {
  return (
    <div className='flex justify-center gap-[1.25rem] items-center w-auto mr-[1.875rem]'>
        <NavElement link="/" text="Buy"/>
        <NavElement link="/" text="Rent"/>
        <NavElement link="/" text="Projects"/>
        <NavElement link="/" text="Areas"/>
        <NavElement link="/" text="Developers"/>
        <NavElement link="/" text="Services"/>
        <NavElement link="/" text="Insider"/>
        <NavElement link="/" text="About us"/>
        <Lang/>
    </div>
  )
}

export default Nav
