import React, { ReactNode } from 'react'
import Circle from './Circle'

interface Props{
    nodes:any
}
const Contact = (props:Props) => {
  return (
      <div className='h-[16.5625rem] w-[3.875rem] mr-[1.875rem] flex flex-col justify-start items-center gap-[0.625rem] absolute top-[10.625rem] right-0 z-30'>
            {/* {console.log(props.nodes)} */}
            {
                props.nodes.map((node:any) => {
                    return <Circle img={node.img} action={node.action} w= {node.w} h={node.h}/>
                })
            }
        </div>
  )
}

export default Contact
