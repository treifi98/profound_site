import React from 'react'
import CardImage from './Common/CardImage'
import map_icon from '../../../../assets/map_icon_w.svg'
import price_tag from '../../../../assets/price_tag.svg'
import price_tag_test from '../../../../assets/price _11.svg'
import bed_vector from '../../../../assets/bed_vector.svg'
import bath_vector from '../../../../assets/bath_vector.svg'
import size_vector from '../../../../assets/size_vector.svg'
import emarIcon from '../../../../assets/emarIcon.svg'

interface Props{
    img:string
    text?:string,
    val?:string
}
const HoverCardProject = (props:Props) => {
    return (
        <div className='cursor-pointer group h-[22rem] w-[16.9375rem] border-[#DCE3E3] border-[0.0625rem] rounded-[0.625rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] flex justify-center items-center m-[1rem] z-[99999999] relative'>
            <div className='relative w-[15.0625rem] h-[20.1875rem] rounded-[0.625rem]'>
                <CardImage src={props.img} w='15.0625' h='20.1875' rounded='0.625'/>
                <div className='absolute w-full h-[4.375rem] bg-[#00000080] bottom-[0rem] rounded-[0.625rem] group-hover:h-full transition-all duration-[0.3s] flex flex-col overflow-hidden pl-[0.3125rem] gap-[0px] hover:shadow-[0px_0.25rem_0.25rem_rgba(0,0,0,0.25)]'>
                    <div className='text-[#fff] text-[1.25rem] font-[600] h-[1.4375rem] group-hover:ml-[2.4rem] transition-all duration-[0.3s]'>
                        Creek Rise tower
                    </div>
                    <div className='text-[#fff]  flex gap-[0.319375rem] items-center mt-[0.2rem] group-hover:ml-[3.2rem] transition-all duration-[0.3s]'>
                        <div className='w-[0.806875rem] h-[0.806875rem]'>
                            <img src={map_icon} alt="" className=' w-[0.806875rem] h-[0.806875rem]'/>
                        </div>
                        <div className='text-[0.75rem] font-[500]'>

                            Dubai Creek Harbor
                        </div>
                    </div>
                    <div className='text-[#fff] flex gap-[0.319375rem] items-center ml-[-0.225rem] mt-[0.20625rem] group-hover:hidden '>
                        <div className='w-[1.135rem] h-[1.135rem]'>
                            <img src={price_tag_test} alt="" className=' w-[1.135rem] h-[1.135rem] rotate-[-45deg] '/>
                        </div>
                        <div className='text-[0.75rem] font-[500]'>

                            1,125,0000 AED
                        </div>
                    </div>
                    <div className='w-full flex gap-[0.944375rem] justify-center items-center mt-[0.375rem]'>
                        <div className='w-[5.1875rem] h-[6.325rem] border-[#DDE4E4] border-[0.0625rem] rounded-[0.3rem] flex flex-col justify-center items-center gap-[0.1875rem]'>
                            <img src={price_tag_test} alt="" className='w-[1.954375rem] h-[1.954375rem] mt-[0.4375rem]'/>
                            <div className='text-[0.8125rem] text-[#fff] font-[500] h-[2rem] flex justify-center items-center w-[5.0875rem] text-center leading-[0.989375rem]'>
                                Price Starting From AED
                            </div>
                            <div className='bg-[#fff] h-[0.0625rem] w-[3.71125rem] rounded-lg'></div>
                            <div className='text-[0.8125rem] text-[#fff] font-[500] h-[1rem] flex justify-center items-center'>
                                1,125,0000
                            </div>
                        </div>
                        <div className='w-[5.1875rem] h-[6.325rem] border-[#DDE4E4] border-[0.0625rem] rounded-[0.3rem] flex flex-col justify-center items-center gap-[0.1875rem]'>
                            <img src={bed_vector} alt="" className='w-[1.954375rem] h-[1.954375rem] mt-[0.625rem]'/>
                            <div className='text-[0.8125rem] text-[#fff] font-[500] h-[2rem] flex justify-center items-center w-[5.0875rem] leading-[0.989375rem] text-center'>
                                Number of Bedrooms
                            </div>
                            <div className='bg-[#fff] h-[0.0625rem] w-[3.71125rem] rounded-lg'></div>
                            <div className='text-[0.8125rem] text-[#fff] font-[500] h-[1rem] flex justify-center items-center'>
                                2
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-[0.944375rem] justify-center items-center mt-[0.925rem]'>
                    <div className='w-[5.1875rem] h-[6.325rem] border-[#DDE4E4] border-[0.0625rem] rounded-[0.3rem] flex flex-col justify-center items-center gap-[0.1875rem]'>
                            <img src={size_vector} alt="" className='w-[1.954375rem] h-[1.954375rem] mt-[0.625rem]'/>
                            <div className='text-[0.8125rem] text-[#fff] font-[500] h-[2rem] flex justify-center items-center w-[5.0875rem] leading-[0.989375rem] text-center'>
                                Area in sq.ft (Min-Max)
                            </div>
                            <div className='bg-[#fff] h-[0.0625rem] w-[3.71125rem] rounded-lg'></div>
                            <div className='text-[0.8125rem] text-[#fff] font-[500] h-[1rem] flex justify-center items-center'>
                                881 - 4590
                            </div>
                        </div>
                        <div className='w-[5.1875rem] h-[6.325rem] border-[#DDE4E4] border-[0.0625rem] rounded-[0.3rem] flex flex-col justify-center items-center gap-[0.1875rem]'>
                            <img src={emarIcon} alt="" className='w-[3.674375rem] h-[1.954375rem] mt-[0.625rem]'/>
                            <div className='text-[0.8125rem] text-[#fff] font-[500] h-[2rem] flex justify-center items-center w-[5.0875rem] leading-[0.989375rem] text-center'>
                                Year of established
                            </div>
                            <div className='bg-[#fff] h-[0.0625rem] w-[3.71125rem] rounded-lg'></div>
                            <div className='text-[0.8125rem] text-[#fff] font-[500] h-[1rem] flex justify-center items-center'>
                                1997
                            </div>
                        </div>
                    </div>
                    <div className='text-[1.175rem] text-[#fff] font-[500] text-center mt-[1.175rem]'>
                        See More
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HoverCardProject
