import React from 'react'

import mapIcon from '../../../assets/map_icon.svg'
import Brochure from '../Home/Cards/Common/Brochure'
import BoxMaster from '../Home/Cards/Common/Boxes/New/BoxMaster'
import NewTag from '../Home/Cards/Common/NewTag'

import bedIcon from '../../../assets/bed_icon.svg'
import priceIcon from '../../../assets/price_tag_og.svg'
import bathIcon from '../../../assets/baths.svg'
import sizeIcon from '../../../assets/size.svg'
import parkingIcon from '../../../assets/parkingIcon.svg'
import appartmentIcon from '../../../assets/appartmentIcon.svg'
import statusIcon from '../../../assets/statusIcon.svg'
import mortgageIcon from '../../../assets/mortgageIcon.svg'
import Contact from '../Home/Cards/Common/Boxes/OffPlan/Contact'
import Agent from '../Home/Cards/Common/Boxes/OffPlan/Agent'
import agentImg from '../../../assets/agent.png'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import TextType1 from '../Home/Inputs/TextType1'
import DynamicTextWhit from '../Home/Inputs/DynamicTextWhit'
import userIcon from '../../../assets/user_icon.svg'
import CardTag from '../Home/Cards/Common/CardTag'
import brochure from '../../../assets/bBb.svg'

interface Props{
    screen?:Boolean
}
const ProjectInfo = (props:Props) => {
  return (
    <>
        {
            props.screen?(
                <div className=' w-[91.25rem] h-[38.125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.98125rem] overflow-hidden'>
                    <div className='w-full h-[3.75rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center'>
                        <div className='ml-[1.5rem]' style={{ width:'8.75rem',height:'2rem' }}>
                            <NewTag text='Apartment' textSize='1.125rem' textWeight='400'/>
                        </div>
                        <div className='ml-[1.25rem]' style={{ width:'8.75rem',height:'2rem' }}>
                            <NewTag text='Highe ROI' textSize='1.125rem' textWeight='400'/>
                        </div>
                        <div className='ml-[1.25rem]' style={{ width:'8.75rem',height:'2rem' }}>
                            <NewTag text='Higher Floor' textSize='1.125rem' textWeight='400'/>
                        </div>
                        <div className='ml-[1.25rem]' style={{ width:'8.75rem',height:'2rem' }}>
                            <NewTag text='Close to Beach ' textSize='1.125rem' textWeight='400'/>
                        </div>
                        <div className='ml-[1.25rem]' style={{ width:'8.75rem',height:'2rem' }}>
                            <NewTag text='Park View ' textSize='1.125rem' textWeight='400'/>
                        </div>
                    </div>
                    <div className='w-[86.0625rem] flex justify-center mx-auto'>
                        <div className='w-[48.3125rem] h-[34.71875rem] mt-[0.725rem]'>
                            <div className='text-grade text-[1.875rem] font-[600]'>
                                Creek Rise tower 2 west side
                            </div>
                            <div className='mt-[0.7rem] text-grade text-[1.5rem] font-[600]'>
                                High Floor | Stunning Sea View | Investors Deal
                            </div>
                            <div className='flex  items-center justify-between w-full mt-[0.6125rem]'>
                                <div className='w-[15.5525rem]  items-center justify-between flex'>

                                    <img src={mapIcon} alt=""  className='w-[1.566875rem] h-[1.4875rem] '/>

                                    <div className='text-[1.528125rem] text-grade'>

                                        Dubai Creek Harbor
                                    </div>
                                </div>
                                <div>
                                    <Brochure mainWidth='8.5rem' mainHeight='2rem' imgHeight='1.19625rem' imgWidth='1.448125rem' imgMT='0.42875rem' imgWrapperWidth='2.214375rem' restWidth='6.07125rem' textSize='1rem' separatorWidth='0.285625rem'/>
                                </div>
                            </div>


                                <div className='w-[48.325625rem]  h-[21.606875rem] flex flex-wrap gap-x-[1.875rem] gap-y-[2.018125rem] mt-[1.564375rem]'>
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'9.794375rem',
                                                mainWidth:'8.1625rem',
                                                text:'Price AED',
                                                lowerText:'1',
                                                img:priceIcon,
                                                imgWidth:'3.1425rem',
                                                imgHeight:'3.136875rem',
                                                imgMT:'1.248125rem',
                                                textSize:'1.248125rem',
                                                textWidth:'6.225rem',
                                                textMT:'0.608125rem',
                                                lowerSectionHeight:'2.5925rem',
                                                textMB:'0.700625rem',
                                                lowerTextSize: '1.248125rem',
                                                lineHeight:'1.520625rem'

                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'9.794375rem',
                                                mainWidth:'8.1625rem',
                                                text:'Bedrooms',
                                                lowerText:'1',
                                                img:bedIcon,
                                                imgWidth:'3.331875rem',
                                                imgHeight:'2.49875rem',
                                                imgMT:'1.344375rem',
                                                textSize:'1.248125rem',
                                                textWidth:'6.225rem',
                                                textMT:'1.058125rem',
                                                lowerSectionHeight:'2.5925rem',
                                                textMB:'0.769111rem',
                                                lowerTextSize: '1.248125rem',
                                                lineHeight:'1.520625rem'

                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'9.794375rem',
                                                mainWidth:'8.1625rem',
                                                text:'Bathrooms',
                                                lowerText:'1',
                                                img:bathIcon,
                                                imgWidth:'3.3875rem',
                                                imgHeight:'2.945625rem',
                                                imgMT:'1.1525rem',
                                                textSize:'1.248125rem',
                                                textWidth:'6.225rem',
                                                textMT:'0.903125rem',
                                                lowerSectionHeight:'2.5925rem',
                                                textMB:'0.639111rem',
                                                lowerTextSize: '1.248125rem',
                                                lineHeight:'1.520625rem'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'9.794375rem',
                                                mainWidth:'8.1625rem',
                                                text:'Area sq.ft',
                                                lowerText:'888',
                                                img:sizeIcon,
                                                imgWidth:'3.349375rem',
                                                imgHeight:'3.056875rem',
                                                imgMT:'1.05625rem',
                                                textSize:'1.248125rem',
                                                textWidth:'6.225rem',
                                                textMT:'0.888125rem',
                                                lowerSectionHeight:'2.5925rem',
                                                textMB:'0.639111rem',
                                                lowerTextSize: '1.248125rem',
                                                lineHeight:'1.520625rem'

                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'9.794375rem',
                                                mainWidth:'8.1625rem',
                                                text:'Parking',
                                                lowerText:'1',
                                                img:parkingIcon,
                                                imgWidth:'3.0625rem',
                                                imgHeight:'3.0625rem',
                                                imgMT:'0.988125rem',
                                                textSize:'1.248125rem',
                                                textWidth:'6.225rem',
                                                textMT:'0.8975rem',
                                                lowerSectionHeight:'2.5925rem',
                                                textMB:'0.64375rem',
                                                lowerTextSize: '1.248125rem',
                                                lineHeight:'1.520625rem'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'9.794375rem',
                                                mainWidth:'8.1625rem',
                                                text:'Property type',
                                                lowerText:'1',
                                                img:appartmentIcon,
                                                imgWidth:'3.16875rem',
                                                imgHeight:'3.16875rem',
                                                imgMT:'1.05625rem',
                                                textSize:'1.200625rem',
                                                textWidth:'8.225rem',
                                                textMT:'0.575rem',
                                                lowerSectionHeight:'2.5925rem',
                                                textMB:'0.826875rem',
                                                lowerTextSize: '1.248125rem',
                                                lineHeight:'1.520625rem'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'9.794375rem',
                                                mainWidth:'8.1625rem',
                                                text:'Property type',
                                                lowerText:'1',
                                                img:statusIcon,
                                                imgWidth:'3.625rem',
                                                imgHeight:'3.5rem',
                                                imgMT:'0.75rem',
                                                textSize:'1.200625rem',
                                                textWidth:'8.225rem',
                                                textMT:'0.575rem',
                                                lowerSectionHeight:'2.5925rem',
                                                textMB:'0.799875rem',
                                                lowerTextSize: '1.248125rem',
                                                lineHeight:'1.520625rem'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'9.794375rem',
                                                mainWidth:'8.1625rem',
                                                text:'Mortgage',
                                                lowerText:'1',
                                                img:mortgageIcon,
                                                imgWidth:'3.11125rem',
                                                imgHeight:'3.11125rem',
                                                imgMT:'1.05625rem',
                                                textSize:'1.248125rem',
                                                textWidth:'8.225rem',
                                                textMT:'0.7075rem',
                                                lowerSectionHeight:'2.5925rem',
                                                textMB:'0.739875rem',
                                                lowerTextSize: '1.248125rem',
                                                lineHeight:'1.520625rem'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <Contact
                                        mainHeight='9.794375rem'
                                        mainWidth='8.1625rem'
                                        boxHeight='2.405rem'
                                        boxWidth='2.88625rem'
                                        mT='0.865625rem'
                                        boxMB='0.769375rem'
                                        boxMR='0.769375rem'
                                        lowerSectionHeight='2.5975rem'
                                        videoHeight='0.755rem'
                                        videoWidth='1.3525rem'
                                        wasupWidth='1.473125rem'
                                        wasupHeight='1.473125rem'
                                        phoneWidth='1.33875rem'
                                        phoneHeight='1.29rem'
                                        emailWidth='1.245rem'
                                        emailHeight='0.875rem'
                                        lowerSectionTextSize='1.248125rem'

                                    />
                                    <Agent
                                        Args={{
                                            name:'Nassif',
                                            langs:['Arabic','English'],
                                            speciality:'Downtown',
                                            mainHeight:'9.794375rem',
                                            mainWidth:'8.1625rem',
                                            imgWrapperWidth:'6.818125rem',
                                            imgWrapperHeight:'5.8575rem',
                                            imgWrapperMT:'0.671875rem',
                                            agentSectionHeight:'2.5925rem',
                                            img1Width:'6.43375rem',
                                            img1Height:'5.47375rem',
                                            img2Width:'6.241875rem',
                                            img2Height:'5.47375rem',
                                            rounded:'0.48rem',
                                            nameTextSize:'1.248125rem',
                                            textSize:'0.948125rem',



                                        }}
                                    />

                                </div>
                        </div>
                        <div className='h-[38.125rem] z-[2] relative mt-[-3.75rem] ml-[2.9375rem]'>
                            <InElementSeperator width='0.375rem'/>
                        </div>
                        <div className='w-[31.3125rem] ml-[2.9375rem] shadow-[inset_-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,inset_0.3125rem_0.3125rem_0.4375rem_#B6C3C5] h-[29.5625rem] rounded-[0.9375rem] mt-[2.75rem] flex flex-col items-center justify-center '>
                            <div className='w-[28.88625rem] h-[27.18125rem] shadow-[-0.250746875rem_-0.250746875rem_0.401195rem_#FFFFFF,0.250746875rem_0.250746875rem_0.351045625rem_#B6C3C5] rounded-[0.75rem] flex justify-center items-center'>
                                <div className='w-[27.18125rem] h-[26.42rem] flex flex-col items-center'>
                                    <div className='text-grade text-[1.739375rem] font-[600]'>
                                        Register your interest
                                    </div>
                                    <div className='mt-[1.403125rem]'>

                                        <DynamicTextWhit mainHeight='2.77375rem' mainWidth='27.18125rem' icon={userIcon} placeHolder='You full name' imgHeight='1.609375rem' imgWidth='1.609375rem' textWidth='22.98125rem' textHeight='2.77375rem' imgWrapperWidth='4.755rem' imgWrapperHeight='2.77375rem'/>
                                    </div>
                                    <div className='mt-[2.57625rem]'>

                                        <DynamicTextWhit mainHeight='2.77375rem' mainWidth='27.18125rem' icon={userIcon} placeHolder='You full name' imgHeight='1.609375rem' imgWidth='1.609375rem' textWidth='22.98125rem' textHeight='2.77375rem' imgWrapperWidth='4.755rem' imgWrapperHeight='2.77375rem'/>
                                    </div>
                                    <div className='mt-[2.57625rem]'>

                                        <DynamicTextWhit mainHeight='2.77375rem' mainWidth='27.18125rem' icon={userIcon} placeHolder='You full name' imgHeight='1.609375rem' imgWidth='1.609375rem' textWidth='22.98125rem' textHeight='2.77375rem' imgWrapperWidth='4.755rem' imgWrapperHeight='2.77375rem'/>
                                    </div>
                                    <div className='mt-[2.455rem] w-[13.590625rem] h-[2.718125rem] rounded-[5.4375rem] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center shadow-[-0.248221875rem_-0.248221875rem_0.397155rem_#FFFFFF,0.248221875rem_0.248221875rem_0.347510625rem_#B6C3C5] cursor-pointer hover:shadow-[inset_-0.248221875rem_-0.248221875rem_0.397155rem_#FFFFFF,inset_0.248221875rem_0.248221875rem_0.347510625rem_#B6C3C5]'>
                                        <div className='text-grade text-[1.413125rem] font-[600] '>
                                            Submit Details
                                        </div>
                                    </div>
                                    <div className='mt-[1.328125rem] text-[0.87rem]'>
                                        By clicking Submit, you agree to our Terms & Privacy Policy.
                                    </div>
                                    {/* <dynamic /> */}
                                </div>
                            </div>
                        </div>

                    </div>
                            {/* <div className='w-[100px] h-[100px] bg-[red]'>

                            </div> */}
                </div>
            ):
            (
                <div className='w-[375px] h-max shadow-[4px_4px_8px_0px_#BABFBF,-4px_-4px_8px_0px_#FFF] overflow-hidden'>
                    <div className='w-fullh h-max px-[15px] flex flex-col py-[14px] gap-[14px] shadow-[2.699549436569214px_2.699549436569214px_3.7793691158294678px_0px_#B6C3C5,-2.699549436569214px_-2.699549436569214px_4.319278717041016px_0px_#FFF]'>
                        <div className='w-full flex flex-col justify-between'>
                            <div className='text-[#002D31] text-[18.705px] font-[600] gap-[10px]'>
                                Creek Rise tower 2 west side
                            </div>
                            <div className='text-[15px] text-grade'>
                                High Floor | Stunning Sea View | Investors Deal
                            </div>
                            <div className='flex gap-[5.47px] items-center'>
                                <img src={mapIcon} alt="" />
                                <div className='text-[15.2px] text-grade'>
                                    Dubai Creek Harbor
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-start gap-x-[18px] gap-y-[12px] flex-wrap'>
                                <CardTag text='High ROI' textSize='0.6875' height='20.5px' MY='0px'/>
                                <CardTag text='Luxury' textSize='0.6875' height='20.5px' MY='0px'/>
                                <CardTag text='Appartment Luxery ' textSize='0.6875' height='20.5px' MY='0px'/>
                                <CardTag text='Appartment' textSize='0.6875' height='20.5px' MY='0px'/>
                                <CardTag text='Luxury' textSize='0.6875' height='20.5px' MY='0px'/>
                                <CardTag text='High ROI' textSize='0.6875' height='20.5px' MY='0px'/>
                                {/* <CardTag text='High ROI' textSize='0.6875' height='20.5px' MY='0px'/> */}
                        </div>
                    </div>
                    <div className='w-full mt-[20px] h-max '>
                        <div className='flex gap-x-[14px] gap-y-[15px] w-[343.221px] mx-auto flex-wrap h-[303.5px]'>
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'90.336px',
                                                mainWidth:'75.28px',
                                                text:'Price AED',
                                                lowerText:'1',
                                                img:priceIcon,
                                                imgWidth:'28.98px',
                                                imgHeight:'28.38px',
                                                imgMT:'11.51px',
                                                textSize:'11.51px',
                                                textWidth:'6.225rem',
                                                textMT:'5.61px',
                                                lowerSectionHeight:'23.91px',
                                                textMB:'7.14px',
                                                lowerTextSize: '11.51px',
                                                lineHeight:'normal',
                                                shadow:'3.2441518306732178px 3.2441518306732178px 4.8662285804748535px 0px #B6C3C5, -4.267942428588867px -4.267942428588867px 4.8662285804748535px 0px #FFF',
                                                rounded:'4.428px'

                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'90.336px',
                                                mainWidth:'75.28px',
                                                text:'Bedrooms',
                                                lowerText:'1',
                                                img:bedIcon,
                                                imgWidth:'28.98px',
                                                imgHeight:'28.38px',
                                                imgMT:'11.51px',
                                                textSize:'11.51px',
                                                textWidth:'6.225rem',
                                                textMT:'5.61px',
                                                lowerSectionHeight:'23.91px',
                                                textMB:'7.14px',
                                                lowerTextSize: '11.51px',
                                                lineHeight:'normal',
                                                shadow:'3.2441518306732178px 3.2441518306732178px 4.8662285804748535px 0px #B6C3C5, -4.267942428588867px -4.267942428588867px 4.8662285804748535px 0px #FFF',
                                                rounded:'4.428px'

                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'90.336px',
                                                mainWidth:'75.28px',
                                                text:'Bathrooms',
                                                lowerText:'1',
                                                img:bathIcon,
                                                imgWidth:'28.98px',
                                                imgHeight:'28.38px',
                                                imgMT:'11.51px',
                                                textSize:'11.51px',
                                                textWidth:'6.225rem',
                                                textMT:'5.61px',
                                                lowerSectionHeight:'23.91px',
                                                textMB:'7.14px',
                                                lowerTextSize: '11.51px',
                                                lineHeight:'normal',
                                                shadow:'3.2441518306732178px 3.2441518306732178px 4.8662285804748535px 0px #B6C3C5, -4.267942428588867px -4.267942428588867px 4.8662285804748535px 0px #FFF',
                                                rounded:'4.428px'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'90.336px',
                                                mainWidth:'75.28px',
                                                text:'Area sq.ft',
                                                lowerText:'888',
                                                img:sizeIcon,
                                                imgWidth:'28.98px',
                                                imgHeight:'28.38px',
                                                imgMT:'11.51px',
                                                textSize:'11.51px',
                                                textWidth:'6.225rem',
                                                textMT:'5.61px',
                                                lowerSectionHeight:'23.91px',
                                                textMB:'7.14px',
                                                lowerTextSize: '11.51px',
                                                lineHeight:'normal',
                                                shadow:'3.2441518306732178px 3.2441518306732178px 4.8662285804748535px 0px #B6C3C5, -4.267942428588867px -4.267942428588867px 4.8662285804748535px 0px #FFF',
                                                rounded:'4.428px'

                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'90.336px',
                                                mainWidth:'75.28px',
                                                text:'Parking',
                                                lowerText:'1',
                                                img:parkingIcon,
                                                imgWidth:'28.98px',
                                                imgHeight:'28.38px',
                                                imgMT:'11.51px',
                                                textSize:'11.51px',
                                                textWidth:'6.225rem',
                                                textMT:'5.61px',
                                                lowerSectionHeight:'23.91px',
                                                textMB:'7.14px',
                                                lowerTextSize: '11.51px',
                                                lineHeight:'normal',
                                                shadow:'3.2441518306732178px 3.2441518306732178px 4.8662285804748535px 0px #B6C3C5, -4.267942428588867px -4.267942428588867px 4.8662285804748535px 0px #FFF',
                                                rounded:'4.428px'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'90.336px',
                                                mainWidth:'75.28px',
                                                text:'Property type',
                                                lowerText:'1',
                                                img:appartmentIcon,
                                                imgWidth:'28.98px',
                                                imgHeight:'28.38px',
                                                imgMT:'11.51px',
                                                textSize:'11.07px',
                                                textWidth:'8.225rem',
                                                textMT:'5.61px',
                                                lowerSectionHeight:'23.91px',
                                                textMB:'7.14px',
                                                lowerTextSize: '11.51px',
                                                lineHeight:'normal',
                                                shadow:'3.2441518306732178px 3.2441518306732178px 4.8662285804748535px 0px #B6C3C5, -4.267942428588867px -4.267942428588867px 4.8662285804748535px 0px #FFF',
                                                rounded:'4.428px'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'90.336px',
                                                mainWidth:'75.28px',
                                                text:'Property type',
                                                lowerText:'1',
                                                img:statusIcon,
                                                imgWidth:'28.98px',
                                                imgHeight:'28.38px',
                                                imgMT:'11.51px',
                                                textSize:'11.07px',
                                                textWidth:'8.225rem',
                                                textMT:'5.61px',
                                                lowerSectionHeight:'23.91px',
                                                textMB:'7.14px',
                                                lowerTextSize: '11.51px',
                                                lineHeight:'normal',
                                                shadow:'3.2441518306732178px 3.2441518306732178px 4.8662285804748535px 0px #B6C3C5, -4.267942428588867px -4.267942428588867px 4.8662285804748535px 0px #FFF',
                                                rounded:'4.428px'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'90.336px',
                                                mainWidth:'75.28px',
                                                text:'Mortgage',
                                                lowerText:'1',
                                                img:mortgageIcon,
                                                imgWidth:'28.98px',
                                                imgHeight:'28.38px',
                                                imgMT:'11.51px',
                                                textSize:'11.51px',
                                                textWidth:'8.225rem',
                                                textMT:'5.61px',
                                                lowerSectionHeight:'23.91px',
                                                textMB:'7.14px',
                                                lowerTextSize: '11.51px',
                                                lineHeight:'normal',
                                                shadow:'3.2441518306732178px 3.2441518306732178px 4.8662285804748535px 0px #B6C3C5, -4.267942428588867px -4.267942428588867px 4.8662285804748535px 0px #FFF',
                                                rounded:'4.428px'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <BoxMaster
                                        BoxType='standerd'
                                        // flipType='zibra'
                                        boxArgs={
                                            {
                                                mainHeight:'90.336px',
                                                mainWidth:'75.28px',
                                                text:'Brochure',
                                                lowerText:'1',
                                                img:brochure,
                                                imgWidth:'28.98px',
                                                imgHeight:'28.38px',
                                                imgMT:'11.51px',
                                                textSize:'11.51px',
                                                textWidth:'8.225rem',
                                                textMT:'5.61px',
                                                lowerSectionHeight:'23.91px',
                                                textMB:'7.14px',
                                                lowerTextSize: '11.51px',
                                                lineHeight:'normal',
                                                shadow:'3.2441518306732178px 3.2441518306732178px 4.8662285804748535px 0px #B6C3C5, -4.267942428588867px -4.267942428588867px 4.8662285804748535px 0px #FFF',
                                                rounded:'4.428px'
                                            }
                                        }
                                        flipArgs={
                                            {
                                                isPrice:true,
                                                content:[{'1':'10000','2':'1000000'}]
                                            }
                                        }
                                    />
                                    <Contact
                                        mainHeight='90.336px'
                                        mainWidth='75.28px'
                                        boxHeight='22.18px'
                                        boxWidth='26.61px'
                                        mT='7.99px'
                                        boxMB='7.1px'
                                        boxMR='7.1px'
                                        lowerSectionHeight='23.91px'
                                        videoHeight='6.96px'
                                        videoWidth='12.47px'
                                        wasupWidth='13.59px'
                                        wasupHeight='13.59px'
                                        phoneWidth='11.9px'
                                        phoneHeight='11.9px'
                                        emailWidth='11.48px'
                                        emailHeight='8.06px'
                                        lowerSectionTextSize='11.51px'
                                        rounded='4.428px'

                                    />
                                    <Agent
                                        Args={{
                                            name:'Nassif',
                                            langs:['Arabic','English'],
                                            speciality:'Downtown',
                                            mainHeight:'90.336px',
                                            mainWidth:'75.28px',
                                            imgWrapperWidth:'62.8px',
                                            imgWrapperHeight:'54.02px',
                                            imgWrapperMT:'6.57px',
                                            agentSectionHeight:'23.91px',
                                            img1Width:'59.3px',
                                            img1Height:'50.4px',
                                            img2Width:'59.3px',
                                            img2Height:'50.4px',
                                            rounded:'4.428px',
                                            nameTextSize:'11.51px',
                                            textSize:'11px',
                                            // rounded:''



                                        }}
                                    />

                        </div>
                    </div>

                    <div className='w-[342px] h-[329.34px] rounded-[8px] shadow-[3.0381929874420166px_3.0381929874420166px_4.253470420837402px_0px_#B6C3C5_inset,-3.0381929874420166px_-3.0381929874420166px_4.861108779907227px_0px_#FFF_inset] my-[20px] mx-auto flex justify-center items-center'>
                        <div className='w-[315.5px] h-[303.82px] rounded-[8px] shadow-[-2.8px_-2.8px_4.48px_#fff,2.8px_2.8px_3.92px_#B6C3C5] flex flex-col items-center  py-[10px] justify-between'>
                            <div className='text-grade text-[20px] font-[600]'>
                                Register your interest
                            </div>
                            <div className=''>

                                <DynamicTextWhit mainHeight='1.9375rem' mainWidth='18.98875rem' icon={userIcon} placeHolder='You full name' imgHeight='1.609375rem' imgWidth='1.609375rem' textWidth='15.6875rem' textSize='14px' textHeight='1.9375rem' imgWrapperWidth='3.321875rem' imgWrapperHeight='1.9375rem'/>
                            </div>
                            <div className=''>

                                <DynamicTextWhit mainHeight='1.9375rem' mainWidth='18.98875rem' icon={userIcon} placeHolder='You full name' imgHeight='1.609375rem' imgWidth='1.609375rem' textWidth='15.6875rem' textSize='14px' textHeight='1.9375rem' imgWrapperWidth='3.321875rem' imgWrapperHeight='1.9375rem'/>
                            </div>
                            <div className=''>

                                <DynamicTextWhit mainHeight='1.9375rem' mainWidth='18.98875rem' icon={userIcon} placeHolder='You full name' imgHeight='1.609375rem' imgWidth='1.609375rem' textWidth='15.6875rem' textSize='14px' textHeight='1.9375rem' imgWrapperWidth='3.321875rem' imgWrapperHeight='1.9375rem'/>
                            </div>

                            <div className='w-[151.9px] h-[30.38px] rounded-[70.9px] shadow-[3.5463335514068604px_3.5463335514068604px_4.964867115020752px_0px_#B6C3C5,-3.5463335514068604px_-3.5463335514068604px_5.674133777618408px_0px_#FFF] border-[1px] border-[#DCE3E3] flex justify-center items-center'>
                                <div className='text-[15.7px] font-[600] text-grade'>
                                    Submit Details
                                </div>
                            </div>
                            <div className='text-[#000] text-[11px]'>
                                By clicking Submit, you agree to our Terms & Privacy Policy.
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>

  )
}

export default ProjectInfo
