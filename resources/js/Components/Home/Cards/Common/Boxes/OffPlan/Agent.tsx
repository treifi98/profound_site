import React from 'react'

import agent from '../../../../../../../assets/agent1.png'
import agent2 from '../../../../../../../assets/agent2.png'
interface Props{
    // scale?:string
    mainWidth?:string,
    mainHeight?:string,
    name:string,
    nameTextSize?:string,
    textSize?:string,
    rounded?:string,
    img1Width?:string,
    img1Height?:string,
    img2Width?:string,
    img2Height?:string,
    imgWrapperWidth?:string,
    imgWrapperHeight?:string,
    agentSectionHeight?:string,
    nameFontWaight?:string,
    speciality:string,
    langs:string[]
}
const Agent = (props:Props) => {
    return (

        <div className='group relative cursor-pointer' style={{ width:props.mainWidth ? props.mainWidth : '5.3125rem', height:props.mainHeight ? props.mainHeight : '6.375rem' }}>
            <div className='bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]' style={{ width:props.mainWidth ? props.mainWidth : '5.3125rem', height:props.mainHeight ? props.mainHeight : '6.375rem', borderRadius: props.rounded ? props.rounded : '0.3125rem' }}>
                <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                    <div className=' mt-[0.375rem] relative bg-custom-gradient1 shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center ' style={{ width: props.imgWrapperWidth ? props.imgWrapperWidth : '4.4375rem', height: props.imgWrapperHeight ? props.imgWrapperHeight : '3.8125rem', borderRadius: props.rounded ? props.rounded : '0.3125rem' }}>
                        <div className='relative' style={{ width: props.img1Width ? props.img1Width : '4.1875rem', height: props.img1Height ? props.img1Height : '3.5625rem' }}>
                            <img src={agent} alt="" className='object-contain object-center' style={{ width: props.img1Width ? props.img1Width : '4.1875rem', height: props.img1Height ? props.img1Height : '3.5625rem' }}/>
                            <img src={agent2} alt="" className='absolute top-0 left-[0.125rem] object-contain object-center' style={{ width: props.img2Width ? props.img2Width : '4.0625rem', height: props.img2Height ? props.img2Height : '3.5625rem', left: ((props.img1Width ? parseInt(props.img1Width) : 4.1875) - (props.img2Width ? parseInt(props.img2Width) : 4.0625)) + 'rem' }}/>
                        </div>
                    </div>

                    <div className='bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]' style={{ width:props.mainWidth ? props.mainWidth : '5.3125rem', height:props.agentSectionHeight ? props.agentSectionHeight : '1.625rem' }}>
                        <div className='text-[#E6EDED]' style={{ fontSize: props.nameTextSize ? props.nameTextSize : '0.875rem', fontWeight: props.nameFontWaight ? props.nameFontWaight : '600' }}>
                            Agent
                        </div>
                    </div>
                </div>
                <div className='opacity-0 group-hover:opacity-100 flex flex-col absolute top-0 left-0 w-full h-full origin-center duration-[0.1s] '>
                    <div className='w-full flex flex-col justify-center items-center' style={{ height: props.mainHeight ? (parseInt(props.mainHeight) - (parseInt(props.agentSectionHeight) ? parseInt(props.agentSectionHeight) : 1.625)) + 'rem' : (6.375 - (props.agentSectionHeight ? parseInt(props.agentSectionHeight) : 1.625) + 'rem') }}>
                        <div className='w-full leading-[0.91375rem] font-[600] text-grade text-center border-b-[#CAD4D5] border-b-[0.0625rem] pb-[0.25rem] ' style={{ fontSize: props.textSize ? props.textSize : '0.6875rem' }}>
                            {props.speciality} <br/>Specialist
                        </div>
                        <div className='w-full leading-[0.91375rem] font-[600] text-grade text-center' style={{ fontSize: props.textSize ? props.textSize : '0.6875rem' }}>
                            Speaking <br/>
                            {
                                props.langs && props.langs.map((lang,index)=>(
                                    lang + (index < props.langs.length-1 ? ', ' : '')
                                ))
                                // props.x.map((z)=>(z))
                            }
                        </div>


                    </div>
                        <div className=' bg-custom-gradient shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]' style={{ width: props.mainWidth ? props.mainWidth : '5.3125rem', height:props.agentSectionHeight ? props.agentSectionHeight : '1.625rem' }}>
                            <div className='text-[#E6EDED] text-[0.75rem] font-[600]'>
                                {props.name}
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Agent
