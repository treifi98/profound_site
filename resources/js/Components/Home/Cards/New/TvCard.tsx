import React, { useEffect, useRef, useState } from 'react'

import NewCardImage from '../Common/NewCardImage'
import tvcardImage from '../../../../../assets/tvcard.png'
import brochureIcon from '../../../../../assets/brochure.svg'
import NewSocial from '../Common/NewSocial'
import shareIcon from '../../../../../assets/sharefilled.svg'
import viewIcon from '../../../../../assets/viewfilled.svg'
import favIcon from '../../../../../assets/favfilled.svg'
import mapIcon from '../../../../../assets/map_icon.svg'
import NewTag from '../Common/NewTag'
import Price from '../Common/Boxes/OffPlan/Price'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/pagination.css";
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper'
import SliderPagination from '../Common/SliderPagination';
import Brochure from '../Common/Brochure'
import Agent from '../Common/Boxes/OffPlan/Agent'
import Contact from '../Common/Boxes/OffPlan/Contact'
import BoxMaster from '../Common/Boxes/New/BoxMaster'

interface Props{

    img:string,
    mainWidth?:string,
    mainHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    imgMT?:string,
    titleSize?:string,
    subTitleSize?:string,
    areatextSize?:string,
    areaIconWidth?:string,
    areaIconHeight?:string,
    areaWidth?:string,
    socialWrapperWidth?:string,
    boxesGapY?:string,
    rounded?:string,
    title:string,

    tagsWrapperMT?:string,
    area:string,
    subTitle:string,
    sectionWidth?:string,
    sectionHeight?:string,
    tagWidth?:string,
    tagsWrapperrWidth?:string,
    tagHeight?:string,
    boxWidth?:string,
    boxHeight?:string,
    boxWrapperWidth?:string,
    boxWrapperHeight?:string,
    bottomWrapperWidth?:string,
    bottomWrapperHeight?:string,
    bottomWrapperMT?:string,
    bottomWrapperML?:string,
    titleRowWidth?:string,
    brochureAndSocialWrapperHeight?:string,
    subTitileAndAreaWrapperWidth?:string,
    separatorWidth?:string,
    SeparatorHeight?:string,
    imageSectionWidth?:string,
    imageSectionHeight?:string,
    socialWrapperML?:string,
    titleMT?:string,
    subTitleWrapperMT?:string,
    boxWrapperMT?:string,
    boxGapX?:string,
    boxGapY?:string,
    sectionMT?:string,
    rightSecWidth?:string,
    leftSecWidth?:string
    rightSecHeight?:string,
    leftSecHeight?:string
    rightSecML?:string,
    leftSecML?:string,
    textSecWidth?:string,
    textSecHeight?:string,
    textSecMT?:string,
    txetSecPL?:string,
    areaWrapperMT?:string,
    tagGapY?:string,


    priceBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lineHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{
            mainWidth?:string,
            mainHeight?:string,
            content?:{bed:string,price:string}[] | string[],
            zibraWidth?:string,
            zibraHeight?:string,
            textSize?:string,
            aedSize?:string,
            fontWeight?:string,
            isPrice?:boolean
        }
    },
    bedBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            lineHeight?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    sizeBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            lineHeight?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    paymentBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            lineHeight?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{
            mainWidth?:string,
            mainHeight?:string,
            text?:string,
            textSize?:string,
            fontWeight?:string,
            lowerSectionHeight?:string,
            lowerText?:string,
            lowerSectionTextSize?:string,
            textHeight?:string,
            textMT?:string
        }
    },
    compleationBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            lineHeight?:string,
            textSize?:string,
            textWidth?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    developerBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            textWidth?:string,
            lineHeight?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    contactBox?:{
        args:{
            mainWidth?:string,
            mainHeight?:string,
            img?:string,
            imgWidth?:string,
            imgHeight?:string,
            imgMT?:string,
            text?:string,
            textSize?:string,
            textWidth?:string,
            lineHeight?:string,
            lowerSectionHeight?:string,
            lowerTextSize?:string,
            lowerText?:string,
            textMT?:string,
            textMB?:string
        }
        flipArgs?:{}
    },
    agentBox?:{
        Args:{


            name:string,
            speciality:string,
            langs:string[]
            nameTextSize?:string,
            textSize?:string,
            rounded?:string,
            img1Width?:string,
            img1Height?:string,
            img2Width?:string,
            img2Height?:string,
            imgWrapperWidth?:string,
            imgWrapperHeight?:string,
            agentSectionHeight?:string,
            nameFontWaight?:string,
            lineHeight?:string,

        }
        // flipArgs?:{}
    },
    socialWidth?:string,
    socialHeight?:string,
    favIconWidth?:string,
    favIconHeight?:string,
    shareIconWidth?:string,
    shareIconHeight?:string,
    viewIconWidth?:string,
    viewIconHeight?:string,
    brochure?:{
        mainWidth?:string,
        mainHeight?:string,
        imgWidth?:string,
        imgHeight?:string,
        imgWrapperWidth?:string,
        seperatorML?:string,
        imgMT?:string,
        restWidth?:string,
        textSize?:string,
        separatorWidth?:string
    },


}

const TvCard = (props:Props) => {
    const [swiper, setSwiper] = useState<any>();
    const [activeIndex, setActiveIndex] = useState(0)
    const outerNavigation = (callBack) => {
        useEffect(() => callBack(activeIndex),[activeIndex])
    }
    const innerNavigation = (slide) => {
        // alert('f')
        // swiper.slideTo(slide)
        const x = slide - swiper.activeIndex
        console.log (x)
        if(x > 0){
            const y = (((x)%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slideNext()
            }
        }
        else{
            const y = (((Math.abs(x))%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slidePrev()
            }
        }
        // setSwiper(slide)
        setActiveIndex(swiper.activeIndex)

    }
    const imageref = useRef(null)
    const handleMouseEnter = () => {
        // imageref.current.style.transform = 'scale(1.1)'
        // alert('d')
    }
    const handleMouseLeave = () => {
        // imageref.current.style.transform = 'scale(1)'
    }
    return (
        <div className=' bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.375rem_-0.375rem_0.75rem_0.1875rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#BABFBF] rounded-[0.9375rem] overflow-hidden my-[1rem]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ width:props.mainWidth?props.mainWidth:'54.1875rem',height:props.mainHeight?props.mainHeight:'39.625rem', }}>
            <div className=' mx-auto overflow-hidden relative origin-bottom transition-all' ref={imageref} style={{ width:props.imgWidth?props.imgWidth:'52.5625rem',height:props.imgHeight?props.imgHeight:'22.8125rem',marginTop:props.imgMT?props.imgMT:'0.9375rem' }}>
                <Swiper
                    // pagination={pagination}
                    modules={[Pagination]}
                    slidesPerView={1}
                    // slidesPerGroupSkip={3}
                    spaceBetween={20}
                    breakpoints={{
                        810: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        },
                        1500: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        }
                    }}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    // loop={true}
                    rewind={true}
                    onSlideChangeTransitionEnd={(swiper) => {
                        // alert(swiper.activeIndex)

                        setActiveIndex(swiper.activeIndex)
                        // setSwiper(swiper)

                    }}
                    className="tvImageSwiperInternal"

                    >
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={tvcardImage} rounded='0.9375'/>
                        </SwiperSlide>



                </Swiper>
                <div className='absolute bottom-[1.21875rem] left-[calc(50%-2.46625rem)] z-[999999]'>
                    <SliderPagination numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

                </div>
            </div>
            <div className=' flex justify-between' style={{ marginTop:props.sectionMT?props.sectionMT:'0.875rem', width:props.sectionWidth?props.sectionWidth:'52.4375rem', marginLeft: props.leftSecML?props.leftSecML:'0.9375rem'  }}>
                <div className='' style={{ width:props.leftSecWidth?props.leftSecWidth:'24.625rem',height:props.leftSecHeight?props.leftSecHeight:'14.4375rem'}}>
                    <div className='w-full flex justify-between items-center' style={{ height:props.brochureAndSocialWrapperHeight?props.brochureAndSocialWrapperHeight:'1.625rem' }}>
                        <div className='flex justify-between items-center' style={{ width:props.socialWrapperWidth?props.socialWrapperWidth:'7.5625rem' }}>
                            <div className=' ' style={{ width:props.socialWidth?props.socialWidth:'1.75rem',height:props.socialHeight?props.socialHeight:'1.75rem' }}>

                                <NewSocial img={shareIcon} img_w={props.shareIconWidth?props.shareIconWidth:'0.879375'} img_h={props.shareIconHeight?props.shareIconHeight:'0.879375'}/>
                            </div>
                            <div className=' ' style={{ width:props.socialWidth?props.socialWidth:'1.75rem',height:props.socialHeight?props.socialHeight:'1.75rem' }}>

                                <NewSocial img={favIcon} img_w={props.favIconWidth?props.favIconWidth:'0.910625'} img_h={props.favIconHeight?props.favIconHeight:'0.8655'}/>
                            </div>
                            <div className=' ' style={{ width:props.socialWidth?props.socialWidth:'1.75rem',height:props.socialHeight?props.socialHeight:'1.75rem' }}>

                                <NewSocial img={viewIcon} img_w={props.viewIconWidth?props.viewIconWidth:'1.099375'} img_h={props.viewIconHeight?props.viewIconHeight:'0.769375'}/>
                            </div>
                        </div>
                       <div>
                        <Brochure/>
                       </div>

                    </div>
                    <div className='w-full  rounded-[0.3011875rem] bg-[#E6EDED] shadow-[inset_-0.3011875rem_-0.3011875rem_0.34340875rem_#FFFFFF,inset_0.228939375rem_0.228939375rem_0.34340875rem_#B6C3C5]' style={{ height: props.textSecHeight?props.textSecHeight:'7.625rem',marginTop:props.textSecMT?props.textSecMT:'1.575rem',paddingLeft:props.txetSecPL?props.txetSecPL:'0.6875rem' }}>
                        <div className='text-[#19464B] font-[600]' style={{ fontSize:props.titleSize?props.titleSize:'1.5rem', paddingTop:props.titleMT?props.titleMT:'0.325rem' }}>
                            Creek Rise tower 2 west side
                        </div>
                        <div className='text-[#19464B]' style={{ fontSize:props.subTitleSize?props.subTitleSize:'1.375rem',marginTop:props.subTitleWrapperMT?props.subTitleWrapperMT:'0.1125rem' }}>
                            New project coming soon
                        </div>
                        <div className='flex items-center justify-between' style={{ marginTop:props.areaWrapperMT?props.areaWrapperMT:'0.1375rem',width:props.areaWidth?props.areaWidth:'9.4125rem' }}>
                            <img src={mapIcon} alt="" className=' ' style={{ width:props.areaIconWidth?props.areaIconWidth:'0.92125rem', height:props.areaIconHeight?props.areaIconHeight:'0.874375rem' }} />
                            <div className='text-[#19464B] 'style={{ fontSize:props.areatextSize?props.areatextSize:'0.9375rem' }}>
                                Dubai Creek Harbor
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto flex flex-wrap  justify-between' style={{ width:props.tagsWrapperrWidth?props.titleRowWidth:'24.5625rem',marginTop:props.tagsWrapperMT?props.tagsWrapperMT:'1.125rem',rowGap:props.tagGapY?props.tagGapY:'1rem' }}>
                        <div className='' style={{ width:props.tagWidth?props.tagWidth:'7.5625rem',height:props.tagHeight?props.tagHeight:'1.625rem' }}>
                            <NewTag text='Appartment'/>

                        </div>
                        <div className='' style={{ width:props.tagWidth?props.tagWidth:'7.5625rem',height:props.tagHeight?props.tagHeight:'1.625rem' }}>
                            <NewTag text='Appartment'/>
                        </div>
                        <div className='' style={{ width:props.tagWidth?props.tagWidth:'7.5625rem',height:props.tagHeight?props.tagHeight:'1.625rem' }}>
                            <NewTag text='Appartment'/>
                        </div>

                    </div>
                </div>
                <div className='  rounded-[6.25rem] bg-[#E6EDED] shadow-[inset_-0.14793375rem_-0.14793375rem_0.246556875rem_#FFFFFF,inset_0.246556875rem_0.246556875rem_0.345179375rem_#B6C3C5] ' style={{ height:props.SeparatorHeight?props.SeparatorHeight:'15.7525rem',width: props.separatorWidth?props.separatorWidth:'0.4375rem', marginTop:props.sectionMT?-props.sectionMT:'-0.8675rem' }}>
                </div>
                <div className='flex justify-between flex-wrap ' style={{ width:props.boxWidth?props.boxWrapperWidth: '25.375rem',height:props.boxWrapperHeight?props.boxWrapperHeight:'13.6875rem',marginTop:props.boxWrapperMT?props.boxWrapperMT:'0rem',rowGap:props.boxGapY?props.boxGapY:'0.9375rem'}}>

                <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.priceBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.priceBox.flipArgs
                            }
                        }
                    />

                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.bedBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.bedBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.sizeBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.sizeBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='simpleFlip'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.paymentBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.paymentBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='simpleFlip'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.compleationBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.compleationBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.priceBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'6.375rem',
                                mainWidth:props.boxWidth?props.boxWidth:'5.3125rem',
                                ...props.priceBox.flipArgs
                            }
                        }
                    />

                        <Contact
                            mainHeight={props.boxHeight?props.boxHeight:'6.375rem'}
                            mainWidth={props.boxWidth?props.boxWidth:'5.3125rem'}
                            lowerSectionHeight='1.9725rem'
                            boxWidth='2.19125rem'
                            boxHeight='1.82625rem'
                            videoWidth='1.026875rem'
                            videoHeight='0.57375rem'
                            wasupHeight='1.11875rem'
                            wasupWidth='1.11875rem'
                            phoneHeight='0.98rem'
                            phoneWidth='0.98rem'
                            emailWidth='0.945rem'
                            emailHeight='0.664375rem'
                            boxMB='0.6575rem'
                            boxMR='0.584375rem'
                        />
                    <div>
                        <Agent
                            Args={
                                {

                                    mainWidth: props.boxWidth?props.boxWidth:'5.3125rem',
                                    mainHeight: props.boxHeight?props.boxHeight:'6.375rem',
                                    ...props.agentBox.Args
                                }
                            }
                        // name='Nasiif'
                        // speciality='Downtown'
                        // langs={['Arabic','English']}

                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TvCard
