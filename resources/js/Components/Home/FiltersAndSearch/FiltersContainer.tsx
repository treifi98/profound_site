import React, { useState } from 'react'

import CheckComponent from './CoreFilters/CheckComponent'
import Search from '../Header/Search'
import Select from './Select'
import ButtonSelect from './ButtonSelect'
import SearchAction from './SearchActionComponent'
import RangeComponent from './RangeComponent'
const FiltersContainer = () => {
    const [numberOfBeds,setNumberOfBeds] = useState([])

    const x = (nums:string[]) => setNumberOfBeds(nums)
    return (
        <div className='min-w-[61.4375rem] h-[17.8125rem] bg-[#E6EDED] rounded-[1.5625rem] border-[0.0625rem] border-[#DDE4E4] shadow-[-0.356306875rem_-0.356306875rem_0.7125625rem_#F8FFFE,0.356306875rem_0.356306875rem_0.7125625rem_#B6C3C5] flex flex-col gap-[1rem]'>
            <div className='w-full flex gap-[3.125rem] mt-[0.8125rem] justify-center items-center '>
                <div className='flex gap-[0.9375rem]'>
                    <div className='text-grade text-[1.25rem]'>
                        Buy
                    </div>
                    <div>
                        <CheckComponent id="BuyCheck" on="on" off="off" />
                    </div>
                </div>
                <div className='flex gap-[0.9375rem]'>
                    <div className='text-grade text-[1.25rem]'>
                        Rent
                    </div>
                    <div>
                        <CheckComponent id="RentCheck" on="on" off="off" rangecomponentId='priceFilter_1' minValue={10000} ogMinValue={400000} maxValue={100000000} ogMaxValue={100000000} step={200} ogStep={200} stepDefault = {false}/>
                    </div>
                </div>
                <div className='flex gap-[0.9375rem]'>
                    <div className='text-grade text-[1.25rem]'>
                        Ready
                    </div>
                    <div>
                        <CheckComponent id="ReadyCheck" on="on" off="off"/>
                    </div>
                </div>
                <div className='flex gap-[0.9375rem]'>
                    <div className='text-grade text-[1.25rem]'>
                        Off-Plan
                    </div>
                    <div>
                        <CheckComponent id="PlanCheck" on="on" off="off"/>
                    </div>
                </div>
                <div className='flex gap-[0.9375rem]'>
                    <div className='text-grade text-[1.25rem]'>
                        Commercial
                    </div>
                    <div>
                        <CheckComponent id="CommercialCheck" on="on" off="off"/>
                    </div>
                </div>
            </div>
            <div className='w-full flex gap-[1.375rem] justify-center items-center'>
                <div className='flex gap-[0.488125rem] justify-center items-center'>
                    <SearchAction/>
                    <input type="text" name="" id="" placeholder="budling, community, Areas or Developer" className='focus:border-transparent focus:ring-0 bg-[#E6EDED] w-[24.5625rem] h-[2.0625rem] border-[1px] border-[#DDE4E4] rounded-[1.3125rem] shadow-[inset_-2.58808px_-2.58808px_5.17615px_#F7FFFF,inset_2.58808px_2.58808px_5.17615px_#B6C3C5]'/>
                </div>
                <div>
                    <Select options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Area Features' id='AreaFeatures' func={() => console.log('d')}/>
                </div>
                <div>
                <ButtonSelect options={[{lable:'Studio',value:'studio'},{lable:'1',value:'1'},{lable:'2',value:'2'},{lable:'3',value:'3'},{lable:'4',value:'4'},{lable:'5',value:'5'},{lable:'6',value:'6'},{lable:'7',value:'7'},{lable:'8',value:'8'},{lable:'9',value:'9'},{lable:'10+',value:'10'}]} lable={'Bedrooms'} func={x}/>

                </div>
            </div>
            <div className='w-full flex gap-[4.1875rem] justify-center items-center'>
                <div className='flex gap-[1.8125rem] justify-center items-center'>
                    <div className='text-grade text-[1.125rem]'>
                        Size SQ.FT
                    </div>
                    <div className='w-[34.375rem]'>
                        <RangeComponent RTL={false} max={15000} min={0} step={200} MinStep={200} MaxStep={200} StepDefault={true}/>
                    </div>
                </div>
                <div>
                    <Select options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Property Type' id='PropertyType' func={() => console.log('d')}/>
                </div>
            </div>
            <div className='w-full flex gap-[4.1875rem] justify-center items-center mt-[1rem]'>
                <div className='flex gap-[1.8125rem] justify-center items-center'>
                    <div className='text-grade text-[1.125rem]'>
                        Price AED
                    </div>
                    <div className='w-[34.375rem]'>
                        <RangeComponent RTL={false} max={100000000} min={400000} step={200} MinStep={100000} MaxStep={10000000} StepDefault={false} id='priceFilter_1'/>
                    </div>
                </div>
                <div>
                    <Select options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Property Features' id='PropertyFeatures' func={() => console.log('d')}/>
                </div>
            </div>
        </div>
    )
}

export default FiltersContainer
