import React from 'react'

interface Props{
    text:string,
    textSize?:string,
    textWeight?:string
}
const NewTag = (props:Props) => {
    return (
        <div className={`w-full h-full rounded-[3.125rem] border-[0.0625rem] border-[#DCE3E3] bg-[#E6EDED] flex justify-center items-center font-[nova] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.25rem_-0.25rem_0.5rem_#FFFFFF,inset_0.25rem_0.25rem_0.375rem_#B6C3C5] cursor-pointer`}>
            <div className='text-grade' style={{ fontSize:props.textSize ? props.textSize + 'rem' : '0.8125rem' ,fontWeight:props.textWeight ? props.textWeight : '600'}}>
                {props.text}
            </div>
        </div>
    )
}

export default NewTag
