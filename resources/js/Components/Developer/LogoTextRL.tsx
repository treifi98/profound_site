import React from 'react'


import imgLT from '../../../assets/imgLT.png'
import imgRT from '../../../assets/imgRT.png'
import imgLB from '../../../assets/imgLB.png'
import imgRB from '../../../assets/imgRB.png'
interface Props{
    screen?:Boolean
}
const LogoTextRL = (props:Props) => {
  return (
    <>
        {
            props.screen?
            (
                <div className='w-[91.25rem] h-[38.125rem] flex items-center justify-center bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.9822875rem]'>
                    <div className='w-[86.1875rem] h-[33.6875rem] flex gap-[2.5rem]'>

                        <div className='h-full w-[50.375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.5rem_-0.625rem_0.9375rem_#FFFFFF,inset_0.5rem_0.5rem_0.9375rem_#B6C3C5] rounded-[0.9822875rem] box-border py-[2rem] flex justify-center items-center'>


                            <div className='w-[46.0625rem]'>
                                <div className='font-[600] text-grade text-[2rem]'>
                                    Latest Projects By Emaar
                                </div>
                                <div className='text-[1.25rem] leading-[2rem] text-grade mt-[1.25rem]'>
                                    One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecological system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and thealso supports the Dream for Future Africa Foundation to ensure opportunity
                                    corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future
                                </div>
                            </div>
                        </div>
                        <div className='w-[33.299375rem] h-full flex flex-wrap'>
                            <div className='w-[16.125rem] h-[16.28125rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                                <img src={imgLT} alt="" className='w-[14.931875rem] h-[15.19625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem]'/>

                            </div>
                            <div className='w-[16.125rem] h-[16.28125rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem] ml-[1rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                                <img src={imgRT} alt="" className='w-[14.931875rem] h-[15.19625rem] rounded-[5.4473125rem_0.367384375rem_5.4473125rem_0.367384375rem]'/>

                            </div>
                            <div className='w-[16.125rem] h-[16.28125rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem] mr-[1rem] mt-[1rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                                <img src={imgLB} alt="" className='w-[14.931875rem] h-[15.19625rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem]'/>
                            </div>
                            <div className='w-[16.125rem] h-[16.28125rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] mt-[1rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                                <img src={imgRB} alt="" className='w-[14.931875rem] h-[15.19625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem]'/>

                            </div>
                        </div>
                    </div>

                </div>
            ):
            (
                <div className='w-[100vw] h-max flex items-center justify-center bg-[#E6EDED] shadow-[6.286655426025391px_6.286655426025391px_12.573310852050781px_0px_#BABFBF,-6.286655426025391px_-6.286655426025391px_12.573310852050781px_3.1433277130126953px_#FFF]'>
                    <div className='w-[20.8125rem] h-max flex gap-[1rem] flex-col-reverse py-[1rem]'>

                        <div className='h-full w-full mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[4px_4px_7px_0px_rgba(186,191,191,0.80)_inset,-5px_-5px_10px_0px_#FFF_inset] rounded-[0.625rem] box-border py-[1.31rem] flex justify-center items-center'>


                            <div className='w-[96%] mx-auto'>
                                <div className='font-[600] text-grade text-[1.25rem]'>
                                    Latest Projects By Emaar
                                </div>
                                <div className='text-[0.875remrem] leading-[1.5rem] text-grade mt-[0.69rem]'>
                                    One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecological system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and thealso supports the Dream for Future Africa Foundation to ensure opportunity
                                    corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full flex flex-wrap'>
                            <div className='w-[9.9rem] border-[1px] border-[#DCE3E3] h-[9.993125rem] rounded-[0.263375rem_3.3433125rem_0.37625rem_3.3433125rem] shadow-[1.3988847732543945px_1.3988847732543945px_2.797769546508789px_0px_#BABFBF_inset,-1.3988847732543945px_-1.3988847732543945px_2.797769546508789px_0.6994423866271973px_#FFF_inset] flex justify-center items-center'>
                                <div className='w-[9.2125rem] h-[9.268125rem] border-[1px] border-[#DCE3E3] rounded-[0.263375rem_3.3433125rem_0.37625rem_3.3433125rem] flex justify-center items-center shadow-[1.3988847732543945px_1.3988847732543945px_2.797769546508789px_0px_#BABFBF,-1.3988847732543945px_-1.3988847732543945px_2.797769546508789px_0.6994423866271973px_#FFF] '>

                                    <img src={imgLT} alt="" className='w-[9.2125rem] h-[9.268125rem] rounded-[0.263375rem_3.3433125rem_0.37625rem_3.3433125rem]'/>
                                </div>

                            </div>
                            <div className='w-[9.9rem] border-[1px] border-[#DCE3E3] h-[9.993125rem] rounded-[3.3433125rem_0.32825rem_3.3433125rem_0.2185625rem] ml-[1rem] shadow-[1.3988847732543945px_1.3988847732543945px_2.797769546508789px_0px_#BABFBF_inset,-1.3988847732543945px_-1.3988847732543945px_2.797769546508789px_0.6994423866271973px_#FFF_inset] flex justify-center items-center'>
                                <div className='w-[9.2125rem] h-[9.268125rem] border-[1px] border-[#DCE3E3] rounded-[3.3433125rem_0.32825rem_3.3433125rem_0.2185625rem] flex justify-center items-center shadow-[1.3988847732543945px_1.3988847732543945px_2.797769546508789px_0px_#BABFBF,-1.3988847732543945px_-1.3988847732543945px_2.797769546508789px_0.6994423866271973px_#FFF] '>

                                    <img src={imgRT} alt="" className='w-[9.2125rem] h-[9.268125rem] rounded-[rounded-[3.3433125rem_0.32825rem_3.3433125rem_0.2185625rem]'/>
                                </div>

                            </div>
                            <div className='w-[9.9rem] border-[1px] border-[#DCE3E3] h-[9.993125rem] rounded-[3.3433125rem_0.32825rem_3.3433125rem_0.2185625rem] mr-[1rem] mt-[1rem] shadow-[1.3988847732543945px_1.3988847732543945px_2.797769546508789px_0px_#BABFBF_inset,-1.3988847732543945px_-1.3988847732543945px_2.797769546508789px_0.6994423866271973px_#FFF_inset] flex justify-center items-center'>
                                <div className='w-[9.2125rem] h-[9.268125rem] border-[1px] border-[#DCE3E3] rounded-[3.3433125rem_0.32825rem_3.3433125rem_0.2185625rem] flex justify-center items-center shadow-[1.3988847732543945px_1.3988847732543945px_2.797769546508789px_0px_#BABFBF,-1.3988847732543945px_-1.3988847732543945px_2.797769546508789px_0.6994423866271973px_#FFF] '>

                                    <img src={imgLB} alt="" className='w-[9.2125rem] h-[9.268125rem] rounded-[3.3433125rem_0.32825rem_3.3433125rem_0.2185625rem]'/>
                                </div>
                            </div>
                            <div className='w-[9.9rem] border-[1px] border-[#DCE3E3] h-[9.993125rem] rounded-[0.263375rem_3.3433125rem_0.37625rem_3.3433125rem] mt-[1rem] shadow-[1.3988847732543945px_1.3988847732543945px_2.797769546508789px_0px_#BABFBF_inset,-1.3988847732543945px_-1.3988847732543945px_2.797769546508789px_0.6994423866271973px_#FFF_inset] flex justify-center items-center'>
                                <div className='w-[9.2125rem] h-[9.268125rem] border-[1px] border-[#DCE3E3] rounded-[0.263375rem_3.3433125rem_0.37625rem_3.3433125rem] flex justify-center items-center shadow-[1.3988847732543945px_1.3988847732543945px_2.797769546508789px_0px_#BABFBF,-1.3988847732543945px_-1.3988847732543945px_2.797769546508789px_0.6994423866271973px_#FFF] '>

                                    <img src={imgRB} alt="" className='w-[9.2125rem] h-[9.268125rem] rounded-[0.263375rem_3.3433125rem_0.37625rem_3.3433125rem]'/>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    </>

  )
}

export default LogoTextRL
