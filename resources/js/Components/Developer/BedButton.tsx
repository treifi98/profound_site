import React from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'


import bedIcon from '../../../assets/bed_icon.svg'
interface Props{
    screen?:Boolean
}
const BedButton = (props:Props) => {
  return (
    <>
        {
            props.screen?(
                <div className='w-[6.6525rem] h-[2.0075rem] flex group cursor-pointer'>
                    <div className='w-[2.25rem] h-full rounded-[0.28675125rem_0_0_0.28675125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.26186625rem_-0.26186625rem_0.41898625rem_#FFFFFF,0.26186625rem_0.26186625rem_0.366613125rem_#B6C3C5] flex justify-center items-center'>
                        <img src={bedIcon} alt="" className='w-[1.663125rem] h-[1.261875rem] '/>
                    </div>
                    <div className='h-full'>
                        <InElementSeperator width='0.286875rem'/>
                    </div>
                    <div className='h-full w-[4.125rem] flex justify-center items-center rounded-[0rem_0.28675125rem_0.28675125rem_0rem] border-[#DCE3E3] border-[0.0625rem]  group-hover:shadow-[inset_-0.229400625rem_-0.229400625rem_0.28675125rem_#FFFFFF,inset_0.26186625rem_0.26186625rem_0.366613125rem_#B6C3C5] shadow-[-0.229400625rem_-0.229400625rem_0.28675125rem_#FFFFFF,0.26186625rem_0.26186625rem_0.366613125rem_#B6C3C5]'>
                        <div className='text-grade text-[1.0325rem] '>

                            Studio
                        </div>
                    </div>
                </div>
            ):
            (
                <div className='w-[73.84px] h-[22.28px] flex group cursor-pointer'>
                    <div className='w-[25px] h-full rounded-[0.28675125rem_0_0_0.28675125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[2.906704902648926px_2.906704902648926px_4.0693864822387695px_0px_#B6C3C5,-2.906704902648926px_-2.906704902648926px_4.65072774887085px_0px_#FFF] flex justify-center items-center'>
                        <img src={bedIcon} alt="" className='w-[18.46px] h-[14px] '/>
                    </div>
                    <div className='h-full'>
                        <InElementSeperator width='3.18px'/>
                    </div>
                    <div className='h-full w-[46px] flex justify-center items-center rounded-[0rem_0.28675125rem_0.28675125rem_0rem] border-[#DCE3E3] border-[0.0625rem]  group-hover:shadow-[inset_-0.229400625rem_-0.229400625rem_0.28675125rem_#FFFFFF,inset_0.26186625rem_0.26186625rem_0.366613125rem_#B6C3C5] shadow-[2.906704902648926px_2.906704902648926px_4.0693864822387695px_0px_#B6C3C5,-2.546337604522705px_-2.546337604522705px_3.182921886444092px_0px_#FFF]'>
                        <div className='text-grade text-[11.45px] '>

                            Studio
                        </div>
                    </div>
                </div>
        )
        }
    </>

  )
}

export default BedButton
