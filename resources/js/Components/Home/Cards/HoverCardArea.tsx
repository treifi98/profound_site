import React from 'react'
import CardImage from './Common/CardImage'
import map_icon from '../../../../assets/map_icon_w.svg'
import price_tag from '../../../../assets/price_tag.svg'
import price_tag_test from '../../../../assets/price _11.svg'
import bed_vector from '../../../../assets/bed_vector.svg'
import bath_vector from '../../../../assets/bath_vector.svg'
import size_vector from '../../../../assets/size_vector.svg'

interface Props{
    img:string
    text:string,
    val:string
}
const HoverCardArea = (props:Props) => {
    return (
        <div className='cursor-pointer  h-[22rem] w-[16.9375rem] border-[#DCE3E3] border-[0.0625rem] rounded-[0.625rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] flex justify-center items-center m-[1rem] z-[99999999] relative'>
            <div className='relative w-[15.0625rem] h-[20.1875rem] rounded-[0.625rem]'>
                <CardImage src={props.img} w='15.0625' h='20.1875' rounded='0.625'/>
                <div className='absolute w-full h-[4.6875rem] bg-[#00000080] bottom-[0rem] rounded-[0.625rem] group-hover:h-full transition-all duration-[0.3s] flex flex-col overflow-hidden pl-[0.3125rem] gap-[0px] hover:shadow-[0px_0.25rem_0.25rem_rgba(0,0,0,0.25)]'>
                    <div className='text-[#fff] text-[1.375rem] font-[600] h-[1.4375rem] group-hover:ml-[2.4rem] transition-all duration-[0.3s] mt-[0.1375rem]'>
                        Dubai Marina
                    </div>
                    <div className='text-[#fff]  flex gap-[0.319375rem] items-center  group-hover:ml-[3.2rem] transition-all duration-[0.3s] text-[1.125rem] font-[500] mt-[0.5rem]'>
                        Price start at 890,000 AED
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HoverCardArea
