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

const NavHoverCoordinator = ({id}) => {
    let elmnt = <div></div>
    if(id == 1){
        elmnt = (
            <div className='my-[0.625rem] mr-[2rem] ml-[4.4375rem] flex gap-[1.875rem] items-center w-full'>

                <MenueChild icon={hauseIcon} title1={'HOW TO BUY'} title2='PROPERTY IN DUBAI' text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" button='Access now'/>
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
            <div className='my-[0.625rem] mr-[2rem] ml-[4.4375rem] flex gap-[1.875rem] items-center w-full'>

                <MenueChild icon={hauseIcon} title1={'HOW TO RENT'} title2='PROPERTY IN DUBAI' text="Everything you need to know when renting a property in Dubai. From legal requirements to cultural norms, we'll provide you with the knowledge you need to make informed decisions" button='Access now'/>
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
            <div className='my-[0.625rem] mr-[2rem] ml-[4.4375rem] flex gap-[1.875rem] items-center w-full'>
                <div className='min-w-[24.3125rem] h-[17.8125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[1.25rem] shadow-[-0.356306875rem_-0.356306875rem_0.7126125rem_#F8FFFE,0.356306875rem_0.356306875rem_0.7126125rem_#B6C3C5] relative' >
                <div className='w-[7.7625rem] h-[7.7625rem] bg-[#00494F] border-[0.0625rem] border-[#CED7D8] shadow-[inset_-0.270161875rem_-0.270161875rem_0.449371875rem_-0.149790625rem_#007580,inset_0.270161875rem_0.270161875rem_0.353296875rem_#002D31] rounded-full flex justify-center items-center absolute top-[-3rem] left-[-3rem]'>
                    <div className='w-[6.06625rem] h-[6.06625rem] bg-[#E6EDED] border-[#007680] border-[0.0625rem] shadow-[-0.211135rem_-0.211135rem_0.35119rem_-0.117063125rem_#007580,0.211135rem_0.211135rem_0.276105625rem_#011618] rounded-full flex justify-center items-center '>
                        <img src={hauseIcon} alt="" className='w-full h-full object-contain'/>
                    </div>
                </div>
                <div className='text-[1.70rem] text-grade w-[calc(100%-2.98125rem)] ml-[3.78125rem] mt-[0.425rem] text-center' >
                    { 'HOW TO BUY OFF-PLAN' }
                </div>
                <div className='text-[1.70rem] mt-[0.1rem] text-grade w-[calc(100%-3.78125rem)] ml-[3.78125rem] text-center' >
                    { 'PROPERTY IN DUBAI' }
                </div>

                <div className='text-[1.125rem] leading-[1.6875rem] mt-[0.1rem] w-[21.75rem] ml-[1.7625rem] h-[8.4375rem] font-[300]' >
                    {'Explore insightful tips for buying off-plan properties in Dubai and simplify your search with our comprehensive guide. Begin your journey to finding your dream home today.'}
                </div>

                <div className='w-[10.509375rem] h-[2.41125rem] flex justify-center items-center bg-[#E6EDED] border-[0.0625rem] border-[#DCE3E3] rounded-[6.25rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] mx-auto cursor-pointer hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] transition-all mt-[0.2rem]'>
                    <div className='text-grade'>

                        {'Access now'}
                    </div>
                </div>

            </div>
                {/* <FiltersContainer/> */}
                <div className='w-[22.4375rem] flex justify-center '>

                    <OneCardSwiper/>
                </div>
                <InhoverLinks/>
            </div>
        )
    }
    else if(id == 4){
        elmnt = (
            <div className='my-[0.625rem] mr-[2rem] ml-[4.4375rem] flex gap-[1.875rem] items-center w-full'>

                <MenueChild icon={hauseIcon} title1={'Dubai community'} title2='' text=" Beachfront homes, waterfront homes, villas, flats, penthouses, townhouses, and land. Buyers can opt to invest in high-end projects or locate properties for under AED 1 million. Green living possibilities include golf course or natural environment residences." button='Access now' indent={true} textMT='0.1875rem'/>
                {/* <FiltersContainer/> */}
                <div className='w-[22.4375rem] flex justify-center '>

                    <OneCardSwiper/>
                </div>
                <InhoverLinks/>
            </div>
        )
    }
    else if(id == 5){
        elmnt = (
            <div className='my-[1.625rem] mr-[2rem] ml-[4.4375rem] flex gap-[4.25rem] items-center w-full'>
                <div className=''>

                    <MenueChild icon={hauseIcon} title1={'DUBAI REAL ESTATE'} title2='DEVELOPERS' text="There are several reputable real estate developers in Dubai, with various specializations, project portfolios, and expertise. To select a developer, factors such as design styles, development strategies, construction quality, customer service, and project timelines must be considered" button='Access now' mainHeight='19.3125rem' mainWidth='30rem' textWidth='28.5625rem' textML='1.4375rem' mainTitleWidth='17.4375rem' mainTitileML='5.4375rem' buttonMT='0.05rem'/>
                </div>
                {/* <FiltersContainer/> */}
                <div className='w-[59.1875rem] flex justify-end h-[22.060625rem]'>
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
            <div className='my-[2.125rem] ml-[5.4375rem] mr-[1.94875rem] flex gap-[4.25rem] items-center'>

                    <MenueChildLarg icon={hauseIcon} title1={'What aspect of Dubai real estate '} title2='are you interested in' text="Let Profound Properties guide you towards a bright future in Dubai real estate with our data-driven analysis and insider information. We're always one step ahead, believing that reality is the key factor to making smart decisions. By taking into account real estate behavior, patterns, and changes, we enable our clients to get the best deal possible when buying or selling a property. Our research and preparation help our clients anticipate any future circumstances, ensuring a successful outcome." mainTitleWidth='31.375rem' mainTitileML='8.375rem' mainTitileMT='1.175rem'/>

                    <div className='w-[38.36375rem] h-[21.913125rem] flex flex-wrap '>
                        <div className=' mr-[3.125rem] mb-[1.833125rem] w-[10.038125rem] h-[10.038125rem] flex flex-col justify-center items-center border-[#DCE3E3] border-[0.0625rem] gap-[0.1375rem] rounded-[0.625rem] shadow-[-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF] cursor-pointer hover:shadow-[inset_-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,inset_0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF]'>
                            <div className='w-[6.15125rem] h-[5.5725rem] flex justify-center items-center mt-[0.0875rem]'>
                                <img src={icon_buy} alt="" />
                            </div>
                            <div className='w-[8.875rem] mx-auto text-grade text-[1.125rem]'>
                                Buying a property
                            </div>
                        </div>
                        <div className=' mr-[3.125rem] mb-[1.833125rem] w-[10.038125rem] h-[10.038125rem] flex flex-col justify-center items-center border-[#DCE3E3] border-[0.0625rem] gap-[1.275rem] rounded-[0.625rem] shadow-[-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF] cursor-pointer hover:shadow-[inset_-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,inset_0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF]'>
                            <div className='w-[4.736875rem] h-[4.375rem] flex justify-center items-center mt-[0.0875rem] '>
                                <img src={hoauseIcon} alt="" className = "w-full h-full" />
                            </div>
                            <div className='w-[9.125rem] mx-auto text-grade text-[1.125rem]'>
                                Renting a property
                            </div>
                        </div>
                        <div className='  mb-[1.833125rem] w-[10.038125rem] h-[10.038125rem] flex flex-col justify-center items-center border-[#DCE3E3] border-[0.0625rem] gap-[0.8625rem] rounded-[0.625rem] shadow-[-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF] cursor-pointer hover:shadow-[inset_-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,inset_0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF]'>
                            <div className='w-[5rem] h-[5rem] flex justify-center items-center mt-[0.1125rem]'>
                                <img src={moneyHouse} alt="" className='w-full h-full'/>
                            </div>
                            <div className='w-[8.6875rem] mx-auto text-grade text-[1.125rem]'>
                                Selling a property
                            </div>
                        </div>
                        <div className=' mr-[3.125rem] mb-[1.833125rem] w-[10.038125rem] h-[10.038125rem] flex flex-col justify-center items-center border-[#DCE3E3] border-[0.0625rem] gap-[0.6375rem] rounded-[0.625rem] shadow-[-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF] cursor-pointer hover:shadow-[inset_-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,inset_0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF]'>
                            <div className='w-[4.375rem] h-[4.375rem] flex justify-center items-center mt-[0.175625rem]'>
                                <img src={websiteService} alt="" />
                            </div>
                            <div className='w-[8.875rem] mx-auto text-grade text-[1.125rem] text-center'>
                                Listing a property for sale or rent
                            </div>
                        </div>
                        <div className=' mr-[3.125rem] mb-[1.833125rem] w-[10.038125rem] h-[10.038125rem] flex flex-col justify-center items-center border-[#DCE3E3] border-[0.0625rem] gap-[0.5375rem] rounded-[0.625rem] shadow-[-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF] cursor-pointer hover:shadow-[inset_-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,inset_0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF]'>
                            <div className='w-[6.15125rem] h-[5.5725rem] flex justify-center items-center mt-[0.413125rem]'>
                                <img src={guy_exploaring} alt="" />
                            </div>
                            <div className='w-[6.5625rem] mx-auto text-grade text-[1.125rem] text-center'>
                                Exploring opportunities
                            </div>
                        </div>
                        <div className=' mb-[1.833125rem] w-[10.038125rem] h-[10.038125rem] flex flex-col justify-center items-center border-[#DCE3E3] border-[0.0625rem] gap-[0.0075rem] rounded-[0.625rem] shadow-[-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF] cursor-pointer hover:shadow-[inset_-0.30113625rem_-0.30113625rem_0.6022725rem_#FFFFFF,inset_0.30113625rem_0.30113625rem_0.6022725rem_#B1BDBF]'>
                            <div className='w-[6.15125rem] h-[5.5725rem] flex justify-center items-center mt-[0.005rem]'>
                                <img src={homeService} alt="" />
                            </div>
                            <div className='w-[8.9375rem] mx-auto text-grade text-[1.125rem] text-center'>
                                Learning Dubai real Estate Market
                            </div>
                        </div>
                    </div>
            </div>

        )
    }
    else if(id == 7){
        elmnt = (
            <div className='my-[1.625rem] mx-[5%] flex gap-[4.25rem] items-center'>
                <div className=''>

                    <MenueChild icon={hauseIcon} title1={'Profound '} title2='Insider Market / News ' text="Insights into market trends and news can give you a competitive edge. A deep understanding of real estate market dynamics and emerging trends can help you make informed decisions and seize opportunities that others may overlook. By staying up-to-date on the latest news and analysis." button='Access now' mainWidth='27.5625rem' mainHeight='19.3125rem' textWidth='25.0625rem' textML='1.25rem' mainTitileMT='0.2875rem'/>
                </div>
                {/* <FiltersContainer/> */}
                <div className='w-[62.74375rem] flex justify-end h-[22.060625rem]'>
                    {/* <div className=' scale-[0.655]'> */}
                        <SwiperNewsSmall/>
                </div>
                {/* <InhoverLinks/> */}
            </div>
        )
    }
    else if(id == 8){
        elmnt = (
            <div className='my-[1.625rem] ml-[2.875rem] w-full flex gap-[3.125rem] items-center'>
                <div className=' flex gap-[3.75rem]'>

                    <div className='w-[16.875rem] h-[22.5rem] bg-[#E6EDED] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center cursor-pointer'>
                        <div className='w-[14.78625rem] h-[20.439375rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex flex-col justify-center items-center gap-[0.875rem]'>
                            <div className='w-[6.25rem] h-[6.25rem] rounded-full flex justify-center items-center shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#FFFFFF,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5]'>
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
                            <div className='w-[6.25rem] h-[6.25rem] rounded-full flex justify-center items-center shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#FFFFFF,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5]'>
                                <img src={binociolars} alt="" className='object-cover object-center'/>
                            </div>
                            <div className='text-[1.75rem] text-grade'>
                                MISSION
                            </div>
                            <div className='leading-[1.59375rem] h-[9.75rem] text-center text-[1.0625rem] font-[300] mb-[0.5rem]'>
                                To provide clients with comprehensive understanding, updates, risk elimination, and informed decisions with integrity, empathy, and transparency.
                            </div>
                        </div>
                    </div>
                    <div className='w-[16.875rem] h-[22.5rem] bg-[#E6EDED] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center cursor-pointer'>
                        <div className='w-[14.78625rem] h-[20.439375rem] rounded-[0.9375rem] shadow-[-0.375rem_-0.375rem_0.75rem_#FFFFFF,0.375rem_0.375rem_0.75rem_#B1BDBF] border-[#DCE3E3] border-[0.0625rem] flex flex-col justify-center items-center gap-[0.875rem]'>
                            <div className='w-[6.25rem] h-[6.25rem] rounded-full flex justify-center items-center shadow-[inset_-0.455664375rem_-0.455664375rem_1.1391625rem_#FFFFFF,inset_0.455664375rem_0.455664375rem_1.1391625rem_#B6C3C5]'>
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
                <div className=' w-[29.365rem] h-[20.625rem] flex flex-wrap'>
                    <div className='mr-[1.25rem] w-[12.865rem] h-[9.683125rem] rounded-[1.875rem_0.1875rem_0.625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.276666875rem_-0.276666875rem_0.553333125rem_#FFFFFF,0.276666875rem_0.276666875rem_0.553333125rem_#BABFBF] flex flex-col gap-[1.0625rem] justify-center items-center mb-[1.25rem] cursor-pointer hover:shadow-[inset_-0.276666875rem_-0.276666875rem_0.553333125rem_#FFFFFF,inset_0.276666875rem_0.276666875rem_0.553333125rem_#BABFBF]'>
                        <div className='text-[1.75rem] text-grade '>
                            OUR STORY
                        </div>
                        <div className='text-[1.125rem] text-grade leading-[1.5625rrem] text-center w-[11.6875rem]'>
                            Know us profound know us better
                        </div>
                    </div>
                    <div className='w-[12.865rem] h-[9.683125rem] rounded-[0.1875rem_1.875rem_0.1875rem_0.625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.276666875rem_-0.276666875rem_0.553333125rem_#FFFFFF,0.276666875rem_0.276666875rem_0.553333125rem_#BABFBF] flex flex-col gap-[1.0625rem] justify-center items-center mb-[1.25rem] cursor-pointer hover:shadow-[inset_-0.276666875rem_-0.276666875rem_0.553333125rem_#FFFFFF,inset_0.276666875rem_0.276666875rem_0.553333125rem_#BABFBF]'>
                        <div className='text-[1.75rem] text-grade '>
                            OUR TEAM
                        </div>
                        <div className='text-[1.125rem] text-grade leading-[1.5625rrem] text-center w-[11.6875rem]'>
                            Passion and innovation are in our DNA
                        </div>
                    </div>
                    <div className='mr-[1.25rem] w-[12.865rem] h-[9.683125rem] rounded-[0.1875rem_0.625rem_0.1875rem_1.875rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.276666875rem_-0.276666875rem_0.553333125rem_#FFFFFF,0.276666875rem_0.276666875rem_0.553333125rem_#BABFBF] flex flex-col gap-[1.0625rem] justify-center items-center  cursor-pointer hover:shadow-[inset_-0.276666875rem_-0.276666875rem_0.553333125rem_#FFFFFF,inset_0.276666875rem_0.276666875rem_0.553333125rem_#BABFBF]'>
                        <div className='text-[1.75rem] text-grade '>
                            OUR CLIENT
                        </div>
                        <div className='text-[1.125rem] text-grade leading-[1.5625rrem] text-center w-[11.6875rem]'>
                            What they say about us!!!
                        </div>
                    </div>
                    <div className='w-[12.865rem] h-[9.683125rem] rounded-[0.625rem_0.1875rem_1.875rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.276666875rem_-0.276666875rem_0.553333125rem_#FFFFFF,0.276666875rem_0.276666875rem_0.553333125rem_#BABFBF] flex flex-col gap-[1.0625rem] justify-center items-center  cursor-pointer hover:shadow-[inset_-0.276666875rem_-0.276666875rem_0.553333125rem_#FFFFFF,inset_0.276666875rem_0.276666875rem_0.553333125rem_#BABFBF]'>
                        <div className='text-[1.75rem] text-grade '>
                            CAREER
                        </div>
                        <div className='text-[1.125rem] text-grade leading-[1.5625rrem] text-center w-[11.6875rem]'>
                            Join a Profound career now
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    return (
        elmnt
    )
}

export default NavHoverCoordinator
