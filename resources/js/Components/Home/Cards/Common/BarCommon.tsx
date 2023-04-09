import React from 'react'
import view_all_icon from '../../../../../assets/view_all_icon.svg'
import arrow_right from '../../../../../assets/arrow_right.svg'
import arrow_left from '../../../../../assets/arrow_left.svg'

interface Props{
    handleNext:Function,
    handlePrev:Function,
    text:string,
    icon:string
}

const BarCommon = (props:Props) => {

  return (
    <div className='relative z-30 w-[calc(100%-10px)] mx-[5px] h-[50px] rounded-[100px] bg-[#E6EDED] border-[#DCE3E3] border-[1px] flex justify-between items-center px-[19px] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] mb-[5px]'>
        <div className='flex  items-center w-[50%] justify-start'>
            <img src={props.icon} alt="" className='w-[86px] h-[45px] '/>
            <div className='h-[50px] w-[1px] bg-[#CED7D8] ml-[6px] mr-[15px]'></div>
            <div className='text-grade text-[30px] font-[600]'>{props.text}</div>
            <a href="#" className=' ml-[35px] hover:shadow-[inset_-3.26471px_-3.26471px_4.35294px_#FFFFFF,inset_3.26471px_3.26471px_4.35294px_#B6C3C5] flex justify-center items-center gap-[12px] w-[120px] h-[35px] border-[#DCE3E3] border-[1px] rounded-[40.26px] shadow-[-3.26471px_-3.26471px_4.35294px_#FFFFFF,3.26471px_3.26471px_4.35294px_#B6C3C5] cursor-pointer'>
                <div className='text-grade '>
                    View All
                </div>
                <img src={view_all_icon} alt="" className='w-[9.41px] h-[12.48px]' />
            </a>
        </div>
        <div className='flex w-[50%] justify-end items-center gap-[30px]'>
            <div className='relative w-[40px] h-[40px] rounded-full bg-[#E6EDED] shadow-[-3.22695px_-3.22695px_4.84043px_#F7FFFF,3.22695px_3.22695px_4.84043px_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-2.41304px_-2.41304px_3.21739px_#FFFFFF,inset_2.41304px_2.41304px_3.21739px_#AEBBBD] cursor-pointer' onClick={() => props.handlePrev()}>
                <img src={arrow_right} alt="" />
            </div>
            <div className='relative w-[40px] h-[40px] rounded-full bg-[#E6EDED] shadow-[-3.22695px_-3.22695px_4.84043px_#F7FFFF,3.22695px_3.22695px_4.84043px_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-2.41304px_-2.41304px_3.21739px_#FFFFFF,inset_2.41304px_2.41304px_3.21739px_#AEBBBD] cursor-pointer' onClick={() => props.handleNext()}>
                <img src={arrow_left} alt="" />
            </div>

        </div>
    </div>
  )
}

export default BarCommon
