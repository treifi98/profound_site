import React, { useEffect, useRef } from 'react'
import { Link } from '@inertiajs/react'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '@/store'
import MenueChild from '../MenueChild'
import FiltersContainer from '../../FiltersAndSearch/FiltersContainer'
import hauseIcon from '../../../../../assets/house.svg'
import { displayForNav, hideForNav } from '../../MenueHoverSlice'
import OneCardSwiper from './OneCardSwiper'
import InhoverLinks from './InhoverLinks'
import NavHoverCoordinator from './NavHoverCoordinator'


interface props{
    text:string,
    link:string,
    id:number
}
const NavElement = (props:props) => {
    const hoverState = useSelector((state:RootState) => state.menue.hoverd)
    const hoverId = useSelector((state:RootState) => state.menue.hoverId)

    const ref = useRef(null)
    const elmnt = <NavHoverCoordinator id={props.id}/>
    const dispatch = useDispatch()

    const handleMouseEnter=(e:any)=>{
        dispatch(displayForNav({id:props.id,elmnt}))

        // e.target.style.boxShadow = 'inset -3px -3px 4px #04626B, inset 4px 4px 6px #011618'
    }
    const handleMouseLeave=(e:any)=>{
        dispatch(hideForNav())

        // e.target.style.boxShadow = '-0.19508rem -0.19508rem 0.324484375rem -0.10816125rem #007580, 0.19508rem 3.12128px 0.25511rem #011618'
    }
    useEffect(() => {
        if((hoverId == props.id) && hoverState){
            // alert(hoverId)
            ref.current.style.boxShadow = 'inset -0.1875rem -0.1875rem 0.25rem #04626B, inset 0.25rem 0.25rem 0.375rem #011618'
        }else{

            ref.current.style.boxShadow = '-0.19508rem -0.19508rem 0.324484375rem -0.10816125rem #007580, 0.19508rem 0.19508rem 0.25511rem #011618'
        }
    },[hoverState])
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative transition-all select-none w-[6.37rem] h-[2.187rem] bg-[#002D31] border-[0.0625rem] border-[#1F5B62] rounded-[0.312rem] shadow-[-0.19508rem_-0.19508rem_0.324484375rem_-0.10816125rem_#007580,0.19508rem_0.19508rem_0.25511rem_#011618] text-[#fff] flex justify-center items-center cursor-pointer' ref={ref}>

            <Link href={props.link} className='relative h-full w-full flex justify-center items-center'>
                {props.text}
            </Link>
            {
                ((hoverId == props.id) && hoverState) && <div className='absolute bg-[red] w-[6.37rem] left-0 z-[9999999] h-[calc(100%+1rem)] top-[2.187rem] opacity-0'>
                </div>
            }

        </div>
    )
}

export default NavElement
