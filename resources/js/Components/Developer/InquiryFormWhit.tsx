import React from 'react'
import DynamicTextWhit from '../Home/Inputs/DynamicTextWhit'

import userIcon from '../../../assets/user_icon.svg'
import uaeFlag from '../../../assets/uaeFlag.svg'
import emaiIcon from '../../../assets/emailIcon.svg'
import img from '../../../assets/dubai.png'

import RadioWhit from './RadioWhit'
const InquiryFormWiht = () => {
  return (
    <div className='w-[91.25rem] h-[38.125rem] rounded-[0.9375rem] bg-[#E6EDED] flex justify-center items-center shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] border-[#CAD4D5] border-[0.0625rem] !font-[nova]'>
        <div className='w-[83.783125rem] h-[30.9375rem] flex gap-[3.9375rem]'>
            <div className='flex justify-center items-center w-[44.970625rem] h-[30.4375rem] rounded-[0.971875rem] bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>
                <div className='w-[42.338125rem] h-[27.366875rem]'>
                    <div className='flex gap-[2.19375rem] w-full h-[18.975625rem] '>
                        <div className='flex h-full w-[19.195rem] flex-col gap-[2.24875rem]'>
                            <DynamicTextWhit icon={userIcon} placeHolder='Your full name' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.11375rem' imgHeight='1.11375rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            <DynamicTextWhit icon={emaiIcon} placeHolder='Your email address' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.26125rem' imgHeight='0.88625rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            <DynamicTextWhit icon={uaeFlag} placeHolder='0501234567' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.480625rem' imgHeight='0.986875rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            <textarea name="message" id="" className='bg-[#E6EDED] rounded-[0.425rem] w-[19.195rem] h-[6.58125rem] focus:border-transparent focus:ring-0 border-none shadow-[inset_-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,inset_0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]' placeholder='Your message .....'></textarea>
                        </div>

                        <div className='w-[20.84rem] h-full rounded-[0.55rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,inset_0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>

                        </div>
                    </div>

                    <div className='mt-[1.5625rem] w-full'>
                        <div className='flex gap-[0.54875rem]'>
                            <RadioWhit/>

                            <div className='text-[#7D8989] text-[0.8225rem]'>
                                I accept the terms of the User Agreement and Privacy Policy
                            </div>

                        </div>
                        <div className='flex gap-[0.54875rem] mt-[0.755rem]'>
                            <RadioWhit/>

                            <div className='text-[#7D8989] text-[0.8225rem]'>
                                I agree to receive information about offers, deals and services from this website (optional)
                            </div>

                        </div>
                        <div className='w-[9.84375rem] h-[2.25rem] rounded-[2.74375rem] shadow-[-0.254123125rem_-0.254123125rem_0.406596875rem_#FFFFFF,0.254123125rem_0.254123125rem_0.3557725rem_#B6C3C5] flex justify-center items-center mx-auto mt-[1.5625rem] hover:shadow-[inset_-0.254123125rem_-0.254123125rem_0.406596875rem_#FFFFFF,inset_0.254123125rem_0.254123125rem_0.3557725rem_#B6C3C5] cursor-pointer border-[#DCE3E3] border-[0.0625rem]'>
                            <div className='text-center font-[600] text-[1.125rem] text-grade'>
                                Property inquire
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className='w-[34.75rem] h-[30.9375rem] rounded-[1.075625rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] border-[#CAD4D5] border-[0.0625rem] flex justify-center items-center'>
                    <div className='w-[32.5rem] h-[28.8125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,inset_0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] rounded-[0.8375rem] flex justify-center items-center'>
                        <img src={img} alt="" className='w-[30.1875rem] h-[26.5625rem] rounded-[1.125rem]'/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default InquiryFormWiht
