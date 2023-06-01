import NewCardImage from '@/Components/Home/Cards/Common/NewCardImage'
import React from 'react'
import NewSocial from '@/Components/Home/Cards/Common/NewSocial'

import dubai from '../../../../assets/dubai.png'
import shareIcon from '../../../../assets/sharefilled.svg'
import favIcon from '../../../../assets/favfilled.svg'
import priceTag from '../../../../assets/price_tag_og.svg'
import viewIcon from '../../../../assets/view_icon.svg'
import InElementSeperator from '@/Components/Home/Cards/Common/InElementSeperator'
import TagGreen from '@/Components/Home/Cards/Common/tagGreen'
const AreaCard = () => {
  return (
    <div className='h-[40.5rem] w-[43.4375rem] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] area-card '>
        <div className='w-[40.9375rem] mx-auto '>
            <div className='w-[40.9375rem] h-[26.25rem] mx-auto rounded-[0.9375rem] mt-[1.25rem]'>
                <NewCardImage src={dubai} rounded='0.9375' />
            </div>
            <div className='w-full h-[13rem] flex items-center '>

                <div className='h-min flex flex-col justify-center gap-[1.4375rem] w-full'>

                    <div className='flex justify-between items-center h-[2.5rem]'>
                        <div className='text-grade text-[2.25rem] font-[600] '>
                            Dubai Marina
                        </div>
                        <div className='w-[7.20125rem] h-[1.8125rem] flex items-center justify-between'>
                            <div style={{ width:'1.8125rem',height:'1.8125rem' }}>
                                <NewSocial img={shareIcon} img_h='0.910625rem' img_w='0.910625rem'/>
                            </div>
                            <div style={{ width:'1.8125rem',height:'1.8125rem' }}>
                                <NewSocial img={favIcon} img_h='0.895625rem' img_w='0.943125rem'/>
                            </div>
                            <div style={{ width:'1.8125rem',height:'1.8125rem' }}>
                                <NewSocial img={viewIcon} img_h='0.796875rem' img_w='1.138125rem'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[2.5rem] rounded-[4.2375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.193236875rem_-0.193236875rem_0.30917875rem_#FFFFFF,0.193236875rem_0.193236875rem_0.270531875rem_#B6C3C5] flex items-center'>
                        <img src={priceTag} alt="" className='w-[2.03125erm] h-[2.03125rem] ml-[1.25rem]'/>
                        <div className='h-full ml-[0.78rem]'>
                            <InElementSeperator width='0.4375rem '/>
                        </div>
                        <div className='text-grade text-[1.25rem] font-[600] ml-[1.1875rem]'>
                            Starting Price from AED
                        </div>
                        <div className='w-[10.375rem] h-full rounded-[5.14375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,inset_0.3125rem_0.3125rem_0.5rem_#B6C3C5] ml-auto flex justify-center items-center'>
                            <div className='text-grade text-[1.25rem] font-[600]'>
                                1,290,000
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[2.5rem] flex items-center justify-between'>
                        <div className='' style={{ width:'12.1875rem', height:'2.5rem' }}>
                            <TagGreen text='Buy property '/>
                        </div>
                        <div className='' style={{ width:'12.1875rem', height:'2.5rem' }}>
                            <TagGreen text='Rent property '/>
                        </div>
                        <div className='' style={{ width:'12.1875rem', height:'2.5rem' }}>
                            <TagGreen text='Off Plan Project'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AreaCard
