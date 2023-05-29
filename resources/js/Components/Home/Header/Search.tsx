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

import logo from '../../../../assets/logoimg.svg'
import imposible_Ds from '../../../../assets/imposible_Ds.svg'
import AutoSwiper from '@/Components/Developer/Cards/AutoSwiper'
const Search = () => {
    // const [search,setSearch] = useState(true)
    const openState = useSelector((state:RootState) => state.menue.open)

    const dispatch = useDispatch()
    const [bg,setBg] = useState('../../../../assets/search_icon.svg')
    const handleClick = () => {
        // setSearch(prevState => !prevState)
        const elmnt = (
            <div className='my-[3.625rem] mx-auto flex  gap-[3.75rem] w-[91.0rem] items-start place-self-start justify-self-start'>
                <div className='w-[25rem] h-[37.4375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5] rounded-[0.625rem] '>
                    <div className='relative flex items-start justify-end h-[7.7625rem] w-full'>

                        <img src={imposible_Ds} alt="" className='absolute top-[-0.2rem] left-0 w-full h-[7.7625rem] object-cover object-left z-[1]'/>
                        <div className='w-[6.06625rem] h-[6.06625rem] rounded-[0.625rem] border-[#007680] border-[0.0625rem] bg-[#E6EDED] shadow-[-0.211135rem_-0.211135rem_0.35119rem_-0.117063125rem_#007580,0.211135rem_0.211135rem_0.276105625rem_#011618] absolute top-[0.598125rem] left-[0.848125rem] flex justify-center items-center z-[2]'>
                            {/* <img src={logo} alt="" /> */}
                        </div>
                        <div className='flex w-[17.2375rem] h-[6.8125rem] justify-center items-center relative z-[2] flex-wrap'>
                            <div className='text-grade text-center text-[1.25rem] font-[600] leading-[1.875rem] w-[15.5625rem]'>
                                FIND YOUR DREAM<br/> HOME WITH JUST A CLICK!
                            </div>
                        </div>
                    </div>
                    <div className='w-[22.0625rem] h-[25.8125rem] mt-[2.375rem] mx-auto'>
                        <div className='w-[20.4375rem] mb-[2.375rem] leading-[1.6875rem] text-[1.125rem] font-[300] text-[#002D31]'>
                            Discover thousands of listings, customize your search, and explore the perfect neighborhood
                        </div>
                        {/* <div className='w-full h-[18.375rem] rounded-[0.625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.356306875rem_-0.356306875rem_0.7126125rem_#F8FFFE,inset_0.356306875rem_0.356306875rem_0.7126125rem_#B6C3C5]'>

                        </div> */}
                            <AutoSwiper/>
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
            <div className='select-none rounded-full relative bg-[#002D31] shadow-[inset_-0.25rem_-0.25rem_0.3125rem_-0.1875rem_#04626B,inset_0.25rem_0.25rem_0.375rem_#011618] border-[0.0625rem] border-[#1F5B62] cursor-pointer flex justify-center items-center w-[3.596rem] h-[3.596rem] ' >
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
