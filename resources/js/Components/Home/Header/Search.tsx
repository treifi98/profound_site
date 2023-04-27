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
            <div className='my-[3.625rem] mx-[5%] flex gap-[3.75rem] items-center'>

                <MenueChild icon={hauseIcon} title1={'FIND YOUR DREAM'} title2='HOME WITH JUST A CLICK!' text="Discover thousands of listings, customize your search, and explore the perfect neighborhood"/>
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
