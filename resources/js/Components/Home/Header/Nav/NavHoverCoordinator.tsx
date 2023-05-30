import React from 'react'
import MenueChild from '../MenueChild'
import OneCardSwiper from './OneCardSwiper'
import InhoverLinks from './InhoverLinks'
import DeveloperCard from '../../Cards/DeveloperCard'
import hauseIcon from '../../../../../assets/house.svg'
import SelectGroup from '../../../../../assets/selectGroup.png'
import DeveloperCardSmall from '../../Cards/DeveloperCardSmall'
import SwiperDeveloperSmall from '../../SwiperDeveloperSmall'
import NewsCardSmall from '../../Cards/NewsCardSmall'
import newsImg from '../../../../../assets/news.png'
import SwiperNewsSmall from '../../SwiperNewsSmall'
import MenueChildLarg from '../MenuechildLarg'
import icon_buy from '../../../../../assets/icon_buy.svg'
import guy_exploaring from '../../../../../assets/guy_exploaring.svg'
import mountan from '../../../../../assets/mounten.svg'
import binociolars from '../../../../../assets/binociolars.svg'
import flag from '../../../../../assets/flag.svg'
import hoauseIcon from '../../../../../assets/houseService.svg'
import moneyHouse from '../../../../../assets/moneyHouse.svg'
import websiteService from '../../../../../assets/websiteService.svg'
import homeService from '../../../../../assets/homeService.svg'
import OneCardSwiperProject from './OneCardSwiperProject'
import OneCardSwiperArea from './OneCardSwiperArea'
import impossible_DsDev from '../../../../../assets/impossible_DsDev.svg'
import imposible_DsLarge from '../../../../../assets/imposible_DsLarge.svg'
import cach from '../../../../../assets/cach.svg'
import construction from '../../../../../assets/construction.svg'
import InElementSeperator from '../../Cards/Common/InElementSeperator'
import ElegantRect from '@/Components/Developer/Cards/ElegantRect'

const NavHoverCoordinator = ({id}) => {
    let elmnt = <div></div>
    if(id == 1){
        elmnt = (
            <div className=' mx-auto flex gap-[1.875rem] items-center w-[89.9875rem] '>

                <MenueChild icon={hauseIcon} title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" />
                {/* <FiltersContainer/> */}
                <div className='w-[22.4375rem] flex justify-center '>

                    <OneCardSwiper/>
                </div>
                <InhoverLinks/>
            </div>
        )
    }
    else if(id == 2){
        elmnt = (
            <div className=' mx-auto flex gap-[1.875rem] items-center w-[89.9875rem]'>

                <MenueChild icon={hauseIcon} title={'HOW TO RENT PROPERTY IN DUBAI'} text="Everything you need to know when renting a property in Dubai. From legal requirements to cultural norms, we'll provide you with the knowledge you need to make informed decisions" />

                {/* <FiltersContainer/> */}
                <div className='w-[22.4375rem] flex justify-center '>

                    <OneCardSwiper/>
                </div>
                <InhoverLinks/>
            </div>
        )
    }
    else if(id == 3){
        elmnt = (
            <div className=' mx-auto flex gap-[1.875rem] items-center w-[89.9875rem]'>

                <MenueChild icon={hauseIcon}  titleWidth='16.0625rem' titleSize='1.4375rem' title={'HOW TO BUY OFF-PLAN PROPERTY IN DUBAI'} text="Explore insightful tips for buying off-plan properties in Dubai and simplify your search with our comprehensive guide. Begin your journey to finding your dream home today." buttonMT='2.375rem' />

                {/* <FiltersContainer/> */}
                <div className='w-[22.4375rem] flex justify-center '>

                    <OneCardSwiperProject/>
                </div>
                <InhoverLinks/>
            </div>
        )
    }
    else if(id == 4){
        elmnt = (
            <div className=' mx-auto flex gap-[1.875rem] items-center w-[89.9875rem]'>

                <MenueChild icon={hauseIcon}  titleWidth='14.75rem' titleSize='1.4375rem' title={'ABOUT COMMUNITY AREAS'} text="Beachfront homes, waterfront homes, villas, flats, penthouses, townhouses, and land. Buyers can opt to invest in high-end projects or locate properties for under AED 1 million. Green living possibilities include golf course or natural environment residences." buttonMT='0.5625rem' textMT='0.4875rem' />

                {/* <FiltersContainer/> */}
                <div className='w-[22.4375rem] flex justify-center '>

                    <OneCardSwiperArea/>
                </div>
                <InhoverLinks/>
            </div>
        )
    }
    else if(id == 5){
        elmnt = (
            <div className=' mx-auto flex gap-[1.5625rem] items-center w-[93.819375rem]'>
                <div className=''>

                    <MenueChild icon={hauseIcon} textWidth='26.875rem' imposible_Ds={impossible_DsDev} mainWidth='29.625rem' titleAreaWidth='21.875rem'  titleWidth='15.1875rem' titleSize='1.4375rem' title={'DUBAI REAL ESTATE DEVELOPERS'} text="There are several reputable real estate developers in Dubai, with various specializations, project portfolios, and expertise. To select a developer, factors such as design styles, development strategies, construction quality, customer service, and project timelines must be considered" buttonMT='0.05785rem' textMT='0.925rem' />
                </div>
                {/* <FiltersContainer/> */}
                <div className='w-[62.606875rem] flex justify-center h-[22.060625rem]'>
                    {/* <div className=' scale-[0.655]'> */}
                        <SwiperDeveloperSmall/>
                    {/* </div> */}
                </div>
                {/* <InhoverLinks/> */}
            </div>
        )
    }
    else if(id == 6){
        elmnt = (
            <div className=' mx-auto flex justify-between items-center w-[88.3125rem] '>

                    <MenueChild icon={hauseIcon} textWidth='45.9375rem' imposible_Ds={imposible_DsLarge} mainWidth='48.6875rem' titleAreaWidth='40.9275rem'  titleWidth='27.375rem' titleSize='1.5rem' title={'WHAT ASPECT OF DUBAI REAL ESTATE ARE YOU INTERSTED IN'} text="Let Profound Properties guide you towards a bright future in Dubai real estate with our data-driven analysis and insider information. We're always one step ahead, believing that reality is the key factor to making smart decisions. By taking into account real estate behavior, patterns, and changes, we enable our clients to get the best deal possible when buying or selling a property. Our research and preparation help our clients anticipate any future circumstances, ensuring a successful outcome." buttonMT='0.05785rem' textMT='0.8rem' texteSize='1.125rem' titleLineHeight='2.625rem' />

                    <div className='w-[33.625rem] h-[22rem] border-[#DCE3E3] border-[0.0625rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] flex justify-center items-center  '>
                        <div className='w-[31.1875rem] h-[19.75rem] flex flex-wrap gap-x-[1.455625rem] gap-y-[1.5625rem]'>
                            <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.781875rem' imgHeight='3.125rem' />
                            <ElegantRect img={construction} text='OFF PLAN INVESTMENT' imgWidth='3.529375rem' imgHeight='1.929375rem' />
                            <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.781875rem' imgHeight='3.125rem' textWidth='6rem'/>
                            <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.781875rem' imgHeight='3.125rem' />
                            <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.781875rem' imgHeight='3.125rem' />
                            <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.781875rem' imgHeight='3.125rem' />
                            <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.781875rem' imgHeight='3.125rem' />
                            <ElegantRect img={cach} text='BUY PROPERTY' imgWidth='2.781875rem' imgHeight='3.125rem' />


                        </div>
                    </div>
            </div>

        )
    }
    else if(id == 7){
        elmnt = (
            <div className=' mx-auto flex gap-[5.0625rem] items-center w-[91.819375rem] '>
                <div className=''>

                    <MenueChild icon={hauseIcon} textWidth='26.875rem' imposible_Ds={impossible_DsDev} mainWidth='29.625rem' titleAreaWidth='21.875rem'  titleWidth='15.1875rem' titleSize='1.4375rem' title={'PROFOUND INSIDER MARKET / NEWS'} text="Insights into market trends and news can give you a competitive edge. A deep understanding of real estate market dynamics and emerging trends can help you make informed decisions and seize opportunities that others may overlook. By staying up-to-date on the latest news and analysis." buttonMT='0.20785rem' textMT='0.675rem' />
                </div>
                {/* <FiltersContainer/> */}
                <div className='w-[55.924375rem] flex justify-center h-[22.060625rem] '>
                    {/* <div className=' scale-[0.655]'> */}
                        <SwiperNewsSmall/>
                </div>
                {/* <InhoverLinks/> */}
            </div>
        )
    }
    else if(id == 8){
        elmnt = (
            <div className=' w-[84.375rem] m-auto flex gap-[5.625rem] items-center '>
                <div className=' flex gap-[5.625rem]'>



                    <div className='w-[16.875rem] h-[22.5rem] bg-[#E6EDED] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center cursor-pointer'>
                        <div className='w-[14.78625rem] h-[20.439375rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex flex-col justify-center items-center gap-[0.875rem]'>
                            <div className='mt-[0.941875rem] w-[6.25rem] h-[6.25rem] rounded-full flex justify-center items-center shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#FFFFFF,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5]'>
                                <img src={binociolars} alt="" className='object-cover object-center '/>
                            </div>
                            <div className='text-[1.75rem] text-grade'>
                                VISION
                            </div>
                            <div className='leading-[1.59375rem] h-[9.75rem] text-center text-[1.0625rem] font-[300]'>
                                To lead Dubai's real estate market with reliable analysis, insider information, and cutting-edge technology while valuing our clients' trust.
                            </div>
                        </div>
                    </div>

                    <div className='w-[16.875rem] h-[22.5rem] bg-[#E6EDED] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center cursor-pointer'>
                        <div className='w-[14.78625rem] h-[20.439375rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex flex-col justify-center items-center gap-[0.875rem]'>
                            <div className='mt-[0.941875rem] w-[6.25rem] h-[6.25rem] rounded-full flex justify-center items-center shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#FFFFFF,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5]'>
                                <img src={mountan} alt="" className='object-cover object-center mb-[1.625rem]'/>
                            </div>
                            <div className='text-[1.75rem] text-grade'>
                                VISION
                            </div>
                            <div className='leading-[1.59375rem] h-[9.75rem] text-center text-[1.0625rem] font-[300]'>
                                To lead Dubai's real estate market with reliable analysis, insider information, and cutting-edge technology while valuing our clients' trust.
                            </div>
                        </div>
                    </div>

                    <div className='w-[16.875rem] h-[22.5rem] bg-[#E6EDED] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center cursor-pointer'>
                        <div className='w-[14.78625rem] h-[20.439375rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex flex-col justify-center items-center gap-[0.875rem]'>
                            <div className='mt-[0.941875rem] w-[6.25rem] h-[6.25rem] rounded-full flex justify-center items-center shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#FFFFFF,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5]'>
                                <img src={flag} alt="" className='object-cover object-center mr-[0.0625rem]'/>
                            </div>
                            <div className='text-[1.75rem] text-grade'>
                                GOAL
                            </div>
                            <div className='leading-[1.59375rem] h-[9.75rem] text-center text-[1.0625rem] font-[300]'>
                                To become the top real estate company in Dubai t hrough exceptional service, innovation, and client satisfaction
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' w-[16.875rem] h-[22.5rem] flex flex-col justify-center items-center gap-[1.5625rem] border-[#DCE3E3] border-[0.0625rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF]'>
                    <ElegantRect img={cach} text='OUER STORY' imgWidth='2.781875rem' imgHeight='3.125rem' />
                    <ElegantRect img={cach} text='OUER STORY' imgWidth='2.781875rem' imgHeight='3.125rem' />
                    <ElegantRect img={cach} text='OUER STORY' imgWidth='2.781875rem' imgHeight='3.125rem' />
                    <ElegantRect img={cach} text='OUER STORY' imgWidth='2.781875rem' imgHeight='3.125rem' />
                </div>

            </div>
        )
    }
    return (
        elmnt
    )
}

export default NavHoverCoordinator
