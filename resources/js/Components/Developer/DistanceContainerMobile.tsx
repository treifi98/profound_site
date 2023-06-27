import React from 'react'
import DistanceProgressMobile from './DistanceProgressMobile'

import attraction from '../../../assets/attraction.svg'
interface Props{
    distance:number
    // imgWidth?:
    textSize?:string,
    numberSize?:string
}
export const DistanceContainerMobile = (props:Props) => {
  return (
    <div className='w-[21.4375rem] flex justify-center'>
        <DistanceProgressMobile distance={props.distance} textSize={props.numberSize}/>

        <div className='flex items-center relative w-[10.6875rem] h-[2.72375rem] ml-[0rem]' >
            {/* place holder */}
            <div className='opacity-0 w-[1.0546875rem] h-full'>
            </div>
            {/* place holder end */}
            <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[2.109375rem] h-[2.109375rem] shadow-[-1.95px_-1.95px_3.13px_#FFFFFF,1.95px_1.95px_2.73px_#B6C3C5] flex justify-center'>
                <img src={attraction} alt="" className='object-contain object-center mt-[-0.5rem] '/>
            </div>

            <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[9.4375rem] h-[1.375rem] shadow-[inset_-2.34px_-2.34px_3.74px_#FFFFFF,inset_2.34px_2.34px_3.27px_#B6C3C5]'>
                <div className='flex justify-center items-center w-[8.3828125rem] ml-[1.714rem]'>
                    <div className='text-center text-grade text-[#E6EDED] ' style={{ fontSize:props.textSize?props.textSize:'0.6875rem' }}>
                        Atlantis The Palm
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
