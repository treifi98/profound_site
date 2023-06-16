import React from 'react'
import arrow_right from '../../../../../assets/arrow_right.svg'
import arrow_left from '../../../../../assets/arrow_left.svg'
import ViewAllButton from './ViewAllButton'
import InElementSeperator from './InElementSeperator'

interface Props{
    handleNext:Function,
    handlePrev:Function,
    text1:string,
    text2:string,
    icon:string,
    buttonML?:string
}

const BarCommonType2 = (props:Props) => {

  return (
    <div className='relative z-30 w-[calc(100%-0.625rem)] mx-[0.3125rem] h-[3.125rem] rounded-[6.25rem] bg-[#E6EDED] border-[#DCE3E3] border-[1px] flex justify-between items-center pr-[1.1875rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] mb-[0.3125rem]'>
        <div className='flex  items-center w-[80%] justify-start gap-[0.7375rem]'>
            <img src={props.icon} alt="" className='w-[5.375rem] h-[2.8125rem] ml-[0.6rem]'/>
            {/* <div className='h-[3.125rem] w-[0.0625rem] bg-[#CED7D8] ml-[0.375rem] '></div> */}
            <div className='ml-[-0.2rem]'>

                <InElementSeperator height='3.0475rem' width='0.5rem'/>
            </div>
            <div className='text-grade text-[1.875rem] font-[600]'>{props.text1}</div>
            {/* <div className='h-[3.125rem] w-[0.0625rem] bg-[#CED7D8] ml-[0.375rem] '></div> */}
            <InElementSeperator height='3.0475rem' width='0.5rem'/>
            <div className='text-grade text-[1.875rem] font-[600]'>{props.text2}</div>
            <div className='ml-[2.1875rem]'>

                <ViewAllButton ml={props.buttonML}/>
            </div>
        </div>
        <div className='flex w-[50%] justify-end items-center gap-[1.875rem]'>
            <div className='relative w-[2.5rem] h-[2.5rem] rounded-full bg-[#E6EDED] shadow-[-3.22695px_-3.22695px_4.84043px_#F7FFFF,3.22695px_3.22695px_4.84043px_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-2.41304px_-2.41304px_3.21739px_#FFFFFF,inset_2.41304px_2.41304px_3.21739px_#AEBBBD] cursor-pointer' onClick={() => props.handlePrev()}>
                <img src={arrow_right} alt="" className='w-[1.15625rem] h-[1.15625rem]'/>
            </div>
            <div className='relative w-[2.5rem] h-[2.5rem] rounded-full bg-[#E6EDED] shadow-[-3.22695px_-3.22695px_4.84043px_#F7FFFF,3.22695px_3.22695px_4.84043px_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-2.41304px_-2.41304px_3.21739px_#FFFFFF,inset_2.41304px_2.41304px_3.21739px_#AEBBBD] cursor-pointer' onClick={() => props.handleNext()}>
                <img src={arrow_left} alt=""  className='w-[1.15625rem] h-[1.15625rem]'/>
            </div>

        </div>
    </div>
  )
}

export default BarCommonType2
