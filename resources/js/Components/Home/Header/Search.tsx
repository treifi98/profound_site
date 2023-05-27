import React from 'react'
import { useState } from 'react'
import clicking_indicator from '../../../../assets/search_clicking_indicator.svg'
import main_search_icon from '../../../../assets/main_search_icon.svg'
import mgg from '../../../../assets/magnifying_glass.svg'
import { toggle } from '../MenueHoverSlice'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '@/store'
import MenueChild from './MenueChild'
import FiltersContainer from '../FiltersAndSearch/FiltersContainer'


import hauseIcon from '../../../../assets/house.svg'
const Search = () => {
    // const [search,setSearch] = useState(true)
    const openState = useSelector((state:RootState) => state.menue.open)

    const dispatch = useDispatch()
    const [bg,setBg] = useState('../../../../assets/search_icon.svg')
    const handleClick = () => {
        // setSearch(prevState => !prevState)
        const elmnt = (
            <div className='my-[3.625rem] mx-auto flex gap-[3.75rem] w-[89.375rem] items-start'>
                <div className='w-[25rem] h-[37.4375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5] rounded-[0.625rem]'>
                    <div className='w-full h-[7.7625rem] flex items-center relative'>
                        <div className='w-[7.7625rem] h-[7.7625rem] bg-[#00494F] flex justify-center items-center rounded-[0.625rem] shadow-[inset_-0.270161875rem_-0.270161875rem_0.449371875rem_-0.149790625rem_#007580,inset_0.270161875rem_0.270161875rem_0.353296875rem_#002D31] border-[#CED7D8] border-[0rem] relative z-[2] xxvvxx'>
                            <div className='w-[6.06625rem] h-[6.06625rem] bg-[#E6EDED] rounded-[0.625rem] shadow-[-0.211135rem_-0.211135rem_0.35119rem_-0.117063125rem_#007580,0.211135rem_0.211135rem_0.276105625rem_#011618]'>

                            </div>
                        </div>
                            <div className='w-[17.2375rem] h-[3.75rem] flex justify-center items-center'>
                                <div className=' h-[3.75rem] w-[15.5625rem] text-grade text-center text-[1.25rem] font-[600]'>
                                    Find your dream home with just a click!
                                </div>
                            </div>
                            <div className='w-full absolute bottom-0 left-0 bg-[#00494F] border-[#CED7D8] border-[0rem] h-[0.9375rem] shadow-[inset_-0.270161875rem_-0.270161875rem_0.449371875rem_-0.149790625rem_#007580,inset_0.270161875rem_0.270161875rem_5.65275px_#002D31] z-[1] rounded-[0.625rem_0rem_0rem_0.625rem]'>

                            </div>
                    </div>
                </div>
                <FiltersContainer/>
            </div>
        );
        dispatch(toggle(elmnt))
        // dispatch(toggle())


    }
    return (
        <>
            <div className='select-none rounded-full relative bg-[#002D31] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_-0.1875rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618] border-[0.0625rem] border-[#1F5B62] cursor-pointer flex justify-center items-center w-[3.596rem] h-[3.596rem]' >
                {/* <img src={main_search_icon} alt="" className='w-[58px] h-[58px] object-cover object-center'/> */}
                <div className='relative flex justify-center items-center w-[3.596rem] h-[3.596rem]'>
                    {/* <img src={clicking_indicator} alt="" className='absolute w-[51px] h-[51px] top-[7px] left-[3px]'/> */}
                    {!openState ? <div className='absolute shadow-[0rem_0.293609375rem_0.293609375rem_rgba(0,0,0,0.25),inset_0.734025rem_0.734025rem_1.46804375rem_rgba(5,59,66,0.16),inset_-0.734025rem_-0.734025rem_1.46804375rem_#08262C,inset_0.734025rem_0.734025rem_1.46804375rem_rgba(12,64,70,0.54)] w-[3.15rem] h-[3.15rem]  bg-[#002D31] rounded-full flex justify-center items-center'></div> : ''}
                    <img src={mgg} alt="" className='absolute w-[2.18rem] h-[2.18rem] top-0 left-0 ml-[calc(50%-1.09375rem)] mt-[calc(50%-1.09rem)]'/>
                </div>
                <div className='w-full h-full absolute top-0 left-0 rounded-full opacity-0 z-20' onClick={handleClick}></div>
            </div>
        </>

    )
}

export default Search
