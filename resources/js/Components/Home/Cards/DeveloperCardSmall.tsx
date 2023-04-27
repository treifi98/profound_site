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
        <div className='m-[1rem] w-[15.966875rem] h-[20.060625rem]  font-[nova] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_3px_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] rounded-[0.9375rem] flex justify-center items-center'>
            <div className='w-[14.32875rem] h-[18.423125rem] rounded-[0.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_3px_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF]'>
                <div className='h-[5.7725rem] w-full flex justify-center items-center'>
                    {/* <div className='flex justify-center items-center mt-[0.625rem]'> */}
                        <img src={props.img} alt="" className='object-contain max-w-[8.801875rem] mt-[0.409375rem] max-h-[4.2575rem]'/>
                    {/* </div> */}
                </div>
                <div className='h-[0.205rem] w-full  rounded-[6.25rem] bg-[#E6EDED] shadow-[inset_-0.14793375rem_-0.14793375rem_0.246556875rem_#FFFFFF,inset_0.246556875rem_0.246556875rem_0.345179375rem_#B6C3C5]'></div>
                <div className='w-full text-center mt-[0.3125rem] text-[1.228125rem] text-grade font-[600]'>
                    {props.name}
                </div>
                <div className='w-[13.141875rem] mx-auto h-[7.385rem] flex justify-center items-center gap-[0.614375rem]'>
                    <div className='h-[7.385rem] w-[3.97125rem] flex items-end'>
                        <div className='h-[5.363125rem] relative w-[3.97125rem] bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] rounded-[0.30125rem] shadow-[-0.228939375rem_-0.228939375rem_0.34340875rem_#F7FFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]'>
                            <div className='absolute w-[3.2625rem] h-[3.2625rem] flex justify-center items-center rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.1895325rem_-0.1895325rem_0.303251875rem_#FFFFFF,inset_0.1895325rem_0.1895325rem_0.265345rem_#B6C3C5] top-[-1.63125rem] left-[0.3rem]'>
                                <img src={calender_icon} alt="" className='w-[1.75875rem] h-[1.905rem]'/>
                            </div>
                            <div className='mt-[1.760625rem] w-[3.625rem] mx-auto text-[0.573125rem] font-[600] leading-[0.698125rem] text-grade text-center '>
                                year of Establishment
                            </div>
                            <div className='mt-[0.71875rem] w-[3.356875rem] h-[0.9825rem] bg-[#19464B] rounded-[6.25rem] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center mx-auto'>
                                <div className='text-graed text-[0.655rem] text-[#fff] font-[600]'>
                                    test
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[7.385rem] w-[3.97125rem] flex items-end'>
                        <div className='h-[5.363125rem] relative w-[3.97125rem] bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] rounded-[0.30125rem] shadow-[-0.228939375rem_-0.228939375rem_0.34340875rem_#F7FFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]'>
                            <div className='absolute w-[3.2625rem] h-[3.2625rem] flex justify-center items-center rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.1895325rem_-0.1895325rem_0.303251875rem_#FFFFFF,inset_0.1895325rem_0.1895325rem_0.265345rem_#B6C3C5] top-[-1.63125rem] left-[0.3rem]'>
                                <img src={calender_icon} alt="" className='w-[1.75875rem] h-[1.905rem]'/>
                            </div>
                            <div className='mt-[1.760625rem] w-[3.625rem] mx-auto text-[0.573125rem] font-[600] leading-[0.698125rem] text-grade text-center '>
                                year of Establishment
                            </div>
                            <div className='mt-[0.71875rem] w-[3.356875rem] h-[0.9825rem] bg-[#19464B] rounded-[6.25rem] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center mx-auto'>
                                <div className='text-graed text-[0.655rem] text-[#fff] font-[600]'>
                                    test
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[7.385rem] w-[3.97125rem] flex items-end'>
                        <div className='h-[5.363125rem] relative w-[3.97125rem] bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] rounded-[0.30125rem] shadow-[-0.228939375rem_-0.228939375rem_0.34340875rem_#F7FFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]'>
                            <div className='absolute w-[3.2625rem] h-[3.2625rem] flex justify-center items-center rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.1895325rem_-0.1895325rem_0.303251875rem_#FFFFFF,inset_0.1895325rem_0.1895325rem_0.265345rem_#B6C3C5] top-[-1.63125rem] left-[0.3rem]'>
                                <img src={calender_icon} alt="" className='w-[1.75875rem] h-[1.905rem]'/>
                            </div>
                            <div className='mt-[1.760625rem] w-[3.625rem] mx-auto text-[0.573125rem] font-[600] leading-[0.698125rem] text-grade text-center '>
                                year of Establishment
                            </div>
                            <div className='mt-[0.71875rem] w-[3.356875rem] h-[0.9825rem] bg-[#19464B] rounded-[6.25rem] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center mx-auto'>
                                <div className='text-graed text-[0.655rem] text-[#fff] font-[600]'>
                                    test
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                            <div className='mt-[0.96625rem] w-full flex justify-center items-center text-[0.703125rem]'>

                                <ViewAllButton text='View More' w='5.81375' h='1.433125'/>
                            </div>
                {/* <div></div> */}
            </div>
        </div>
    )
}

export default DeveloperCard
