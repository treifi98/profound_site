import React from 'react'

interface Props{
    text:string,
    stars:number,
    title:string
}
import starIcon from '../../../../assets/star.svg'
const ReviewCard = (props:Props) => {
    const stars = new Array(props.stars).fill(0)
  return (
    <div className='w-[30.3125rem] h-[29.75rem] bg-[#E6EDED] border-[#CAD4D5] border-[1px] rounded-[0.9375rem] shadow-[inset_-6px_-6px_12px_3px_#FFFFFF,inset_6px_6px_12px_#BABFBF] flex flex-col justify-center items-center'>
        <div className='mt-[2rem] mx-[2.75rem] w-[calc(100%-5.5rem)] h-[calc(100%-2rem)] '>

            <div className=' text-grade text-[2rem] h-[5.375rem] w-[20.75rem ] font-[400]'>
                {props.title}
            </div>
            <div className='w-[24.8125rem] h-[16.75rem] flex items-center'>
                <div className='w-full text-[1.25rem] font-[300] text-grade leading-[1.6675rem]'>
                    {props.text}
                </div>
            </div>
            <div className='h-[0.0525rem] w-[24.375rem] bg-[#819EA1] mt-[0.4rem]'>

            </div>
            <div className='w-[calc(100%+5.5rem)] flex justify-center ml-[-2.75rem]'>

                <div className='mt-[0.875rem] w-[18.5rem] h-[2.894375rem] flex items-center justify-center gap-[1.006875rem]'>
                    {

                        stars.map((star) =>
                            (<img src={starIcon} alt="" className='w-[2.894375rem] h-[2.894375rem]'/>)
                        )

                    }
                    {/* <img src={starIcon} alt="" className='w-[2.894375rem] h-[2.894375rem]'/>
                    <img src={starIcon} alt="" className='w-[2.894375rem] h-[2.894375rem]'/>
                    <img src={starIcon} alt="" className='w-[2.894375rem] h-[2.894375rem]'/>
                    <img src={starIcon} alt="" className='w-[2.894375rem] h-[2.894375rem]'/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard
