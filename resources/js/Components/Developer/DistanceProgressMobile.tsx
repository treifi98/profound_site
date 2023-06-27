import React from 'react'


import pinIcon from '../../../assets/pin.svg'
import Polygon1 from '../../../assets/Polygon1.svg'

interface Props{
    distance:number,
    textSize?:string
}
const DistanceProgressMobile = (props:Props) => {
    const maxDistance = 20
  return (
    <div className='w-[10.89075rem] flex items-center '>
            <div className='w-[2.09944rem] h-[2.09944rem] rounded-full border-[#DCE3E3] border-[0.0625rem] shadow-[1.9534363746643066px_1.9534363746643066px_2.7348105907440186px_0px_#B6C3C5,-1.9534363746643066px_-1.9534363746643066px_3.125498056411743px_0px_#FFF] flex justify-center items-center'>
                <img src={pinIcon} alt="" className='w-[0.79456rem] h-[1.37438rem] '/>

            </div>
            <div className='w-[7.030625rem] h-[0.344375rem] bg-[#E6EDED] shadow-[inset_-0.10708875rem_-0.10708875rem_0.17848125rem_#FFFFFF,inset_0.17848125rem_0.17848125rem_0.24987375rem_#B6C3C5] flex justify-start relative'>
                <div className='h-full bg-[#00494F] border-[#19464B] border-[0.0625rem] shadow-[inset_-0.121150625rem_-0.121150625rem_0.201515rem_#007580,inset_0.121150625rem_0.121150625rem_0.15843125rem_#002D31]' style={{ width: (props.distance*100/maxDistance)+'%' }}>

                </div>
                <div className='absolute top-[-1.87rem] w-[3.83538rem] left-[calc(50%-1.91769rem)] h-[1.25rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[6.25rem] shadow-[inset_-2.34px_-2.34px_3.74px_#FFFFFF,inset_2.34px_2.34px_3.27px_#B6C3C5] flex justify-center items-center'>
                    <div className='text-grade ' style={{ fontSize:props.textSize?props.textSize:'1.125rem' }}>

                        {props.distance} Km
                    </div>
                </div>

        </div>
        <img src={Polygon1} className='w-[1.58538rem] h-[1.99894rem] bg-[#E6EDED] recttotri ml-[-0rem] relative z-[2] object-fill object-left'/>


    </div>
  )
}

export default DistanceProgressMobile
