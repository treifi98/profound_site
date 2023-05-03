import React from 'react'



interface Props{
    placeholder:string
}
const TextAreaTypeGreen = (props:Props) => {

    return (
        <textarea className=' focus:border-transparent focus:ring-0 w-full h-full bg-[#002D31] rounded-[0.484406875rem] border-[#19464B] border-[0.0625rem] shadow-[inset_-0.156794375rem_-0.156794375rem_0.2608025rem_-0.086934375rem_#007580,inset_0.156794375rem_0.156794375rem_0.205043125rem_#011618]' placeholder={props.placeholder}>

        </textarea>
    )
}

export default TextAreaTypeGreen
