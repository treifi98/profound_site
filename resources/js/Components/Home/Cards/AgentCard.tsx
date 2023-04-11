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
    <div className={`mt-[60px] mb-[30px] mx-[30px] w-[${props.w}px] h-[${props.h}px] bg-[#E6EDED] border-[1px] border-[#CAD4D5] rounded-[70px_10px] shadow-[-6px_-6px_12px_3px_#FFFFFF,6px_6px_12px_#BABFBF] flex flex-col justify-start items-center`}>
        <div className='mt-[14px] h-[171px] w-[171px] bg-[#00464D] border-[1px] border-[#CED7D8] rounded-[90px_5px] shadow-[inset_-3.38286px_-3.38286px_5.62686px_-1.87562px_#007580,inset_3.38286px_3.38286px_4.42385px_#011618]'>
            <div className='h-[137px] w-[137px] bg-[#E6EDED] rounded-[72.22px_5px] shadow-[-2.64375px_-2.64375px_4.39746px_-1.46582px_#007580,2.64375px_2.64375px_3.45729px_#011618] mt-[17px] ml-[17px] pt-[9px] pl-[7px]'>
                <div className='w-[122.18px] h-[120px] rounded-[67.64px_0px]'>
                    <img src={props.img} alt="" className='w-[122.18px] h-[120px] rounded-[67.64px_0px] '/>

                </div>

            </div>
        </div>
        <div className='flex items-end gap-[10.12px] justify-center mt-[10px]'>
                <div className='h-[26.88px] w-[26.88px]'>
                <img src={verified} alt="" className='h-[26.88px] w-[26.88px]'/>
            </div>
            <div className='text-grade h-[36px] text-[30px]'>
                {props.name}
            </div>
        </div>
        <div className='text-[20px] justify-center items-start mt-[9px] text-grade'>
            {props.title}
        </div>
        <div className='text-center h-[27px] mt-[3px] text-grade text-[20px]'>
            {
                props.langs.join(' / ')
            }
        </div>
        <div className='flex gap-[30px] mt-[22px]'>
            <Action img={video_call_action} text="test" w='50' h='50' action=''/>
            <Action img={video_call_action} text="test" w='50' h='50' action=''/>
            <Action img={video_call_action} text="test" w='50' h='50' action=''/>
            <Action img={video_call_action} text="test" w='50' h='50' action=''/>
        </div>
        <div className='mt-[20px] flex justify-center'>
            <ViewAllButton w='160' h='40' ml='0' text='View Profile'/>
        </div>

    </div>
  )
}

export default AgentCard
