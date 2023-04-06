import React, { ReactNode } from 'react'
import Circle from './Circle'

interface Props{
    nodes:any
}
const Contact = (props:Props) => {
  return (
      <div className='h-[265px] w-[62px] mr-[30px] flex flex-col justify-start items-center gap-[10px] absolute top-[170px] right-0 z-30'>
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
