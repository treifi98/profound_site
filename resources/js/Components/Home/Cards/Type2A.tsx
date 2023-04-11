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
import card_back from '../../../../assets/primary.png'
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

const Type2A = (props:Props) => {
    return (
        <div className={`m-[30px] w-[${props.w}px] h-[${props.h}px] rounded-[15px] bg-[#E6EDED] border-[1px] border-[#CAD4D5] shadow-[-6px_-6px_12px_3px_#FFFFFF,6px_6px_12px_#BABFBF] flex flex-col justify-center items-center font-[nova] `}>

            <div className='w-[838px] h-[613px] flex flex-col justify-between mt-[18px] mb-[15px] gap-[13px]'>

                <CardImage src={card_back} w='838' h='418.63'/>


                <div className='w-[838px] h-[153.43px] flex gap-[17.29px]'>
                    {/* all */}
                    <div className='w-[383.71px] h-[152.38px] flex flex-col gap-[17.32px]'>
                        <div className='flex justify-between items-start'>
                            <div className='flex flex-col gap-[0px]'>
                                <div className='text-grade w-[214px] h-[34px] text-[28px] font-[600]'>
                                    Creek Rise tower
                                </div>
                                <div className='flex w-[143.6px] h-[17px] gap-[5.78px] items-end mt-[3px]'>
                                    <div className='w-[15.82px] h-[14.01px]'>
                                        <img src={map_icon} alt="" className='w-full h-full'/>
                                    </div>
                                    <div className='text-[14px] w-[132px] h-[17px] font-[400] text-grade'>Dubai Creek Harbor</div>
                                </div>
                                <div className='w-[225px] h-[31px] text-[20px] text-grade font-[400] pt-[6px]'>
                                    New project coming soon
                                </div>
                            </div>
                            <div className='flex gap-[11.58px] items-center'>
                                <InfoSocial img={share_icon} value="1997" w="33.68" h="19.24" img_h="12.38" img_w="12.38"/>
                                <InfoSocial img={fav_icon} value="1997" w="33.68" h="19.24" img_h="12.38" img_w="12.38"/>
                                <InfoSocial img={view_icon} value="1997" w="33.68" h="19.24" img_h="19.24" img_w="19.24"/>
                            </div>
                        </div>
                        <div className='flex w-full gap-[17px]'>
                        <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                        <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                        <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                        <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                        <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                        <Action img={video_call_action} text="test" w='50' h='50' action=''/>
                        </div>
                    </div>
                    <div className='w-full h-full flex flex-col gap-[15.9px]'>
                        <div className='flex justify-center items-center gap-[8px]'>
                            <Tag text={props.tags[0]} w='142' h='27'/>
                            <Tag text={props.tags[1]} w='142' h='27'/>
                            <Tag text={props.tags[2]} w='142' h='27'/>
                        </div>
                        <div className='flex gap-[24px]'>
                            <InfoBox w='90' h='110.42' img={img} upperText='Price Starting from AED' lowerText={props.info[0]}/>
                            <InfoBox w='90' h='110.42' img={bed_icon} upperText='Number Of Bedrooms' lowerText={props.info[1]}/>
                            <InfoBox w='90' h='110.42' img={size_icon} upperText='Area in Sq.ft (Min-Max)' lowerText={props.info[2]}/>
                            <InfoBox w='90' h='110.42' icon_h='34' icon_w='58.79' img={props.developer_img} upperText='Year Of Established' lowerText={props.info[3]}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      )
}

export default Type2A
