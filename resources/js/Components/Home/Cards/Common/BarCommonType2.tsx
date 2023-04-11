import React from 'react'
import arrow_right from '../../../../../assets/arrow_right.svg'
import arrow_left from '../../../../../assets/arrow_left.svg'
import ViewAllButton from './ViewAllButton'

interface Props{
    handleNext:Function,
    handlePrev:Function,
    text1:string,
    text2:string,
    icon:string
}

const BarCommonType2 = (props:Props) => {

  return (
    <div className='relative z-30 w-[calc(100%-10px)] mx-[5px] h-[50px] rounded-[100px] bg-[#E6EDED] border-[#DCE3E3] border-[1px] flex justify-between items-center px-[19px] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] mb-[5px]'>
        <div className='flex  items-center w-[80%] justify-start gap-[15px]'>
            <img src={props.icon} alt="" className='w-[86px] h-[45px] '/>
            <div className='h-[50px] w-[1px] bg-[#CED7D8] ml-[6px] '></div>
            <div className='text-grade text-[30px] font-[600]'>{props.text1}</div>
            <div className='h-[50px] w-[1px] bg-[#CED7D8] ml-[6px] '></div>
            <div className='text-grade text-[30px] font-[600]'>{props.text2}</div>
            <ViewAllButton/>
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

export default BarCommonType2
