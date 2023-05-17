import React from 'react'
import arrow_right from '../../../../../assets/arrow_right.svg'
import arrow_left from '../../../../../assets/arrow_left.svg'
import ViewAllButton from './ViewAllButton'
import NewTag from './NewTag'

import icon from '../../../../../assets/map_image.svg'
import view_all_icon from '../../../../../assets/view_all_icon.svg'

interface Props{
    handleNext:Function,
    handlePrev:Function,
    text:string,
    icon:string
}

const BarArea = (props:Props) => {

  return (
    <div className='relative z-30 w-[94.9375rem] mx-auto h-[3.25rem] rounded-[6.25rem] bg-[#E6EDED] border-[#DCE3E3] border-[1px] flex justify-between items-center shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] mb-[0.3125rem]'>
        <div className='flex  items-center w-[100%] justify-start'>
            <img src={icon} alt="" className='w-[5.5625rem] h-[3.25rem] '/>
            {/* <div className='h-[3.125rem] w-[1px] bg-[#CED7D8] ml-[0.375rem] mr-[0.9375rem]'></div> */}
            <div className='text-grade text-[1.875rem] font-[600] ml-[0.9375rem]'>Dubai Areas</div>
            <div className='ml-[9.2925rem]  h-[2.1875rem] ' style={{ width:'12.77rem' }}>
                <NewTag text='Appartments for sale'  textSize='1.125' textWeight='400'/>
            </div>
            <div className='ml-[3.125rem]  h-[2.1875rem] ' style={{ width:'12.77rem' }}>
                <NewTag text='Town houses for sale'  textSize='1.125' textWeight='400'/>
            </div>
            <div className='ml-[3.125rem]  h-[2.1875rem] ' style={{ width:'12.77rem' }}>
                <NewTag text='Villas for sale'  textSize='1.125' textWeight='400'/>
            </div>
            <div className='ml-[15.459375rem]'>

                <a href="#" className={` hover:shadow-[inset_-3.26471px_-3.26471px_4.35294px_#FFFFFF,inset_3.26471px_3.26471px_4.35294px_#B6C3C5] flex justify-center items-center gap-[0.75rem] w-[7.5rem] h-[2.1875rem] border-[#DCE3E3] border-[1px] rounded-[2.51625rem] shadow-[-3.26471px_-3.26471px_4.35294px_#FFFFFF,3.26471px_3.26471px_4.35294px_#B6C3C5] cursor-pointer`}>
                    <div className='text-grade '>
                        View All
                    </div>
                    <img src={view_all_icon} alt="" className='w-[0.588125rem] h-[0.78rem]' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default BarArea
