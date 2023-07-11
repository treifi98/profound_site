import React from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import devabout from '../../../assets/devabout.svg'
import SimpleSwiper from './SimpleSwiper'
import AboutSwiper from './AboutSwiper'
import AboutSwiperMobile from './AboutSwiperMobile'


interface Props{
    screen?:Boolean
}
const AboutDeveloper = (props:Props) => {
  return (
    <>
    {
        props.screen?(
            <div>
        <div className='relative z-30 w-[calc(100vw-0.625rem)] mx-auto h-[3.125rem] rounded-[6.25rem] bg-[#E6EDED] border-[#DCE3E3] border-[1px] flex justify-between items-center px-[1.1875rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] mb-[0.3125rem] !font-[nova]'>
            <div className='flex  items-center w-[50%] justify-start'>
                <img src={devabout} alt="" className='w-[5.375rem] h-[2.8125rem] '/>
                {/* <div className='h-[3.125rem] w-[1px] bg-[#CED7D8] ml-[0.375rem] mr-[0.9375rem]'></div> */}
                <InElementSeperator height='3.0475rem' width='0.5rem'/>
                <div className='text-grade text-[1.875rem] max- font-[600] ml-[1.0625rem]'>About Emaar </div>
            </div>
        </div>

        <div className='w-full flex flex-col items-center'>

            <div className='w-[79.375rem] h-max text-[1.25rem] leading-[2.25rem] text-grade ml-[3.9375rem] mt-[3.125rem] flex justify-center'>

                Emaar Properties was founded by Mohamed Alabbar. The former chairman was widely involved in tourism and construction before founding the company. He was a director of Al Khaleej Investments in Singapore and even an economic adviser to the Ruler of Dubai, His Highness Sheikh Mohammed bin Rashid Al Maktoum. His indispensable experience has enabled the company to go international and succeed in its biggest projects, such as the Burj Khalifa. Mohamed Alabbar is currently the Managing Director of the company as of 2021. The board now consists of Jamal Bin Theniyah as Chairman and Ahmed Jawa as Vice Chairman. The CEO of the company is Amit Jain.
                In 2004 the company went international by establishing Emaar International LLC. As of now Emaar Properties has over 60 subsidiaries and is operating in more than 36 different markets in North America, Europe, North Africa and the Middle East. The company has projects on different stages in such countries as Turkey, Egypt, India, Saudi Arabia, Morocco, Syria, Pakistan and the United States. Some of the well-known projects include Jeddah Gate in Saudi Arabia, Beit Misk in Lebanon, Tuscan Valley in Turkey and Samarah Dead Sea Resort in Jordan. In 2015 Emaar Properties expanded its developments to Bahrain and Nigeria.
            </div>
            <div className='w-[91.25rem] mx-auto mt-[3.125rem]'>

                <SimpleSwiper/>
            </div>
            <div className='w-[79.375rem] h-[29.25rem] text-[1.25rem] leading-[2.25rem] text-grade ml-[3.9375rem] mt-[3.125rem]'>

                One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecological system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and the UN World Food Programme to fight global hunger.
                Over the years, Emaar has been able to reach lofty heights. The company has been awarded the Guinness World Record several times for breaking records. For example, Emaar’s most popular building is the Burj Khalifa, the tallest building in the world at almost 2,722 ft. Construction of the building started in 2004 but it was opened only in 2010. It has 160 floors dedicated to residential purposes. It was named after the ruler of Abu Dhabi, Sheikh Khalifa bin Zayed Al Nahyan. Burj Khalifa also broke records in categories such as – most floors in a building (163), the highest restaurant in a building (At.mosphere, 1,447ft 10 in), the highest residential apartments (1,263 ft) and largest light and sound show on a single building (1 January 2018).
                Our Expert Will Help You
            </div>
        </div>
    </div>
        ):
        (
            <div className='w-[23.4375rem] h-max shadow-[6.286655426025391px_6.286655426025391px_12.573310852050781px_0px_#BABFBF,-6.286655426025391px_-6.286655426025391px_12.573310852050781px_3.1433277130126953px_#FFF]  overflow-hidden pb-[0rem]  mobil-comp'>
                <div className='w-[345px] h-[25.875rem] mt-[15px] rounded-[8px] mx-auto overflow-hidden'>
                    <AboutSwiperMobile width='345px' height='25.875rem' rounded='8px'/>
                </div>
                <div className='mb-[15px] mt-[20px] w-[345px] h-min rounded-[8px] shadow-[4px_4px_7px_0px_rgba(186,191,191,0.80)_inset,-5px_-5px_10px_0px_#FFF_inset] overflow-hidden mx-auto border-[1px] border-[#DCE3E3] '>
                    <div className='w-[325px] mx-auto'>

                        <div className='mt-[1rem] mx-auto w-[94%] text-[20px] font-[600] text-grade '>
                            Latest Projects By Emaar
                        </div>
                        <div className='mt-[0.5rem]  text-[14px] text-grade  w-[94%] pb-[1rem] mb-[0.1rem] hide-scrollbar leading-[175%]  mx-auto '>
                            One of the company’s main objectives to be achieved during construction is environmental sustainability. Emaar’s projects and activities support the UAE’s ‘green vision’ to improve the world’s ecological system. Furthermore, in 2015, the company launched the Emaar Foundation, which aims to implement corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future Africa Foundation to ensure opportunity and equality for those most in need in Africa and thealso supports the Dream for Future Africa Foundation to ensure opportunity
                            corporate social responsibility (CSR) initiatives. This program supports Dubai Cares, which aims to improve access to quality primary education for children in developing countries. The Foundation also supports the Dream for Future
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    </>
  )
}

export default AboutDeveloper
