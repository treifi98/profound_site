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
    <div className={`m-[30px] w-[${props.w}px] h-[${props.h}px] rounded-[15px] bg-[#E6EDED] border-[1px] border-[#CAD4D5] shadow-[-6px_-6px_12px_#FFFFFF,6px_6px_12px_#BABFBF] flex justify-center items-center font-[nova] `}>

        <div className='w-[1059.11px] h-[357px] flex items-center  gap-[22px]'>

            <CardImage src={card_back} w='557' h='357'/>

            <div className='flex flex-col justify-between items-start  h-full gap-[13px]'>
                <div className='flex justify-between items-start w-full'>
                    <div className='flex flex-col items-start justify-start gap-[5px]'>
                        <div className='flex flex-col items-start justify-start gap-[1px]'>

                            <div className='text-[28px] font-[600] text-grade h-[37px]'>
                                Creek Rise tower
                            </div>
                            <div className='flex justify-start items-center gap-[5.78px]'>
                                <div className=''>
                                    <img src={map_icon} alt="" />
                                </div>
                                <div className='text-[14px] text-grade h-[19px]'>
                                    Dubai Creek Harbor
                                </div>
                            </div>
                        </div>
                        <div className='text-[20px] text-grade h-[26px] font-[400]'>
                            New project coming soon
                        </div>
                    </div>
                    <div className='flex gap-[12.03px] '>
                        <InfoSocial img={share_icon} value="1997" w="33.68" h="19.24" img_h="12.38" img_w="12.38"/>
                        <InfoSocial img={fav_icon} value="1997" w="33.68" h="19.24" img_h="12.38" img_w="12.38"/>
                        <InfoSocial img={view_icon} value="1997" w="33.68" h="19.24" img_h="19.24" img_w="19.24"/>

                    </div>
                </div>
                <div className='flex gap-[23px] mt-[5px]'>
                    <Tag text={props.tags[0]} w='142' h='27'/>
                    <Tag text={props.tags[1]} w='142' h='27'/>
                    <Tag text={props.tags[2]} w='142' h='27'/>
                </div>
                <div className='flex gap-[35px] mt-[5px]'>
                    <InfoBox w='93.54' h='114.21' img={img} upperText='Price Starting from AED' lowerText={props.info[0]}/>
                    <InfoBox w='93.54' h='114.21' img={bed_icon} upperText='Number Of Bedrooms' lowerText={props.info[1]}/>
                    <InfoBox w='93.54' h='114.21' img={size_icon} upperText='Area in Sq.ft (Min-Max)' lowerText={props.info[2]}/>
                    <InfoBox w='93.54' h='114.21' icon_h='34' icon_w='58.79' img={props.developer_img} upperText='Year Of Established' lowerText={props.info[3]}/>
                </div>
                <div className='flex gap-[28px] mt-[5px]'>
                    <Action img={video_call_action} text="test" w='56.86' h='56.86' action='' top='64'/>
                    <Action img={video_call_action} text="test" w='56.86' h='56.86' action='' top='64'/>
                    <Action img={video_call_action} text="test" w='56.86' h='56.86' action='' top='64'/>
                    <Action img={video_call_action} text="test" w='56.86' h='56.86' action='' top='64'/>
                    <Action img={video_call_action} text="test" w='56.86' h='56.86' action='' top='64'/>
                    <Action img={video_call_action} text="test" w='56.86' h='56.86' action='' top='64'/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Type3A
