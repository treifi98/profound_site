import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { setHoverState } from './MenueHoverSlice'


// interface Props{
//     children:ReactNode
// }
const MenueHover = () => {

    // const [openState,setOpenState] = useState(false)
    const openState = useSelector((state:RootState) => state.menue.open)
    const hoverState = useSelector((state:RootState) => state.menue.hoverd)
    // const hoverId = useSelector((state:RootState) => state.menue.hoverId)
    const childComponent = useSelector((state:RootState) => state.menue.child)
    const ref = useRef(null)
    const dispatch = useDispatch()

    console.log(openState)
    useEffect(() => {
        if(openState){

            ref.current.style.height="100vh"
            // ref.current.style.marginBottom="100vh"
        }
        else if(hoverState){
            ref.current.style.height="25.25rem"

        }
        else{

            ref.current.style.height="0rem"
            ref.current.style.marginBottom="0px"
        }
    },[openState, hoverState])

    return (
        <div className='h-[0rem] w-full bg-[#E6EDED] absolute top-[calc(6.25rem-1px)] transition-all duration-[0.4s] overflow-hidden' ref={ref} onMouseEnter={() => dispatch(setHoverState(true))} onMouseLeave={() => dispatch(setHoverState(false))}>
            {childComponent}
        </div>
    )
}

export default MenueHover
