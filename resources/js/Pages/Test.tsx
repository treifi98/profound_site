import React from 'react'
import InfoBox from '@/Components/Home/Cards/Common/InfoBox'
import img from '../../assets/price_tag_icon.svg'
import Tag from '@/Components/Home/Cards/Common/Tag'
import share_icon from '../../assets/share_icon.svg'
import InfoSocial from '@/Components/Home/Cards/Common/InfoSocial'
import video_call_action from '../../assets/video_call_action.svg'
import Action from '@/Components/Home/Cards/Common/Action'
import CardImage from '@/Components/Home/Cards/Common/CardImage'
import card_back from '../../assets/cardBack.png'
import map_icon from '../../assets/map_icon.svg'
import bed_icon from '../../assets/bed.svg'
import size_icon from '../../assets/size_icon.svg'
import emar from '../../assets/emar.svg'
import Type1A from '@/Components/Home/Cards/Type1A'

const Test = () => {
  return (
    <>
        <Type1A w='398' h='636' tags={['80/20 Payment','Handover 2025','Apartment']} info={['1,125,0000','1,2,3,4,5,6','881 - 4590','1997']} developer_img={emar}/>
        <InfoBox w='83' h='101' img={img} upperText='Price Starting from AED' lowerText='1,125,0000'/>
        <Tag text='80/20 Payment' w='116' h='24'/>
        <InfoSocial img={share_icon} value="1997" w="33.68" h="19.24" img_h="12.38" img_w="12.38"/>
        <Action img={video_call_action} text="test" w='50' h='50' action=''/>
    </>

  )
}

export default Test
