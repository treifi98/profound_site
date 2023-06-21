import React from 'react'

import ActionCircle from './ActionCircle'


import footerBoxesUpLeft from '../../../../assets/footerBoxesUpLeft.svg'
import footerBoxesDownRight from '../../../../assets/footerBoxesDownRight.svg'
import footerMainLogo from '../../../../assets/Plogo.svg'
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
import { Link } from '@inertiajs/react'
import InElementSeperator from '../Cards/Common/InElementSeperator'
import Lang from '../Header/Lang/Lang'

interface Props{
    screen?:Boolean
}
const Footer = (props:Props) => {
    return (
        <>
            {
                props.screen ? (
                        <div className='w-full h-[47.0625rem] bg-[#002D31] relative overflow-hidden'>
                            <img src={footerBoxesUpLeft} alt="" className='absolute top-0 left-0 w-[14.4375rem] h-[14.5rem] z-[1]'/>
                            <img src={footerBoxesDownRight} alt="" className='absolute bottom-0 right-0 w-[17.900625rem] h-[18.725625rem] z-[1]'/>
                            <div className='w-[89.625rem] mx-auto flex justify-between'>
                                <div className='w-[23.6875rem]'>

                                    <Link href="/" className='mlc-[1.7025rem] mt-[4.6875rem] relative z-[2] w-[16.075rem] h-[5.575rem]  shadow-[-3px_-3px_4px_#04626B,4px_4px_6px_#011618] hover:shadow-[inset_-3px_-3px_4px_#04626B,inset_4px_4px_6px_#011618] bg-[#002D31] flex justify-center items-center rounded-[0.9375rem]'>
                                        <img src={footerMainLogo} alt="" className='object-cove  w-[14.5625rem] h-[3.5625rem]'/>
                                    </Link>
                                    <div className='w-[23.75rem] h-[10.25rem] mlc-[2.0625rem] mt-[4.3125rem]'>
                                        <div className='font-[600] text-[#E6EDED] text-[1.625rem] border-b-[1px] border-b-[#fff] w-fit whitespace-nowrap pb-[0.2rem]'>
                                            Our Office
                                        </div>
                                        <div className='mt-[1.4375rem] text-[#E6EDED] text-[1.25rem] leading-[2.4225rem] w-[23.6875rem]'>
                                            Office 1618, The binary tower, Business bay, Dubai, UAE| P.O. Box No. 418125 Phone Number: +97145545232
                                        </div>
                                    </div>
                                    <div className='mt-[6.375rem] flex w-[22.3125rem] h-[1.9375rem] gap-[1.125rem] mlc-[2.0625rem]'>
                                        <div className='flex bg-[#002D31]   shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                            <div className='text-[0.859375rem] text-[#fff]'>
                                                EN
                                            </div>
                                            <img src={ukFlag} alt="" className='w-[1.031875rem] h-[0.75rem]'/>
                                        </div>
                                        <div className='flex bg-[#002D31]   shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                            <div className='text-[0.859375rem] text-[#fff]'>
                                                EN
                                            </div>
                                            <img src={ukFlag} alt="" className='w-[1.031875rem] h-[0.75rem]'/>
                                        </div>
                                        <div className='flex bg-[#002D31]   shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                            <div className='text-[0.859375rem] text-[#fff]'>
                                                EN
                                            </div>
                                            <img src={ukFlag} alt="" className='w-[1.031875rem] h-[0.75rem]'/>
                                        </div>
                                        <div className='flex bg-[#002D31]   shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
                                            <div className='text-[0.859375rem] text-[#fff]'>
                                                EN
                                            </div>
                                            <img src={ukFlag} alt="" className='w-[1.031875rem] h-[0.75rem]'/>
                                        </div>
                                        <div className='flex bg-[#002D31]   shadow-[-0.1633975rem_-0.1633975rem_0.27178625rem_-0.090595625rem_#007580,0.1633975rem_0.1633975rem_0.21367875rem_#011618] w-[3.5625rem] h-[1.9375rem] gap-[0.250625rem] justify-center items-center rounded-[0.3125rem] cursor-pointer hover:shadow-[inset_-0.1875rem_-0.1875rem_0.25rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618]'>
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
                                                <div className='text-[1.5rem] border-b-[1px] border-b-[#fff] text-[#fff] font-[600] text-center px-[1rem] w-min mt-[2rem] mx-auto mb-[1rem]'>
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
                                            <div className='w-[16rem] text-center'>
                                                <div className='text-[1.5rem] border-b-[1px] border-b-[#fff] text-[#fff] font-[600] text-center px-[1rem] w-min mt-[2rem] mx-auto mb-[1rem]'>
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
                                                <div className='text-[1.5rem] border-b-[1px] border-b-[#fff] text-[#fff] font-[600] text-center px-[1rem] w-min mt-[2rem] mx-auto mb-[1rem] whitespace-nowrap'>
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
                                            <div className='w-[11.4375rem] h-[2.5rem] flex justify-center items-center rounded-[6.25rem] shadow-[-0.1875rem_-0.1875rem_0.3125rem_#04626B,0.25rem_0.25rem_0.375rem_#011618] hover:shadow-[inset_-0.1875rem_-0.1875rem_0.3125rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618] mx-auto mt-[1.3125rem] cursor-pointer'>
                                                <div className='text-[1.25rem] text-[#fff] font-[600]'>
                                                    Contact US
                                                </div>
                                            </div>
                                    </div>
                                    <div className='w-[49.8125rem] h-[3.4375rem] mt-[3.125rem] flex gap-[3.1875rem]'>
                                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                                            <ActionCircle imgSrc={phoneIcon} imgHeight='1.354375' imgWidth='1.354375'/>
                                        </div>
                                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                                            <ActionCircle imgSrc={WhatsAppIconFooter} imgHeight='1.625' imgWidth='1.625'/>
                                        </div>
                                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                                            <ActionCircle imgSrc={emailIconFooter} imgHeight='0.978125' imgWidth='1.391875'/>
                                        </div>
                                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                                            <ActionCircle imgSrc={videoIconFooter} imgHeight='0.866875' imgWidth='1.516875'/>
                                        </div>
                                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                                            <ActionCircle imgSrc={facebookIconFooter} imgHeight='1.625' imgWidth='1.625'/>
                                        </div>
                                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                                            <ActionCircle imgSrc={twitterIconFooter} imgHeight='1.625' imgWidth='1.625'/>
                                        </div>
                                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                                            <ActionCircle imgSrc={instagramIconFooter} imgHeight='1.625' imgWidth='1.625'/>
                                        </div>
                                        <div className='w-[3.4375rem] h-[3.4375rem]'>
                                            <ActionCircle imgSrc={linkedinIconfooter} imgHeight='1.625' imgWidth='1.625'/>
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

                ):
                (
                    <div className='w-full bg-[#002D31] h-max flex flex-col justify-center items-center relative pb-[0.5rem]'>
                        <div className='w-[95%] mx-auto mt-[2.375rem] rounded-[0.625rem] shadow-[-3.45865px_-3.45865px_4.32331px_#04626B,_3.45865px_3.45865px_5.18797px_#011618]'>
                            <div className='w-[95%] mx-auto flex justify-between items-start'>
                                <div className='w-[50%] flex flex-col justify-start items-start mt-[1.3125rem]'>
                                    <div className='border-b-[1px] border-b-[#fff] text-[1.0625rem] font-[600] text-[#fff] pb-[0.325rem] pr-[2.5rem]'>
                                        Explore
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[1.125rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            Top New project in Dubai
                                        </div>
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            Popular area in Dubai
                                        </div>
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            Top Developer in Dubai
                                        </div>
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            Profound insider Market
                                        </div>
                                    </div>


                                    <div className='border-b-[1px] border-b-[#fff] text-[1.0625rem] font-[600] text-[#fff] pb-[0.325rem] pr-[2.5rem] mt-[0.8875rem]'>
                                        Services
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[1.125rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            buying a property
                                        </div>
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            Renting a  Property
                                        </div>
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            selling a  property
                                        </div>
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            List a property for sale or rent
                                        </div>
                                    </div>
                                </div>


                                <div className='w-[50%] flex flex-col justify-start items-end mt-[1.3125rem]'>
                                    <div className='w-[9.6875rem] h-[2.8325rem] shadow-[-1.44402px_-1.44402px_1.92536px_#04626B,_1.92536px_1.92536px_2.88804px_#011618] flex justify-center items-center rounded-[0.284375rem]'>
                                        <img src={footerMainLogo} alt="" className='object-cover w-[92%]' />
                                    </div>

                                    <div className='border-b-[1px] border-b-[#fff] text-[1.0625rem] font-[600] text-[#fff] pb-[0.325rem] pr-[2.5rem] mt-[1.235rem]'>
                                        About us
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem] pr-[3.5rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            Our story
                                        </div>
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem] pr-[3.5rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            our team
                                        </div>
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem] pr-[3.5rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            our client
                                        </div>
                                    </div>
                                    <div className='h-[1.5rem] flex justify-center items-center rounded-[2.75rem] w-max mt-[0.3875rem] pr-[1.3rem]'>
                                        <div className='text-[0.75rem] text-[#fff]'>
                                            Profound career
                                        </div>
                                    </div>
                                    <div className='mt-[2.75rem] w-[6.25rem] h-[1.5625rem] flex justify-center items-center shadow-[-1.33125px_-1.33125px_2.21875px_#04626B,_1.775px_1.775px_2.6625px_#011618] rounded-[2.75rem]'>
                                        <div className='text-[#fff] text-[0.75rem] font-[600]'>
                                            Contact US
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='h-[0.25rem] w-full mt-[0.9375rem]'>
                                <InElementSeperator height='0.25rem' width='100%'/>
                            </div>

                            <div className='border-b-[1px] border-b-[#fff] text-[1.0625rem] font-[600] text-[#fff] pb-[0.325rem] pr-[2.5rem] mt-[0.9375rem] w-max ml-[2.5%]'>
                                Our Office
                            </div>
                            <div className='text-[#fff] text-[0.6875rem] mt-[0.8125rem] ml-[2.5%]'>
                                Office 1618, The binary tower, Business bay, Dubai, UAE
                            </div>
                            <div className='text-[#fff] text-[0.6875rem] mt-[0.8125rem] ml-[2.5%]'>
                                Dubai, UAE| P.O. Box No. 418125
                            </div>
                            <div className='text-[#fff] text-[0.6875rem] mt-[0.1875rem] mb-[0.75rem] ml-[2.5%]'>
                                Phone Number: +97145545232
                            </div>
                        </div>

                        <div className='mt-[1.424375rem] w-[95%] flex justify-between items-center'>
                            <div className='w-[1.95375rem] h-[1.95375rem]'>

                                <ActionCircle imgSrc={videoIconFooter} imgWidth='0.861875' imgHeight='0.4925'/>
                            </div>
                            <div className='w-[1.95375rem] h-[1.95375rem]'>

                                <ActionCircle imgSrc={WhatsAppIconFooter} imgWidth='0.92375' imgHeight='0.92375'/>
                            </div>
                            <div className='w-[1.95375rem] h-[1.95375rem]'>

                                <ActionCircle imgSrc={phoneIcon} imgWidth='0.92375' imgHeight='0.92375'/>
                            </div>
                            <div className='w-[1.95375rem] h-[1.95375rem]'>

                                <ActionCircle imgSrc={emailIconFooter} imgWidth='0.92375' imgHeight='0.92375'/>
                            </div>
                            <div className='w-[1.95375rem] h-[1.95375rem]'>

                                <ActionCircle imgSrc={twitterIconFooter} imgWidth='0.92375' imgHeight='0.92375'/>
                            </div>
                            <div className='w-[1.95375rem] h-[1.95375rem]'>

                                <ActionCircle imgSrc={facebookIconFooter} imgWidth='0.92375' imgHeight='0.92375'/>
                            </div>
                            <div className='w-[1.95375rem] h-[1.95375rem]'>

                                <ActionCircle imgSrc={linkedinIconfooter} imgWidth='0.92375' imgHeight='0.92375'/>
                            </div>
                            <div className='w-[1.95375rem] h-[1.95375rem]'>

                                <ActionCircle imgSrc={instagramIconFooter} imgWidth='0.92375' imgHeight='0.92375'/>
                            </div>
                        </div>
                        <div className='w-max ml-[2.5%] flex items-center'>
                                <div className='scale-[0.55768] origin-[-80%_100%]'>
                                <Lang />
                            </div>
                                <div className='scale-[0.55768] origin-[-80%_100%] ml-[-0.5rem]'>
                                <Lang />
                            </div>
                                <div className='scale-[0.55768] origin-[-80%_100%] ml-[-0.5rem]'>
                                <Lang />
                            </div>
                                <div className='scale-[0.55768] origin-[-80%_100%] ml-[-0.5rem]'>
                                <Lang />
                            </div>
                                <div className='scale-[0.55768] origin-[-80%_100%] ml-[-0.5rem]'>
                                <Lang />
                            </div>

                        </div>
                        <div className='flex w-max mx-auto gap-[0.38625rem] mt-[1.480625rem]'>
                            <div className='text-[#fff] text-[0.6875rem]'>
                                Privacy Policy
                            </div>
                            <div className='text-[#fff] text-[0.6875rem]'>
                                |
                            </div>
                            <div className='text-[#fff] text-[0.6875rem]'>
                                Terms of use
                            </div>
                            <div className='text-[#fff] text-[0.6875rem]'>
                                |
                            </div>
                            <div className='text-[#fff] text-[0.6875rem]'>
                                Sitemap
                            </div>
                        </div>
                        <div className='w-full'>
                            <img src={footerImage} alt="" />
                        </div>
                        <div className='text-[0.8125rem] absolute bottom-[0.025rem] text-center text-[#fff]'>
                            © Profound Properties LLC. All Rights Reserved
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Footer
