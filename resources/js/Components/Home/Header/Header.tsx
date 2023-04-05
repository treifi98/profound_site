import React from 'react'
import header_background from '../../assets/header.svg'
import logo_img from '../../../../assets/logoimg.svg'
import search_logo from '../../../../assets/logoimg.svg'
import Nav from './Nav/Nav'
import Lang from './Lang/Lang'

const Header = () => {
  return (
    <div className='w-[100vw] h-[154px]'>
        <div className={`aspect-[16/1] w-[100vw] bg-[url('../../../../assets/header.svg')] bg-no-repeat bg-cover bg-right`}>
            <div className='w-full flex justify-between items-center h-[calc(100%-10px)] pr-[80px]'>
                <img src={logo_img} alt="" className='max-h-[100%] self-center'/>
                <div className={`w-[58px] h-[58px] rounded-full bg-[url('../../../../assets/sersh_icon.svg')] cursor-pointer`}>

                </div>
                <Nav/>
                <Lang/>
            </div>
        </div>
    </div>
  )
}

export default Header
