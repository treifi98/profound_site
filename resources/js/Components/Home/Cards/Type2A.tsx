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
        <div className={`m-[1.875rem] w-[${props.w}rem] h-[${props.h}rem] rounded-[0.9375rem] bg-[#E6EDED] border-[1px] border-[#CAD4D5] shadow-[-6px_-6px_12px_3px_#FFFFFF,6px_6px_12px_#BABFBF] flex flex-col justify-center items-center font-[nova] scale-50 lg:scale-100`}>

            <div className='w-[52.375rem] h-[38.3125rem] flex flex-col justify-between mt-[1.125rem] mb-[0.9375rem] gap-[0.8125rem]'>

                <CardImage src={card_back} w='52.375' h='26.164375'/>


                <div className='w-[52.375rem] h-[9.589375rem] flex gap-[1.080625rem]'>
                    {/* all */}
                    <div className='w-[23.981875rem] h-[9.52375rem] flex flex-col gap-[1.0825rem]'>
                        <div className='flex justify-between items-start'>
                            <div className='flex flex-col gap-[0rem]'>
                                <div className='text-grade w-[13.375rem] h-[2.125rem] text-[1.75rem] font-[600]'>
                                    Creek Rise tower
                                </div>
                                <div className='flex w-[8.975rem] h-[1.0625rem] gap-[0.36125rem] items-end mt-[0.1875rem]'>
                                    <div className='w-[0.98875rem] h-[0.875625rem]'>
                                        <img src={map_icon} alt="" className='w-[0.98875rem] h-[0.875625rem]'/>
                                    </div>
                                    <div className='text-[0.875rem] w-[8.25rem] h-[1.0625rem] font-[400] text-grade'>Dubai Creek Harbor</div>
                                </div>
                                <div className='w-[14.0625rem] h-[1.9375rem] text-[1.25rem] text-grade font-[400] pt-[0.375rem]'>
                                    New project coming soon
                                </div>
                            </div>
                            <div className='flex gap-[0.72375rem] items-center'>
                                <InfoSocial img={share_icon} value="1997" w="2.105" h="1.2025" img_h="0.77375" img_w="0.77375"/>
                                <InfoSocial img={fav_icon} value="1997" w="2.105" h="1.2025" img_h="0.77375" img_w="0.77375"/>
                                <InfoSocial img={view_icon} value="1997" w="2.105" h="1.2025" img_h="1.2025" img_w="1.2025"/>
                            </div>
                        </div>
                        <div className='flex w-full gap-[1.0625rem]'>
                        <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                        <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                        <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                        <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                        <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                        <Action img={video_call_action} text="test" w='3.125' h='3.125' action=''/>
                        </div>
                    </div>
                    <div className='w-full h-full flex flex-col gap-[0.99375rem]'>
                        <div className='flex justify-center items-center gap-[0.5rem]'>
                            <Tag text={props.tags[0]} w='8.875' h='1.6875'/>
                            <Tag text={props.tags[1]} w='8.875' h='1.6875'/>
                            <Tag text={props.tags[2]} w='8.875' h='1.6875'/>
                        </div>
                        <div className='flex gap-[1.5rem]'>
                            <InfoBox w='5.625' h='6.90125' img={img} upperText='Price Starting from AED' lowerText={props.info[0]}/>
                            <InfoBox w='5.625' h='6.90125' img={bed_icon} upperText='Number Of Bedrooms' lowerText={props.info[1]}/>
                            <InfoBox w='5.625' h='6.90125' img={size_icon} upperText='Area in Sq.ft (Min-Max)' lowerText={props.info[2]}/>
                            <InfoBox w='5.625' h='6.90125' icon_h='2.125' icon_w='3.674375' img={props.developer_img} upperText='Year Of Established' lowerText={props.info[3]}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      )
}

export default Type2A
