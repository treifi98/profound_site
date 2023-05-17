import React, { useEffect, useState } from 'react'
import processBoxShahow from '@/Components/BoxShadowController'

interface Props{
    mainWidth?:string,
    mainHeight?:string,
    content?:{bed:string,price:string}[] | string[],
    zibraWidth?:string,
    zibraHeight?:string,
    textSize?:string,
    aedSize?:string,
    fontWeight?:string,
    isPrice?:boolean
}
const ZibraFlip = (props:Props) => {
    const [shadows,setShadows] = useState(['inset -0.3011875rem -0.3011875rem 0.34340875rem #FFFFFF,inset 0.228939375rem 0.228939375rem 0.34340875rem #B6C3C5','inset -0.25rem -0.25rem 0.3125rem #1E6970,inset 0.25rem 0.25rem 0.3125rem rgba(0,0,0,0.38)'])
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
    const extractZibras = () => {
        let arr = []
        if(props.isPrice){
            props.content.map((elmnt) => {
                arr.push(elmnt.bed)
                arr.push(elmnt.price)
            })
            return arr
        }
        return props.content
    }
    const zibras = extractZibras()
    return (
        <div className=' rounded-[0.3125rem] flex flex-col items-center overflow-hidden' style={{boxShadow:shadows[0], width: props.mainWidth ? props.mainWidth: '5.3125rem', height: props.mainHeight ? props.mainHeight: '6.375rem' }}>
            {
                props.isPrice ? (

                    zibras.map((zibra,index)=>(

                            (index == 0 || index%2 == 0) ? (
                                <div className='flex justify-center items-center' style={{ width: props.zibraWidth? props.zibraWidth: '5.1875rem', height: props.zibraHeight? props.zibraHeight: '1.0625rem' }}>
                                    <div className=' text-grade font-[600]'style={{ fontSize: props.textSize? props.textSize: '0.6875rem' }}>

                                        {zibra}
                                    </div>
                                </div>
                            ):(
                                <div className='flex justify-center items-center bg-[#19464B]  text-[#fff] font-[700]' style={{ width: props.zibraWidth? props.zibraWidth: '5.1875rem', height: props.zibraHeight? props.zibraHeight: '1.0625rem', boxShadow:shadows[1] }}>
                                    <div className=' flex justify-between items-center w-[90%]'>
                                        <div className=''style={{ fontSize: props.textSize? props.textSize: '0.6875rem' }}>

                                            {zibra}
                                        </div>
                                            <div className='' style={{ fontSize: props.textSize? props.textSize: '0.4375rem' }}>
                                            AED
                                        </div>
                                    </div>
                                </div>

                            )


                        )
                    )
                ):(
                    zibras.map((zibra,index) => (

                        (index == 0 || index%2 == 0) ? (
                            <div className='flex justify-center items-center' style={{ width: props.zibraWidth? props.zibraWidth: '5.1875rem', height: props.zibraHeight? props.zibraHeight: '1.25rem' }}>
                                <div className=' text-grade font-[700]'style={{ fontSize: props.textSize? props.textSize: '0.6875rem' }}>

                                    {zibra}
                                </div>
                            </div>
                        ):(
                            <div className='flex justify-center items-center bg-[#19464B] text-[#fff] font-[700] ' style={{ width: props.zibraWidth? props.zibraWidth: '5.1875rem', height: props.zibraHeight? props.zibraHeight: '1.25rem', boxShadow:shadows[1] }}>

                                <div className=''style={{ fontSize: props.textSize? props.textSize: '0.6875rem' }}>

                                    {zibra}
                                </div>

                            </div>
                        )


                    ))
                )
            }
        </div>
    )
    }

export default ZibraFlip
