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
    <div className='mt-[53px] mb-[30px] mx-[30px] w-[350px] h-[450px] bg-[#E6EDED] border-[1px] border-[#CAD4D5] rounded-[15px] shadow-[-6px_-6px_12px_3px_#FFFFFF,6px_6px_12px_#BABFBF]'>
        <div className='w-[310px] h-[413.22px] mt-[17.78px] ml-[20px] bg-[#E6EDED] norder-[1px] border-[#CAD4D5] rounded-[15px] shadow-[-6px_-6px_12px_3px_#FFFFFF,6px_6px_12px_#BABFBF] flex flex-col'>
            <div className='mx-[20px] w-[calc(100%-80px)] my-[21.22px] h-[104px] flex justify-center items-center'>
                <img src={props.img} alt="" className='max-w[100%] max-h-full'/>
            </div>
            <div className='text-[30px] mx-[20px] text-grade'>
                {props.name}
            </div>
            <div className='ml-[20px] flex flex-col gap-[10px] justify-start text-grade text-[20px] mt-[20px]'>
                <div className='flex gap-[15px]'>
                    <img src={established_icon} alt="" className='w-[26px] h-[28px]'/>
                    <div>
                        {props.established}
                    </div>
                </div>
                <div className='flex gap-[15px]'>
                    <img src={projects_number_icon} alt="" className='w-[24.85px] h-[31.13px]'/>
                    <div>
                        {props.projectNumber}
                    </div>
                </div>
                <div className='flex gap-[15px] '>
                    <img src={priceTag} alt="" className='w-[29.56px] h-[29.5px] '/>
                    <div className='text-[19.3px]'>
                        {props.priceFrom}
                    </div>
                </div>

            </div>
            <div className='mt-[35.37px] ml-[calc(50%-80px)]'>
                <ViewAllButton text={'View Profile'} w='160' h='40' ml='0'/>
            </div>
        </div>
    </div>
  )
}

export default DeveloperCard
