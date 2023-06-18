import React, { useEffect, useRef, useState } from 'react'
import SearchAction from './SearchActionComponent'
import CheckComponent from './CoreFilters/CheckComponent'
import filter from '../../../../assets/fliter.svg'
import cosex from '../../../../assets/cosex.svg'
import InElementSeperator from '../Cards/Common/InElementSeperator'
import ButtonSelect from './ButtonSelect'
import Select from './Select'
import SquareSelect from './SquareSelect'
import RangeComponent from './RangeComponent'


const FliterBar = () => {
    const [numberOfBeds,setNumberOfBeds] = useState([])

    const x = (nums:string[]) => setNumberOfBeds(nums)
    const [clicked,setClicked] = useState(false)
    const btn = useRef(null)
    const cont = useRef(null)
    const main = useRef(null)
    useEffect(()=>{
        if(clicked){
            btn.current.style.boxShadow = 'inset -3.46558px -3.46558px 4.33198px #FFFFFF,inset 3.95604px 3.95604px 5.53846px #B6C3C5'
            btn.current.querySelector('img').src = cosex
            btn.current.querySelector('img').style.width = '0.861875rem'
            btn.current.querySelector('img').style.height = '0.861875rem'
            main.current.style.boxShadow = 'none'
            cont.current.style.height = '199px'
            cont.current.style.overflow = 'visible'
            cont.current.style.paddingBottom = '1rem'

        }else{

            btn.current.style.boxShadow = ' -3.46558px -3.46558px 4.33198px #FFFFFF, 3.95604px 3.95604px 5.53846px #B6C3C5'
            btn.current.querySelector('img').src = filter
            btn.current.querySelector('img').style.width = '1.5625rem'
            btn.current.querySelector('img').style.height = '1.458125rem'
            main.current.style.boxShadow = '-5px -5px 8px #FFFFFF,5px 5px 7px #B6C3C5'
            cont.current.style.height = '0rem'
            cont.current.style.overflow = 'hidden'
            cont.current.style.paddingBottom = '0rem'
        }
    },[clicked])
    return (
        <>

        <div className='w-full h-[5rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5]  relative z-[1] flex justify-center items-center gap-[2rem] mt-[1.9rem]' ref={main}>
            <div className=' w-[92.5625rem] h-full flex items-center justify-evenly'>

                <SearchAction/>
                <input type="text" name="" id="" placeholder="budling, community, Areas or Developer" className='focus:border-transparent focus:ring-0 bg-[#E6EDED] w-[28.625rem] h-[2.5rem] border-[1px] border-[#DDE4E4] rounded-[1.3125rem] shadow-[inset_-2.58808px_-2.58808px_5.17615px_#F7FFFF,inset_2.58808px_2.58808px_5.17615px_#B6C3C5]'/>
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
                        Off-Plan
                    </div>
                    <div>
                        <CheckComponent id="PlanCheck" on="on" off="off"/>
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
                        Commercial
                    </div>
                    <div>
                        <CheckComponent id="CommercialCheck" on="on" off="off"/>
                    </div>
                </div>
                <div className='w-[2.5rem] h-[2.5rem] shadow-[-3.46558px_-3.46558px_4.33198px_#FFFFFF,3.95604px_3.95604px_5.53846px_#B6C3C5] rounded-[0.3125rem] flex justify-center items-center hover:!shadow-[inset_-3.46558px_-3.46558px_4.33198px_#FFFFFF,inset_3.95604px_3.95604px_5.53846px_#B6C3C5] cursor-pointer' onClick={() => setClicked((prev) => !prev)} ref={btn} >
                    <img src={filter} alt="" className='w-[1.5625rem] h-[1.458125rem]' />
                </div>
            </div>

        </div>
        <div className='overflow-hidden h-0 pb-[0rem] transition-all duration-[0.3s]' ref={cont}>

            <div className=' w-full h-[0.375rem] z-[1] relative'>
                <InElementSeperator width='100%' shadow=' inset -4.56609px -4.56609px 7.30575px #FFFFFF, inset 4.56609px 4.56609px 6.39253px #B6C3C5' />
            </div>
            <div className='w-full h-[5rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  relative z-[2] flex justify-center items-center gap-[2rem] '>
                <div className=' w-[94.25rem] h-full flex items-center justify-between'>
                    <div>
                        <ButtonSelect options={[{lable:'Studio',value:'studio'},{lable:'1',value:'1'},{lable:'2',value:'2'},{lable:'3',value:'3'},{lable:'4',value:'4'},{lable:'5',value:'5'},{lable:'6',value:'6'},{lable:'7',value:'7'},{lable:'8',value:'8'},{lable:'9',value:'9'},{lable:'10+',value:'10'}]} lable={'Bedrooms'} func={x}/>

                    </div>
                    <div>
                        <Select options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Property Type' id='pt' func={() => console.log('d')}/>
                    </div>
                    <div>
                        <Select options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Area Features' id='AreaFeatures' func={() => console.log('d')}/>
                    </div>
                    <div>
                        <Select options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Property Features' id='PropertyFeatures' func={() => console.log('d')}/>
                    </div>
                    <div>
                        <Select options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Completion Date' id='cd' func={() => console.log('d')}/>
                    </div>
                    <div>
                        <SquareSelect options={[{lable:'AED',value:'1'},{lable:'USD',value:'2'},{lable:'EUR',value:'3'},{lable:'RUS',value:'4'}]} lable={'Price by'} func={x}/>
                    </div>
                    <div>
                        <SquareSelect options={[{lable:'SQ.FT',value:'1'},{lable:'SQ.M',value:'2'}]} lable={'Size by'} func={x}/>
                    </div>
                </div>
            </div>
            <div className=' w-full h-[0.375rem] relative z-[1] '>
                <InElementSeperator width='100%' shadow=' inset -4.56609px -4.56609px 7.30575px #FFFFFF, inset 4.56609px 4.56609px 6.39253px #B6C3C5 ' />
            </div>
            <div className='w-full h-[4.8rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  relative z-[1] flex justify-center items-center gap-[2rem] pb-[0.5rem]'>
                <div className=' w-[92.25rem] h-full flex items-center justify-between mt-[-1.2rem]'>
                    <div className='flex justify-around items-center w-[40.5rem]'>
                        <div className='text-grade'>
                            Price AED
                        </div>
                        <div className='w-[32.25rem] mt-[0rem]'>
                            <RangeComponent RTL={false} max={100000000} min={400000} step={200} MinStep={100000} MaxStep={10000000} StepDefault={false} id='priceFilter_1'/>
                        </div>
                    </div>
                    <div className='flex justify-around items-center w-[40.5rem]'>
                        <div className='text-grade'>
                            Size SQ.FT
                        </div>
                            <div className='w-[32.25rem]'>
                            <RangeComponent RTL={false} max={15000} min={0} step={200} MinStep={200} MaxStep={200} StepDefault={true}/>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[calc(100%-0.5rem)] absolute left-0 top-[0rem] bg-[#e6eded] z-[-1]'>

                </div>
                <div className='w-full h-[1rem] absolute left-0 bottom-[0rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] z-[-2]'>

                </div>
            </div>
        </div>
        </>
    )
}

export default FliterBar
