import React from 'react'
import DynamicTextGreen from '../Home/Inputs/DynamicTextTypeGreen'

import userIcon from '../../../assets/userIconWhite.svg'
import uaeFlag from '../../../assets/uaeFlag.svg'
import emaiIcon from '../../../assets/emailIconWhite.svg'
import img from '../../../assets/dubai.png'

import Radio from './Radio'
const InquiryFormGreen = () => {
  return (
    <div className='w-[91.25rem] h-[38.125rem] rounded-[0.9375rem] bg-[#002D31] flex justify-center items-center'>
        <div className='w-[83.783125rem] h-[30.9375rem] flex gap-[3.9375rem]'>
            <div className='flex justify-center items-center w-[44.970625rem] h-[30.4375rem] rounded-[0.971875rem] bg-[#002D31] border-[#19464B] border-[0.0625rem] shadow-[-0.274211875rem_-0.274211875rem_0.43873875rem_#04626B,0.274211875rem_0.274211875rem_0.43873875rem_#011618]'>
                <div className='w-[42.338125rem] h-[27.366875rem]'>
                    <div className='flex gap-[2.19375rem] w-full h-[18.975625rem] '>
                        <div className='flex h-full w-[19.195rem] flex-col gap-[2.24875rem]'>
                            <DynamicTextGreen icon={userIcon} placeHolder='Your full name' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.11375rem' imgHeight='1.11375rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            <DynamicTextGreen icon={emaiIcon} placeHolder='Your email address' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.26125rem' imgHeight='0.88625rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            <DynamicTextGreen icon={uaeFlag} placeHolder='0501234567' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.480625rem' imgHeight='0.986875rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            <textarea name="message" id="" className='bg-[#002D31] rounded-[0.425rem] w-[19.195rem] h-[6.58125rem] focus:border-transparent focus:ring-0 border-none shadow-[inset_-0.137583125rem_-0.137583125rem_0.228848125rem_-1.22052px_#007580,inset_0.137583125rem_0.137583125rem_0.179920625rem_#011618]' placeholder='Your message .....'></textarea>
                        </div>

                        <div className='w-[20.84rem] h-full rounded-[0.55rem] shadow-[inset_-0.274211875rem_-0.274211875rem_0.43873875rem_#04626B,inset_0.274211875rem_0.274211875rem_0.43873875rem_#011618]'>

                        </div>
                    </div>

                    <div className='mt-[1.5625rem] w-full'>
                        <div className='flex gap-[0.54875rem]'>
                            <Radio/>

                            <div className='text-[#7D8989] text-[0.8225rem]'>
                                I accept the terms of the User Agreement and Privacy Policy
                            </div>

                        </div>
                        <div className='flex gap-[0.54875rem] mt-[0.755rem]'>
                            <Radio/>

                            <div className='text-[#7D8989] text-[0.8225rem]'>
                                I agree to receive information about offers, deals and services from this website (optional)
                            </div>

                        </div>
                        <div className='w-[9.84375rem] h-[2.25rem] rounded-[2.74375rem] shadow-[-0.164526875rem_-0.164526875rem_0.219369375rem_#04626B,0.219369375rem_0.219369375rem_0.0137105859375rem_#011618] flex justify-center items-center mx-auto mt-[1.5625rem] hover:shadow-[inset_-0.164526875rem_-0.164526875rem_0.219369375rem_#04626B,inset_0.219369375rem_0.219369375rem_0.329054375rem_#011618] cursor-pointer'>
                            <div className='text-center font-[600] text-[1.125rem] text-[#7D8989]'>
                                Property inquire
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className='w-[34.75rem] h-[30.9375rem] rounded-[1.075625rem] shadow-[-0.269021875rem_-0.269021875rem_0.430435rem_#04626B,0.269021875rem_0.269021875rem_0.430435rem_#011618] border-[#19464B] border-[0.0625rem] flex justify-center items-center'>
                    <div className='w-[32.5rem] h-[28.8125rem] border-[#19464B] border-[0.0625rem] shadow-[inset_-0.269021875rem_-0.269021875rem_0.430435rem_#04626B,inset_0.269021875rem_0.269021875rem_0.430435rem_#011618] flex justify-center items-center'>
                        <img src={img} alt="" className='w-[30.1875rem] h-[26.5625rem] rounded-[1.125rem]'/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default InquiryFormGreen
