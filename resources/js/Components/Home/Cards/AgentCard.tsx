import React from 'react'
import verified from '../../../../assets/verified.svg'
import Action from './Common/Action'
import video_call_action from '../../../../assets/video_call_action.svg'
import ViewAllButton from './Common/ViewAllButton'

interface Props{
    img:string,
    name:string,
    title:string,
    langs:string[],
    action?:Function,
    h:string,
    w:string,
}
const AgentCard = (props:Props) => {
  return (
    <div className={`mt-[3.75rem] mb-[1.875rem] mx-[1.875rem] w-[${props.w}rem] h-[${props.h}rem] bg-[#E6EDED] border-[1px] border-[#CAD4D5] rounded-[70px_10px] shadow-[-6px_-6px_12px_3px_#FFFFFF,6px_6px_12px_#BABFBF] flex flex-col justify-start items-center`}>
        <div className='mt-[0.875rem] h-[10.6875rem] w-[10.6875rem] bg-[#00464D] border-[1px] border-[#CED7D8] rounded-[5.625rem_0.3125rem] shadow-[inset_-3.38286px_-3.38286px_5.62686px_-1.87562px_#007580,inset_3.38286px_3.38286px_4.42385px_#011618]'>
            <div className='h-[8.5625rem] w-[8.5625rem] bg-[#E6EDED] rounded-[4.51375rem_0.3125rem] shadow-[-2.64375px_-2.64375px_4.39746px_-1.46582px_#007580,2.64375px_2.64375px_3.45729px_#011618] mt-[1.0625rem] ml-[1.0625rem] pt-[0.5625rem] pl-[0.4375rem]'>
                <div className='w-[7.63625rem] h-[7.5rem] rounded-[4.2275rem_0rem]'>
                    <img src={props.img} alt="" className='w-[7.63625rem] h-[7.5rem] rounded-[4.2275rem_0rem] '/>

                </div>

            </div>
        </div>
        <div className='flex items-end gap-[0.6325rem] justify-center mt-[0.625rem]'>
                <div className='h-[1.68rem] w-[1.68rem]'>
                <img src={verified} alt="" className='h-[1.68rem] w-[1.68rem]'/>
            </div>
            <div className='text-grade h-[2.25rem] text-[1.875rem]'>
                {props.name}
            </div>
        </div>
        <div className='text-[1.25rem] justify-center items-start mt-[0.5625rem] text-grade'>
            {props.title}
        </div>
        <div className='text-center h-[1.6875rem] mt-[0.1875rem] text-grade text-[1.25rem]'>
            {
                props.langs.join(' / ')
            }
        </div>
        <div className='flex gap-[1.875rem] mt-[1.375rem]'>
            <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
            <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
            <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
            <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
        </div>
        <div className='mt-[2rem] flex justify-center'>
            <ViewAllButton w='10' h='2.5' ml='0' text='View Profile'/>
        </div>

    </div>
  )
}

export default AgentCard
