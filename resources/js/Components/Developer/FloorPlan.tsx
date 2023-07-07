import React from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'

import cashIcon from '../../../assets/cahIcon.svg'
import floorplanIcon from '../../../assets/floor.svg'
import bedIcon from '../../../assets/bed_icon.svg'
import priceIcon from '../../../assets/price_tag_og.svg'
import sizeIcon from '../../../assets/size.svg'
import PrecantageSmall from './PrecantageSmall'
import FloorPlanSwiper from './FloorPlanSwiper'
import InfoShape from './InfoShape'
import BedButton from './BedButton'
import AboutSwiperMobile from './AboutSwiperMobile'
interface Props{
    screen?:Boolean
}
const FloorPlan = (props:Props) => {
    return (
        <>
            {
                props.screen?(
                    <div className='w-[91.25rem] h-[38.125rem] rounded-[0.98125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF]'>
                        <div className='w-[91.25rem] h-[3.75rem] rounded-[0.9375rem_0.9375rem_0rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center'>
                            <img src={cashIcon} alt="" className='w-[2.5925rem] h-[2.914375rem] ml-[0.86rem]' />
                            <div className='ml-[0.86rem] h-full'>
                                <InElementSeperator width='0.5rem'/>
                            </div>
                            <div className='text-[1.625rem] font-[600] ml-[0.375rem] text-grade'>
                                Payment Plan Creek Rise tower 2 west side
                            </div>
                            <div className='w-[8rem] h-[2rem] rounded-lg border-[#000] border-[0.0625rem] justify-self-center ml-auto mr-[5.5rem]'></div>
                        </div>
                        <div className='w-[87.96875rem] mx-auto flex mt-[1.625rem] '>
                            <div className='w-[31.875rem] h-[31.8125rem] '>
                                <div className='w-[31.4375rem] h-[5.889375rem] flex flex-wrap gap-x-[1.25rem] gap-y-[1.875rem]'>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                </div>

                                <div className='mt-[2.423125rem] w-[31.875] h-[23.1875rem] rounded-[0.85rem] shadow-[inset_-0.2830525rem_-0.2830525rem_0.45288375rem_#FFFFFF,inset_0.2830525rem_0.2830525rem_0.396273125rem_#B6C3C5] overflow-hidden flex flex-col justify-evenly items-center overflow-hidden'>
                                    <InfoShape bluePillText='3 beds' img={bedIcon} text='Number of Bedrooms' barHeight='2.8125rem' barWidth='24.5625rem' bluePillWidth='8.46125rem' circleWidth='5.625rem' mainHeight='5.625rem' mainWidth='28.33625rem' imgHeight='2.3125rem' imgWidth='3.125rem'/>
                                    <InfoShape bluePillText='3 beds' img={bedIcon} text='Number of Bedrooms' barHeight='2.8125rem' barWidth='24.5625rem' bluePillWidth='8.46125rem' circleWidth='5.625rem' mainHeight='5.625rem' mainWidth='28.33625rem' imgHeight='2.3125rem' imgWidth='3.125rem'/>
                                    <InfoShape bluePillText='3 beds' img={bedIcon} text='Number of Bedrooms' barHeight='2.8125rem' barWidth='24.5625rem' bluePillWidth='8.46125rem' circleWidth='5.625rem' mainHeight='5.625rem' mainWidth='28.33625rem' imgHeight='2.3125rem' imgWidth='3.125rem'/>
                                </div>
                            </div>
                            <div className='w-[53.90625rem] h-[31.8125rem] ml-[2.1875rem] flex justify-center'>

                                <FloorPlanSwiper/>
                            </div>
                        </div>
                    </div>
                ):
                (
                    <div className='w-[375px] h-max shadow-[4px_4px_8px_0px_#BABFBF,-4px_-4px_8px_0px_#FFF] overflow-hidden'>
                        <div className='w-full h-max shadow-[4px_4px_8px_0px_#BABFBF,-4px_-4px_8px_0px_#FFF] overflow-hidden'>

                            <div className='w-full min-h-[49px] flex items-center relative'>
                                <img src={floorplanIcon} alt="" className='w-[35px] h-[35px] ml-[7px]' />
                                <div className='min-h-[49px]  ml-[7px] h-full'>

                                    <InElementSeperator width='4px' auto={true}/>
                                </div>
                                <div className='text-grade text-[20px] font-[600] ml-[7px] leading-[126.8%] my-[4.5px]'>
                                    Floor Plans of  Creek Rise tower 2 west side
                                </div>
                            </div>
                            <div className='h-[4px]  w-full'>

                                <InElementSeperator width='100%' height='4px' />
                            </div>
                            <div className='w-[337px] flex flex-wrap mt-[14px] gap-[13.87px] mx-auto mb-[13px]'>
                                <BedButton screen={props.screen}/>
                                <BedButton screen={props.screen}/>
                                <BedButton screen={props.screen}/>
                                <BedButton screen={props.screen}/>
                                <BedButton screen={props.screen}/>
                                <BedButton screen={props.screen}/>
                                <BedButton screen={props.screen}/>
                                <BedButton screen={props.screen}/>
                            </div>
                        </div>

                        <div className='w-[335px] h-[243.7px] rounded-[8px] mx-auto shadow-[3.0234644412994385px_3.0234644412994385px_4.232849597930908px_0px_#B6C3C5_inset,-3.0234644412994385px_-3.0234644412994385px_4.83754301071167px_0px_#FFF_inset] border-[1px] border-[#DCE3E3] my-[20px] flex items-center'>
                            <div className='w-[18.6125rem] h-max mx-auto flex flex-col gap-[16.42px] justify-center items-center'>
                                <div className='mx-auto w-min mt-[0px]  except'>

                                    <InfoShape img={bedIcon} text='Number of Bedrooms ' bluePillText='3 beds' mainWidth='18.6125rem' mainHeight='3.694375rem' barWidth='16.13375rem' barHeight='1.86106rem' circleWidth='3.694375rem' imgHeight='2.188125rem' imgWidth='2.02rem' imgMt='0.78125rem' imgMl='0.875rem' bluePillWidth='5.5575rem' textSize='14px' intersection={1.23125} bluePillTextSize='13.7px'/>
                                </div>

                                <div className=''>

                                    <InfoShape img={sizeIcon} text='Area in Sq.ft' bluePillText='2007' mainWidth='18.6125rem' mainHeight='3.694375rem' barWidth='16.13375rem' barHeight='1.86106rem' circleWidth='3.694375rem' imgHeight='1.873125rem' imgWidth='2.05rem' imgMt='0.903125rem' imgMl='0.82125rem' bluePillWidth='5.5575rem' textSize='14px' intersection={1.23125} bluePillTextSize='13.7px' key={1198}/>
                                </div>
                                <div className='mx-auto w-min mt-[0px]  except'>

                                    <InfoShape img={priceIcon} text='Price starting' bluePillText='1,125,0000' mainWidth='18.6125rem' mainHeight='3.694375rem' barWidth='16.13375rem' barHeight='1.86106rem' circleWidth='3.694375rem' imgHeight='2.05625rem' imgWidth='2.05625rem' imgMt='00.82125rem' imgMl='0.73125rem' bluePillWidth='5.5575rem' textSize='14px' intersection={1.23125} bluePillTextSize='13.7px'/>
                                </div>

                            </div>
                        </div>

                        <div className='w-[335px] h-[231.05px] rounded-[8px] shadow-[2.2696468830108643px_2.2696468830108643px_3.1775054931640625px_0px_#B6C3C5_inset,-2.2696468830108643px_-2.2696468830108643px_3.631434679031372px_0px_#FFF_inset] border-[1px] border-[#DCE3E3] flex justify-center items-center mx-auto mb-[20px]'>
                            <div className='w-[316.39px] h-[212.89px] rounded-[8px] shadow-[-2.09px_-2.09px_3.35px_#fff,2.09px_2.09px_2.93px_#B6C3C5]'>
                                <AboutSwiperMobile rounded='8px'/>
                            </div>
                        </div>


                    </div>
                )
            }
        </>

    )
}

export default FloorPlan
