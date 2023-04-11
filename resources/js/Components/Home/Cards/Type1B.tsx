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
import card_back from '../../../../assets/cardBack.png'
import map_icon from '../../../../assets/map_icon.svg'
import bed_icon from '../../../../assets/bed.svg'
import size_icon from '../../../../assets/size.svg'
import bath from '../../../../assets/bath_icon.svg'
interface Props{
    // children:ReactNode,
    w:string,
    h:string,
    tags:string[],
    info:string[],
    actions:string[],
    // bath:string,
    // className:string,

}
const Type1B = (props:Props) => {
  return (
    <div className={`m-[30px] w-[${props.w}px] h-[${props.h}px] rounded-[15px] bg-[#E6EDED] border-[1px] border-[#CAD4D5] shadow-[-6px_-6px_12px_#FFFFFF,6px_6px_12px_#BABFBF] flex flex-col justify-center items-center font-[nova] `}>

        <div className='w-[363px] h-[636px] flex flex-col justify-between mt-[18px] mb-[5px] gap-[8px]'>

            <CardImage src={card_back} w='363' h='287'/>

            <div className='flex flex-col justify-between items-start h-full gap-[13px]'>
                <div className='flex justify-between items-start '>
                    <div className='flex flex-col items-start justify-start gap-[5px]'>
                        <div className='flex flex-col items-start justify-start gap-[2px]'>

                            <div className='text-[28px] font-[600] text-grade h-[34px]'>
                                Creek Rise tower
                            </div>
                            <div className='flex justify-start items-center gap-[5.78px]'>
                                <div className=''>
                                    <img src={map_icon} alt="" />
                                </div>
                                <div className='text-[14px] text-grade h-[17px]'>
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
                <div className='flex gap-[8px] mt-[5px]'>
                    <Tag text={props.tags[0]} w='116' h='24'/>
                    <Tag text={props.tags[1]} w='116' h='24'/>
                    <Tag text={props.tags[2]} w='116' h='24'/>
                </div>
                <div className='flex gap-[12px] mt-[5px]'>
                    <InfoBox shadow='shadow-[inset_-3.66303px_-3.66303px_5.49454px_#F7FFFF,inset_3.66303px_3.66303px_5.49454px_#B6C3C5]' w='83' h='101' img={img} upperText='Price AED' lowerText={props.info[0]}/>
                    <InfoBox shadow='shadow-[inset_-3.66303px_-3.66303px_5.49454px_#F7FFFF,inset_3.66303px_3.66303px_5.49454px_#B6C3C5]' w='83' h='101' img={bed_icon} upperText='Bedrooms' lowerText={props.info[1]}/>
                    <InfoBox shadow='shadow-[inset_-3.66303px_-3.66303px_5.49454px_#F7FFFF,inset_3.66303px_3.66303px_5.49454px_#B6C3C5]' w='83' h='101' icon_h='34' icon_w='58.79' img={bath} upperText='Bathrooms' lowerText={props.info[3]}/>
                    <InfoBox shadow='shadow-[inset_-3.66303px_-3.66303px_5.49454px_#F7FFFF,inset_3.66303px_3.66303px_5.49454px_#B6C3C5]' w='83' h='101' img={size_icon} upperText='Area in Sq.ft' lowerText={props.info[2]}/>
                </div>
                <div className='flex gap-[29.18px] mb-[16.62px] mt-[5px]'>
                    <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                    <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                    <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                    <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                    <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Type1B
