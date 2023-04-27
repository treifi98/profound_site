import React from 'react'
import ViewAllButton from './Common/ViewAllButton'
import calender_icon from '../../../../assets/calender_icon.svg'
// import ViewAllButton from './Common/ViewAllButton'

interface Props{
    img:string,
    name:string,
    established:string,
    projectNumber:string,
    priceFrom:string,
    id:string
}
import established_icon from '../../../../assets/established_icon.svg'
import projects_number_icon from '../../../../assets/projects_number_icon.svg'
import priceTag from '../../../../assets/price_tag_icon.svg'
import contruction from '../../../../assets/construction_thingy.svg'
import price_tag_og from '../../../../assets/price_tag_og.svg'

const DeveloperCard = (props:Props) => {
    return (
        <div className='w-[24.375rem] h-[30.625rem]  font-[nova] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_3px_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] rounded-[0.9375rem] flex justify-center items-center'>
            <div className='w-[21.885rem] h-[28.125rem] rounded-[0.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_3px_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF]'>
                <div className='h-[8.8125rem] w-full flex justify-center items-center'>
                    {/* <div className='flex justify-center items-center mt-[0.625rem]'> */}
                        <img src={props.img} alt="" className='object-contain max-w-[13.4375rem] mt-[0.625rem] max-h-[6.5rem]'/>
                    {/* </div> */}
                </div>
                <div className='h-[0.3125rem] w-full  rounded-[6.25rem] bg-[#E6EDED] shadow-[inset_-0.14793375rem_-0.14793375rem_0.246556875rem_#FFFFFF,inset_0.246556875rem_0.246556875rem_0.345179375rem_#B6C3C5]'></div>
                <div className='w-full text-center mt-[0.3125rem] text-[1.875rem] text-grade font-[600]'>
                    {props.name}
                </div>
                <div className='w-[20.0625rem] mx-auto h-[11.274375rem] flex justify-center items-center gap-[0.9375rem]'>
                    <div className='h-[11.25rem] w-[6.0625rem] flex items-end'>
                        <div className='h-[8.1875rem] relative w-[6.0625rem] bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] rounded-[0.30125rem] shadow-[-0.228939375rem_-0.228939375rem_0.34340875rem_#F7FFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]'>
                            <div className='absolute w-[4.98125rem] h-[4.98125rem] flex justify-center items-center rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.1895325rem_-0.1895325rem_0.303251875rem_#FFFFFF,inset_0.1895325rem_0.1895325rem_0.265345rem_#B6C3C5] top-[-2.490625rem] left-[0.5rem]'>
                                <img src={calender_icon} alt="" className='w-[2.684375rem] h-[2.908125rem]'/>
                            </div>
                            <div className='mt-[2.908125rem] w-[5.5rem] mx-auto text-[0.875rem] font-[600] leading-[1.065625rem] text-grade text-center '>
                                year of Establishment
                            </div>
                            <div className='mt-[1.038125rem] w-[5.125rem] h-[1.5rem] bg-[#19464B] rounded-[6.25rem] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center mx-auto'>
                                <div className='text-graed text-[1rem] text-[#fff] font-[600]'>
                                    test
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[11.25rem] w-[6.0625rem] flex items-end'>
                        <div className='h-[8.1875rem] relative w-[6.0625rem] bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] rounded-[0.30125rem] shadow-[-0.228939375rem_-0.228939375rem_0.34340875rem_#F7FFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]'>
                            <div className='absolute w-[4.98125rem] h-[4.98125rem] flex justify-center items-center rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.1895325rem_-0.1895325rem_0.303251875rem_#FFFFFF,inset_0.1895325rem_0.1895325rem_0.265345rem_#B6C3C5] top-[-2.490625rem] left-[0.5rem]'>

                                <img src={contruction} alt="" className='w-[2.29875rem] h-[2.905625rem]'/>
                            </div>
                            <div className='mt-[2.908125rem] w-[5.5rem] mx-auto text-[0.875rem] font-[600] leading-[1.065625rem] text-grade text-center '>
                                year of Establishment
                            </div>
                            <div className='mt-[1.038125rem] w-[5.125rem] h-[1.5rem] bg-[#19464B] rounded-[6.25rem] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center mx-auto'>
                                <div className='text-graed text-[1rem] text-[#fff] font-[600]'>
                                    test
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[11.25rem] w-[6.0625rem] flex items-end'>
                        <div className='h-[8.1875rem] relative w-[6.0625rem] bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] rounded-[0.30125rem] shadow-[-0.228939375rem_-0.228939375rem_0.34340875rem_#F7FFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]'>
                            <div className='absolute w-[4.98125rem] h-[4.98125rem] flex justify-center items-center rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.1895325rem_-0.1895325rem_0.303251875rem_#FFFFFF,inset_0.1895325rem_0.1895325rem_0.265345rem_#B6C3C5] top-[-2.490625rem] left-[0.5rem]'>

                                <img src={price_tag_og} alt="" className='w-[2.913125rem] h-[2.908125rem]'/>
                            </div>
                            <div className='mt-[2.908125rem] w-[5.5rem] mx-auto text-[0.875rem] font-[600] leading-[1.065625rem] text-grade text-center '>
                                year of Establishment
                            </div>
                            <div className='mt-[1.038125rem] w-[5.125rem] h-[1.5rem] bg-[#19464B] rounded-[6.25rem] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center mx-auto'>
                                <div className='text-graed text-[1rem] text-[#fff] font-[600]'>
                                    test
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                            <div className='mt-[1.475625rem] w-full flex justify-center items-center'>

                                <ViewAllButton text='View More'/>
                            </div>
                {/* <div></div> */}
            </div>
        </div>
    )
}

export default DeveloperCard
