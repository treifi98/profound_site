import React from 'react'


import mapIcon from '../../../assets/map_icon.svg'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import { DistanceContainer } from './DistanceContainer'
const Attraction = () => {
  return (
    <div className='w-[91.25rem] h-[38.125rem] border-[#CAD4D5] border-[0.0625rem] rounded-[0.98125rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF]'>
        <div className='w-full h-[3.75rem] rounded-[0.9375rem_0.9375rem_0rem_0rem] border-[#DCE3E3] border-[0.0625rem] flex items-center shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
            <img src={mapIcon} alt=""  className='w-[2.4375rem] h-[2.4375rem] ml-[1rem]'/>
            <div className='h-full ml-[1.125rem]'>
                <InElementSeperator width='0.4444444444444444rem'/>
            </div>
            <div className='text-grade text-[1.625rem] font-[600] ml-[4rem]'>
                Creek Rise tower 2 west side Location
            </div>
        </div>
        <div className='w-full h-full flex'>
            <div className='h-[30.95375rem] w-full mt-[2.5625rem]'>
                <div className='ml-[0.5rem]'>

                    <DistanceContainer distance={10}/>
                </div>
                <div className='w-full h-[0.0625rem] bg-[#CAD4D5] mt-[1.386875rem]'>

                </div>
                <div className='mt-[1.863125rem] ml-[0.5rem]'>

                    <DistanceContainer distance={20}/>
                </div>
                <div className='w-full h-[0.0625rem] bg-[#CAD4D5] mt-[1.386875rem]'>

                </div>
                <div className='mt-[1.863125rem] ml-[0.5rem]'>

                    <DistanceContainer distance={3}/>
                </div>
                <div className='w-full h-[0.0625rem] bg-[#CAD4D5] mt-[1.386875rem]'>

                </div>
                <div className='mt-[1.863125rem] ml-[0.5rem]'>

                    <DistanceContainer distance={3.57}/>
                </div>
                {/* <div className='w-full h-[0.0625rem] bg-[#CAD4D5] mt-[1.386875rem]'>

                </div> */}
            </div>
            <div className='h-[34.275rem]'>
                <InElementSeperator />
            </div>
            <div className='h-[30.95375rem] w-[44.75rem] ml-[0rem] mt-[2.5625rem]'>
                <div className=' ml-[0.5rem]'>

                    <DistanceContainer distance={30}/>
                </div>
                <div className='w-full h-[0.0625rem] bg-[#CAD4D5] mt-[1.386875rem]'>

                </div>
                <div className='mt-[1.863125rem] ml-[0.5rem]'>

                    <DistanceContainer distance={30}/>
                </div>
                <div className='w-full h-[0.0625rem] bg-[#CAD4D5] mt-[1.386875rem]'>

                </div>
                <div className='mt-[1.863125rem] ml-[0.5rem]'>

                    <DistanceContainer distance={30}/>
                </div>
                <div className='w-full h-[0.0625rem] bg-[#CAD4D5] mt-[1.386875rem]'>

                </div>
                <div className='mt-[1.863125rem] ml-[0.5rem]'>

                    <DistanceContainer distance={30}/>
                </div>
                {/* <div className='w-full h-[0.0625rem] bg-[#CAD4D5] mt-[1.386875rem]'>

                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Attraction
