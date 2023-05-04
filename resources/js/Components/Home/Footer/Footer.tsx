import React from 'react'

import ActionCircle from './ActionCircle'


import footerBoxesUpLeft from '../../../../assets/footerBoxesUpLeft.svg'
import footerBoxesDownRight from '../../../../assets/footerBoxesDownRight.svg'
import footerMainLogo from '../../../../assets/footerMainLogo.svg'
import ukFlag from '../../../../assets/ukflag.svg'
import phoneIcon from '../../../../assets/phoneIconFooter.svg'
import WhatsAppIconFooter from '../../../../assets/WhatsAppIconFooter.svg'
import emailIconFooter from '../../../../assets/emailIconFooter.svg'
import videoIconFooter from '../../../../assets/videoIconFooter.svg'
import facebookIconFooter from '../../../../assets/facebookIconFooter.svg'
import twitterIconFooter from '../../../../assets/twitterIconFooter.svg'
import instagramIconFooter from '../../../../assets/instagramIconFooter.svg'
import linkedinIconfooter from '../../../../assets/linkedinIconfooter.svg'
import footerImage from '../../../../assets/footerImage.svg'
const Footer = () => {
    return (
        <div className='w-full h-[47.0625rem] bg-[#002D31] relative overflow-hidden'>
            <img src={footerBoxesUpLeft} alt="" className='absolute top-0 left-0 w-[14.4375rem] h-[14.5rem] z-[1]'/>
            <img src={footerBoxesDownRight} alt="" className='absolute bottom-0 right-0 w-[17.900625rem] h-[18.725625rem] z-[1]'/>
            <div className='w-[89.625rem] mx-auto flex justify-between'>
                <div className='w-[23.6875rem]'>

                    <a href="" className='mlc-[1.7025rem] mt-[4.6875rem] relative z-[2] w-[19.375rem] h-[6.375rem] block'>
                        <img src={footerMainLogo} alt="" className='object-cover w-full h-full  '/>
                    </a>
                    <div className='w-[23.75rem] h-[10.25rem] mlc-[2.0625rem] mt-[4.3125rem]'>
                        <div className='font-[600] text-[#E6EDED] text-[1.625rem]'>
                            Our Office
                        </div>
                        <div className='mt-[1.9375rem] text-[#E6EDED] text-[1.25rem] leading-[2.4225rem] w-[23.6875rem]'>
                            Office 1618, The binary tower, Business bay, Dubai, UAE| P.O. Box No. 418125 Phone Number: +97145545232
                        </div>
                    </div>
                    <div className='mt-[6.375rem] flex w-[22.3125rem] h-[1.9375rem] gap-[1.125rem] mlc-[2.0625rem]'>
                        <div className='flex bg-[#002D31] border-[#007680] border-[0.0625rem] shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                            <div className='text-[0.859375rem] text-[#fff]'>
                                EN
                            </div>
                            <img src={ukFlag} alt="" className='w-[1.031875rem] h-[0.75rem]'/>
                        </div>
                        <div className='flex bg-[#002D31] border-[#007680] border-[0.0625rem] shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                            <div className='text-[0.859375rem] text-[#fff]'>
                                EN
                            </div>
                            <img src={ukFlag} alt="" className='w-[1.031875rem] h-[0.75rem]'/>
                        </div>
                        <div className='flex bg-[#002D31] border-[#007680] border-[0.0625rem] shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                            <div className='text-[0.859375rem] text-[#fff]'>
                                EN
                            </div>
                            <img src={ukFlag} alt="" className='w-[1.031875rem] h-[0.75rem]'/>
                        </div>
                        <div className='flex bg-[#002D31] border-[#007680] border-[0.0625rem] shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                            <div className='text-[0.859375rem] text-[#fff]'>
                                EN
                            </div>
                            <img src={ukFlag} alt="" className='w-[1.031875rem] h-[0.75rem]'/>
                        </div>
                        <div className='flex bg-[#002D31] border-[#007680] border-[0.0625rem] shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                            <div className='text-[0.859375rem] text-[#fff]'>
                                EN
                            </div>
                            <img src={ukFlag} alt="" className='w-[1.031875rem] h-[0.75rem]'/>
                        </div>
                    </div>
                </div>
                <div className='w-[50rem] h-[30.4375rem] mrc-[3.9375rem] mt-[4.6875rem] relative '>
                    <div className='w-full h-[23.875rem] relative z-[2] bg-[#002D31] border-[#19464B] border-[0.0625rem] rounded-[1.25rem] shadow-[-0.1875rem_-0.1875rem_0.25rem_#04626B,0.25rem_0.25rem_0.375rem_#011618]'>
                        <div className='flex w-[47.1875rem] mx-auto'>
                            <div className='w-[16rem]'>
                                <div className='text-[1.5rem] text-[#fff] font-[600] text-center mt-[2rem] w-[15.375rem] mb-[1rem]'>
                                    Explore
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Top New project in Dubai
                                    </div>
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Top New project in Dubai
                                    </div>
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Top New project in Dubai
                                    </div>
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Top New project in Dubai
                                    </div>
                                </div>
                            </div>
                            <div className='w-[16rem]'>
                                <div className='text-[1.5rem] text-[#fff] font-[600] text-center mt-[2rem] w-[15.375rem] mb-[1rem]'>
                                    Services
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Top New project in Dubai
                                    </div>
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Top New project in Dubai
                                    </div>
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Top New project in Dubai
                                    </div>
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Top New project in Dubai
                                    </div>
                                </div>
                            </div>
                            <div className='w-[16rem]'>
                                <div className='text-[1.5rem] text-[#fff] font-[600] text-center mt-[2rem] w-[15.375rem] mb-[1rem]'>
                                    About us
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Our story
                                    </div>
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Our team
                                    </div>
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Our clients
                                    </div>
                                </div>
                                <div className='w-[15.375rem] h-[2.375rem] rounded-[6.25rem] flex justify-center items-center mb-[1rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                    <div className='text-[#fff] text-[1.125rem]'>
                                        Profound career
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='w-[11.4375rem] h-[2.5rem] flex justify-center items-center rounded-[6.25rem] shadow-[-0.1875rem_-0.1875rem_0.3125rem_#04626B,0.25rem_0.25rem_0.375rem_#011618] mx-auto mt-[1.3125rem] cursor-pointer'>
                                <div className='text-[1.25rem] text-[#fff] font-[600]'>
                                    Contact US
                                </div>
                            </div>
                    </div>
                    <div className='w-[49.8125rem] h-[3.4375rem] mt-[3.125rem] flex gap-[3.1875rem]'>
                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                            <ActionCircle imgSrc={phoneIcon} imgHeight='1.5625' imgWidth='1.5625'/>
                        </div>
                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                            <ActionCircle imgSrc={WhatsAppIconFooter} imgHeight='1.875' imgWidth='1.875'/>
                        </div>
                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                            <ActionCircle imgSrc={emailIconFooter} imgHeight='1.12875' imgWidth='1.60625'/>
                        </div>
                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                            <ActionCircle imgSrc={videoIconFooter} imgHeight='1' imgWidth='1.75'/>
                        </div>
                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                            <ActionCircle imgSrc={facebookIconFooter} imgHeight='1.875' imgWidth='1.875'/>
                        </div>
                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                            <ActionCircle imgSrc={twitterIconFooter} imgHeight='1.875' imgWidth='1.875'/>
                        </div>
                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                            <ActionCircle imgSrc={instagramIconFooter} imgHeight='1.875' imgWidth='1.875'/>
                        </div>
                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                            <ActionCircle imgSrc={linkedinIconfooter} imgHeight='1.875' imgWidth='1.875'/>
                        </div>
                    </div>
                </div>

            </div>
            <img src={footerImage} alt="" className='absolute bottom-0 left-0 w-full h-[10.005rem] object-cover'/>
            <div className='w-[45.75rem] h-[1.6875rem] left-[26.625rem] bottom-[1.3175rem] absolute flex text-[#fff] text-[1.125rem] gap-[2.0625rem] justify-center items-center'>
                <div>
                    © Profound Properties LLC. All Rights Reserved
                </div>
                <div className='flex gap-[0.6875rem] justify-center items-center'>
                    <a href='#'>
                        Privacy Policy
                    </a>
                    <div>
                        |
                    </div>
                    <a href='#'>
                        Terms of use
                    </a>
                    <div>
                        |
                    </div>
                    <a href='#'>
                        Sitemap
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
