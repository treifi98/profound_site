import React, { useState } from 'react'


interface Props{
    numberOfItems:number
    // activeIndex?:number
    innerNavigation?:Function,
    outerNavigation:Function
}
const SliderPaginationcircle = (props:Props) => {
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
        <>

            <div key={0} className='z-[999999] absolute left-[9.3125rem] bottom-[3.8125rem] w-[0.84625rem] h-[0.84625rem] bg-[#E6EDED] rounded-full border-[#DDE4E4] border-[0.0625rem] shadow-[inset_-0.331005rem_-0.331005rem_0.496508125rem_#FFFFFF,inset_0.331005rem_0.331005rem_0.496508125rem_#AEBBBD] cursor-pointer flex justify-center items-center' onClick={() => handleClick(0)}>
                {
                    (active == 0) ?(
                        <div key={0+'c'} className='w-[0.5075rem] h-[0.5075rem] bg-custom-gradient_pagination_circle rounded-full'>

                        </div>
                    ) : <div></div>

                }
            </div>
            <div key={1} className='z-[999999] absolute left-[11.125rem] bottom-[3.125rem] w-[0.84625rem] h-[0.84625rem] bg-[#E6EDED] rounded-full border-[#DDE4E4] border-[0.0625rem] shadow-[inset_-0.331005rem_-0.331005rem_0.496508125rem_#FFFFFF,inset_0.331005rem_0.331005rem_0.496508125rem_#AEBBBD] cursor-pointer flex justify-center items-center' onClick={() => handleClick(1)}>
                {
                    (active == 1) ?(
                        <div key={1+'c'} className='w-[0.5075rem] h-[0.5075rem] bg-custom-gradient_pagination_circle rounded-full'>

                        </div>
                    ) : <div></div>

                }
            </div>
            <div key={2} className='z-[999999] absolute left-[7.875rem] bottom-[4.6875rem] w-[0.84625rem] h-[0.84625rem] bg-[#E6EDED] rounded-full border-[#DDE4E4] border-[0.0625rem] shadow-[inset_-0.331005rem_-0.331005rem_0.496508125rem_#FFFFFF,inset_0.331005rem_0.331005rem_0.496508125rem_#AEBBBD] cursor-pointer flex justify-center items-center' onClick={() => handleClick(2)}>
                {
                    (active == 2) ?(
                        <div key={2+'c'} className='w-[0.5075rem] h-[0.5075rem] bg-custom-gradient_pagination_circle rounded-full'>

                        </div>
                    ) : <div></div>

                }
            </div>
            <div key={3} className='z-[999999] absolute left-[6.6rem] bottom-[5.7625rem] w-[0.84625rem] h-[0.84625rem] bg-[#E6EDED] rounded-full border-[#DDE4E4] border-[0.0625rem] shadow-[inset_-0.331005rem_-0.331005rem_0.496508125rem_#FFFFFF,inset_0.331005rem_0.331005rem_0.496508125rem_#AEBBBD] cursor-pointer flex justify-center items-center' onClick={() => handleClick(3)}>
                {
                    (active == 3) ?(
                        <div key={3+'c'} className='w-[0.5075rem] h-[0.5075rem] bg-custom-gradient_pagination_circle rounded-full'>

                        </div>
                    ) : <div></div>

                }
            </div>



        </>
    )
}

export default SliderPaginationcircle
