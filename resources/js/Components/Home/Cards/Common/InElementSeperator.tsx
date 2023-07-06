import React, { useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
interface Props{
    width?:string
    height?:string,
    shadow?:string,
    bg?:string,
    minHeight?:string,
    auto?:Boolean
}
const InElementSeperator = (props:Props) => {
    const elmnt = useRef(null)
    useEffect(()=>{
        // alert(elmnt.current.parentElement.parentElement.offsetHeight)
        if(props.auto){

            elmnt.current.style.height = elmnt.current.parentElement.parentElement.offsetHeight+'px'
        }
    },[props.auto])
    return (
        <div ref={elmnt} className=' relative !z-[1]' style={{ width: props.width ? props.width : '0.3125rem', height : props.height ? props.height : '100%', boxShadow : props.shadow ? props.shadow : 'inset -0.125rem -0.125rem 0.125rem #FFFFFF, inset 0.125rem 0.125rem 0.125rem #B6C3C5',backgroundColor:props.bg?props.bg:'#E6EDED',minHeight:props.minHeight?props.minHeight:'0rem' }}>

        </div>
    )
}

export default InElementSeperator
