import React from 'react'

interface Props{
    src:string,
    rounded:string,
    complecatedRadius?:boolean,
    width?:string,
    height?:string
}

const NewCardImage = (props:Props) => {
    return (
        <div className={`w-full h-full relative flex justify-center items-center overflow-hidden`} style={{ borderRadius:props.complecatedRadius ? props.rounded : `${props.rounded}rem`,width:props.width?props.width:'100%',height:props.height?props.height:'100%' }}>
            <img src={props.src} alt="" className={`w-[101%] h-[101%] object-cover object-center `}  style={{ borderRadius:props.complecatedRadius ? props.rounded : `${props.rounded}rem`,width:props.width?props.width:'101%',height:props.height?props.height:'101%' }}/>
            <div className={`w-full h-full absolute top-0 left-0 bg-[#01141666] mix-blend-overlay`} style={{ borderRadius:props.complecatedRadius ? props.rounded : `${props.rounded}rem`,width:props.width?props.width:'100%',height:props.height?props.height:'100%' }}></div>
        </div>
    )
}

export default NewCardImage
