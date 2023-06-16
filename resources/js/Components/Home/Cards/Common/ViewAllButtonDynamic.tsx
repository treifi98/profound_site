import React, { useEffect, useRef, useState } from 'react'
import view_all_icon from '../../../../../assets/view_all_icon.svg'
import processBoxShahow from '@/Components/BoxShadowController'
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
    const elmnt = useRef(null)
    const [shadows,setShadows] = useState(['-0.285380625rem -0.285380625rem 7.30575px #FFFFFF,0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5','inset -0.285380625rem -0.285380625rem 7.30575px #FFFFFF,inset 0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5'])
    useEffect(() => {
        let scale = 1
        if(props.w){
            scale = parseFloat(props.w)/8.875
            // alert(scale)
        }
        // alert(parseFloat(props.mainHeight)/30.625)
        // alert(props.mainHeight)
        setShadows(processBoxShahow(shadows,' ',scale))
        // shadows =
        // alert (shadows[0])

    },[])
    const handleMouseEnter = () => {
        elmnt.current.style.boxShadow = shadows[1]
    }
    const handleMouseLeave = () => {
        elmnt.current.style.boxShadow = shadows[0]
    }
  return (
    <>

        <a href="#" className={` flex justify-center items-center gap-[0rem] border-[#DCE3E3] border-[0.0625rem] rounded-[2.51625rem] cursor-pointer`} style={{boxShadow:shadows[0] ,width:props.w?props.w:'8.875rem',height:props.h?props.h:'2.1875rem',marginLeft:props.ml?props.ml:'2.1875rem' }} ref={elmnt} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className=' flex justify-between items-center mx-auto' style={{ width:props.wrapperWidth?props.wrapperWidth:'7.131875rem' }}>

                <div className='text-grade font-[600]' style={{ fontSize:props.textSize?props.textSize:'1.0625rem' }}>
                    {props.text ?? 'View All'}
                </div>
                <img src={view_all_icon} alt="" className='' style={{ width:props.img_width?props.img_width:'0.5693755rem',height:props.imgHeight?props.imgHeight:'0.78rem',marginLeft:props.imgML?props.imgML:'0' }} />
            </div>
        </a>
    </>
  )
}

export default ViewAllButtonDynamic
