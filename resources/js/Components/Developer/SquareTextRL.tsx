import React from 'react'


import imgLT from '../../../assets/imgLT.png'
import imgRT from '../../../assets/imgRT.png'
import imgLB from '../../../assets/imgLB.png'
import imgRB from '../../../assets/imgRB.png'
import beatchFront from '../../../assets/Newcircle.png'
import NewCardImage from '../Home/Cards/Common/NewCardImage'

interface Props{
    screen?:Boolean
}
const SquareTextRL = (props:Props) => {
  return (
    <>
        {
            props.screen?
            (
                <div className='w-[91.25rem] h-[38.125rem] flex items-center justify-center bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.9822875rem]'>
                    <div className='w-[86.1875rem] h-[33.6875rem] flex gap-[2.5rem]'>

                        <div className='h-full w-[41.4375rem] rounded-[0.9822875rem] box-border py-[2rem] flex justify-center items-center'>


                            <div className='w-[46.0625rem]'>
                                <div className='font-[600] text-grade text-[2rem]'>
                                    Latest Projects By Emaar
                                </div>
                                <div className='text-[1.25rem] leading-[2rem] text-grade mt-[1.0625rem]'>
                                    One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecoical system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and thealso supports the Dream for Future Africa Foundation to ensure opportunity
                                    corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future
                                </div>
                            </div>
                        </div>
                        <div className='w-[43.5625rem] h-full flex justify-center items-center'>
                            <div className='w-full h-full flex justify-center items-center rounded-[0.9375rem] border-[0.0625rem] border-[#CAD4D5] shadow-[inset_-0.294195625rem_-0.294195625rem_0.58839125rem_0.1470975rem_#FFFFFF,inset_0.294195625rem_0.294195625rem_0.58839125rem_#BABFBF]'>
                                <img src={beatchFront} alt="" className='w-[40.0625rem] h-[31.1875rem] rounded-[0.9375rem]'/>
                            </div>
                        </div>
                    </div>

                </div>
            ):
            (
                <div className='w-[375px] h-max bg-[#E6EDED] flex  items-center   shadow-[6.217571258544922px_6.217571258544922px_12.435142517089844px_0px_#BABFBF,-6.217571258544922px_-6.217571258544922px_12.435142517089844px_3.108785629272461px_#FFF] mobil-comp'>

                    <div className=' w-[345px]  rounded-[8px] h-max mx-auto my-[20px]'>
                        <div className='w-[345px] h-[272.57px] border-[1px] border-[#DCE3E3] shadow-[2.4332876205444336px_2.4332876205444336px_4.866575241088867px_0px_#BABFBF_inset,-2.4332876205444336px_-2.4332876205444336px_4.866575241088867px_1.2166438102722168px_#FFF_inset] rounded-[8px] flex justify-center items-center'>
                            <div className='w-[321.76px] h-[251.1px] rounded-[0.484625rem] shadow-[2.4332876205444336px_2.4332876205444336px_4.866575241088867px_0px_#BABFBF,-2.4332876205444336px_-2.4332876205444336px_4.866575241088867px_1.2166438102722168px_#FFF]'>
                                <NewCardImage src={beatchFront} rounded='0.484625' width='321.76px' height='251.1px'/>
                            </div>
                        </div>
                        <div className='w-[345px] mx-auto mt-[20px] h-max min-h-[35.4375rem] py-[1rem] textElementShadow rounded-[8px] border-[1px] border-[#DCE3E3]'>
                            <div className='w-[325px] h-max mx-auto'>
                                <div className='text-grade text-[1.25rem] w-[94%] mx-auto font-[600]'>
                                    Latest Projects By Emaar
                                </div>
                                <div className='text-[14px] leading-[175%] mx-auto w-[94%] text-grade mt-[0.5rem]'>
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

export default SquareTextRL
