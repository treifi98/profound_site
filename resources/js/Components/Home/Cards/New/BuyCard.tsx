import React from 'react'
import NewCardImage from '../Common/NewCardImage'
import NewTag from '../Common/NewTag'
import NewSocial from '../Common/NewSocial'

import buyCardImage from '../../../../../assets/buyCard.png'
import shareIcon from '../../../../../assets/share_icon.svg'
const BuyCard = () => {
    return (
        <div className='w-[42.435625rem] h-[42.821875rem] rounded-[0.91905rem] overflow-hidden border-[#CAD4D5]  border-[0.0625rem] shadow-[-0.36762rem_-0.36762rem_0.7352375rem_0.18381rem_#FFFFFF,0.36762rem_0.36762rem_0.7352375rem_#BABFBF]'>

            <div className='w-[40.375rem] h-[22.795625rem] mx-auto my-[0.965625rem]'>
                <NewCardImage src={buyCardImage} rounded='0.65859375'/>
            </div>
            <div className='flex w-[40.375rem] mx-auto gap-[8.998125rem]'>
                <div className='w-[6.163125rem]'>
                    <div className='w-[1.71125rem]'>
                        <NewSocial img={shareIcon}/>
                    </div>
                </div>
                <div className='w-[25.306875rem] h-[1.674375rem] gap-[0.965625rem] flex'>
                    <div className='w-[7.791875rem] h-[1.674375rem] rounded-[6.4394375rem]'>
                        <NewTag text='High ROI' />
                    </div>
                    <div className='w-[7.791875rem] h-[1.674375rem] rounded-[6.4394375rem]'>
                        <NewTag text='High ROI' />
                    </div>
                    <div className='w-[7.791875rem] h-[1.674375rem] rounded-[6.4394375rem]'>
                        <NewTag text='High ROI' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyCard
