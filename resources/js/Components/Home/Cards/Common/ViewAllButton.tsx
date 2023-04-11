import React from 'react'
import view_all_icon from '../../../../../assets/view_all_icon.svg'
interface Props{
    link:string,
    h:string,
    w:string,
    ml?:string,
    text?:string,
}
const ViewAllButton = (props:Props) => {
  return (
    <>

        <a href="#" className={` ml-[${props.ml ?? '35'}px] hover:shadow-[inset_-3.26471px_-3.26471px_4.35294px_#FFFFFF,inset_3.26471px_3.26471px_4.35294px_#B6C3C5] flex justify-center items-center gap-[12px] w-[${props.w ?? '120'}px] h-[${props.h ?? '35'}px] border-[#DCE3E3] border-[1px] rounded-[40.26px] shadow-[-3.26471px_-3.26471px_4.35294px_#FFFFFF,3.26471px_3.26471px_4.35294px_#B6C3C5] cursor-pointer`}>
            <div className='text-grade '>
                {props.text ?? 'View All'}
            </div>
            <img src={view_all_icon} alt="" className='w-[9.41px] h-[12.48px]' />
        </a>
    </>
  )
}

export default ViewAllButton
