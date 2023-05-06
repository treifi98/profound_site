import React from 'react'

import bed_icon from '../../../../../../../assets/bed_icon.svg'
interface Props{
    scale?:string,
    mainWidth?:string,
    mainHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    mainTextSize?:string,
    lowerTextSize?:string,
    flippedText?:string,
    rounded?:string,
    imgMT?:string,
    fontWaight?:string,
    lowerSectionHeight?:string,
    rooms:string[],
    flipMt?:string,
    flippedPy?:string,
    flippedHeight?:string

}
const Bed = (props:Props) => {
    return (
        <div className='group relative cursor-pointer' style={{ width: props.mainWidth ? props.mainWidth : '5.3125rem', height: props.mainHeight ?props.mainHeight : '6.375rem' }}>
            <div className=' bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]  perspective-[1000px] group-hover:shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5] duration-[0.1s]' style={{ width: props.mainWidth ? props.mainWidth : '5.3125rem', height: props.mainHeight ?props.mainHeight : '6.375rem' , borderRadius: props.rounded ? props.rounded : '0.3125rem' }}>
                <div className='flex flex-col justify-between items-center h-full w-full group-hover:opacity-0 duration-[0.1s]'>

                    <div className='' style={{ width: props.imgWidth ? props.imgWidth : '2.16875rem', height:props.imgHeight ? props.imgHeight : '1.62625rem', marginTop: props.imgMT ? props.imgMT : '0.375rem' }}>
                        <img src={bed_icon} alt="" className='object-cover object-center' style={{ width: props.imgWidth ? props.imgWidth : '2.16875rem', height:props.imgHeight ? props.imgHeight : '1.62625rem' }}/>
                    </div>
                    <div className='text-grade leading-[0.87625rem] text-center' style={{ fontSize: props.mainTextSize ? props.mainTextSize : '0.75rem', fontWeight: props.fontWaight ? props.fontWaight : '600'}}>
                        Number of
                        <br/>
                        Bedrooms
                    </div>
                    <div className=' bg-custom-gradient shadow-[0rem_0.25rem_0.25rem_rgba(0,0,0,0.25)] flex justify-center items-center rounded-[0rem_0rem_0.3125rem_0.3125rem]' style = {{ width: props.mainWidth ? props.imgWidth : '5.3125rem', height:props.lowerSectionHeight ? props.lowerSectionHeight : '1.6875rem',}}>
                        <div className='text-[#E6EDED] ' style={{ fontSize:props.lowerTextSize ? props.lowerTextSize : '0.875rem', fontWeight: props.fontWaight ? props.fontWaight : '600'  }}>
                            1,2,3,4,5,6
                        </div>
                    </div>
                </div>
                <div className='opacity-0 group-hover:opacity-100 flex flex-col absolute top-0 left-0 w-full h-full origin-center duration-[0.1s] justify-start gap-[0.0rem]' style={{ paddingTop: props.flippedPy ? props.flippedPy : '0.06rem' }}>
                        {
                            props.rooms &&props.rooms.map((room,index) => (
                                <div className='w-full mx-auto flex justify-evenly items-center font-[700]' style={{ backgroundColor:(index != 0 && index%2 != 0) ? '#19464B': '', boxShadow: (index != 0 && index%2 != 0) ? 'inset -0.25rem -0.25rem 0.3125rem #1E6970, inset 0.25rem 0.25rem 0.3125rem rgba(0, 0, 0, 0.38)' : '', height: props.flippedHeight ? props.flippedHeight : '1.25rem'}}>
                                    {
                                        index != 0 && index%2 != 0 ? (
                                            <div className='text-[#fff]' style={{ fontSize : props.flippedText ? props.flippedText : '0.625rem' }}>
                                                {room}
                                            </div>
                                        ):(
                                            <div className='text-grade' style={{ fontSize : props.flippedText ? props.flippedText : '0.625rem' }}>
                                                {room}
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }

                </div>
            </div>

        </div>
    )
}

export default Bed
