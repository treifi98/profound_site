import React from 'react'

import mapIcon from '../../../assets/map_icon.svg'
import Brochure from '../Home/Cards/Common/Brochure'
import BoxMaster from '../Home/Cards/Common/Boxes/New/BoxMaster'
const SecondaryInfo = () => {
  return (
    <div className='flex w-[91.25rem] h-[38.125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.98125rem]'>
        <div className='w-[48.3125rem] h-[34.71875rem] mt-[0.625rem] ml-[2.5625rem]'>
            <div className='text-grade text-[1.875rem] font-[600]'>
                Creek Rise tower 2 west side
            </div>
            <div className='mt-[0.5rem] text-grade text-[1.5rem] font-[600]'>
                High Floor | Stunning Sea View | Investors Deal
            </div>
            <div className='flex w-[15.5525rem]  items-center justify-between'>
                <img src={mapIcon} alt=""  className='w-[1.566875rem] h-[1.4875rem] '/>

                <div className='text-[1.528125rem] text-grade'>

                    Dubai Creek Harbor
                </div>
            </div>

            <div className='w-full flex justify-between'>
                <div className='w-[17.5625rem] h-[2rem] flex justify-between items-center'>
                    <div className='w-[8rem] h-[2rem] border-[#ccc] border-[1rem]'>

                    </div>
                    <div className='w-[8rem] h-[2rem] border-[#ccc] border-[1rem]'>

                    </div>
                </div>
                <div>
                    <Brochure mainWidth='8.5rem' mainHeight='2rem' imgHeight='1.19625rem' imgWidth='1.448125rem' imgMT='0.42875rem' imgWrapperWidth='2.214375rem' restWidth='6.07125rem' textSize='1rem' separatorWidth='0.285625rem'/>
                </div>
            </div>
                <div className='w-[48.41125rem]  h-[21.65625rem] flex flex-wrap gap-x-[1.875rem] gap-y-[2.066875rem] mt-[1.75rem]'>
                    {/* <BoxMaster
                        BoxType='standerd'
                        flipType='Zibra'
                        boxArgs={
                            {
                                mainHeight:'9.794375rem',
                                mainWidth:''
                            }
                        }
                    /> */}
                    <div className='w-[8.1625rem] h-[9.794375rem] bg-[#ccc]'>

                    </div>
                    <div className='w-[8.1625rem] h-[9.794375rem] bg-[#ccc]'>

                    </div>
                    <div className='w-[8.1625rem] h-[9.794375rem] bg-[#ccc]'>

                    </div>
                    <div className='w-[8.1625rem] h-[9.794375rem] bg-[#ccc]'>

                    </div>
                    <div className='w-[8.1625rem] h-[9.794375rem] bg-[#ccc]'>

                    </div>
                    <div className='w-[8.1625rem] h-[9.794375rem] bg-[#ccc]'>

                    </div>
                    <div className='w-[8.1625rem] h-[9.794375rem] bg-[#ccc]'>

                    </div>
                    <div className='w-[8.1625rem] h-[9.794375rem] bg-[#ccc]'>

                    </div>
                    <div className='w-[8.1625rem] h-[9.794375rem] bg-[#ccc]'>

                    </div>
                </div>
        </div>
    </div>
  )
}

export default SecondaryInfo
