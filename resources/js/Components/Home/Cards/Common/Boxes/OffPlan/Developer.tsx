import React from 'react'

import emarIcon from '../../../../../../../assets/emar_logo.png'
interface Props{
    scale?:string
}
const Developer = (props:Props) => {
    return (
        <div className='group w-[5.3125rem] h-[6.375rem] relative cursor-pointer' style={{ transform:props.scale?`scale(${props.scale})`:'scale(1)' }}>
            <div className='w-[5.3125rem] h-[6.375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.3125rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  perspective-[1000px] group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]'>
                <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                    <div className='max-w-[3.674375rem] max-h-[1.825rem] min-h-[1.625rem] mt-[0.375rem] flex justify-center items-center'>
                        <img src={emarIcon} alt="" className=' object-contain object-center'/>
                    </div>
                    <div className='text-[0.75rem] font-[600] text-grade leading-[0.87625rem] text-center'>
                        Developed
                        <br/>
                        By
                    </div>
                    <div className='w-[5.3125rem] h-[1.6875rem] bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                        <div className='text-[#E6EDED] text-[0.875rem] font-[600]'>
                            Emaar
                        </div>
                    </div>
                </div>
                <div className='opacity-0 group-hover:opacity-100 flex flex-col absolute top-0 left-0 w-full h-full origin-center duration-[0.1s] '>
                    <div className='w-[calc(100%-0.125rem)] mx-[0.0625rem] flex border-b-[#CAD4D5] border-b-[0.125rem] h-[2.125rem]'>
                        <div className='w-[calc(100%-1.8125rem)] h-full flex justify-center items-center text-[0.54375rem] leading-[0.625rem] text-grade font-[700]'>
                            <div className='text-center w-[2.5rem] h-[1.25rem]'>
                                Established
                            </div>
                        </div>
                        <div className='w-[1.8125rem] h-full bg-[#19464B] rounded-[0rem_0.3125rem_0rem_0rem] flex justify-center items-center border-[0.0625rem] border-[#DCE3E3] shadow-[inset_-0.25rem_0rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#E6EDED] text-[0.54375rem] font-[700]'>
                                2007
                            </div>
                        </div>
                    </div>
                    <div className='w-[calc(100%-0.125rem)] mx-[0.0625rem] flex border-b-[#CAD4D5] border-b-[0.125rem] h-[2.125rem]'>
                        <div className='w-[calc(100%-1.8125rem)] h-full flex justify-center items-center text-[0.54375rem] leading-[0.625rem] text-grade font-[700]'>
                            <div className='text-center w-[2.5rem] h-[1.25rem]'>
                                Developed projects
                            </div>
                        </div>
                        <div className='w-[1.8125rem] h-full bg-[#19464B] rounded-[0rem_0rem_0rem_0rem] flex justify-center items-center border-[0.0625rem] border-[#DCE3E3] shadow-[inset_-0.25rem_0rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#E6EDED] text-[0.54375rem] font-[700]'>
                                33+
                            </div>
                        </div>
                    </div>
                    <div className='w-[calc(100%-0.125rem)] mx-[0.0625rem] flex border-b-[#CAD4D5] border-b-[0.125rem] h-[2.125rem] rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                        <div className='w-[calc(100%-1.8125rem)] h-full flex justify-center items-center text-[0.54375rem] leading-[0.625rem] text-grade font-[700] rounded-[0rem_0rem_0rem_0.3125rem]'>
                            <div className='text-center w-[2.5rem] h-[1.25rem]'>
                                Price Starting
                            </div>
                        </div>
                        <div className='w-[1.8125rem] h-full bg-[#19464B] rounded-[0rem_0rem_0.3125rem_0rem] flex justify-center items-center border-[0.0625rem] border-[#DCE3E3] shadow-[inset_-0.25rem_0rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#E6EDED] text-[0.54375rem] font-[700] text-center'>
                                1.2M AED
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Developer
