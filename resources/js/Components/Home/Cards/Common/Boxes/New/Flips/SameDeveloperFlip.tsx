import processBoxShahow from '@/Components/BoxShadowController'
import React, { useEffect, useState } from 'react'

interface Props{
    mainWidth?:string,
        mainHeight?:string,
        img?:string,
        imgWidth?:string,
        imgHeight?:string,
        imgMT?:string,
        textWidth?:string,
        lowerSectionHeight?:string,
        lowerSectionMT?:string,
        lowerTextSize?:string,
        lowerText?:string,
        textMB?:string,
        lineHeight?:string,
        idFlipped?:boolean
}
const SameDeveloperFlip = (props:Props) => {
    const [shadows,setShadows] = useState(['inset -0.46209625rem -0.46209625rem 0.52687375rem #FFFFFF,inset 0.35124875rem 0.35124875rem 0.52687375rem #B6C3C5','inset -0.38356625rem -0.38356625rem 0.479458125rem #1E6970,inset 0.38356625rem 0.38356625rem 0.479458125rem rgba(0,0,0,0.38)'])
    useEffect(() => {
        let scale = 1
        if(props.mainHeight){
            scale = parseFloat(props.mainHeight)/6.375
            // alert(scale)
        }
        // alert(parseFloat(props.mainHeight)/30.625)
        // alert(props.mainHeight)
        setShadows(processBoxShahow(shadows,' ',scale))
        // shadows =
        // alert (shadows[0])

    },[])
    return (
        <div className=' cursor-pointer relative rounded-[0.3125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] font-[nova]' style={{ width: props.mainWidth ? props.mainWidth: '8.150625rem', height: props.mainHeight ? props.mainHeight: '9.780625rem' }} >
            {/* Box */}
            <div className='rounded-[0.3125rem] absolute group-hover:opacity-0 transition-all opacity-100 flex flex-col items-center ' style={{boxShadow:shadows[0], width: props.mainWidth ? props.mainWidth: '8.150625rem', height: props.mainHeight ? props.mainHeight: '9.780625rem' }} >
                <img src={props.img} alt="" className='object-contain object-center' style={{ width: props.imgWidth ? props.imgWidth: '6.37875rem',height: props.imgHeight? props.imgHeight: '3.259375rem', marginTop: props.imgMT ? props.imgMT: '2.125rem' }}/>

                <div className='bg-custom-gradient rounded-[0rem_0rem_0.3125rem_0.3125rem] flex justify-center items-center font-[600] ' style={{boxShadow:shadows[1], width: props.mainWidth? props.mainWidth: '8.150625rem', height: props.lowerSectionHeight? props.lowerSectionHeight: '2.58875rem', fontSize: props.lowerTextSize? props.lowerTextSize: '0.875rem',marginTop:props.lowerSectionMT?props.lowerSectionMT:'1.8075rem '}}>
                    <div className='text-[#fff]' >
                        {props.lowerText}
                    </div>
                </div>
            </div>
            {/* Box */}

        </div>
    )
    }

export default SameDeveloperFlip
