import React from 'react'

interface Props{

    img:string,
    img_w?:string,
    img_h?:string,
}

const NewSocial = (props:Props) => {
    return (
        <div className='flex flex-col justify-center items-center gap-[0.7375rem] font-[nova] w-full h-full'>
            <div className={`w-full h-full bg-[#E6EDED] border-[0.0625rem] border-[#DDE4E4] rounded-[0.216308125rem] shadow-[-0.212868125rem_-0.212868125rem_0.212868125rem_#FFFFFF,0.212868125rem_0.212868125rem_0.212868125rem_#B6C3C5] flex justify-center items-center hover:shadow-[inset_-0.212868125rem_-0.212868125rem_0.212868125rem_#FFFFFF,inset_0.212868125rem_0.212868125rem_0.212868125rem_#B6C3C5] cursor-pointer`}>
                <img src={props.img} className={`object-contain object-center`} style={{ width:props.img_w?props.img_w+'rem':'0.866875rem',height:props.img_h?props.img_h+'rem':'0.866875rem' }}/>
            </div>
        </div>
    )
}

export default NewSocial
