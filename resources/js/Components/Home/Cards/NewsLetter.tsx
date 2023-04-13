import React from 'react'
import userIcon from '../../../../assets/user_icon.svg'
import emailIcon from '../../../../assets/emailIcon.svg'
import TextType1 from '../Inputs/TextType1'
import Buttontype1 from '../Inputs/Buttontype1'

const NewsLetter = () => {
  return (
    <div className='w-[56.375rem] h-[8.9375rem] bg-[#E6EDED] border-[1px] border-[#DDE4E4] rounded-[0.480625rem] shadow-[-3.44865px_-3.44865px_5.17298px_#FFFFFF,3.44865px_3.44865px_5.17298px_#AEBBBD] flex justify-center items-center'>
        <div className='flex flex-col gap-[1.364375rem] justify-center items-center'>
            <div className=' text-[1.125rem] mx-[1.729375rem] text-grade'>

                Stay ahead of the curve in Dubai's real estate market. Subscribe now to get exclusive access to the latest updates and off-plan property projects. <span className=' inline font-[600]'>Make informed investment decisions</span>
            </div>
            <div className='flex gap-[3.125rem] '>

                <TextType1 icon={userIcon} placeHolder='Your email address'/>
                <TextType1 icon={emailIcon} placeHolder='Your email address'/>
                <Buttontype1 text="Subscribe"/>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
