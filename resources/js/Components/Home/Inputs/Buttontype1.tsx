import React from 'react'

interface Props{
    text:string,

}
const Buttontype1 = (props:Props) => {
  return (
    <div className='w-[132.4px] h-[33.47px] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[21.56px] shadow-[-2.58808px_-2.58808px_5.17615px_#F7FFFF,2.58808px_2.58808px_5.17615px_#B6C3C5]  flex justify-center items-center cursor-pointer select-none hover:shadow-[inset_-3.26471px_-3.26471px_4.35294px_#FFFFFF,inset_3.26471px_3.26471px_4.35294px_#B6C3C5]'>
    <div className='text-grade font-[600]'>
            {props.text}
        </div>
    </div>
  )
}

export default Buttontype1
