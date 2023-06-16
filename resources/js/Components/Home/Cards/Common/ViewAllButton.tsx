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

        <a href="#" className={`  hover:shadow-[inset_-4.56609px_-4.56609px_7.30575px_#FFFFFF,inset_4.56609px_4.56609px_6.39253px_#B6C3C5] flex justify-center items-center gap-[0.75rem] w-[${props.w ?? '7.5'}rem] h-[${props.h ?? '2.1875'}rem] border-[#DCE3E3] border-[0.0625rem] rounded-[2.51625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,4.56609px_4.56609px_6.39253px_#B6C3C5] cursor-pointer`} style={{  }}>
            <div className='text-grade text-[1.0625rem] font-[600]'>
                {props.text ?? 'View All'}
            </div>
            <img src={view_all_icon} alt="" className='w-[0.588125rem] h-[0.78rem]' />
        </a>
    </>
  )
}

export default ViewAllButton
