import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { flip } from './TestSlice'
import { RootState } from '@/store';

interface Props{
    id:number
}
export const Test = (props:Props) => {
    const status = useSelector((state:RootState) => state.test[props.id] || false);
    const dispatch = useDispatch();
    const handleClick = () => {
        ref.current.style.backgroundColor = '#0f0';
        dispatch(flip(props.id))
    }
    const ref = useRef(null)
  return (
    <div className='w-[100px] h-[100px] bg-[#f00]'onClick={handleClick} ref={ref}>

    </div>
  )
}

// export default Test
