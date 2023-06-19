import React from 'react'
import { useState } from 'react'
// import clicking_indicator from '../../../../../assets/search_clicking_indicator.svg'
// import main_search_icon from '../../../../../assets/main_search_icon.svg'
import mgg from '../../../../assets/search_icon.svg'
import { toggle } from '../MenueHoverSlice'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '@/store'


import hauseIcon from '../../../../assets/house.svg'

interface Props{
    mainWidth?:string,
    mainHeight?:string,
    effectCircleWidth?:string,
    effectCircleHeight?:string,
    effectInnerCircleWidth?:string,
    effectInnerCircleHeight?:string,
    imgWidth?:string,
    imgHeight?:string

}
const SearchActionMobile = (props:Props) => {
    const [search,setSearch] = useState(false)
    // const openState = useSelector((state:RootState) => state.menue.open)

    const dispatch = useDispatch()
    const [bg,setBg] = useState('../../../../assets/search_icon.svg')
    const handleClick = () => {
        setSearch((prev) => !prev)
    }
    return (
        <>
            <div className='select-none rounded-full relative bg-[#E6EDED] shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#F2F9F8,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5] cursor-pointer flex justify-center items-center' style={{ width:props.mainWidth?props.mainWidth:'4.324375rem',height:props.mainHeight?props.mainHeight:'4.324375rem' }} >
                {/* <img src={main_search_icon} alt="" className='w-[58px] h-[58px] object-cover object-center'/> */}
                <div className='relative flex justify-center items-center ' style={{ width:props.effectCircleWidth?props.effectCircleWidth:'3.596rem', height:props.effectCircleHeight?props.effectCircleHeight:'3.596rem' }}>
                    {/* <img src={clicking_indicator} alt="" className='absolute w-[51px] h-[51px] top-[7px] left-[3px]'/> */}
                    {!search ? <div className='absolute shadow-[0.483518125rem_0.483518125rem_1.20879375rem_rgba(12,63,71,0.18),inset_0.483518125rem_0.483518125rem_1.20879375rem_rgba(255,255,255,0.25),inset_-0.483518125rem_-0.483518125rem_1.20879375rem_#B6C3C5,inset_0.483518125rem_0.483518125rem_1.20879375rem_#FFFFFF]  bg-[#E6EDED] rounded-full flex justify-center items-center' style={{ width:props.effectInnerCircleWidth?props.effectInnerCircleWidth:'3.948125rem',height:props.effectInnerCircleHeight?props.effectInnerCircleHeight:'3.948125rem' }}></div> : ''}
                    <img src={mgg} alt="" className='absolute w-[2.18rem] h-[2.18rem] top-0 left-0 ml-[calc(50%-1.09375rem)] mt-[calc(50%-1.09rem)]'/>
                </div>
                <div className='w-full h-full absolute top-0 left-0 rounded-full opacity-0 z-20' onClick={handleClick}></div>
            </div>
        </>

    )
}

export default SearchActionMobile
