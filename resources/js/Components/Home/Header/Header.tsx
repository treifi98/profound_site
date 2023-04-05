import React from 'react'
import header_background from '../../assets/header.svg'
import logo_img from '../../../../assets/logoimg.svg'
import search_logo from '../../../../assets/logoimg.svg'
import Nav from './Nav/Nav'
import Lang from './Lang/Lang'
import { Link } from '@inertiajs/react'

const Header = () => {
  return (
    <div className='w-[100vw] h-[100px] relative z-10'>
        <div className={` w-[100vw] h-full bg-[url('../../../../assets/header.svg')] bg-no-repeat bg-cover bg-right`}>
            <div className='w-full flex justify-between items-center h-[calc(100%-10px)] pr-[80px]'>
                <Link href='/' className='max-h-[100%] self-center'>

                    <img src={logo_img} alt="" className=''/>
                </Link>
                <div className='mx-[20px] flex justify-around items-center w-full'>
                    <div className={`w-[58px] h-[58px] rounded-full bg-[url('../../../../assets/sersh_icon.svg')] cursor-pointer`}>

                    </div>
                    <Nav/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
