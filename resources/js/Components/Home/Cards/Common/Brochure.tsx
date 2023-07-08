import React from 'react'

import brochureIcon from '../../../../../assets/brochure.svg'
import InElementSeperator from './InElementSeperator'

interface Props{
    mainWidth?:string,
    mainHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    imgWrapperWidth?:string,
    seperatorML?:string,
    imgMT?:string,
    restWidth?:string,
    textSize?:string,
    separatorWidth?:string,
    text?:string,
    shadow?:string
}
const Brochure = (props:Props) => {
    return (
        <div className='group flex items-center cursor-pointer' style={{ width: props.mainWidth? props.mainWidth: '7.4375rem',height: props.mainHeight? props.mainHeight: '1.75rem' }}>
            <div className='shadow-[-0.1875rem_-0.1875rem_0.1875rem_#FFFFFF,0.1875rem_0.1875rem_0.1875rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] rounded-[0.1875rem_0rem_0rem_0.1875rem] flex justify-center' style={{boxShadow:props.shadow?props.shadow:'-0.1875rem -0.1875rem 0.1875rem #FFFFFF,0.1875rem 0.1875rem 0.1875rem #B6C3C5', width: props.imgWrapperWidth? props.imgWrapperWidth: '1.9375rem', height: props.mainHeight? props.mainHeight: '1.75rem' }}>

                <img src={brochureIcon} alt="" className='object-contain' style={{ width: props.imgWidth? props.imgWidth: '1.266875rem', height: props.imgHeight? props.imgHeight: '1.046875rem', marginTop:props.imgMT? props.imgMT: '0.375rem' }}/>
            </div>
            <div style={{ marginLeft:props.seperatorML? props.seperatorML: '0rem' }}>

                <InElementSeperator height={props.mainHeight? props.mainHeight: '1.75rem'} width={props.separatorWidth? props.separatorWidth: '0.25rem' } />
            </div>
            <div className='flex justify-center items-center shadow-[-0.1875rem_-0.1875rem_0.1875rem_#FFFFFF,0.1875rem_0.1875rem_0.1875rem_#B6C3C5] rounded-[0rem_0.1875rem_0.1875rem_0rem] group-hover:shadow-[inset_-0.1875rem_-0.1875rem_0.1875rem_#FFFFFF,inset_0.1875rem_0.1875rem_0.1875rem_#B6C3C5]' style={{boxShadow:props.shadow?props.shadow:'-0.1875rem -0.1875rem 0.1875rem #FFFFFF,0.1875rem 0.1875rem 0.1875rem #B6C3C5', width: props.restWidth?props.restWidth: '5.3125rem', height:props.mainHeight? props.mainHeight: '1.75rem'}}>
                <div className='block group-hover:hidden text-grade font-[600]' style={{ fontSize:props.textSize? props.textSize: '0.875rem' }}>
                    {props.text?props.text:'Brochure'}
                </div>
                <div className='hidden group-hover:block text-grade font-[600]' style={{ fontSize:props.textSize? props.textSize: '0.875rem' }}>
                    {props.text?props.text:'Download'}
                </div>
            </div>
        </div>
    )
}

export default Brochure
