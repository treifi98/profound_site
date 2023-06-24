import React from 'react'


import pinIcon from '../../../assets/pin.svg'
import Polygon1 from '../../../assets/Polygon1.svg'

interface Props{
    distance:number,
    textSize?:string
}
const DistanceProgress = (props:Props) => {
    const maxDistance = 20
  return (
    <div className='w-[24.226875rem] flex items-center '>
            <div className='w-[4.105625rem] h-[4.105625rem] rounded-full border-[#DCE3E3] border-[0.0625rem] shadow-[-0.238744375rem_-0.238744375rem_0.38199125rem_#FFFFFF,0.238744375rem_0.238744375rem_0.3342425rem_#B6C3C5] flex justify-center items-center'>
                <img src={pinIcon} alt="" className='w-[1.55375rem] h-[2.6875rem] '/>

            </div>
            <div className='w-[16.6875rem] h-[0.6875rem] bg-[#E6EDED] shadow-[inset_-0.10708875rem_-0.10708875rem_0.17848125rem_#FFFFFF,inset_0.17848125rem_0.17848125rem_0.24987375rem_#B6C3C5] flex justify-start relative'>
                <div className='h-full bg-[#00494F] border-[#19464B] border-[0.0625rem] shadow-[inset_-0.121150625rem_-0.121150625rem_0.201515rem_#007580,inset_0.121150625rem_0.121150625rem_0.15843125rem_#002D31]' style={{ width: (props.distance*100/maxDistance)+'%' }}>

                </div>
                <div className='absolute top-[-3.0625rem] w-[7.5rem] left-[calc(50%-3.75rem)] h-[2.375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[6.25rem] shadow-[inset_-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                    <div className='text-grade ' style={{ fontSize:props.textSize?props.textSize:'1.125rem' }}>

                        {props.distance} Km
                    </div>
                </div>

        </div>
        <img src={Polygon1} className='w-[3.0625rem] h-[4.6875rem] bg-[#E6EDED] recttotri ml-[-0rem] relative z-[2] object-fill object-left'/>


    </div>
  )
}

export default DistanceProgress
