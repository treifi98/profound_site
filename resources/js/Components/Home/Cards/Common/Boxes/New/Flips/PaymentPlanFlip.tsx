import React from 'react'

interface Props{
    mainWidth?:string,
    mainHeight?:string,
    content?:{installment:string,precentage:string}[],
    rowWidth?:string,
    rowHeight?:string,
    textSize?:string,
    aedSize?:string,
    fontWeight?:string,
    cornerWidth?:string
}
const PaymentPlanFlip = (props:Props) => {

    return (
        <div className='cardShadowHoverd rounded-[0.3125rem] flex flex-col items-center overflow-hidden border-[#DCE3E3] border-[0.0625rem]' style={{ width: props.mainWidth ? props.mainWidth: '5.3125rem', height: props.mainHeight ? props.mainHeight: '6.375rem' }}>
            {
                props.content.map((zibra,index)=>(

                        <div className='flex justify-center font-[700] items-center overflow-hidden border-[#CAD4D5]' style={{ width: props.rowWidth? props.rowWidth: '5.1875rem', height: props.rowHeight? props.rowHeight: '2.125rem',borderWidth: ( index != props.content.length-1 && index != 0)? '0.0625rem 0rem' :(index == 0 ? '0 0 0.0625rem 0 ' : '0.0625rem 0 0 0 ' ), fontSize:props.textSize? props.textSize : '0.625rem'}}>
                            <div className='flex justify-center items-center text-grade' style={{ width: props.cornerWidth? (parseFloat(props.rowWidth) - parseFloat(props.cornerWidth)): '3.4375rem',height: props.rowHeight? props.rowHeight: '2.125rem' }}>
                                <div className='text-center'>

                                    {zibra.installment}
                                </div>
                            </div>
                            <div className=' text-[#fff] h-full bg-custom-gradient shadow-[inset_-0.25rem_0rem_0.3125rem_#1E6970,inset_0.25rem_0.25rem_0.3125rem_rgba(0,0,0,0.38)] flex justify-center items-center' style={{ height: props.rowHeight? props.rowHeight: '2.125rem',borderRadius: (index == 0)? '0 0.3125rem 0 0 ':((index == props.content.length-1)? '0 0 0.3125rem 0' : '0rem'), width: props.rowWidth? parseFloat(props.mainWidth) - parseFloat(props.rowHeight): '1.8125rem' }}>
                                <div className='text-center'>

                                    {zibra.precentage}
                                </div>
                            </div>
                        </div>

                    )
                )
            }
        </div>
    )
    }

export default PaymentPlanFlip
