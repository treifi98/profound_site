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
import SelectMobile from './SelectMobile'
import ButtonSelectMobile from './ButtonSelectMobile'
import SliderButton from '@/Components/Developer/SliderButton'
import RangeComponentMobile from './RangeComponentMobile'


const FliterBarMobile = () => {
    const [numberOfBeds,setNumberOfBeds] = useState([])
    const [sizes,setSizes] = useState([0,15000])
    const [prices,setPrices] = useState([400000,100000000])


    const inp1 = useRef(null);
    const inp2 = useRef(null);
    const inp3 = useRef(null);
    const inp4 = useRef(null);
    const changeSizes = (sizes:number[]) => {
        setSizes(sizes)
        // alert(sizes[0])
    }
    const changePrices = (prices:number[]) => {
        setPrices(prices)
        // alert(sizes[0])
    }
    const changeMin = (min:number) => {
        setSizes((prev)=>[min,prev[1]])
        // alert(sizes[0])
    }
    const changeMax = (max:number) => {
        setSizes((prev)=>[prev[0],max])
        // alert(sizes[0])
    }
    const changeMinPrice = (min:number) => {
        setPrices((prev)=>[min,prev[1]])
        // alert(sizes[0])
    }
    const changeMaxPrice = (max:number) => {
        setPrices((prev)=>[prev[0],max])
        // alert(sizes[0])
    }
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
            window.scrollTo({top: window.innerHeight, behavior: 'auto'});

            cont.current.style.paddingBottom = '1rem'

        }else{

            btn.current.style.boxShadow = ' -2.06558px -2.06558px 4.33198px #FFFFFF, 3.95604px 3.95604px 5.53846px #B6C3C5'
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

        <div className='w-full h-[3.125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5]  relative z-[1] flex justify-center items-center gap-[2rem] mt-[0rem]' ref={main}>
            <div className=' w-[100%] h-full flex items-center justify-evenly'>
                <div className=''>

                    <SearchAction
                        mainWidth='2.5rem'
                        mainHeight='2.445625rem'
                        effectCircleHeight='1.645625rem'
                        effectCircleWidth='1.6rem'
                        effectInnerCircleHeight='2.2825rem'
                        effectInnerCircleWidth='2.2825rem'
                    />
                </div>
                <input type="text" name="" id="" placeholder="budling, community, Areas or Developer" className='focus:border-transparent focus:ring-0 bg-[#E6EDED] w-[17.0625rem] h-[1.75rem] text-[0.875rem] border-[1px] border-[#DDE4E4] rounded-[1.3125rem] shadow-[inset_-2.58808px_-2.58808px_5.17615px_#F7FFFF,inset_2.58808px_2.58808px_5.17615px_#B6C3C5] ml-[-0.1rem]'/>

                <div className='w-[1.775rem] h-[1.775rem] shadow-[-2.06558px_-2.06558px_4.33198px_#FFFFFF,3.95604px_3.95604px_5.53846px_#B6C3C5] rounded-[0.2125rem] flex justify-center items-center hover:!shadow-[inset_-3.46558px_-3.46558px_4.33198px_#FFFFFF,inset_3.95604px_3.95604px_5.53846px_#B6C3C5] cursor-pointer' onClick={() => setClicked((prev) => !prev)} ref={btn} >
                    <img src={filter} alt="" className='!w-[1.071875rem] h-[0.99375em]' />
                </div>

            </div>

        </div>
        <div className=' w-full h-[0.375rem] z-[2] relative'>
            <InElementSeperator width='100%' shadow=' inset -4.56609px -4.56609px 7.30575px #FFFFFF, inset 4.56609px 4.56609px 6.39253px #B6C3C5' />
        </div>
        <div className='w-full h-[3.125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5]  relative z-[1] flex justify-center items-center gap-[2rem] '>
            <div className='w-[95%]  mx-auto h-full flex items-center justify-between gap-[1rem]'>
                <div className='flex justify-between items-center '>
                    <div className='text-grade text-[0.9375rem]'>
                        Buy
                    </div>
                    <div className='scale-[0.693]'>
                        <CheckComponent id="BuyCheck" on="on" off="off" />
                    </div>
                </div>
                <div className='flex justify-between items-center '>
                    <div className='text-grade text-[0.9375rem]'>
                        Rent
                    </div>
                    <div className='scale-[0.693]'>
                        <CheckComponent id="RentCheck" on="on" off="off" rangecomponentId='priceFilter_1' minValue={10000} ogMinValue={400000} maxValue={100000000} ogMaxValue={100000000} step={200} ogStep={200} stepDefault = {false}/>
                    </div>
                </div>
                <div className='flex justify-between items-center '>
                    <div className='text-grade text-[0.9375rem] whitespace-nowrap'>
                        Off-Plan
                    </div>
                    <div className='scale-[0.693] justify-self-end '>
                        <CheckComponent id="PlanCheck" on="on" off="off"/>
                    </div>
                </div>

            </div>

        </div>
        <div className=' w-full h-[0.375rem] z-[2] relative'>
            <InElementSeperator width='100%' shadow=' inset -4.56609px -4.56609px 7.30575px #FFFFFF, inset 4.56609px 4.56609px 6.39253px #B6C3C5' />
        </div>
        <div className='w-full h-[3.125rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5]  relative z-[1] flex justify-start items-center gap-[2rem] '>
            <div className='w-[95%] mx-auto   h-full flex items-center justify-start gap-[1rem]'>
            <div className='flex gap-[0.9375rem] items-center'>
                    <div className='text-grade text-[0.9375rem]'>
                        Ready
                    </div>
                    <div className='scale-[0.693]'>
                        <CheckComponent id="ReadyCheck" on="on" off="off"/>
                    </div>
                </div>
                <div className='flex gap-[0.9375rem] items-center'>
                    <div className='text-grade text-[0.9375rem]'>
                        Commercial
                    </div>
                    <div className='scale-[0.693]'>
                        <CheckComponent id="CommercialCheck" on="on" off="off"/>
                    </div>
                </div>

            </div>

        </div>

        <div className=' h-0 pb-[0rem] transition-all duration-[0.3s]' ref={cont}>

            <div className=' w-full h-[0.375rem] z-[1] relative'>
                <InElementSeperator width='100%' shadow=' inset -4.56609px -4.56609px 7.30575px #FFFFFF, inset 4.56609px 4.56609px 6.39253px #B6C3C5' />
            </div>
            <div className='w-full h-max  bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  relative z-[3] flex justify-center items-center gap-[2rem] '>
                <div className=' w-[95%] h-full flex items-center justify-between flex-wrap gap-y-[1.2475rem] py-[1rem]'>

                    <div className='relative z-[4]'>
                        <SelectMobile options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Area Features' id='af' func={() => console.log('d')}/>
                    </div>
                    <div className=''>
                        <SelectMobile options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Property Features' id='pf' func={() => console.log('d')}/>
                    </div>
                    <div className=' relative z-[3]'>
                        <SelectMobile options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Property Type' id='pt' func={() => console.log('d')}/>
                    </div>
                    <div className=''>
                        <ButtonSelectMobile  options={[{lable:'Studio',value:'studio'},{lable:'1',value:'1'},{lable:'2',value:'2'},{lable:'3',value:'3'},{lable:'4',value:'4'},{lable:'5',value:'5'},{lable:'6',value:'6'},{lable:'7',value:'7'},{lable:'8',value:'8'},{lable:'9',value:'9'},{lable:'10+',value:'10'}]} lable={'Bedrooms'} func={x}/>
                    </div>
                    <div className='relative z-[2]'>
                        <SelectMobile options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Completion Date' id='cd' func={() => console.log('d')}/>
                    </div>
                </div>
            </div>
            <div className=' w-full h-[0.375rem] z-[1] relative'>
                <InElementSeperator width='100%' shadow=' inset -4.56609px -4.56609px 7.30575px #FFFFFF, inset 4.56609px 4.56609px 6.39253px #B6C3C5' />
            </div>
            <div className='w-full h-max  bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  relative z-[2] flex flex-col justify-center items-center gap-x-[2rem] '>
                <div className=' w-[95%] h-full flex items-center justify-between flex-wrap  py-[0.1rem]'>
                    <div className='flex items-center gap-[0.6875rem]'>
                        <div className='whitespace-nowrap text-[0.875rm] text-grade font-[600]'>
                            Size Range
                        </div>
                        <div className='scale-[0.6691] origin-left'>

                            <SliderButton title='Size By' options={['SQ.FT','SQ.M']}/>
                        </div>

                    </div>
                </div>
                <div className='w-[100vw] h-[5.5rem] shadow-[inset_-2.95156px_-2.95156px_4.7225px_#FFFFFF,_inset_2.95156px_2.95156px_4.13219px_#B6C3C5]'>
                    <div className='w-[95%] mx-auto'>
                        <div className='w-full flex justify-between items-center mt-[0.3125rem]'>
                            <div className='text-grade text-[0.75rem]'> Min Size (sq.ft)</div>
                            <div className='text-grade text-[0.75rem]'>Max Size (sq.ft)</div>
                        </div>
                        <div className='w-[95%] mx-auto mt-[0.5125rem]'>
                            <RangeComponentMobile RTL={false} max={15000} min={0} step={200} MinStep={200} MaxStep={200} StepDefault={true} id='sizeMobile' func={changeSizes} vals={sizes}/>
                        </div>
                        <div className=' flex justify-between'>
                            <input type="number" value={sizes[0]} className='w-[6.25rem] h-[1.5rem] border-[#DCE3E3] rounded-[6.25rem] border-[0.0625rem] shadow-[inset_-3.39089px_-3.39089px_5.42543px_#FFFFFF,_inset_3.39089px_3.39089px_4.74725px_#B6C3C5] bg-[#E6EDED] focus:border-transparent focus:ring-0 text-[#7D8989] text-[0.8125rem] font-[600] text-center mt-[0.8125rem]' onChange={(e)=>{e.target.style.color='#05363B';changeMin(parseFloat(e.target.value))}} min={0} max={15000} ref={inp1}/>
                            <input type="number" value={sizes[1]} className='w-[6.25rem] h-[1.5rem] border-[#DCE3E3] rounded-[6.25rem] border-[0.0625rem] shadow-[inset_-3.39089px_-3.39089px_5.42543px_#FFFFFF,_inset_3.39089px_3.39089px_4.74725px_#B6C3C5] bg-[#E6EDED] focus:border-transparent focus:ring-0 text-[#7D8989] text-[0.8125rem] font-[600] text-center mt-[0.8125rem]' onChange={(e)=>{e.target.style.color='#05363B';changeMax(parseFloat(e.target.value))}} min={0} max={15000} ref={inp2}/>
                        </div>
                    </div>
                </div>
                <div className=' w-[95%] h-full flex items-center justify-between flex-wrap  py-[0.1rem]'>
                    <div className='flex items-center gap-[0.6875rem]'>
                        <div className='whitespace-nowrap text-[0.875rm] text-grade font-[600]'>
                            Price Range
                        </div>
                        <div className='scale-[0.6691] origin-left'>

                            <SliderButton title='Price By' options={['AED','USD','EUR','RUB']}/>
                        </div>

                    </div>
                </div>
                <div className='w-[100vw] h-[5.5rem] shadow-[inset_-2.95156px_-2.95156px_4.7225px_#FFFFFF,_inset_2.95156px_2.95156px_4.13219px_#B6C3C5] '>
                    <div className='w-[95%] mx-auto'>
                        <div className='w-full flex justify-between items-center mt-[0.3125rem]'>
                            <div className='text-grade text-[0.75rem]'> Min Price (AED)</div>
                            <div className='text-grade text-[0.75rem]'>Max Price (AED)</div>
                        </div>
                        <div className='w-[95%] mx-auto mt-[0.5125rem]'>
                            <RangeComponentMobile RTL={false} max={100000000} min={400000} step={200} MinStep={100000} MaxStep={10000000} StepDefault={false} id='priceFilter_1' func={changePrices} vals={prices}/>

                        </div>
                        <div className=' flex justify-between'>
                            <input type="number" value={prices[0]} className='w-[6.25rem] h-[1.5rem] border-[#DCE3E3] rounded-[6.25rem] border-[0.0625rem] shadow-[inset_-3.39089px_-3.39089px_5.42543px_#FFFFFF,_inset_3.39089px_3.39089px_4.74725px_#B6C3C5] bg-[#E6EDED] focus:border-transparent focus:ring-0 text-[#7D8989] text-[0.8125rem] font-[600] text-center mt-[0.8125rem]' onChange={(e)=>{e.target.style.color='#05363B';changeMinPrice(parseFloat(e.target.value))}} min={400000} max={100000000} ref={inp3}/>
                            <input type="number" value={prices[1]} className='w-[6.25rem] h-[1.5rem] border-[#DCE3E3] rounded-[6.25rem] border-[0.0625rem] shadow-[inset_-3.39089px_-3.39089px_5.42543px_#FFFFFF,_inset_3.39089px_3.39089px_4.74725px_#B6C3C5] bg-[#E6EDED] focus:border-transparent focus:ring-0 text-[#7D8989] text-[0.8125rem] font-[600] text-center mt-[0.8125rem]' onChange={(e)=>{e.target.style.color='#05363B';changeMaxPrice(parseFloat(e.target.value))}} min={400000} max={100000000} ref={inp4}/>
                        </div>
                    </div>
                </div>
            <div className='w-full h-[2.8125rem] shadow-[-4.23363px_-4.23363px_8.46727px_#F8FFFE,_4.23363px_4.23363px_8.46727px_#B6C3C5] border-[#DDE4E4] border-[0.0625rem] mb-[3rem] flex justify-center items-center'>
                <div className='w-[95%] mx-auto flex items-center  justify-between'>

                    <div className='w-[6.448125rem] h-[1.596875rem] shadow-[inset_-1.29291px_-1.29291px_1.93937px_#04626B,_inset_1.29291px_1.29291px_1.93937px_#011618] bg-[#05363B] rounded-[4.4375rem] flex justify-center items-center'>
                        <div className='w-[6.249375rem] h-[1.35125rem] bg-[#05363B] rounded-[4.4375rem] shadow-[1.29291px_-1.29291px_1.93937px_#04626B,_1.29291px_1.29291px_1.93937px_#011618] flex justify-center items-center'>
                            <div className='text-[#fff] text-[0.875rem] font-[600]'>
                                Clear all
                            </div>
                        </div>
                    </div>
                    <div className='w-[6.448125rem] h-[1.596875rem] shadow-[inset_-1.29291px_-1.29291px_1.93937px_#04626B,_inset_1.29291px_1.29291px_1.93937px_#011618] bg-[#05363B] rounded-[4.4375rem] flex justify-center items-center'>
                        <div className='w-[6.249375rem] h-[1.35125rem] bg-[#05363B] rounded-[4.4375rem] shadow-[1.29291px_-1.29291px_1.93937px_#04626B,_1.29291px_1.29291px_1.93937px_#011618] flex justify-center items-center'>
                            <div className='text-[#fff] text-[0.875rem] font-[600]'>
                                Apply
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        </>
    )
}

export default FliterBarMobile
