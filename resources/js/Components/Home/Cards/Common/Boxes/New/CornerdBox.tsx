import React, { ReactNode, cloneElement } from 'react'

interface Args{
    flipComp: ReactNode,
    Args:{

        mainWidth?:string,
        mainHeight?:string,
        img?:string,
        imgWidth?:string,
        imgHeight?:string,
        imgMT?:string,
        text?:string,
        textSize?:string,
        textWidth?:string,
        lowerSectionHeight?:string,
        lowerTextSize?:string,
        lowerText?:string,
        textMT?:string,
        textMB?:string
    },
    flipArgs:{}

}
const CornerdBox = ({Args,flipComp,flipArgs}:Args) => {
    return (
        <div className=' cursor-pointer relative group rounded-[0.3125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] ' style={{ width: Args.mainWidth ? Args.mainWidth: '5.3125rem', height: Args.mainHeight ? Args.mainHeight: '6.375rem' }}>
            {/* Box */}
            <div className='rounded-[0.3125rem] absolute group-hover:opacity-0 transition-all opacity-100 flex flex-col items-center cardShadow' style={{ width: Args.mainWidth ? Args.mainWidth: '5.3125rem', height: Args.mainHeight ? Args.mainHeight: '6.375rem' }}>
                <img src={Args.img} alt="" className='object-contain object-center' style={{ width: Args.imgWidth ? Args.imgWidth: '1.954375rem',height: Args.imgHeight? Args.imgHeight: '1.95125rem', marginTop: Args.imgMT ? Args.imgMT: '0.375rem' }}/>
                <div className='text-grade font-[600] text-center' style={{ width: Args.textWidth? Args.textWidth : '4.6375rem', fontSize: Args.textSize? Args.textSize: '0.75rem',marginTop: Args.textMT? Args.textMT: '0.253125rem', marginBottom: Args.textMB? Args.textMB: '0.233125rem' }}>
                    {Args.text}
                </div>
                <div className='bg-custom-gradient rounded-[0rem_0rem_0.3125rem_0.3125rem] flex justify-center items-center font-[600]' style={{ width: Args.mainWidth? Args.mainWidth: '5.3125rem', height: Args.lowerSectionHeight? Args.lowerSectionHeight: '1.6875rem', fontSize: Args.lowerTextSize? Args.lowerTextSize: '0.875rem'}}>
                    <div className='text-[#fff]' >
                        {Args.lowerText}
                    </div>
                </div>
            </div>
            {/* Box */}


            {/* flip */}
                <div className='w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all'>

                    {cloneElement(flipComp,{...flipArgs})}
                </div>
            {/* flip */}

        </div>
    )
}

export default CornerdBox
