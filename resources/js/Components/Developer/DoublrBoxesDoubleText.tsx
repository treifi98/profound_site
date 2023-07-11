import React from 'react'

import beatchFront from '../../../assets/Newcircle.png'
import NewCardImage from '../Home/Cards/Common/NewCardImage'

interface Props{
    screen?:Boolean
}
const DoublrBoxesDoubleText = (props:Props) => {
    return (
        <>
            {
                props.screen?
                (
                    <div className='w-[91.25rem] h-[76.25rem] rounded-[0.9822875rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] flex justify-center'>
                        <div className='w-[86.5rem] h-[69.8125rem] mt-[1.9375rem]'>
                            <div className='w-full flex h-[33.625rem] justify-between'>
                                <div className='w-[41.4375rem] h-[32.1875rem] flex flex-col justify-center items-center'>
                                    <div className='w-full text-[2rem] font-[600] text-grade'>
                                        Latest Projects By Emaar
                                    </div>
                                    <div className='text-[1.25rem] text-grade leading-[2rem] mt-[1.0625rem]'>
                                        One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecological system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and thealso supports the Dream for Future Africa Foundation to ensure opportunity corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future
                                    </div>
                                </div>
                                <div className='w-[42.4375rem] h-[33.625rem] rounded-[0.9375rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.294195625rem_-0.294195625rem_0.58839125rem_0.1470975rem_#FFFFFF,inset_0.294195625rem_0.294195625rem_0.58839125rem_#BABFBF] flex justify-center items-center'>
                                    <img src={beatchFront} alt="" className='w-[39.875rem] h-[31.1875rem] rounded-[0.9375rem]'/>
                                </div>
                            </div>


                            <div className='w-full flex h-[33.625rem] justify-between mt-[2.0625rem]'>
                                <div className='w-[42.4375rem] h-[33.625rem] rounded-[0.9375rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.294195625rem_-0.294195625rem_0.58839125rem_0.1470975rem_#FFFFFF,inset_0.294195625rem_0.294195625rem_0.58839125rem_#BABFBF] flex justify-center items-center'>
                                    <img src={beatchFront} alt="" className='w-[39.875rem] h-[31.1875rem] rounded-[0.9375rem]'/>
                                </div>
                                <div className='w-[41.4375rem] h-[32.1875rem] flex flex-col justify-center items-center'>
                                    <div className='text-[1.25rem] text-grade leading-[2rem]'>
                                        One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecological system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and thealso supports the Dream for Future Africa Foundation to ensure opportunity corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ):
                (
                    <div className='w-[375px] flex flex-col   h-max bg-[#E6EDED] shadow-[6.286655426025391px_6.286655426025391px_12.573310852050781px_0px_#BABFBF,-6.286655426025391px_-6.286655426025391px_12.573310852050781px_3.1433277130126953px_#FFF] mobil-comp'>
                        <div className='w-[345px]  rounded-[0rem_8px] h-max  relativez-[1] mb-[20px] mt-[15px] mx-auto'>
                            <div className='w-[345px] h-[272.57px] border-[1px] border-[#DCE3E3] shadow-[2.4332876205444336px_2.4332876205444336px_4.866575241088867px_0px_#BABFBF_inset,-2.4332876205444336px_-2.4332876205444336px_4.866575241088867px_1.2166438102722168px_#FFF_inset] rounded-[8px] flex justify-center items-center'>
                                <div className='w-[321.76px] h-[251.1px] rounded-[0.484625rem] shadow-[2.4332876205444336px_2.4332876205444336px_4.866575241088867px_0px_#BABFBF,-2.4332876205444336px_-2.4332876205444336px_4.866575241088867px_1.2166438102722168px_#FFF]'>
                                    <NewCardImage src={beatchFront} rounded='0.484625' width='321.76px' height='251.1px'/>
                                </div>
                            </div>
                            <div className='w-[310.76px] mx-auto mt-[20px] h-max rounded-[8px]'>
                                <div className='w-[310.76px] h-max '>
                                    <div className='text-grade text-[1.25rem] font-[600]'>
                                        Latest Projects By Emaar
                                    </div>
                                    <div className='mt-[0.5rem] text-[14px] text-grade whitespace-break-spaces leading-[175%] w-[321px] mx-auto'>
                                        One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecological system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and thealso supports the Dream for Future Africa Foundation to ensure opportunity corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[345px]  rounded-[8px] h-max relative z-[2] mb-[15px] mx-auto'>
                            <div className='w-[345px] h-[272.57px] border-[1px] border-[#DCE3E3] shadow-[2.4332876205444336px_2.4332876205444336px_4.866575241088867px_0px_#BABFBF_inset,-2.4332876205444336px_-2.4332876205444336px_4.866575241088867px_1.2166438102722168px_#FFF_inset] rounded-[8px] flex justify-center items-center'>
                                <div className='w-[321.76px] h-[251.1px] rounded-[0.484625rem] shadow-[2.4332876205444336px_2.4332876205444336px_4.866575241088867px_0px_#BABFBF,-2.4332876205444336px_-2.4332876205444336px_4.866575241088867px_1.2166438102722168px_#FFF]'>
                                    <NewCardImage src={beatchFront} rounded='0.484625' width='321.76px' height='251.1px'/>
                                </div>
                            </div>
                            <div className='w-[310.76px] mx-auto mt-[20px] h-max rounded-[8px]'>
                                <div className='w-[310.76px] h-max mx-auto'>
                                    <div className='text-grade text-[1.25rem] font-[600]'>
                                        Latest Projects By Emaar
                                    </div>
                                    <div className='mt-[0.5rem] text-[14px] text-grade leading-[175%] w-[321px] mx-auto'>
                                        One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecological system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and thealso supports the Dream for Future Africa Foundation to ensure opportunity corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future
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

export default DoublrBoxesDoubleText
