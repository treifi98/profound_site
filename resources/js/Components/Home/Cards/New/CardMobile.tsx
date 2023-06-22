import React, { useEffect, useRef, useState } from 'react'

import NewCardImage from '../Common/NewCardImage'
import Brochure from '../Common/Brochure'
import NewSocial from '../Common/NewSocial'
import CardTag from '../Common/CardTag'
import Price from '../Common/Boxes/OffPlan/Price'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../../../css/pagination.css";
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper'
import SliderPagination from '../Common/SliderPagination';

import og from '../../../../../assets/og.png'
import mapIcon from '../../../../../assets/map_icon.svg'
import share from '../../../../../assets/share_icon.svg'
import fav from '../../../../../assets/fav_icon.svg'
import view from '../../../../../assets/view_icon.svg'
import shareIcon from '../../../../../assets/sharefilled.svg'
import favIcon from '../../../../../assets/favfilled.svg'
import viewIcon from '../../../../../assets/viewfilled.svg'
import Agent from '../Common/Boxes/OffPlan/Agent'
import Contact from '../Common/Boxes/OffPlan/Contact'
import BoxMaster from '../Common/Boxes/New/BoxMaster'
import TagSwiper from './TagSwiper'


interface Props{
    // imgWrapperWidth?:string,
    // imgWrapperHeight?:string
    img:string,
    mainWidth?:string,
    mainHeight?:string,
    imgWidth?:string,
    imgHeight?:string,
    imgMT?:string,
    // sectionLeft?:string,
    titleSize?:string,
    subTitleSize?:string,
    areatextSize?:string,
    areaIconWidth?:string,
    areaIconHeight?:string,
    areaWidth?:string,
    // areaML?:string,
    socialWrapperWidth?:string,
    // brochureML?:string,
    boxesGapY?:string,
    rounded?:string,
    title:string,
    // boxesWrapperML?:string,
    // tagsWrapperML?:string,
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
    brochureAndSocialWrapperWidth?:string,
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
    mainMT?:string,
    mainMB?:string,
    boxGapY?:string,
    mainWrapperWidth?:string,

    // titleML?:string,
    // titleMT?:string,
    // subTitleML?:string,
    // subTitleMT?:string,
    // boxesWrapperMT?:string,
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
            content?:{installment:string,precentage:string}[],
            rowWidth?:string,
            rowHeight?:string,
            textSize?:string,
            // aedSize?:string,
            fontWeight?:string,
            cornerWidth?:string
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
            lineHeight?:string
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
        separatorWidth?:string,
        mainMT?:string
    },

    // cardMT?:string


}


const CardMobile = (props:Props) => {
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
        imageref.current.style.transform = 'scale(1.1)'
        // alert('d')
    }
    const handleMouseLeave = () => {
        imageref.current.style.transform = 'scale(1)'
    }
    return (
        <div className=' rounded-[0.625rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  overflow-hidden'  style={{ width:props.mainWidth?props.mainWidth:'21.473125rem',height:props.mainHeight?props.mainHeight:'35.280625rem',marginTop:props.mainMT?props.mainMT:'0rem',marginBottom:props.mainMB?props.mainMB:'0rem' }}>
            <div className=' h-full mx-auto' style={{ width:props.mainWrapperWidth?props.mainWrapperWidth:'20.19875rem' }}>

                <div className='w-full relative transition-all origin-bottom' ref={imageref} style={{ height:props.imgHeight?props.imgHeight:'15.821875rem',marginTop:props.imgMT?props.imgMT:'0.736875rem' }}>
                <Swiper
                    // pagination={pagination}
                    modules={[Pagination]}
                    slidesPerView={1}
                    // slidesPerGroupSkip={3}
                    spaceBetween={20}
                    breakpoints={{
                        810: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                        },
                        1500: {
                        slidesPerView: 1,
                        spaceBetween: 15,
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
                    className="originalimageswiper"

                    >
                        <SwiperSlide>
                            <NewCardImage src={og} rounded='0.625'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={og} rounded='0.625'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={og} rounded='0.625'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={og} rounded='0.625'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewCardImage src={og} rounded='0.625'/>
                        </SwiperSlide>



                </Swiper>
                    <div className='absolute bottom-[1.13rem] left-[calc(50%-2.46625rem)] z-[999999]'>
                        <SliderPagination numberOfItems={5} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

                    </div>
                </div>
                <div className='w-full h-[1.3125rem] mx-auto  rounded-[0.625rem] mt-[0.32125rem] flex justify-between items-center' style={{ marginTop:props.titleMT?props.titleMT:'0.293125rem' }}>
                    <div className='text-grade font-[600]' style={{ fontSize:props.titleSize?props.titleSize:'1.0625rem' }}>
                        Creek Rise tower 2 west side
                    </div>
                    <div className='flex justify-between items-center' style={{ width:props.socialWrapperWidth?props.socialWrapperWidth:'4.485625rem' }}>

                        {/* <Brochure/> */}
                        <div className='' style={{ width:props.socialWidth?props.socialWidth:'1.086875rem',height:props.socialHeight?props.socialHeight:'1.086875rem' }}>
                            <NewSocial img={shareIcon} img_w={props.shareIconWidth?props.shareIconWidth:'0.54625'} img_h={props.shareIconHeight?props.shareIconHeight:'0.54625'}/>
                        </div>
                        <div className='' style={{ width:props.socialWidth?props.socialWidth:'1.086875rem',height:props.socialHeight?props.socialHeight:'1.086875rem' }}>
                            <NewSocial img={favIcon} img_w={props.favIconWidth?props.favIconWidth:'0.565625'} img_h={props.favIconHeight?props.favIconHeight:'0.536875'}/>
                        </div>
                        <div className='' style={{ width:props.socialWidth?props.socialWidth:'1.086875rem',height:props.socialHeight?props.socialHeight:'1.086875rem' }}>
                            <NewSocial img={viewIcon} img_w={props.viewIconWidth?props.viewIconWidth:'0.6825'} img_h={props.viewIconHeight?props.viewIconHeight:'0.478125'}/>
                        </div>
                    </div>
                </div>
                <div className='text-grade' style={{ fontSize:props.subTitleSize?props.subTitleSize:'1rem',marginTop:props.subTitleWrapperMT?props.subTitleWrapperMT:'0.10875rem' }}>
                    New project coming soon
                </div>
                <div className='w-full flex justify-end' style={{ marginTop:props.brochure.mainMT?props.brochure.mainMT:'-0.8rem' }}>
                    <Brochure mainWidth='4.493125rem' mainHeight='1.056875rem' imgWrapperWidth='1.170625rem' imgWidth='0.765625rem' imgHeight='0.6325rem' separatorWidth='0.15125rem' textSize='0.625rem' restWidth='3.209375rem' imgMT='0.22625rem' seperatorML='0rem'/>
                </div>
                <div className='flex w-full justify-between items-center h-[1.244375rem] mt-[-0.425rem]'>
                    <div className=' flex justify-between items-center' style={{ marginTop:props.subTitleWrapperMT?props.subTitleWrapperMT:'0.2775rem', width:props.areaWidth?props.areaWidth:'7.596875rem',}}>
                        <img src={mapIcon} alt="" className='' style={{ width:props.areaWidth?props.areaWidth:'0.72375rem',height:props.areaIconHeight?props.areaIconHeight:'0.6875rem' }}/>
                        <div className='text-grade ' style={{ fontSize:props.areatextSize?props.areatextSize:'0.75rem' }}>
                            Dubai Creek Harbor
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between mt-[-1erm] ' style={{ marginTop:props.tagsWrapperMT?props.tagsWrapperMT:'0.11rem' }}>
                    <TagSwiper textSize='0.6875'/>
                </div>
                <div className='w-full flex flex-wrap' style={{ marginTop:props.boxWrapperMT?props.boxWrapperMT:'0.383125rem',columnGap:props.boxGapX?props.boxGapX:'1.08125rem',rowGap:props.boxGapY?props.boxGapY:'0.736875rem' }}>
                <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.priceBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.priceBox.flipArgs
                            }
                        }
                    />

                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.bedBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.bedBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.sizeBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.sizeBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='paymentPlan'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.paymentBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.paymentBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='simpleFlip'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.compleationBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.compleationBox.flipArgs
                            }
                        }
                    />
                    <BoxMaster
                        BoxType='standerd'
                        flipType='zibra'
                        boxArgs={
                            {
                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.priceBox.args

                            }
                        }
                        flipArgs={
                            {

                                mainHeight:props.boxHeight?props.boxHeight:'5.011875rem',
                                mainWidth:props.boxWidth?props.boxWidth:'4.196875rem',
                                ...props.priceBox.flipArgs
                            }
                        }
                    />

                        <Contact
                            mainHeight={props.boxHeight?props.boxHeight:'5.011875rem'}
                            mainWidth={props.boxWidth?props.boxWidth:'4.196875rem'}
                            lowerSectionHeight='1.326875rem'
                            boxWidth='1.474375rem'
                            boxHeight='1.228125rem'
                            videoWidth='0.845625rem'
                            videoHeight='0.4725rem'
                            wasupHeight='0.92125rem'
                            wasupWidth='0.92125rem'
                            phoneHeight='0.836875rem'
                            phoneWidth='0.806875rem'
                            emailWidth='0.778125rem'
                            emailHeight='0.546875rem'
                            boxMB='0.48125rem'
                            boxMR='0.48125rem'
                            lowerSectionTextSize='0.688125rem'
                        />
                    <div>
                        <Agent
                            Args={
                                {

                                    mainHeight: props.boxHeight?props.boxHeight:'5.011875rem',
                                    mainWidth: props.boxWidth?props.boxWidth:'4.196875rem',
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

export default CardMobile
