import React from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'

import cashIcon from '../../../assets/cahIcon.svg'
import bedIcon from '../../../assets/bed_icon.svg'
import priceIcon from '../../../assets/price_tag_og.svg'
import PrecantageSmall from './PrecantageSmall'
import FloorPlanSwiper from './FloorPlanSwiper'
import PrecantageCard from './PrecantageCard'
import BedButton from './BedButton'
interface Props{
    screen?:Boolean
}
const PaymentPlanNF4 = (props:Props) => {
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
                        <div className='w-[87.71875rem] mx-auto mt-[1.625rem]'>
                                <div className='w-[86.625] h-[4.951875rem] flex flex-wrap gap-x-[1.25rem] gap-y-[0.9375rem]'>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                    <BedButton screen={props.screen}/>
                                </div>

                            <div className='mt-[0.1rem] w-full flex'>

                                <div className=' w-[31.4375rem] h-[25.1875rem] rounded-[0.85rem] shadow-[inset_-0.2830525rem_-0.2830525rem_0.45288375rem_#FFFFFF,inset_0.2830525rem_0.2830525rem_0.396273125rem_#B6C3C5] overflow-hidden'>
                                    <div className='mt-[1.315rem] mx-auto w-[28.75rem] h-[4.58125rem] rounded-[0.45rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.50214625rem_-0.50214625rem_0.5725375rem_#FFFFFF,0.381691875rem_0.381691875rem_0.5725375rem_#B6C3C5] overflow-hidden flex'>
                                        <div className='w-[4.70875rem] h-full shadow-[-4.53929px_-4.53929px_7.26286px_#FFFFFF,4.53929px_4.53929px_6.355px_#B6C3C5] flex justify-center items-center'>
                                            <img src={bedIcon} alt="" className='w-[3.125rem] h-[2.25rem]' />
                                        </div>
                                        <div className='w-[10.045625rem] flex flex-col justify-evenly items-center'>
                                            <div className='text-grade font-[600] text-[1.01875rem]'>
                                                Bedrooms
                                            </div>
                                            <div>
                                                <InElementSeperator height='0.22625rem' width='10.07375rem' shadow='inset -0.114135625rem -0.114135625rem 0.182616875rem #FFFFFF, inset 0.114135625rem 0.114135625rem 0.15979rem #B6C3C5'/>
                                            </div>
                                            <div className='text-grade font-[600] text-[1.01875rem]'>
                                                One Bedroom
                                            </div>

                                        </div>
                                        <div className='w-[4.70875rem] h-full shadow-[-4.53929px_-4.53929px_7.26286px_#FFFFFF,4.53929px_4.53929px_6.355px_#B6C3C5] flex justify-center items-center'>
                                            <img src={priceIcon} alt="" className='w-[2.9375rem] h-[2.875rem]' />
                                        </div>
                                        <div className='w-[10.045625rem] flex flex-col justify-evenly items-center'>
                                            <div className='text-grade font-[600] text-[1.01875rem]'>
                                                Total Price AED
                                            </div>
                                            <div>
                                                <InElementSeperator height='0.22625rem' width='10.07375rem' shadow='inset -0.114135625rem -0.114135625rem 0.182616875rem #FFFFFF, inset 0.114135625rem 0.114135625rem 0.15979rem #B6C3C5'/>
                                            </div>
                                            <div className='text-grade font-[600] text-[1.01875rem]'>
                                                5,516,821.93
                                            </div>

                                        </div>
                                    </div>
                                    <div className='w-[29.005rem] h-[16.4375rem] mt-[1.34125rem] mx-auto rounded-[0.54375rem] overflow-hidden flex shadow-[-0.47717375rem_-0.47717375rem_0.544065rem_#FFFFFF,0.36271rem_0.36271rem_0.544065rem_#B6C3C5] relative'>
                                        <div className='h-full w-[7.3125rem] bg-[#E6EDED]'>
                                            <div className='mt-[2.021875rem] mx-auto w-min'>
                                                <PrecantageSmall screen={props.screen} prcantage={10}key={1}/>
                                            </div>
                                            <div className='text-grade text-[1.08875rem] font-[600] w-min mx-auto text-center mt-[1.241875rem]'>
                                                Down Payment
                                            </div>
                                            <div className='text-grade font-[600] mt-[2rem] text-[1.03rem] w-min mx-auto mb-[0.97rem]'>
                                                516,821.93
                                            </div>

                                        </div>
                                        <div className='h-full w-[7.3125rem] bg-[#CED7D8]'>
                                            <div className='mt-[2.021875rem] mx-auto w-min'>
                                                <PrecantageSmall screen={props.screen} prcantage={80}key={12} bg='#CED7D8'/>
                                            </div>
                                            <div className='text-grade text-[1.08875rem] font-[600] w-min mx-auto text-center mt-[1.241875rem]'>
                                                During constriction
                                            </div>
                                            <div className='text-grade font-[600] mt-[2rem] text-[1.03rem] w-min mx-auto mb-[0.97rem]'>
                                                516,821.93
                                            </div>

                                        </div>
                                        <div className='h-full w-[7.3125rem] bg-[#9DAFB2]'>
                                            <div className='mt-[2.021875rem] mx-auto w-min'>
                                                <PrecantageSmall screen={props.screen} prcantage={30}key={13} bg='#9DAFB2'/>
                                            </div>
                                            <div className='text-grade text-[1.08875rem] font-[600] w-min mx-auto text-center mt-[1.241875rem]'>
                                                Handover In Q2021
                                            </div>
                                            <div className='text-grade font-[600] mt-[2rem] text-[1.03rem] w-min mx-auto mb-[0.97rem]'>
                                                516,821.93
                                            </div>

                                        </div>
                                        <div className='h-full w-[7.3125rem] bg-[#547378]'>
                                            <div className='mt-[2.021875rem] mx-auto w-min'>
                                                <PrecantageSmall screen={props.screen} prcantage={30} bg='#547378'/>
                                            </div>
                                            <div className='text-grade text-[1.08875rem] font-[600] w-min mx-auto text-center mt-[1.241875rem]'>
                                                Post handover
                                            </div>
                                            <div className='text-grade font-[600] mt-[2rem] text-[1.03rem] w-min mx-auto mb-[0.97rem]'>
                                                516,821.93
                                            </div>

                                        </div>
                                        <div className='absolute top-[12.7375rem] left-0 w-[29.990625rem]'>
                                            <InElementSeperator height='0.400625rem' width='28.990625rem' shadow='inset -4.31354px -4.31354px 6.90167px #FFFFFF, inset 4.31354px 4.31354px 6.03896px #B6C3C5' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[53.1255rem] h-[25.1875rem] ml-[2.0625rem] flex flex-wrap justify-center gap-y-[2.0625rem] gap-x-[1.5625rem]'>

                                    {/* <FloorPlanSwiper/> */}
                                    <PrecantageCard screen={props.screen}/>
                                    <PrecantageCard screen={props.screen}/>
                                    <PrecantageCard screen={props.screen}/>
                                    <PrecantageCard screen={props.screen}/>
                                    <PrecantageCard screen={props.screen}/>
                                    <PrecantageCard screen={props.screen}/>
                                    <PrecantageCard screen={props.screen}/>
                                    <PrecantageCard screen={props.screen}/>
                                    <PrecantageCard screen={props.screen}/>
                                    <PrecantageCard screen={props.screen}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ):
                (
                    <div className='w-[375px] h-max  shadow-[-4px_-4px_8px_0.196458125rem_#FFFFFF,4px_4px_8px_#BABFBF] overflow-hidden'>
                        <div className='w-[375px] h-max border-[0.0625rem] shadow-[2.699549436569214px_2.699549436569214px_3.7793691158294678px_0px_#B6C3C5,-2.699549436569214px_-2.699549436569214px_4.319278717041016px_0px_#FFF] '>
                            <div className='flex items-center w-full'>

                                <img src={cashIcon} alt="" className='w-[33px] h-[34.4px] ml-[7px]' />
                                <div className='ml-[7px] h-full'>
                                    <InElementSeperator width='4px' auto={true}/>
                                </div>
                                <div className='text-[20px] font-[600] ml-[7px] text-grade leading-[25px]'>
                                    Payment Plan Creek Rise tower 2 west side
                                </div>
                            </div>
                            <div>
                                <InElementSeperator width='100%' height='4px'/>
                                <div className='w-[375px] h-max flex flex-wrap gap-x-[13.8px] gap-y-[12px] my-[12px] mx-auto justify-center'>
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
                        </div>
                        <div className='w-[375px] mx-auto mt-[20px]'>


                            <div className='w-full'>

                                <div className=' w-[342px] h-[273.2px] rounded-[8px] shadow-[3.0702433586120605px_3.0702433586120605px_4.298340320587158px_0px_#B6C3C5_inset,-3.0702433586120605px_-3.0702433586120605px_4.912388801574707px_0px_#FFF_inset] overflow-hidden mx-auto'>
                                    <div className='mt-[1.315rem] mx-auto w-[311.85px] h-[49.723px] rounded-[8px] border-[#DCE3E3] border-[0.0625rem] shadow-[4.140178680419922px_4.140178680419922px_6.210267543792725px_0px_#B6C3C5,-5.446737766265869px_-5.446737766265869px_6.210267543792725px_0px_#FFF] overflow-hidden flex'>
                                        <div className='w-[49.85px] h-full shadow-[3.077329635620117px_3.077329635620117px_4.308261871337891px_0px_#B6C3C5,-3.077329635620117px_-3.077329635620117px_4.923727989196777px_0px_#FFF] flex justify-center items-center'>
                                            <img src={bedIcon} alt="" className='w-[33.89px] h-[24.4px]' />
                                        </div>
                                        <div className='w-[109px] flex flex-col justify-evenly items-center'>
                                            <div className='text-grade font-[600] text-[13.3px]'>
                                                Bedrooms
                                            </div>
                                            <div>
                                                <InElementSeperator height='2.5px' width='109px' shadow='inset -0.114135625rem -0.114135625rem 0.182616875rem #FFFFFF, inset 0.114135625rem 0.114135625rem 0.15979rem #B6C3C5'/>
                                            </div>
                                            <div className='text-grade font-[600] text-[13.3px]'>
                                                One Bedroom
                                            </div>

                                        </div>
                                        <div className='w-[49.85px] h-full shadow-[3.077329635620117px_3.077329635620117px_4.308261871337891px_0px_#B6C3C5,-3.077329635620117px_-3.077329635620117px_4.923727989196777px_0px_#FFF] flex justify-center items-center'>
                                            <img src={priceIcon} alt="" className='w-[31.8px] h-[31.1px]' />
                                        </div>
                                        <div className='w-[109px] flex flex-col justify-evenly items-center'>
                                            <div className='text-grade font-[600] text-[13.3px]'>
                                                Total Price AED
                                            </div>
                                            <div>
                                                <InElementSeperator height='2.5px' width='109px' shadow='inset -0.114135625rem -0.114135625rem 0.182616875rem #FFFFFF, inset 0.114135625rem 0.114135625rem 0.15979rem #B6C3C5'/>
                                            </div>
                                            <div className='text-grade font-[600] text-[13.3px]'>
                                                5,516,821.93
                                            </div>

                                        </div>
                                    </div>
                                    <div className='w-[314.62px] h-[178.3px] mt-[15px] mx-auto rounded-[8px] overflow-hidden flex shadow-[3.934282064437866px_3.934282064437866px_5.901423454284668px_0px_#B6C3C5,-5.175863742828369px_-5.175863742828369px_5.901423454284668px_0px_#FFF] relative'>
                                        <div className='h-[177.6px] w-[79.31px] bg-[#E6EDED]'>
                                            <div className='mt-[21.25px] mx-auto w-min'>
                                                <PrecantageSmall screen={props.screen} prcantage={10}key={1}/>
                                            </div>
                                            <div className='text-grade text-[12px] font-[600] w-min mx-auto text-center mt-[13.47px]'>
                                                Down Payment
                                            </div>
                                            <div className='text-grade font-[600] mt-[20px] text-[12px] w-min mx-auto mb-[0.97rem]'>
                                                516,821.93
                                            </div>

                                        </div>
                                        <div className='h-[177.6px] w-[79.31px] bg-[#CED7D8]'>
                                            <div className='mt-[21.25px] mx-auto w-min'>
                                                <PrecantageSmall screen={props.screen} prcantage={80}key={12} bg='#CED7D8'/>
                                            </div>
                                            <div className='text-grade text-[12px] font-[600] w-min mx-auto text-center mt-[13.47px]'>
                                                During constriction
                                            </div>
                                            <div className='text-grade font-[600] mt-[20px] text-[12px] w-min mx-auto mb-[0.97rem]'>
                                                516,821.93
                                            </div>

                                        </div>
                                        <div className='h-[177.6px] w-[79.31px] bg-[#9DAFB2]'>
                                            <div className='mt-[21.25px] mx-auto w-min'>
                                                <PrecantageSmall screen={props.screen} prcantage={30}key={13} bg='#9DAFB2' />
                                            </div>
                                            <div className='text-grade text-[12px] font-[600] w-min mx-auto text-center mt-[13.47px]'>
                                                Handover In Q2021
                                            </div>
                                            <div className='text-grade font-[600] mt-[20px] text-[12px] w-min mx-auto mb-[0.97rem]'>
                                                516,821.93
                                            </div>

                                        </div>
                                        <div className='h-[177.6px] w-[79.31px] bg-[#547378]'>
                                            <div className='mt-[21.25px] mx-auto w-min'>
                                                <PrecantageSmall screen={props.screen} prcantage={30} bg='#547378'/>
                                            </div>
                                            <div className='text-grade text-[12px] font-[600] w-min mx-auto text-center mt-[13.47px]'>
                                                Post handover
                                            </div>
                                            <div className='text-grade font-[600] mt-[20px] text-[12px] w-min mx-auto mb-[0.97rem]'>
                                                516,821.93
                                            </div>

                                        </div>
                                        <div className='absolute top-[140px] left-0 w-[29.990625rem]'>
                                            <InElementSeperator height='4.3px' width='314.62px' shadow='inset -4.31354px -4.31354px 6.90167px #FFFFFF, inset 4.31354px 4.31354px 6.03896px #B6C3C5' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[342px] h-max mx-auto flex flex-wrap justify-start gap-y-[15px] gap-x-[12px] my-[20px]'>

                                    {/* <FloorPlanSwiper/> */}
                                    <PrecantageCard screen={props.screen} />
                                    <PrecantageCard screen={props.screen} />
                                    <PrecantageCard screen={props.screen} />
                                    <PrecantageCard screen={props.screen} />
                                    <PrecantageCard screen={props.screen} />
                                    <PrecantageCard screen={props.screen} />
                                    <PrecantageCard screen={props.screen} />
                                    <PrecantageCard screen={props.screen} />
                                    <PrecantageCard screen={props.screen} />
                                    <PrecantageCard screen={props.screen} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default PaymentPlanNF4
