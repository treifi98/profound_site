import React from 'react'
import NavElement from './NavElement'
const Nav = () => {
  return (
    <div className='flex justify-between items-center w-[70%]'>
        <NavElement link="/" text="Buy"/>
        <NavElement link="/" text="Rent"/>
        <NavElement link="/" text="Projects"/>
        <NavElement link="/" text="Areas"/>
        <NavElement link="/" text="Developers"/>
        <NavElement link="/" text="Services"/>
        <NavElement link="/" text="Insider"/>
        <NavElement link="/" text="About us"/>
    </div>
  )
}

export default Nav
