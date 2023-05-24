import React from 'react'
import NewSocial from '../Home/Cards/Common/NewSocial'
import InfoShape from './InfoShape'

import shareIcon from '../../../assets/sharefilled.svg'
import favIcon from '../../../assets/favfilled.svg'
import viewIcon from '../../../assets/viewfilled.svg'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import emarLogo from '../../../assets/emar_logo.png'
import statusIcon from '../../../assets/statusIcon.svg'
import buildingIcon from '../../../assets/bulding.svg'
import mapIcon from '../../../assets/map_icon.svg'
import claender from '../../../assets/calenderIcon.svg'
import elevatorIcon from '../../../assets/elevatorIcon.svg'
import unitIcon from '../../../assets/unitIcon.svg'
import craneIcon from '../../../assets/craneIcon.svg'
import pricetag from '../../../assets/price_tag_og.svg'
import AboutSwiper from './AboutSwiper'
const NoCrooked = () => {
  return (
    <div className='w-[91.25rem] h-[38.125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5] rounded-[0.9375rem] flex'>
        <div className='w-[37rem] h-full'>
            <div className='w-full h-[4rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center rounded-[0.9825rem_0rem_0rem_0rem]'>
                <div className='w-[34.279375rem] h-full items-center flex justify-between'>
                    <div className='text-grade text-[2.25rem] font-[600]'>
                        Dubai Marina
                    </div>
                    <div className='w-[5.654375rem] flex justify-between ml-[1.3125rem]'>
                        <div style={{ width:'2.2025rem',height:'2.2025rem' }}>
                            <NewSocial img={shareIcon} img_h='1.106875' img_w='1.106875'/>
                        </div>
                        <div style={{ width:'2.2025rem',height:'2.2025rem' }}>
                            <NewSocial img={favIcon} img_h='1.08875' img_w='1.145625'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[24.375rem] w-[28.125rem] mx-auto mt-[2.25rem] flex flex-col gap-[2.1875rem]'>
                <div className='w-[28.125rem] h-[3.125rem] rounded-[8.35625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5] flex justify-center items-center cursor-pointer hover:shadow-[inset_-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,inset_0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5]'>
                    <div className='text-grade text-[1.375rem]'>
                        Projects in Dubai Marina
                    </div>
                </div>
                <div className='w-[28.125rem] h-[3.125rem] rounded-[8.35625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5] flex justify-center items-center cursor-pointer hover:shadow-[inset_-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,inset_0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5]'>
                    <div className='text-grade text-[1.375rem]'>
                        Projects in Dubai Marina
                    </div>
                </div>
                <div className='w-[28.125rem] h-[3.125rem] rounded-[8.35625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5] flex justify-center items-center cursor-pointer hover:shadow-[inset_-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,inset_0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5]'>
                    <div className='text-grade text-[1.375rem]'>
                        Projects in Dubai Marina
                    </div>
                </div>
                <div className='w-[28.125rem] h-[3.125rem] rounded-[8.35625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5] flex justify-center items-center cursor-pointer hover:shadow-[inset_-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,inset_0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5]'>
                    <div className='text-grade text-[1.375rem]'>
                        Projects in Dubai Marina
                    </div>
                </div>
                <div className='w-[28.125rem] h-[3.125rem] rounded-[8.35625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5] flex justify-center items-center cursor-pointer hover:shadow-[inset_-0.381459375rem_-0.381459375rem_0.610335rem_#FFFFFF,inset_0.381459375rem_0.381459375rem_0.534043125rem_#B6C3C5]'>
                    <div className='text-grade text-[1.375rem]'>
                        Projects in Dubai Marina
                    </div>
                </div>

            </div>
            <div className='mt-[2.1875rem] w-[18.75rem] h-[3.125rem] rounded-[6.25rem] flex justify-center items-center bg-custom-gradient shadow-[0rem_0.309226875em_0.309226875em_rgba(0,0,0,0.25)] mx-auto cursor-pointer'>
                <div className='text-[#E6EDED] text-[1.5rem]'>
                    Find Property
                </div>
            </div>
        </div>
            <div className='h-full ml-[0rem]'>
                <InElementSeperator width='0.4375rem'/>
            </div>
            <div className='w-[51.75rem] h-[35.875rem] mx-auto mt-[1.125rem]'>
                <AboutSwiper/>
            </div>
    </div>
  )
}

export default NoCrooked
