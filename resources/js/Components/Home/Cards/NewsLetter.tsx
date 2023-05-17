import React from 'react'
import userIcon from '../../../../assets/user_icon.svg'
import emailIcon from '../../../../assets/emailIcon.svg'
import TextType1 from '../Inputs/TextType1'
import Buttontype1 from '../Inputs/Buttontype1'
import InElementSeperator from './Common/InElementSeperator'

const NewsLetter = () => {
  return (
    <div className='w-[92.25rem] h-[8.125rem] bg-[#E6EDED] border-[0.0625rem] border-[#DDE4E4] rounded-[0.480625rem] shadow-[-0.215540625rem_-0.215540625rem_0.32331125rem_#FFFFFF,0.215540625rem_0.215540625rem_0.32331125rem_#AEBBBD] flex justify-center items-center'>
        <div className='flex w-[88.9625rem] mx-auto justify-between items-center h-full'>
            <div className=' text-[1.25rem] w-[41.375rem] text-grade'>

                Stay ahead of the curve in Dubai's real estate market. Subscribe now to get exclusive access to the latest updates and off-plan property projects.
            </div>
            <div className='h-full ml-[3.8125rem]'>

                <InElementSeperator width='0.4375rem' height='8rem'/>
            </div>
            <div className=''>
                <div className='flex justify-between w-[40.8375rem]'>

                    <TextType1 icon={userIcon} placeHolder='Your email address'/>
                    <TextType1 icon={emailIcon} placeHolder='Your email address'/>
                </div>
                <div className='flex justify-between w-[40.8375rem] mt-[1.533125rem]'>
                    <div className='text-grade text-[1.25rem] font-[700]'>
                        Make informed investment decisions
                    </div>
                    <Buttontype1 text="Subscribe"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
