import React from 'react'
import CheckComponent from './CheckComponent';

interface Props {
    options: {label:string,on:string,off:string,id:string}[],
    id: string,
    // children
}
const SelectByCheck = (props:Props) => {
  return (
    <div className='flex flex-col gap-[0rem]'>
    {
      props.options.map((item,index)=>{
        return (
            <div className='w-fulll h-[1.4375rem] flex justify-between items-baseline mt-[0.75rem]'>
            <div className='text-grade text-[0.9375rem]'>

                {item.label}
            </div>
            <div className='h-[1.183125rem] w-[2.3925rem] scale-[0.53] translate-x-[calc((-2.3925rem*0.35))]'>
                    <CheckComponent key={index} id={`${props.id}-${item.id}`} on={item.on} off={item.off}/>
            </div>
          </div>
        )
      })
    }
      {/* <div className='w-fulll h-[20px] flex justify-between items-center'>
          <div>

          </div>
          <div></div>
      </div> */}

    </div>
  )
}

export default SelectByCheck
