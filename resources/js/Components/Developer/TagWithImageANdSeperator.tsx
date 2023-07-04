import processBoxShahow from '@/Components/BoxShadowController'
import React, { useEffect, useRef, useState } from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'

interface Props{
    text:string,
    textSize?:string,
    textWeight?:string,
    // textML?:string,
    seperatorWidth?:string,
    seperatorHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    // imgMT?:string,
    imgML?:string,
    textWidth?:string
    img:string,
    imgWrapperWidth?:string,
    noShadow?:Boolean
}
const TagWithImageANdSeperator = (props:Props) => {
    const [shadows,setShadows] = useState(['-0.285380625rem -0.285380625rem 0.456609375rem #FFFFFF,0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5','inset 0rem -0.285380625rem 0.456609375rem #FFFFFF,inset 0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5','-0.285380625rem -0.285380625rem 0.456609375rem #FFFFFF,0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5'])
    const elmnt = useRef(null)
    const shadowPart = useRef(null)
    const firstPart = useRef(null)
    useEffect(() => {
        let scale = 1
        let new_width = elmnt.current.parentElement.style.width.split('rem')[0]

        // alert(new_width)
        scale = new_width / 8.125
        // alert(parseFloat(props.mainHeight)/30.625)
        // alert(props.mainHeight)
        setShadows(processBoxShahow(shadows,' ',scale))
        // shadows =
        // alert (shadows[0])

    },[])
    const handleMouseEnter = () => {
        elmnt.current.style.boxShadow = 'none'
        shadowPart.current.style.boxShadow = shadows[1]
        firstPart.current.style.boxShadow = shadows[0]
        firstPart.current.style.border = '2.0625rem solid #DCE3E30 '
    }
    const handleMouseLeave = () => {
        shadowPart.current.style.boxShadow = 'none'
        firstPart.current.style.boxShadow = 'none'
        firstPart.current.style.border = 'none'
        elmnt.current.style.boxShadow = shadows[0]
    }
    return (
        <div className={`w-full h-full rounded-[3.125rem] border-[0.0625rem] border-[#DCE3E3] bg-[#E6EDED] flex items-center font-[nova] cursor-pointer`} ref={elmnt} style={{ boxShadow:!props.noShadow?shadows[0]:'none'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='h-full items-center flex rounded-[5.70761875rem_0rem_0rem_5.70761875rem]' style={{ width:props.imgWrapperWidth?props.imgWrapperWidth:'3.1875rem' }} ref={firstPart}>

                <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2rem',height:props.imgHeight?props.imgHeight:'1.816875rem',marginLeft:props.imgML?props.imgML:'0.625rem' }}/>
            </div>
            <div className='h-full' style={{ width:props.seperatorWidth?props.seperatorWidth:'0.3125rem' }}>

                <InElementSeperator width={props.seperatorWidth?props.seperatorWidth:'0.3125rem'}/>
            </div>
            <div className='h-full flex justify-center items-center rounded-[0rem_5.70761875rem_5.70761875rem_0rem] ' style={{ width:props.textWidth?props.textWidth:'8.3125rem' }} ref={shadowPart}>

                <div className='text-grade' style={{ fontSize:props.textSize ? props.textSize : '0.8125rem' ,fontWeight:props.textWeight ? props.textWeight : '600'}} >
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default TagWithImageANdSeperator
