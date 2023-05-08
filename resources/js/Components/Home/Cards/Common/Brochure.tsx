import React from 'react'

import brochureIcon from '../../../../../assets/brochure.svg'
import InElementSeperator from './InElementSeperator'

interface Props{
    mainWidth?:string,
    mainHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    imgWrapperWidth?:string,
    seperatorWidth?:string,
    seperatorML?:string,
    imgMT?:string,
    restWidth?:string,
    textSize?:string
}
const Brochure = (props:Props) => {
    return (
        <div className='flex items-center' style={{ width: props.mainWidth? props.mainWidth: '7.4375rem',height: props.mainHeight? props.mainHeight: '1.75rem' }}>
            <img src={brochureIcon} alt="" className='object-contain' style={{ width: props.imgWidth? props.imgWidth: '1.266875rem', height: props.imgHeight? props.imgHeight: '1.046875rem', marginTop:props.imgMT? props.imgMT: '0.375rem' }}/>
            <div>

                <InElementSeperator height='1.75rem' width="0.25rem"/>
            </div>
        </div>
    )
}

export default Brochure
