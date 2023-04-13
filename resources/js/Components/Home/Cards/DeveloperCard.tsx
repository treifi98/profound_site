import React from 'react'
import ViewAllButton from './Common/ViewAllButton'

interface Props{
    img:string,
    name:string,
    established:string,
    projectNumber:string,
    priceFrom:string,
    id:string
}
import established_icon from '../../../../assets/established_icon.svg'
import projects_number_icon from '../../../../assets/projects_number_icon.svg'
import priceTag from '../../../../assets/price_tag_icon.svg'

const DeveloperCard = (props:Props) => {
  return (
    <div className='mt-[3.3125rem] mb-[1.875rem] mx-[1.875rem] w-[21.875rem] h-[28.125rem] bg-[#E6EDED] border-[1px] border-[#CAD4D5] rounded-[0.9375rem] shadow-[-6px_-6px_12px_3px_#FFFFFF,6px_6px_12px_#BABFBF]'>
        <div className='w-[19.375rem] h-[25.82625rem] mt-[1.11125rem] ml-[1.25rem] bg-[#E6EDED] border-[1px] border-[#CAD4D5] rounded-[0.9375rem] shadow-[-6px_-6px_12px_3px_#FFFFFF,6px_6px_12px_#BABFBF] flex flex-col'>
            <div className='mx-[1.25rem] w-[calc(100%-5rem)] my-[1.32625rem] h-[6.5rem] flex justify-center items-center'>
                <img src={props.img} alt="" className='max-w[100%] max-h-full'/>
            </div>
            <div className='text-[1.875rem] mx-[1.25rem] text-grade'>
                {props.name}
            </div>
            <div className='ml-[1.25rem] flex flex-col gap-[0.625rem] justify-start text-grade text-[1.25rem] mt-[1.25rem]'>
                <div className='flex gap-[0.9375rem]'>
                    <img src={established_icon} alt="" className='w-[1.625rem] h-[1.75rem]'/>
                    <div>
                        {props.established}
                    </div>
                </div>
                <div className='flex gap-[0.9375rem]'>
                    <img src={projects_number_icon} alt="" className='w-[1.553125rem] h-[1.945625rem]'/>
                    <div>
                        {props.projectNumber}
                    </div>
                </div>
                <div className='flex gap-[0.9375rem] '>
                    <img src={priceTag} alt="" className='w-[1.8475rem] h-[1.84375rem] '/>
                    <div className='text-[1.20625rem]'>
                        {props.priceFrom}
                    </div>
                </div>

            </div>
            <div className='mt-[2.210625rem] ml-[calc(50%-5rem)]'>
                <ViewAllButton text={'View Profile'} w='10' h='2.5' ml='0'/>
            </div>
        </div>
    </div>
  )
}

export default DeveloperCard
