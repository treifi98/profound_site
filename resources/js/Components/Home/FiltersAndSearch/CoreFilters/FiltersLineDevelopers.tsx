import React from 'react'
import Select from '../Select'
import ShowMap from './ShowMap'
import MoreFilter from '../MoreFilter'
import SelectByCheck from './SelectByCheck'
import Expandable from '../Expandable'
import InElementSeperator from '../../Cards/Common/InElementSeperator'
import FancyCheckeComponent from './FancyCheckeComponent'
import SearchAction from '../SearchActionComponent'

interface Props{
    funcMap?:Function,
    mapStatus?:boolean
}
const FiltersLineDevelopers = (props:Props) => {
    return (
        <div className='w-full h-[5.625rem] flex items-center  shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.3125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] relative z-[99999] '>
            <div className='w-[72.074375rem] mx-auto flex items-center gap-[2.5rem] '>
                <input type='text' className='text-[#002D31] focus:border-transparent focus:ring-0 w-[24rem] h-[2.25rem] bg-[#E6EDED] rounded-[5.70761875rem] border-[#DCE3E3] border-[0.0625rem]  shadow-[inset_-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] text-center' placeholder='Location, Developer or Project'/>
                {/* <div className='w-[11.25rem]'> */}

                    <Select options={[{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'}]} lable='Price' id='wrg1' func={() => console.log('d')} width='11.25' txetSize='1.125'/>
                    <Select options={[{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'}]} lable='Type' id='wg1' func={() => console.log('d')} width='11.25' txetSize='1.125'/>
                    <Select options={[{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'}]} lable='Bedrooms' id='1gr' func={() => console.log('d')} width='11.25' txetSize='1.125'/>
                    <div className=''>
                        <SearchAction/>
                    </div>
                    {/* <div className='h-[5.625rem]'>
                        <InElementSeperator width='0.4375rem'/>
                    </div> */}
                    {/* <div className='hover:shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer w-[8rem] h-[2.25rem] flex justify-center items-center rounded-full absolute right-[1.3125rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                        <div className='text-grade text-[1.125rem] font-[600]'>
                            Apply
                        </div>
                    </div> */}
                    {/* <div>
                        <FancyCheckeComponent id='showMap' off='off' on='on' key={'showmap'} funcMap={props.funcMap} mapStatus={props.mapStatus}/>
                    </div> */}
                    {/* <ShowMap id='w-s-s' on='d' off='dd'/> */}

                {/* </div> */}
            </div>

        </div>
    )
}

export default FiltersLineDevelopers
