import React from 'react'
import arrow_right from '../../../../../assets/arrow_right.svg'
import arrow_left from '../../../../../assets/arrow_left.svg'
import ViewAllButton from './ViewAllButton'
interface Props{
    handleNext:Function,
    handlePrev:Function,
    text:string,
    icon:string
}

const BarCommon = (props:Props) => {

  return (
    <div className='relative z-30 w-[calc(100%-0.625rem)] mx-[0.3125] h-[3.125rem] rounded-[6.25rem] bg-[#E6EDED] border-[#DCE3E3] border-[1px] flex justify-between items-center px-[1.1875rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] mb-[0.3125rem]'>
        <div className='flex  items-center w-[50%] justify-start'>
            <img src={props.icon} alt="" className='w-[5.375rem] h-[2.8125rem] '/>
            <div className='h-[3.125rem] w-[1px] bg-[#CED7D8] ml-[0.375rem] mr-[0.9375rem]'></div>
            <div className='text-grade text-[1.875rem] max- font-[600]'>{props.text}</div>
           <ViewAllButton/>
        </div>
        <div className='flex w-[50%] justify-end items-center gap-[1.875rem]'>
            <div className='relative w-[2.5rem] h-[2.5rem] rounded-full bg-[#E6EDED] shadow-[-3.22695px_-3.22695px_4.84043px_#F7FFFF,3.22695px_3.22695px_4.84043px_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-2.41304px_-2.41304px_3.21739px_#FFFFFF,inset_2.41304px_2.41304px_3.21739px_#AEBBBD] cursor-pointer' onClick={() => props.handlePrev()}>
                <img src={arrow_right} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
            </div>
            <div className='relative w-[2.5rem] h-[2.5rem] rounded-full bg-[#E6EDED] shadow-[-3.22695px_-3.22695px_4.84043px_#F7FFFF,3.22695px_3.22695px_4.84043px_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-2.41304px_-2.41304px_3.21739px_#FFFFFF,inset_2.41304px_2.41304px_3.21739px_#AEBBBD] cursor-pointer' onClick={() => props.handleNext()}>
                <img src={arrow_left} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
            </div>

        </div>
    </div>
  )
}

export default BarCommon
