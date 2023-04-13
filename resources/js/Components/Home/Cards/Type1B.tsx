import React, { ReactNode } from 'react'
import InfoBox from './Common/InfoBox'
import InfoBoxType2 from './Common/InfoBoxType2'
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
    <div className={`m-[1.875rem] w-[${props.w}rem] h-[${props.h}rem] rounded-[0.9375rem] bg-[#E6EDED] border-[1px] border-[#CAD4D5] shadow-[-6px_-6px_12px_#FFFFFF,6px_6px_12px_#BABFBF] flex flex-col justify-center items-center font-[nova] `}>

        <div className='w-[22.6875rem] h-[39.75rem] flex flex-col justify-between mt-[1.125rem] mb-[0.3125rem] gap-[0.5rem]'>

            <CardImage src={card_back} w='22.6875' h='17.9375'/>

            <div className='flex flex-col justify-between items-start h-full gap-[0.8125rem]'>
                <div className='flex justify-between items-start '>
                    <div className='flex flex-col items-start justify-start gap-[0.3125rem]'>
                        <div className='flex flex-col items-start justify-start gap-[0.125]'>

                            <div className='text-[1.75rem] font-[600] text-grade h-[2.125rem]'>
                                Creek Rise tower
                            </div>
                            <div className='flex justify-start items-center gap-[0.36125rem]'>
                                <div className=''>
                                    <img src={map_icon} alt=""  className='w-[0.98875rem] h-[0.875rem]'/>
                                </div>
                                <div className='text-[0.875rem] text-grade h-[1.0625rem]'>
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
                <div className='flex gap-[0.5rem] mt-[0.3125rem]'>
                    <Tag text={props.tags[0]} w='7.25' h='1.5'/>
                    <Tag text={props.tags[1]} w='7.25' h='1.5'/>
                    <Tag text={props.tags[2]} w='7.25' h='1.5'/>
                </div>
                <div className='flex gap-[0.75rem] mt-[0.3125rem]'>
                    <InfoBoxType2 shadow='shadow-[inset_-3.66303px_-3.66303px_5.49454px_#F7FFFF,inset_3.66303px_3.66303px_5.49454px_#B6C3C5]' w='5.1875' h='6.3125' icon_w='1.954375' icon_h='1.95125'img={img} upperText='Price AED' lowerText={props.info[0]} />
                    <InfoBoxType2 icon_w='2.16875' icon_h='1.62625'  shadow='shadow-[inset_-3.66303px_-3.66303px_5.49454px_#F7FFFF,inset_3.66303px_3.66303px_5.49454px_#B6C3C5]' w='5.1875' h='6.3125' img={bed_icon} upperText='Bedrooms' lowerText={props.info[1]} icon_top='0.8125' icon_left='1.4375'/>
                    <InfoBoxType2 shadow='shadow-[inset_-3.66303px_-3.66303px_5.49454px_#F7FFFF,inset_3.66303px_3.66303px_5.49454px_#B6C3C5]' w='5.1875' h='6.3125' icon_h='2.125' icon_w='58.79' img={bath} upperText='Bathrooms' lowerText={props.info[3]}/>
                    <InfoBoxType2 shadow='shadow-[inset_-3.66303px_-3.66303px_5.49454px_#F7FFFF,inset_3.66303px_3.66303px_5.49454px_#B6C3C5]' w='5.1875' h='6.3125' img={size_icon} upperText='Area in Sq.ft' lowerText={props.info[2]}/>
                </div>
                <div className='flex gap-[1.82375rem] mb-[1.03875rem] mt-[0.3125rem]'>
                    <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                    <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                    <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                    <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                    <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Type1B
