import React, { ReactNode } from 'react'
import InfoBox from './Common/InfoBox'
import img from '../../../../assets/price_tag_icon.svg'
import Tag from './Common/Tag'
import share_icon from '../../../../assets/share_icon.svg'
import fav_icon from '../../../../assets/fav_icon.svg'
import view_icon from '../../../../assets/view_icon.svg'
import InfoSocial from './Common/InfoSocial'
import video_call_action from '../../../../assets/video_call_action.svg'
import Action from './Common/Action'
import CardImage from './Common/CardImage'
import card_back from '../../../../assets/card3.png'
import map_icon from '../../../../assets/map_icon.svg'
import bed_icon from '../../../../assets/bed.svg'
import size_icon from '../../../../assets/size.svg'
import emar from '../../../../assets/emar.svg'
interface Props{
    // children:ReactNode,
    w:string,
    h:string,
    tags:string[],
    info:string[],
    actions:string[],
    developer_img:string,
    // className:string,

}
const Type3A = (props:Props) => {
  return (
    <div className={`m-[1.875rem] w-[${props.w}rem] h-[${props.h}rem] rounded-[0.9375rem] bg-[#E6EDED] border-[1px] border-[#CAD4D5] shadow-[-6px_-6px_12px_#FFFFFF,6px_6px_12px_#BABFBF] flex justify-center items-center font-[nova] `}>

        <div className='w-[66.194375rem] h-[22.3125rem] flex items-center  gap-[1.375rem]'>

            <CardImage src={card_back} w='34.8125' h='22.3125'/>

            <div className='flex flex-col justify-between items-start  h-full gap-[0.8125rem]'>
                <div className='flex justify-between items-start w-full'>
                    <div className='flex flex-col items-start justify-start gap-[0.3125rem]'>
                        <div className='flex flex-col items-start justify-start gap-[1px]'>

                            <div className='text-[1.75rem] font-[600] text-grade h-[2.3125rem]'>
                                Creek Rise tower
                            </div>
                            <div className='flex justify-start items-center gap-[0.36125rem]'>
                                <div className=''>
                                    <img src={map_icon} alt="" className='w-[1.115625rem] h-[0.98875rem]'/>
                                </div>
                                <div className='text-[0.875rem] text-grade h-[1.1875rem]'>
                                    Dubai Creek Harbor
                                </div>
                            </div>
                        </div>
                        <div className='text-[1.25rem] text-grade h-[1.625rem] font-[400]'>
                            New project coming soon
                        </div>
                    </div>
                    <div className='flex gap-[0.751875rem] '>
                        <InfoSocial img={share_icon} value="1997" w="2.105" h="1.2025" img_h="0.77375" img_w="0.77375"/>
                        <InfoSocial img={fav_icon} value="1997" w="2.105" h="1.2025" img_h="0.77375" img_w="0.77375"/>
                        <InfoSocial img={view_icon} value="1997" w="2.105" h="1.2025" img_h="1.2025" img_w="1.2025"/>

                    </div>
                </div>
                <div className='flex gap-[1.4375rem] mt-[0.3125rem]'>
                    <Tag text={props.tags[0]} w='8.875' h='1.6875'/>
                    <Tag text={props.tags[1]} w='8.875' h='1.6875'/>
                    <Tag text={props.tags[2]} w='8.875' h='1.6875'/>
                </div>
                <div className='flex gap-[2.1875rem] mt-[0.3125rem]'>
                    <InfoBox w='5.84625' h='7.138125' img={img} upperText='Price Starting from AED' lowerText={props.info[0]}/>
                    <InfoBox w='5.84625' h='7.138125' img={bed_icon} upperText='Number Of Bedrooms' lowerText={props.info[1]}/>
                    <InfoBox w='5.84625' h='7.138125' img={size_icon} upperText='Area in Sq.ft (Min-Max)' lowerText={props.info[2]}/>
                    <InfoBox w='5.84625' h='7.138125' icon_h='2.125' icon_w='3.674375' img={props.developer_img} upperText='Year Of Established' lowerText={props.info[3]}/>
                </div>
                <div className='flex gap-[1.75rem] mt-[0.3125rem]'>
                    <Action img={video_call_action} text="test" w='3.55375' h='3.55375' action='' top='4'/>
                    <Action img={video_call_action} text="test" w='3.55375' h='3.55375' action='' top='4'/>
                    <Action img={video_call_action} text="test" w='3.55375' h='3.55375' action='' top='4'/>
                    <Action img={video_call_action} text="test" w='3.55375' h='3.55375' action='' top='4'/>
                    <Action img={video_call_action} text="test" w='3.55375' h='3.55375' action='' top='4'/>
                    <Action img={video_call_action} text="test" w='3.55375' h='3.55375' action='' top='4'/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Type3A
