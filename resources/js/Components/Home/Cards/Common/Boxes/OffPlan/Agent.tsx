import React from 'react'

import agent from '../../../../../../../assets/agent1.png'
import agent2 from '../../../../../../../assets/agent2.png'
interface Args{
    // scale?:string
    Args:{
        mainWidth?:string,
        mainHeight?:string,

        name:string,
        speciality:string,
        langs:string[]
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
        textHeight?:string,
        lineHeight?:string,
        imgWrapperMT?:string,
        // rounded?:string

    }
}
const Agent = ({Args}:Args) => {
    return (

        <div className='group relative cursor-pointer' style={{ width:Args.mainWidth ? Args.mainWidth : '5.3125rem', height:Args.mainHeight ? Args.mainHeight : '6.375rem' }}>
            <div className='bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]' style={{ width:Args.mainWidth ? Args.mainWidth : '5.3125rem', height:Args.mainHeight ? Args.mainHeight : '6.375rem', borderRadius: Args.rounded ? Args.rounded : '0.3125rem' }}>
                <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                    <div className=' relative bg-custom-gradient1 shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center ' style={{ width: Args.imgWrapperWidth ? Args.imgWrapperWidth : '4.4375rem', height: Args.imgWrapperHeight ? Args.imgWrapperHeight : '3.8125rem', borderRadius: Args.rounded ? Args.rounded : '0.3125rem', marginTop:Args.imgWrapperMT?Args.imgWrapperMT:'0.375rem' }}>
                        <div className='relative' style={{ width: Args.img1Width ? Args.img1Width : '4.1875rem', height: Args.img1Height ? Args.img1Height : '3.5625rem' }}>
                            <img src={agent} alt="" className='object-contain object-center' style={{ width: Args.img1Width ? Args.img1Width : '4.1875rem', height: Args.img1Height ? Args.img1Height : '3.5625rem' }}/>
                            <img src={agent2} alt="" className='absolute top-0 left-[0.125rem] object-contain object-center' style={{ width: Args.img2Width ? Args.img2Width : '4.0625rem', height: Args.img2Height ? Args.img2Height : '3.5625rem', left: ((Args.img1Width ? parseInt(Args.img1Width) : 4.1875) - (Args.img2Width ? parseInt(Args.img2Width) : 4.0625)) + 'rem' }}/>
                        </div>
                    </div>

                    <div className='bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]' style={{ width:Args.mainWidth ? Args.mainWidth : '5.3125rem', height:Args.agentSectionHeight ? Args.agentSectionHeight : '1.625rem' }}>
                        <div className='text-[#E6EDED]' style={{ fontSize: Args.nameTextSize ? Args.nameTextSize : '0.875rem', fontWeight: Args.nameFontWaight ? Args.nameFontWaight : '600' }}>
                            Agent
                        </div>
                    </div>
                </div>
                <div className='opacity-0 group-hover:opacity-100 flex flex-col absolute top-0 left-0 w-full h-full origin-center duration-[0.1s] '>
                    <div className='w-full flex flex-col justify-center items-center' style={{ height: Args.mainHeight ? (parseInt(Args.mainHeight) - (parseInt(Args.agentSectionHeight) ? parseInt(Args.agentSectionHeight) : 1.625)) + 'rem' : (6.375 - (Args.agentSectionHeight ? parseInt(Args.agentSectionHeight) : 1.625) + 'rem') }}>
                        <div className='w-full font-[600] text-grade text-center border-b-[#CAD4D5] border-b-[0.0625rem] pb-[0.25rem] ' style={{ fontSize: Args.textSize ? Args.textSize : '0.6875rem' ,lineHeight:Args.lineHeight?Args.lineHeight:'0.91375rem'}}>
                            {Args.speciality} <br/>Specialist
                        </div>
                        <div className='w-full font-[600] text-grade text-center' style={{ fontSize: Args.textSize ? Args.textSize : '0.6875rem' ,lineHeight:Args.lineHeight?Args.lineHeight:'0.91375rem'}}>
                            Speaking <br/>
                            {
                                Args.langs && Args.langs.map((lang,index)=>(
                                    lang + (index < Args.langs.length-1 ? ', ' : '')
                                ))
                                // Args.x.map((z)=>(z))
                            }
                        </div>


                    </div>
                        <div className=' bg-custom-gradient shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]' style={{ width: Args.mainWidth ? Args.mainWidth : '5.3125rem', height:Args.agentSectionHeight ? Args.agentSectionHeight : '1.625rem' }}>
                            <div className='text-[#E6EDED] text-[0.75rem] font-[600]'style={{ fontSize: Args.nameTextSize ? Args.nameTextSize : '0.875rem', fontWeight: Args.nameFontWaight ? Args.nameFontWaight : '600' }}>
                                {Args.name}
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Agent
