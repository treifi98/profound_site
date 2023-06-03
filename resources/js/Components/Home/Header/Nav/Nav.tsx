import React from 'react'
import NavElement from './NavElement'
import Lang from '../Lang/Lang'
const Nav = () => {
  return (
    <div className='flex justify-center gap-[1.25rem] items-center w-auto mr-[1.875rem]'>
        <NavElement key={1} id={1} link="/buy" text="Buy"/>
        <NavElement key={2} id={2} link="/rent" text="Rent"/>
        <NavElement key={3} id={3} link="/projects" text="Projects"/>
        <NavElement key={4} id={4} link="/areas" text="Areas"/>
        <NavElement key={5} id={5} link="/developers" text="Developers"/>
        <NavElement key={7} id={7} link="/" text="Insider"/>
        <NavElement key={6} id={6} link="/" text="Services"/>
        <NavElement key={8} id={8} link="/" text="About us"/>
        <Lang/>
    </div>
  )
}

export default Nav
