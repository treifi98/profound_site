import React from 'react'

import agent from '../../../../../../../assets/agent1.png'
import agent2 from '../../../../../../../assets/agent2.png'
const Agent = () => {
    return (
        <div className='group w-[5.3125rem] h-[6.375rem] relative cursor-pointer'>
            <div className='w-[5.3125rem] h-[6.375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.3125rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  perspective-[1000px] group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]'>
                <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                    <div className='w-[4.4375rem] h-[3.8125rem] mt-[0.375rem] relative bg-custom-gradient1 rounded-[0.3125rem] shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center '>
                        <div className='w-[4.1875rem] h-[3.5625rem] relative'>
                            <img src={agent} alt="" className='w-[4.1875rem] h-[3.5625rem] object-contain object-center'/>
                            <img src={agent2} alt="" className='w-[4.0625rem] h-[3.5625rem] absolute top-0 left-[0.125rem] object-contain object-center' />
                        </div>
                    </div>

                    <div className='w-[5.3125rem] h-[1.6875rem] bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                        <div className='text-[#E6EDED] text-[0.875rem] font-[600]'>
                            Agent
                        </div>
                    </div>
                </div>
                <div className='opacity-0 group-hover:opacity-100 flex flex-col absolute top-0 left-0 w-full h-full origin-center duration-[0.1s] '>
                    <div className='h-[calc(100%-1.625rem)] w-full flex flex-col justify-center items-center'>
                        <div className='w-[4.6875rem] leading-[0.91375rem] text-[0.6875rem] font-[600] text-grade text-center border-b-[#CAD4D5] border-b-[0.0625rem]'>
                            Downtown <br/>Specialist
                        </div>
                        <div className='w-[4.6875rem] leading-[0.91375rem] text-[0.6875rem] font-[600] text-grade text-center'>
                            Speaking <br/>Arabic, English
                        </div>


                    </div>
                        <div className='w-[5.3125rem] h-[1.6875rem] bg-custom-gradient shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]'>
                            <div className='text-[#E6EDED] text-[0.75rem] font-[600]'>
                                Nassif
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Agent
