import React from 'react'
import NewTag from '../Common/NewTag'

import NewCardImage from '../Common/NewCardImage'
import mapIcon from '../../../../../assets/map_icon.svg'
import Price from '../Common/Boxes/OffPlan/Price'
interface Props{
    img:string
}
const CircleCard = (props:Props) => {
    return (
        <div className='w-[39.25rem] h-[39.25rem] bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] rounded-[47.302125rem_47.302125rem_0.46285375rem_47.302125rem] shadow-[-0.258011875rem_-0.258011875rem_0.51602375rem_0.129005625rem_#FFFFFF,0.258011875rem_0.258011875rem_0.51602375rem_#BABFBF] flex justify-center items-center relative'>
            <div className='w-[37.1875rem] h-[37.4375rem]'>

                <NewCardImage src={props.img} rounded='100'/>
            </div>
            <div className='w-[20.375rem] h-[19.5rem] bg-[#E6EDED] absolute bottom-[0.875rem] right-[1rem] z-[9999] rounded-[0.9375rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.4375rem_-0.4375rem_0.625rem_#FFFFFF,inset_0.4375rem_0.4375rem_0.4375rem_#B6C3C5] flex flex-col pl-[0.875rem]'>
                <div className='flex flex-col mt-[1.25rem]'>
                    <div className='text-grade text-[1.110625rem] font-[600]'>
                        Creek Rise tower 2 west side
                    </div>
                    <div className='text-grade text-[1.018125rem] font-[400]'>
                        New project coming soon
                    </div>
                    <div className='flex gap-[0.226875rem] items-center'>
                        <img src={mapIcon} alt="" className='object-contain w-[0.6625rem] h-[0.6625rem]'/>
                        <div className='text-grade text-[0.694375rem] '>
                            Dubai Creek Harbor
                        </div>
                    </div>
                </div>
                <div className='flex mt-[0.879375rem] gap-[0.971875rem]'>
                    <div className='w-[5.600625rem] h-[1.203125rem] '>
                        <NewTag text='Appartment' textSize='0.601875' textWeight='600'/>
                    </div>
                    <div className='w-[5.600625rem] h-[1.203125rem] '>
                        <NewTag text='Appartment' textSize='0.601875' textWeight='600'/>
                    </div>
                    <div className='w-[5.600625rem] h-[1.203125rem] '>
                        <NewTag text='Appartment' textSize='0.601875' textWeight='600'/>
                    </div>
                </div>
                <div className='flex w-[20.791875rem] flex-wrap h-[5.13625rem] m-0'>
                    <Price scale='0.6'/>
                    <Price scale='0.6'/>
                    <Price scale='0.6'/>
                    <Price scale='0.6'/>
                </div>
                <div className='flex w-[19.791875rem] flex-wrap h-[10.13625rem] mt-[-1rem] gap-[1.018125rem]'>
                    <Price scale='0.74'/>
                    <Price scale='0.74'/>
                    <Price scale='0.74'/>
                    <Price scale='0.74'/>
                </div>
            </div>
            {/* <img src={props.img} alt="" /> */}
        </div>
    )
}

export default CircleCard
