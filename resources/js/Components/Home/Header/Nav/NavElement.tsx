import React from 'react'
import { Link } from '@inertiajs/react'

interface props{
    text:string,
    link:string
}
const NavElement = (props:props) => {
  return (
    <Link href={props.link} className='w-[102px] h-[35px] bg-[#002D31] border-[1px] border-[#007680] rounded-md shadow-[-3.12128px_-3.12128px_5.19175px_-1.73058px_#007580,3.12128px_3.12128px_4.08176px_#011618] text-[#fff] flex justify-center items-center cursor-pointer'>
        {props.text}
    </Link>
  )
}

export default NavElement
