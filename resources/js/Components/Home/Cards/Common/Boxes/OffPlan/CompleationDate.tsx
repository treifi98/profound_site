import React from 'react'

import compleationIcon from '../../../../../../../assets/compleation_icon.svg'

interface Props{
    scale?:string,
    mainHeight?:string,
    mainWidth?:string,
    imgWidth?:string,
    imgHeight?:string,
    txetSize?:string,
    text:string,
    date:string,
    textdaateSize?:string,
    imgMT?:string,
    lowerSectionHeight?:string,
}
const CompleationDate = (props:Props) => {
    return (
        <div className='group relative cursor-pointer' style={{ width:props.mainWidth ? props.mainWidth: '5.3125rem', height: props.mainHeight ? props.mainHeight : '6.375rem'}}>
            <div className='bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.3125rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]' style={{ width:props.mainWidth ? props.mainWidth: '5.3125rem', height: props.mainHeight ? props.mainHeight : '6.375rem'}}>
                <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                    <div className='' style={{ width:props.imgWidth ? props.imgWidth: '2.063125rem', height: props.imgHeight ? props.imgHeight : '2.063125rem', marginTop: props.imgMT ? props.imgMT : '0.375rem'}}>
                        <img src={compleationIcon} alt="" className='object-cover object-center' style={{ width:props.imgWidth ? props.imgWidth: '2.063125rem', height: props.imgHeight ? props.imgHeight : '2.063125rem'}}/>
                    </div>
                    <div className='font-[600] text-grade leading-[0.87625rem] text-center' style={{ fontSize: props.txetSize ? props.txetSize : '0.75rem' }}>
                        Completion
                        <br/>
                        Date
                    </div>
                    <div className='bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]' style={{ width: props.mainWidth ? props.mainWidth : '5.3125rem', height: props.lowerSectionHeight ? props.lowerSectionHeight : '1.6875rem' }}>
                        <div className='text-[#E6EDED] font-[600]' style={{ fontSize: props.textdaateSize ? props.textdaateSize : '0.875rem' }}>
                            {props.date}
                        </div>
                    </div>
                </div>
                <div className='opacity-0 group-hover:opacity-100 flex flex-col absolute top-0 left-0 w-full h-full origin-center duration-[0.1s] '>
                    <div className='h-[calc(100%-1.625rem)] w-full flex flex-col justify-center items-center'>
                        <div className='w-[4.6875rem] leading-[0.91375rem] text-[0.75rem] font-[600] text-grade text-center'>
                            The handover of the properties
                        </div>
                    </div>
                        <div className='w-[5.3125rem] h-[1.6875rem] bg-custom-gradient shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                            <div className='text-[#E6EDED] text-[0.875rem] font-[600]'>
                                Q1 / 2024
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default CompleationDate
