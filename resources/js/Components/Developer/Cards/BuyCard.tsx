import NewCardImage from '@/Components/Home/Cards/Common/NewCardImage'
import React from 'react'
import NewSocial from '@/Components/Home/Cards/Common/NewSocial'


import dubai from '../../../../assets/dubai.png'
import shareIcon from '../../../../assets/sharefilled.svg'
import favIcon from '../../../../assets/favfilled.svg'
import viewIcon from '../../../../assets/view_icon.svg'
import Brochure from '@/Components/Home/Cards/Common/Brochure'
import NewTag from '@/Components/Home/Cards/Common/NewTag'
import map from '../../../../assets/map_icon.svg'
import priceTag from '../../../../assets/price_tag_icon.svg'

import BoxMaster from '@/Components/Home/Cards/Common/Boxes/New/BoxMaster'

const BuyCard = () => {
  return (
    <div className='w-[44.625rem] h-[41.5625rem] border-[#CAD4D5] border-[0.0625rem] rounded-[0.89375rem] shadow-[-0.356805625rem_-0.356805625rem_0.7136125rem_0.178403125rem_#FFFFFF,0.356805625rem_0.356805625rem_0.7136125rem_#BABFBF] flex justify-center items-center'>
        <div className='w-[42.5625rem] h-[39.6875rem]'>
            <div className='w-full h-[22.125rem] '>
                <NewCardImage src={dubai} rounded='0.639375'/>
            </div>

            <div className='w-full h-[1.625rem] flex items-center justify-between mt-[0.875rem]'>
                <div className='w-[5.856875rem] h-[1.474375rem] flex justify-between items-center '>
                    <div style={{ width:'1.474375rem',height:'1.474375rem' }}>
                        <NewSocial img={shareIcon} img_h='0.740625rem' img_w='0.740625rem'/>
                    </div>
                    <div style={{ width:'1.474375rem',height:'1.474375rem' }}>
                        <NewSocial img={favIcon} img_h='0.73rem' img_w='0.766875rem'/>
                    </div>
                    <div style={{ width:'1.474375rem',height:'1.474375rem' }}>
                        <NewSocial img={viewIcon} img_w='0.925625rem' img_h='0.648125rem'/>
                    </div>
                </div>

                <div className='w-[31.5625rem] h-full flex justify-between items-center'>
                    <div className='' style={{ width:'5.844375rem', height:'1.474375rem' }}>
                        <Brochure imgHeight='0.881875rem' imgWidth='1.0675rem' imgMT='0.315625rem' imgWrapperWidth='1.631875rem' mainHeight='1.5rem' mainWidth='5.875rem' restWidth='4.0625rem'/>
                    </div>

                    <div className='w-[24.5625rem] h-full flex items-center justify-between '>
                        <div style={{ width:'7.5625rem',height:'1.625rem' }}>
                            <NewTag text='Apartment' textSize='0.8125rem' textWeight='600'/>
                        </div>
                        <div style={{ width:'7.5625rem',height:'1.625rem' }}>
                            <NewTag text='Apartment' textSize='0.8125rem' textWeight='600'/>
                        </div>
                        <div style={{ width:'7.5625rem',height:'1.625rem' }}>
                            <NewTag text='Apartment' textSize='0.8125rem' textWeight='600'/>
                        </div>
                    </div>
                </div>
            </div>
                <div className='w-full mt-[1.25rem] h-[13.9375rem] flex gap-[1.0625rem]'>
                    <div className='w-[16.875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0.30125rem] shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] flex flex-col justify-between'>
                        <div className='w-[15.1875rem] mx-auto text-[#002D31] text-[1.36875rem] font-[600] mt-[1.0625rem]'>
                            Creek Rise tower 2 west side Creek Rise tower
                        </div>
                        <div className=' w-[12.625rem] leading-[1.25rem] text-grade ml-[0.8125rem]'>
                            New project coming soon Water front apartment's with spacious lay out
                        </div>
                        <div className='flex mb-[0.875rem] w-[10.1775rem] h-[1.125rem] gap-[0.30625rem] items-center ml-[0.8125rem]'>
                            <img src={map} alt="" className='w-[0.92125rem] h-full'/>
                            <div className='text-grade text-[0.9375rem]'>
                                Dubai Creek Harbor
                            </div>
                        </div>
                    </div>
                    <div className='w-[24.625rem] h-full flex gap-[1.125rem] flex-wrap'>

                    <BoxMaster
                        BoxType='standerd'
                        // flipType='zibra'
                        boxArgs={
                            {
                                mainWidth:'5.3125rem',
                                mainHeight:'6.375rem',
                                img:priceTag,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                imgWidth:'1.953125rem',
                                imgHeight:'1.953125rem',
                                imgMT:'0.375rem',
                                imgML:'1.6875rem',
                                textWidth:'4.4375rem',
                                textSize:'0.75rem',
                                textMT:'0.253125rem',
                                textMB:'0.233125rem',
                                lineHeight:'0.91375rem',
                                lowerSectionHeight:'1.6875rem'


                            }
                        }
                        // flipArgs={
                        //     {

                        //         mainHeight:'6.320625rem',
                        //         mainWidth:'7.585rem',
                        //     }
                        // }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        // flipType='zibra'
                        boxArgs={
                            {
                                mainWidth:'5.3125rem',
                                mainHeight:'6.375rem',
                                img:priceTag,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                imgWidth:'1.953125rem',
                                imgHeight:'1.953125rem',
                                imgMT:'0.375rem',
                                imgML:'1.6875rem',
                                textWidth:'4.4375rem',
                                textSize:'0.75rem',
                                textMT:'0.253125rem',
                                textMB:'0.233125rem',
                                lineHeight:'0.91375rem',
                                lowerSectionHeight:'1.6875rem'


                            }
                        }
                        // flipArgs={
                        //     {

                        //         mainHeight:'6.320625rem',
                        //         mainWidth:'7.585rem',
                        //     }
                        // }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        // flipType='zibra'
                        boxArgs={
                            {
                                mainWidth:'5.3125rem',
                                mainHeight:'6.375rem',
                                img:priceTag,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                imgWidth:'1.953125rem',
                                imgHeight:'1.953125rem',
                                imgMT:'0.375rem',
                                imgML:'1.6875rem',
                                textWidth:'4.4375rem',
                                textSize:'0.75rem',
                                textMT:'0.253125rem',
                                textMB:'0.233125rem',
                                lineHeight:'0.91375rem',
                                lowerSectionHeight:'1.6875rem'


                            }
                        }
                        // flipArgs={
                        //     {

                        //         mainHeight:'6.320625rem',
                        //         mainWidth:'7.585rem',
                        //     }
                        // }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        // flipType='zibra'
                        boxArgs={
                            {
                                mainWidth:'5.3125rem',
                                mainHeight:'6.375rem',
                                img:priceTag,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                imgWidth:'1.953125rem',
                                imgHeight:'1.953125rem',
                                imgMT:'0.375rem',
                                imgML:'1.6875rem',
                                textWidth:'4.4375rem',
                                textSize:'0.75rem',
                                textMT:'0.253125rem',
                                textMB:'0.233125rem',
                                lineHeight:'0.91375rem',
                                lowerSectionHeight:'1.6875rem'


                            }
                        }
                        // flipArgs={
                        //     {

                        //         mainHeight:'6.320625rem',
                        //         mainWidth:'7.585rem',
                        //     }
                        // }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        // flipType='zibra'
                        boxArgs={
                            {
                                mainWidth:'5.3125rem',
                                mainHeight:'6.375rem',
                                img:priceTag,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                imgWidth:'1.953125rem',
                                imgHeight:'1.953125rem',
                                imgMT:'0.375rem',
                                imgML:'1.6875rem',
                                textWidth:'4.4375rem',
                                textSize:'0.75rem',
                                textMT:'0.253125rem',
                                textMB:'0.233125rem',
                                lineHeight:'0.91375rem',
                                lowerSectionHeight:'1.6875rem'


                            }
                        }
                        // flipArgs={
                        //     {

                        //         mainHeight:'6.320625rem',
                        //         mainWidth:'7.585rem',
                        //     }
                        // }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        // flipType='zibra'
                        boxArgs={
                            {
                                mainWidth:'5.3125rem',
                                mainHeight:'6.375rem',
                                img:priceTag,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                imgWidth:'1.953125rem',
                                imgHeight:'1.953125rem',
                                imgMT:'0.375rem',
                                imgML:'1.6875rem',
                                textWidth:'4.4375rem',
                                textSize:'0.75rem',
                                textMT:'0.253125rem',
                                textMB:'0.233125rem',
                                lineHeight:'0.91375rem',
                                lowerSectionHeight:'1.6875rem'


                            }
                        }
                        // flipArgs={
                        //     {

                        //         mainHeight:'6.320625rem',
                        //         mainWidth:'7.585rem',
                        //     }
                        // }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        // flipType='zibra'
                        boxArgs={
                            {
                                mainWidth:'5.3125rem',
                                mainHeight:'6.375rem',
                                img:priceTag,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                imgWidth:'1.953125rem',
                                imgHeight:'1.953125rem',
                                imgMT:'0.375rem',
                                imgML:'1.6875rem',
                                textWidth:'4.4375rem',
                                textSize:'0.75rem',
                                textMT:'0.253125rem',
                                textMB:'0.233125rem',
                                lineHeight:'0.91375rem',
                                lowerSectionHeight:'1.6875rem'


                            }
                        }
                        // flipArgs={
                        //     {

                        //         mainHeight:'6.320625rem',
                        //         mainWidth:'7.585rem',
                        //     }
                        // }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        // flipType='zibra'
                        boxArgs={
                            {
                                mainWidth:'5.3125rem',
                                mainHeight:'6.375rem',
                                img:priceTag,
                                text:'Price starting From AED',
                                lowerText:'1,125,0000',
                                imgWidth:'1.953125rem',
                                imgHeight:'1.953125rem',
                                imgMT:'0.375rem',
                                imgML:'1.6875rem',
                                textWidth:'4.4375rem',
                                textSize:'0.75rem',
                                textMT:'0.253125rem',
                                textMB:'0.233125rem',
                                lineHeight:'0.91375rem',
                                lowerSectionHeight:'1.6875rem'


                            }
                        }
                        // flipArgs={
                        //     {

                        //         mainHeight:'6.320625rem',
                        //         mainWidth:'7.585rem',
                        //     }
                        // }
                    />

                    </div>
                </div>
        </div>

    </div>
  )
}

export default BuyCard
