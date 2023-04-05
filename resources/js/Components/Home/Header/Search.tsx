import React from 'react'
import { useState } from 'react'
const Search = () => {
    const [search,setSearch] = useState(true)
    const handleClick = () => {
        setSearch(prevState => !prevState)
    }
  return (
    <>

        {
            search ? <div className={`w-[58px] h-[58px] rounded-full bg-[url('../../../../assets/sersh_icon.svg')] cursor-pointer`}
            onClick={handleClick}></div>
            :<div className={`w-[58px] h-[58px] rounded-full bg-[url('../../../../assets/clicked_search.svg')] cursor-pointer`}
            onClick={handleClick}>
        </div>
        }

    </>

  )
}

export default Search
