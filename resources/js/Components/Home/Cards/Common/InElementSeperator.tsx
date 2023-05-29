import React from 'react'

interface Props{
    width?:string
    height?:string,
    shadow?:string,
    bg?:string,
}
const InElementSeperator = (props:Props) => {
    return (
        <div className='' style={{ width: props.width ? props.width : '0.3125rem', height : props.height ? props.height : '100%', boxShadow : props.shadow ? props.shadow : 'inset -0.125rem -0.125rem 0.125rem #FFFFFF, inset 0.125rem 0.125rem 0.125rem #B6C3C5',backgroundColor:props.bg?props.bg:'#E6EDED' }}>

        </div>
    )
}

export default InElementSeperator
