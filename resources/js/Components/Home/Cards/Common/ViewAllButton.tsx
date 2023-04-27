import React from 'react'
import view_all_icon from '../../../../../assets/view_all_icon.svg'
interface Props{
    link:string,
    h:string,
    w:string,
    ml?:string,
    text?:string,
    textSize?:string
}
const ViewAllButton = (props:Props) => {
  return (
    <>

        <a href="#" className={` ml-[${props.ml ?? '2.1875'}rem] hover:shadow-[inset_-3.26471px_-3.26471px_4.35294px_#FFFFFF,inset_3.26471px_3.26471px_4.35294px_#B6C3C5] flex justify-center items-center gap-[0.75rem] w-[${props.w ?? '7.5'}rem] h-[${props.h ?? '2.1875'}rem] border-[#DCE3E3] border-[1px] rounded-[2.51625rem] shadow-[-3.26471px_-3.26471px_4.35294px_#FFFFFF,3.26471px_3.26471px_4.35294px_#B6C3C5] cursor-pointer`}>
            <div className='text-grade '>
                {props.text ?? 'View All'}
            </div>
            <img src={view_all_icon} alt="" className='w-[0.588125rem] h-[0.78rem]' />
        </a>
    </>
  )
}

export default ViewAllButton
