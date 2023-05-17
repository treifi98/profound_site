import React from 'react'

interface Props{
    width?:string
    height?:string,
    shadow?:string
}
const InElementSeperator = (props:Props) => {
    return (
        <div className='' style={{ width: props.width ? props.width : '0.3125rem', height : props.height ? props.height : '2.25rem', boxShadow : props.shadow ? props.shadow : 'inset -0.125rem -0.125rem 0.125rem #FFFFFF, inset 0.125rem 0.125rem 0.125rem #B6C3C5' }}>

        </div>
    )
}

export default InElementSeperator