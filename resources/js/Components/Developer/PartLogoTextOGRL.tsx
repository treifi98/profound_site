import React from 'react'


import imgLT from '../../../assets/imgLT.png'
import imgRT from '../../../assets/imgRT.png'
import imgLB from '../../../assets/imgLB.png'
import imgRB from '../../../assets/imgRB.png'

interface Props{
    screen?:Boolean
}
const PartLogoTextOGRL = (props:Props) => {
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
                        <div className='w-[33.256875rem] h-full flex justify-center items-center'>
                            <div className='w-full h-full flex justify-center items-center rounded-[11.25rem_1.10446875rem_11.25rem_0.7354875rem] border-[0.0625rem] border-[#CAD4D5] shadow-[inset_-0.294195625rem_-0.294195625rem_0.58839125rem_0.1470975rem_#FFFFFF,inset_0.294195625rem_0.294195625rem_0.58839125rem_#BABFBF]'>
                                <img src={imgRT} alt="" className='w-[30.838125rem] h-[31.383125rem] rounded-[11.25rem_1.10446875rem_11.25rem_0.7354875rem]'/>
                            </div>
                        </div>
                    </div>

                </div>

            ):
            (
                <div className='w-[100vw] h-max flex items-center justify-center bg-[#E6EDED] shadow-[6.286655426025391px_6.286655426025391px_12.573310852050781px_0px_#BABFBF,-6.286655426025391px_-6.286655426025391px_12.573310852050781px_3.1433277130126953px_#FFF]'>
                    <div className='w-[20.3125rem] h-max flex flex-col-reverse gap-[1rem] mx-auto py-[1rem]'>

                        <div className='h-full w-full border-[#DCE3E3] border-[0.0625rem] shadow-[4px_4px_7px_0px_rgba(186,191,191,0.80)_inset,-5px_-5px_10px_0px_#FFF_inset] rounded-[0.9822875rem] box-border py-[2rem] flex justify-center items-center'>


                            <div className='w-[18.625rem] mx-auto'>
                                <div className='font-[600] text-grade text-[1.25rem]'>
                                    Latest Projects By Emaar
                                </div>
                                <div className='text-[0.875rem] leading-[1.5rem] text-grade mt-[0.69rem]'>
                                    One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecological system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and thealso supports the Dream for Future Africa Foundation to ensure opportunity
                                    corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[20.60056rem] flex justify-center items-center'>
                            <div className='w-full h-[20.60056rem] flex justify-center items-center rounded-[6.892375rem_0.6766875rem_6.892375rem_0.450625rem] border-[0.0625rem] border-[#CAD4D5] shadow-[inset_-0.294195625rem_-0.294195625rem_0.58839125rem_0.1470975rem_#FFFFFF,inset_0.294195625rem_0.294195625rem_0.58839125rem_#BABFBF]'>
                                <img src={imgRT} alt="" className='w-[18.89313rem] h-[19.22719rem] rounded-[6.892375rem_0.6766875rem_6.892375rem_0.450625rem]'/>
                            </div>
                        </div>
                    </div>

                </div>
            )

        }
    </>
  )
}

export default PartLogoTextOGRL
