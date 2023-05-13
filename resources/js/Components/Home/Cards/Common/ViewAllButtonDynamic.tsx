import React from 'react'
import view_all_icon from '../../../../../assets/view_all_icon.svg'
interface Props{
    link?:string,
    h:string,
    w:string,
    ml?:string,
    text?:string,
    textSize?:string,
    img_width?:string,
    imgHeight?:string,
    wrapperWidth?:string,
    imgML?:string
    // textS
}
const ViewAllButtonDynamic = (props:Props) => {
  return (
    <>

        <a href="#" className={` hover:shadow-[inset_-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,inset_0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5] flex justify-center items-center gap-[0rem] border-[#DCE3E3] border-[0.0625rem] rounded-[2.51625rem] shadow-[-0.285380625rem_-0.285380625rem_7.30575px_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer`} style={{ width:props.w?props.w:'8.875rem',height:props.h?props.h:'2.1875rem',marginLeft:props.ml?props.ml:'2.1875rem' }}>
            <div className=' flex justify-between items-center mx-auto' style={{ width:props.wrapperWidth?props.wrapperWidth:'7.131875rem' }}>

                <div className='text-grade ' style={{ fontSize:props.textSize?props.textSize:'1.073125rem' }}>
                    {props.text ?? 'View All'}
                </div>
                <img src={view_all_icon} alt="" className='' style={{ width:props.img_width?props.img_width:'0.5693755rem',height:props.imgHeight?props.imgHeight:'0.78rem',marginLeft:props.imgML?props.imgML:'0' }} />
            </div>
        </a>
    </>
  )
}

export default ViewAllButtonDynamic
