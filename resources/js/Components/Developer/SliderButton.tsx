import React from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'

import arrow from '../../../assets/arrowRightPill.svg'

interface Props{
    options:string[],
    title:string
}
const SliderButton = (props:Props) => {
  return (
    <div className='min-w-[9rem] h-[3.25rem] flex items-center cursor-pointer group transition-all origin-left  relative '>
        <div className='  w-[5.9375rem] h-[2.25rem] flex justify-center items-center rounded-[5.70761875rem_0rem_0rem_5.70761875rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]   float-right'>
            <div className='text-grade text-[1.125rem]'>
                {props.title}
            </div>
        </div>
        <div className='h-[2.25rem]'>
            <InElementSeperator/>
        </div>
        <div className='flex max-w-0 gap-[0.625rem]  items-center overflow-hidden transition-all group-hover:max-w-[100rem] duration-[0.31s]  left-0 float-right h-[3.25rem] '>
            {
                props.options.map((option,index) => {

                    if(index == 0){
                        return(

                            <div className='w-[3.75rem] h-[2.25rem] flex justify-center items-center transition-all border-[#DCE3E3] border-[0.0625rem] rounded-[0.125rem] shadow-[-0.285625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] ml-[0.625rem] hover:shadow-[inset_-0.285625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                                <div className='text-grade text-[1rem]'>
                                    {option}
                                </div>
                            </div>
                        )
                    }
                    else if(index == props.options.length -1){

                        return(

                            <div className='w-[3.75rem] h-[2.25rem] flex justify-center items-center transition-all border-[#DCE3E3] border-[0.0625rem] rounded-[0.125rem] shadow-[-0.285625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] mr-[0.625rem]'>
                                <div className='text-grade text-[1rem]'>
                                    {option}
                                </div>
                            </div>
                        )
                    }
                    return(

                        <div className='w-[3.75rem] h-[2.25rem] flex justify-center items-center transition-all border-[#DCE3E3] border-[0.0625rem] rounded-[0.125rem] shadow-[-0.285625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                            <div className='text-grade text-[1rem]'>
                                {option}
                            </div>
                        </div>
                    )
                }

                )
            }
        </div>
        <div className='h-[2.25rem] w-[3.0625rem] flex justify-center items-center rounded-[0rem_5.70761875rem_5.70761875rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] transition-all'>
            <img src={arrow} alt="" className='group-hover:rotate-[180deg] transition-all'/>
        </div>
    </div>
  )
}

export default SliderButton
