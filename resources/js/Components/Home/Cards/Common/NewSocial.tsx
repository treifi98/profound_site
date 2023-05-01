import React from 'react'

interface Props{

    img:string,
    img_w?:string,
    img_h?:string,
}

const NewSocial = (props:Props) => {
    return (
        <div className='flex flex-col justify-center items-center gap-[0.7375rem] font-[nova] w-fuul h-full'>
            <div className={`w-full h-full bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[29.9px] shadow-[-4.41536px_-4.41536px_6.62304px_#FFFFFF,4.41536px_4.41536px_6.62304px_#AEBBBD] flex justify-center items-center hover:shadow-[inset_-3.91242px_-3.91242px_5.86863px_#FFFFFF,inset_3.91242px_3.91242px_5.86863px_#AEBBBD] cursor-pointer`}>
                <img src={props.img} className={`object-contain object-center`} style={{ width:props.img_w?props.img_w+'rem':'0.866875rem',height:props.img_h?props.img_h+'rem':'0.866875rem' }}/>
            </div>
        </div>
    )
}

export default NewSocial
