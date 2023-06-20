import React from 'react'

import InElementSeperator from './InElementSeperator'
import ViewAllButtonDynamic from './ViewAllButtonDynamic'

interface Props{
    img:string
    title: string,
    imgWidth?:string,
    imgHeight?:string,
    seperatorML?:string,
    btnText?:string,
    btnWidth?:string,
    ww?:string
}
const BarMobile = (props:Props) => {
  return (
    <div className='w-full h-[2.625rem] flex justify-center items-center rounded-[10px_10px_0px_0px] shadow-[-2.89237px_-2.89237px_4.6278px_#FFFFFF,_2.89237px_2.89237px_4.04932px_#B6C3C5] '>
        <div className='w-[97%] h-full flex justify-between items-center'>
            <div className='flex justify-evenly h-full items-center '>

                <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.99125rem',height:props.imgHeight?props.imgHeight:'1.635rem' }}/>
                <div className='h-full ml-[0.1rem]' style={{ marginLeft:props.seperatorML?props.seperatorML:'0rem' }}>
                    <InElementSeperator width='0.25rem'/>
                </div>
                <div className='text-[1.125rem] font-[600] text-grade ml-[0.4rem]'>
                    {props.title}
                </div>
            </div>
            <div className=''>
                <ViewAllButtonDynamic text={props.btnText?props.btnText:'View All'} w={props.btnWidth?props.btnWidth:'4.6875rem'} h='1.5rem' textSize='0.75rem' imgML='0.4375erm' ml='auto' wrapperWidth={props.ww?props.ww:'77%'} img_width='0.3825rem' imgHeight='0.523125rem'/>
            </div>
        </div>
    </div>
  )
}

export default BarMobile
