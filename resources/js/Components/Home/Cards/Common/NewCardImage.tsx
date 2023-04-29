import React from 'react'

interface Props{
    src:string,
    rounded:string
}

const NewCardImage = (props:Props) => {
    return (
        <div className={`w-full h-full relative flex justify-center items-center`} style={{ borderRadius:`${props.rounded}rem` }}>
            <img src={props.src} alt="" className={`w-full h-full object-cover object-center `}  style={{ borderRadius:`${props.rounded}rem` }}/>
            <div className={`w-full h-full absolute top-0 left-0 bg-[#01141666] mix-blend-overlay`} style={{ borderRadius:`${props.rounded}rem` }}></div>
        </div>
    )
}

export default NewCardImage
