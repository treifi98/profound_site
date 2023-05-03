import React, { useState } from 'react'


interface Props{
    numberOfItems:number
    // activeIndex?:number
    innerNavigation?:Function,
    outerNavigation:Function
}
const SliderPagination = (props:Props) => {
    const items = Array(props.numberOfItems).fill(0)
    const [active,setActive] = useState( 0)
    props.outerNavigation((x) => {
        console.log(x)
        if(typeof(x) != 'object'){
            x = Math.abs(x)
            if(x >= (props.numberOfItems)){

                // alert(x)

                    // setActive(0)
                    setActive(((x)%(props.numberOfItems)))

            }
            else{
                setActive(x)
            }

        }
        // console.log(x)
    })

    const handleClick = (index:number) => {
        props.innerNavigation(index)
        setActive(index)
        // alert(index)

    }
    return (
        <div className='flex gap-[0.676875rem]'>
            {
                items.map((item,index) => (
                    <div key={index} className='w-[0.84625rem] h-[0.84625rem] bg-[#E6EDED] rounded-full border-[#DDE4E4] border-[0.0625rem] shadow-[inset_-0.331005rem_-0.331005rem_0.496508125rem_#FFFFFF,inset_0.331005rem_0.331005rem_0.496508125rem_#AEBBBD] relative cursor-pointer flex justify-center items-center' onClick={() => handleClick(index)}>
                        {
                            (active == index) ?(
                                <div key={index+'c'} className='w-[0.5075rem] h-[0.5075rem] bg-custom-gradient_pagination_circle rounded-full'>

                                </div>
                            ) : <div></div>

                        }
                    </div>
                ))
            }
        </div>
    )
}

export default SliderPagination
