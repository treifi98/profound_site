import React from 'react'
import { useState } from 'react'
import clicking_indicator from '../../../../assets/search_clicking_indicator.svg'
import main_search_icon from '../../../../assets/main_search_icon.svg'
import mgg from '../../../../assets/magnifying_glass.svg'
const Search = () => {
    const [search,setSearch] = useState(true)
    const [bg,setBg] = useState('../../../../assets/search_icon.svg')
    const handleClick = () => {
        setSearch(prevState => !prevState)

    }
  return (
    <>
        <div className='select-none rounded-full w-[58px] h-[58px] relative bg-[#002D31] shadow-[inset_0px_4.69775px_4.69775px_rgba(0,0,0,0.25),inset_-4.69775px_-4.69775px_4.69775px_-3.52331px_#007680] cursor-pointer' onClick={handleClick}>
            {/* <img src={main_search_icon} alt="" className='w-[58px] h-[58px] object-cover object-center'/> */}
            <div className='relative flex justify-center items-center'>
                {/* <img src={clicking_indicator} alt="" className='absolute w-[51px] h-[51px] top-[7px] left-[3px]'/> */}
                {search ? <div className='shadow-[0px_4.69775px_4.69775px_rgba(0,0,0,0.25),inset_11.7444px_11.7444px_23.4887px_rgba(5,59,66,0.16),inset_-11.7444px_-11.7444px_23.4887px_#08262C,inset_11.7444px_11.7444px_23.4887px_rgba(12,64,70,0.54)] absolute w-[51px] h-[51px] top-[4px] left-[4px] bg-[#002D31] rounded-full'></div> : ''}
                <img src={mgg} alt="" className='absolute w-[27px] h-[29px] top-[14px] left-[16px]'/>
            </div>
        </div>


    </>

  )
}

export default Search
