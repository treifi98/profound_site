import React from 'react'

interface Props{
    text:string,
    stars:number,
    title:string
}
import starIcon from '../../../../assets/start.png'
import NewCardImage from './Common/NewCardImage'
const ReviewCardMobile = (props:Props) => {
    const stars = new Array(props.stars).fill(0)
  return (
    <div className='w-[21.125rem] h-[20.125rem] bg-[#E6EDED] border-[#CAD4D5] border-[1px] rounded-[0.625rem] shadow-[inset_-4.87835px_-4.87835px_6.96907px_#FFFFFF,_inset_4.87835px_4.87835px_4.87835px_#B6C3C5] flex flex-col justify-center items-center'>
        <div className='mt-[1rem] mx-[0.875rem] w-[calc(100%-1.75rem)] h-[calc(100%-2rem)] '>

            <div className=' text-grade text-[1.39375rem] h-max w-[16.625rem ] font-[400] leading-[1.859375rem]'>
                {props.title}
            </div>
            <div className='w-[19.375rem] h-max mt-[0.4375rem] flex items-center'>
                <div className='w-full text-[0.9375rem] font-[300] text-grade leading-[1.40625rem]'>
                    {props.text}
                </div>
            </div>
            <div className='h-[0.0525rem] w-[16.986875rem] bg-[#819EA1] mt-[0.4rem]'>

            </div>
            <div className='w-[calc(100%+5.5rem)] flex justify-center ml-[-2.75rem]'>

                <div className='mt-[0.875rem] w-max mx-auto h-[2.894375rem] flex items-center justify-center gap-[1.006875rem]'>
                    {

                        stars.map((star) =>
                            (<img src={starIcon} alt="" className='w-[2.0175rem] h-[2.0175rem]'/>)
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

export default ReviewCardMobile
