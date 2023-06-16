import React, { useEffect, useRef, useState } from 'react'
import ViewAllButton from './Common/ViewAllButton'
import calender_icon from '../../../../assets/calender_icon.svg'
// import ViewAllButton from './Common/ViewAllButton'
import processBoxShahow from '@/Components/BoxShadowController'

interface Props{
    img:string,
    name:string,
    established:string,
    projectNumber:string,
    priceFrom:string,
    id:string,
    mainWidth?:string,
    mainHeight?:string,
    smallerWidth?:string,
    smallerHeigth?:string,
    imgWrapperHeight?:string,
    imgMaxHeight?:string,
    imgMaxWidth?:string,
    separatorHeight?:string,
    titleMT?:string,
    titleSize?:string,
    circleWidth?:string,
    circleHeight?:string,
    circleLeft?:string,
    circleTop?:string,
    scehedualWidth?:string,
    scehedualHeight?:string,
    craneWidth?:string,
    craneHeight?:string,
    priceWidth?:string,
    priceHeight?:string,
    textSize?:string,
    imgMT?:string,
    flexWrapperWidth?:string,
    flexWrapperHeight?:string,
    flexWrapperGap?:string,
    flexWrapperMT?:string,
    singleWidth?:string,
    singleHeight?:string,
    mainBoxWidth?:string,
    mainBoxHeight?:string,
    subTitleMT?:string,
    subTitleWidth?:string,
    subTitleSize?:string,
    subTitleLineHeight?:string,
    tagMT?:string,
    tagWidth?:string,
    tagHeight?:string,
    tagTextSize?:string,
    button:{
        width?:string,
        height?:string,
        mainML?:string,
        mainMT?:string,
        textSize?:string,
        imgWidth?:string,
        imgHeight?:string,
        wrapperWidth?:string
    },
    scaleFactor?:string

}
import established_icon from '../../../../assets/established_icon.svg'
import projects_number_icon from '../../../../assets/projects_number_icon.svg'
import priceTag from '../../../../assets/price_tag_icon.svg'
import contruction from '../../../../assets/construction_thingy.svg'
import price_tag_og from '../../../../assets/price_tag_og.svg'
import ViewAllButtonDynamic from './Common/ViewAllButtonDynamic'
import { Link } from '@inertiajs/react'

const DeveloperCard = (props:Props) => {
    // let shadows = [
    //     '-0.375rem -0.375rem 0.75rem 0.1875rem #FFFFFF,0.375rem 0.375rem 0.75rem #BABFBF'
    // ];
    let smallerToscale = useRef(null)
    const handleMouseEnter = () => {
        if(props.scaleFactor){
            if(smallerToscale.current){
                smallerToscale.current.style.transform = `scale(${props.scaleFactor})`
                }
            }

    }
    const handleMouseLeave = () => {
        if(props.scaleFactor){
            if(smallerToscale.current){
                smallerToscale.current.style.transform = `scale(1)`
                }
            }
    }
    const [shadows,setShadows] = useState(['-0.375rem -0.375rem 0.75rem 0.1875rem #FFFFFF,0.375rem 0.375rem 0.75rem #BABFBF','inset -0.14793375rem -0.14793375rem 0.246556875rem #FFFFFF,inset 0.246556875rem 0.246556875rem 0.345179375rem #B6C3C5','-0.228939375rem -0.228939375rem 0.34340875rem #F7FFFF,0.228939375rem 0.228939375rem 0.34340875rem #B6C3C5','inset -0.25rem -0.25rem 0.3125rem #1E6970,inset 0.25rem 0.25rem 0.3125rem rgba(0,0,0,0.38)','inset -0.1895325rem -0.1895325rem 0.303251875rem #FFFFFF,inset 0.1895325rem 0.1895325rem 0.265345rem #B6C3C5'])
    useEffect(() => {
        let scale = 1
        if(props.mainHeight){
            scale = parseFloat(props.mainHeight)/30.625
            // alert(scale)
        }
        if(props.scaleFactor){
            smallerToscale.current.style.width = parseFloat(props.smallerWidth) * parseFloat(props.scaleFactor)
            smallerToscale.current.style.height = parseFloat(props.smallerHeigth) * parseFloat(props.scaleFactor)
            smallerToscale.current.style.transform = 1/parseFloat(props.scaleFactor)
        }
        // alert(parseFloat(props.mainHeight)/30.625)
        // alert(props.mainHeight)
        setShadows(processBoxShahow(shadows,' ',scale))
        // shadows =
        // alert (shadows[0])

    },[])
    // useEffect(() =>{console.log(shadows[0])} ,[shadows])
    return (
        <Link href='/developer/test'>

            <div className=' font-[nova] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.9375rem] flex justify-center items-center my-[1rem] z-[999] mx-[0rem]' style={{ width:props.mainWidth?props.mainWidth:'24.375rem',height:props.mainHeight?props.mainHeight:'30.625rem',boxShadow:shadows[0] }}>
                <div className=' rounded-[0.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] transition-all ease-in' style={{ width:props.smallerWidth?props.smallerWidth:'21.885rem',height:props.smallerHeigth?props.smallerHeigth:'28.125rem',boxShadow:shadows[0] }} ref={smallerToscale} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className=' w-full flex justify-center items-center' style={{ height:props.imgWrapperHeight?props.imgWrapperHeight:'8.8125rem' }}>
                        {/* <div className='flex justify-center items-center mt-[0.625rem]'> */}
                            <img src={props.img} alt="" className='object-contain' style={{ maxWidth:props.imgMaxWidth?props.imgMaxWidth:'13.4375rem',maxHeight:props.imgMaxHeight?props.imgMaxHeight:'6.5rem',marginTop:props.imgMT?props.imgMT:'0.625rem' }}/>
                        {/* </div> */}
                    </div>
                    <div className=' w-full  rounded-[6.25rem] bg-[#E6EDED] ' style={{ height:props.separatorHeight?props.separatorHeight:'0.3125rem',boxShadow:shadows[1] }}></div>
                    <div className='w-full text-center text-grade font-[600]' style={{ fontSize:props.titleSize?props.titleSize:'1.875rem',marginTop:props.titleMT?props.titleMT:'0.3125rem' }}>
                        {props.name}
                    </div>
                    <div className=' mx-auto flex justify-center items-center' style={{ width:props.flexWrapperWidth?props.flexWrapperWidth:'20.0625rem',height:props.flexWrapperHeight?props.flexWrapperHeight:'11.274375rem',gap:props.flexWrapperGap?props.flexWrapperGap:'0.9375rem' }}>
                        <div className=' flex items-end' style={{ width:props.singleWidth?props.singleWidth:'6.0625rem',height:props.singleHeight?props.singleHeight:'11.25rem' }}>
                            <div className=' relative bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] rounded-[0.30125rem] ' style={{boxShadow:shadows[2],width:props.mainBoxWidth?props.mainBoxWidth:'6.0625rem',height:props.mainBoxHeight?props.mainBoxHeight:'8.1875rem' }}>
                                <div className='absolute flex justify-center items-center rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  ' style={{boxShadow:shadows[4], width:props.circleWidth?props.circleWidth:'4.98125rem',height:props.circleHeight?props.circleHeight:'4.98125rem',left:props.circleLeft?props.circleLeft:'0.5rem',top:props.circleTop?props.circleTop:'-2.490625rem' }}>
                                    <img src={calender_icon} alt="" className=' ' style={{ width:props.scehedualWidth?props.scehedualWidth:'2.684375rem',height:props.scehedualHeight?props.scehedualHeight:'2.908125rem' }}/>
                                </div>
                                <div className=' mx-auto font-[600] text-grade text-center ' style={{ width:props.subTitleWidth?props.subTitleWidth:'5.5rem',marginTop:props.subTitleMT?props.subTitleMT:'2.908125rem',fontSize:props.subTitleSize?props.subTitleSize:'0.875rem',lineHeight:props.subTitleLineHeight?props.subTitleLineHeight:'1.065625rem' }}>
                                    year of Establishment
                                </div>
                                <div className=' bg-[#19464B] rounded-[6.25rem] flex justify-center items-center mx-auto' style={{ width:props.tagWidth?props.tagWidth:'5.125rem',height:props.tagHeight?props.tagHeight:'1.5rem',marginTop:props.tagMT?props.tagMT:'1.038125rem' ,boxShadow:shadows[3]}}>
                                    <div className='text-graed text-[#fff] font-[600]' style={{ fontSize:props.tagTextSize?props.tagTextSize:'1rem' }}>
                                        test
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-end' style={{ width:props.singleWidth?props.singleWidth:'6.0625rem',height:props.singleHeight?props.singleHeight:'11.25rem' }}>
                            <div className=' relative bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] rounded-[0.30125rem] ' style={{boxShadow:shadows[2],width:props.mainBoxWidth?props.mainBoxWidth:'6.0625rem',height:props.mainBoxHeight?props.mainBoxHeight:'8.1875rem' }}>
                                <div className='absolute flex justify-center items-center rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  ' style={{boxShadow:shadows[4], width:props.circleWidth?props.circleWidth:'4.98125rem',height:props.circleHeight?props.circleHeight:'4.98125rem',left:props.circleLeft?props.circleLeft:'0.5rem',top:props.circleTop?props.circleTop:'-2.490625rem' }}>

                                    <img src={contruction} alt="" className='' style={{ width:props.craneWidth?props.craneWidth:'2.29875rem',height:props.craneHeight?props.craneHeight:'2.905625rem' }}/>
                                </div>
                                <div className=' mx-auto font-[600] text-grade text-center ' style={{ width:props.subTitleWidth?props.subTitleWidth:'5.5rem',marginTop:props.subTitleMT?props.subTitleMT:'2.908125rem',fontSize:props.subTitleSize?props.subTitleSize:'0.875rem',lineHeight:props.subTitleLineHeight?props.subTitleLineHeight:'1.065625rem' }}>
                                    year of Establishment
                                </div>
                                <div className=' bg-[#19464B] rounded-[6.25rem]  flex justify-center items-center mx-auto' style={{ width:props.tagWidth?props.tagWidth:'5.125rem',height:props.tagHeight?props.tagHeight:'1.5rem',marginTop:props.tagMT?props.tagMT:'1.038125rem' ,boxShadow:shadows[3]}}>
                                    <div className='text-graed text-[#fff] font-[600]' style={{ fontSize:props.tagTextSize?props.tagTextSize:'1rem' }}>
                                        test
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-end' style={{ width:props.singleWidth?props.singleWidth:'6.0625rem',height:props.singleHeight?props.singleHeight:'11.25rem' }}>
                            <div className=' relative bg-[#E6EDED] border-[#DDE4E4] border-[0.0625rem] rounded-[0.30125rem] ' style={{boxShadow:shadows[2],width:props.mainBoxWidth?props.mainBoxWidth:'6.0625rem',height:props.mainBoxHeight?props.mainBoxHeight:'8.1875rem' }}>
                                <div className='absolute flex justify-center items-center rounded-full bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  ' style={{boxShadow:shadows[4], width:props.circleWidth?props.circleWidth:'4.98125rem',height:props.circleHeight?props.circleHeight:'4.98125rem',left:props.circleLeft?props.circleLeft:'0.5rem',top:props.circleTop?props.circleTop:'-2.490625rem' }}>

                                    <img src={price_tag_og} alt="" className='' style={{ width:props.priceWidth?props.priceWidth:'2.913125rem',height:props.priceHeight?props.priceHeight:'2.908125rem' }}/>
                                </div>
                                <div className=' mx-auto font-[600] text-grade text-center ' style={{ width:props.subTitleWidth?props.subTitleWidth:'5.5rem',marginTop:props.subTitleMT?props.subTitleMT:'2.908125rem',fontSize:props.subTitleSize?props.subTitleSize:'0.875rem',lineHeight:props.subTitleLineHeight?props.subTitleLineHeight:'1.065625rem' }}>
                                    year of Establishment
                                </div>
                                <div className=' bg-[#19464B] rounded-[6.25rem]  flex justify-center items-center mx-auto' style={{ width:props.tagWidth?props.tagWidth:'5.125rem',height:props.tagHeight?props.tagHeight:'1.5rem',marginTop:props.tagMT?props.tagMT:'1.038125rem' ,boxShadow:shadows[3]}}>
                                    <div className='text-graed text-[#fff] font-[600]' style={{ fontSize:props.tagTextSize?props.tagTextSize:'1rem' }}>
                                        test
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                <div className=' w-full flex justify-center items-center' style={{ marginTop:props.button.mainMT?props.button.mainMT:'1.475625rem' }}>

                                    <ViewAllButtonDynamic text='View Propfile' w={props.button.width?props.button.width:'8.875rem'} h={props.button.height?props.button.height:'2.1875rem'} ml={props.button.mainML?props.button.mainML:'0rem'} textSize={props.button.textSize?props.button.textSize:'1.0625rem'} img_width={props.button.imgWidth?props.button.imgWidth:'0.569375rem'} imgHeight={props.button.imgHeight?props.button.imgHeight:'0.806875rem'} wrapperWidth={props.button.wrapperWidth?props.button.wrapperWidth:'7.131875rem'}/>
                                </div>
                    {/* <div></div> */}
                </div>
            </div>
        </Link>
    )
}

export default DeveloperCard
