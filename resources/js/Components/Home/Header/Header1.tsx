import React from 'react'
import header_background from '../../assets/header.svg'
import logo_img from '../../../../assets/logoimg.svg'
import search_logo from '../../../../assets/logoimg.svg'
import Nav from './Nav/Nav'
import Lang from './Lang/Lang'
import Search from './Search'
import { Link } from '@inertiajs/react'
import MenueHover from '../MenueHover'

const Header1 = () => {
    return (
        <div className={`w-full h-[6.25rem] fixed z-[9999999999999] font-[nova] bg-[url('../../../../assets/header.svg')] bg-no-repeat bg-cover bg-right-bottom`}>
        {/* <div className={` w-full h-full `}> */}
            <div className='w-[calc(100%-5rem)] flex justify-between items-center h-[calc(100%-0.625rem)] mr-[5rem]'>
                <Link href='/' className='max-h-[100%] self-center'>

                    <img src={logo_img} alt="" className='w-[13.31rem] object-cover object-center'/>
                </Link>
                    <div className='mx-[1.25rem] flex justify-around items-center w-[calc(100%-15.81rem)]'>
                    <Search/>
                    <Nav/>
                </div>
            </div>
        <MenueHover/>
        {/* </div> */}
    </div>
    )
}

export default Header1
