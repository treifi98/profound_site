import React from 'react'
import header_background from '../../assets/header.svg'
import logo_img from '../../../../assets/logoimg.svg'
import search_logo from '../../../../assets/logoimg.svg'
import Nav from './Nav/Nav'
import Lang from './Lang/Lang'
import Search from './Search'
import { Link } from '@inertiajs/react'

const Header = () => {
  return (
    <div className='w-[100vw] h-[100px] relative z-10 font-[nova]'>
        <div className={` w-[100vw] h-full bg-[url('../../../../assets/header.svg')] bg-no-repeat bg-cover bg-right-bottom`}>
            <div className='w-[calc(100%-80px)] flex justify-between items-center h-[calc(100%-10px)] mr-[80px]'>
                <Link href='/' className='max-h-[100%] self-center'>

                    <img src={logo_img} alt="" className='w-[213px] object-cover object-center'/>
                </Link>
                <div className='mx-[20px] flex justify-around items-center w-[calc(100%-253px)]'>
                    <Search/>
                    <Nav/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
