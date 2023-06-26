import React, { useEffect, useRef, useState } from 'react'
import processBoxShahow from '../BoxShadowController'
// import { intersection } from 'd3'


interface Props{
    mainWidth?:string,
    mainHeight?:string,
    barWidth?:string,
    barHeight?:string,
    circleWidth?:string,
    // circleHeight?:string,
    imgHeight?:string,
    imgWidth?:string,
    imgMt?:string,
    imgMl?:string,
    img:string,
    bluePillWidth?:string,
    textSize?:string,
    bluePillTextSize?:string,
    text:string,
    bluePillText:string,
    intersection?:number


}

const InfoShape = (props:Props) => {

    const [shadows,setShadows] = useState(['inset -0.1996225rem -0.1996225rem 0.31939625rem #FFFFFF,inset 0.1996225rem 0.1996225rem 0.279471875rem #B6C3C5','-0.1996225rem -0.1996225rem 0.31939625rem #FFFFFF,0.1996225rem 0.1996225rem 0.279471875rem #B6C3C5','inset -0.21248125rem -0.21248125rem 0.26560125rem #1E6970,inset 0.21248125rem 0.21248125rem 0.26560125rem rgba(0,0,0,0.38)'])
    useEffect(() => {
        let scale = 1
        if(props.mainWidth){
            scale = parseFloat(props.mainWidth)/27.569375
            // alert(scale)
        }
        // alert(parseFloat(props.mainHeight)/30.625)
        // alert(props.mainHeight)
        setShadows(processBoxShahow(shadows,' ',scale))
        // shadows =
        // alert (shadows[0])

    },[])


    const bar = useRef(null)
    const circle = useRef(null)
    const wrapper = useRef(null)
    const bluePill = useRef(null)
    const placeHolder = useRef(null)
    const main = useRef(null)

    useEffect(() => {
        const factor = 0.0535
        let inttersection = 0
        if(props.intersection){
            inttersection = props.intersection
        }
        else{
            inttersection = factor * parseFloat(bar.current.style.width.split('rem')[0])
        }
        // const moveDistance =   inttersection
        circle.current.style.right = ( parseFloat(bar.current.style.width.split('rem')) - inttersection ).toString() +'rem'
        // alert(inttersection)

        wrapper.current.style.width = (parseFloat(bar.current.style.width.split('rem')) - (parseFloat(bluePill.current.style.width.split('rem')) + inttersection)).toString() + 'rem'

        wrapper.current.style.marginLeft = inttersection.toString()+'rem'

        placeHolder.current.style.width = (parseFloat(main.current.style.width.split('rem')[0]) - parseFloat(bar.current.style.width.split('rem')[0])).toString() + 'rem'

    },[])
    return (
        <div className='flex items-center relative' style={{ width:props.mainWidth?props.mainWidth:'27.569375rem',height:props.mainHeight?props.mainHeight:'5.24625rem' }} ref={main}>
            {/* place holder */}
            <div className='opacity-0' ref={placeHolder}>
            </div>
            {/* place holder end */}
            <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute' ref={circle} style={{boxShadow:shadows[0], width:props.circleWidth?props.circleWidth:'5.24625rem',height:props.mainHeight?props.mainHeight:'5.24625rem' }}>
                <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/>
            </div>

            <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex items-center' ref={bar} style={{boxShadow:shadows[1], width:props.barWidth?props.barWidth:'23.585625rem',height:props.barHeight?props.barHeight:'2.603125rem' }}>
                <div className='flex justify-center items-center' ref={wrapper}>
                    <div className='text-center text-grade text-[#E6EDED]' style={{ fontSize:props.textSize?props.textSize:'1.275rem' }}>
                        {props.text}
                    </div>
                </div>

                <div className=' flex justify-center items-center bg-custom-gradient rounded-[5.312025rem]' style={{boxShadow:shadows[2], width:props.bluePillWidth?props.bluePillWidth:'7.80875rem',height:props.barHeight?props.barHeight:'2.603125rem' }} ref={bluePill}>
                    <div className='text-center font-[600] text-[#E6EDED]' style={{ fontSize:props.bluePillTextSize?props.bluePillTextSize:'1.16875rem' }}>
                        {props.bluePillText}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoShape
