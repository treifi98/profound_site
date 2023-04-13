import React from 'react'
import { Link } from '@inertiajs/react'

interface props{
    text:string,
    link:string
}
const NavElement = (props:props) => {
    const handleMouseEnter=(e:any)=>{
        e.target.style.boxShadow = 'inset -3px -3px 4px #04626B, inset 4px 4px 6px #011618'
    }
    const handleMouseLeave=(e:any)=>{
        e.target.style.boxShadow = '-3.12128px -3.12128px 5.19175px -1.73058px #007580, 3.12128px 3.12128px 4.08176px #011618'
    }
  return (
    <Link href={props.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=' select-none w-[6.37rem] h-[2.187rem] bg-[#002D31] border-[1px] border-[#1F5B62] rounded-[0.312rem] shadow-[-3.12128px_-3.12128px_5.19175px_-1.73058px_#007580,3.12128px_3.12128px_4.08176px_#011618] text-[#fff] flex justify-center items-center cursor-pointer'>
        {props.text}
    </Link>
  )
}

export default NavElement
