import React from 'react'
import Select from '../Select'
import ShowMap from './ShowMap'
import MoreFilter from '../MoreFilter'
import SelectByCheck from './SelectByCheck'
import Expandable from '../Expandable'

const FiltersLine = () => {
    return (
        <div className='w-full h-[5.625rem] flex items-center  shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.3125rem_#B6C3C5] border-[#DCE3E3] border-[0.0625rem] relative z-[99999] '>
            <div className='flex items-center gap-[1.375rem] ml-[0.6875rem]'>
                <input type='text' className='text-[#002D31] focus:border-transparent focus:ring-0 w-[21.1875rem] h-[2.25rem] bg-[#E6EDED] rounded-[5.70761875rem] border-[#DCE3E3] border-[0.0625rem]  shadow-[inset_-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] text-center' placeholder='Location, Developer or Project'/>
                {/* <div className='w-[11.25rem]'> */}

                    <Select options={[{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'}]} lable='Price' id='wrg1' func={() => console.log('d')} width='11.25' txetSize='1.125'/>
                    <Select options={[{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'}]} lable='Type' id='wg1' func={() => console.log('d')} width='11.25' txetSize='1.125'/>
                    <Select options={[{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'}]} lable='Bedrooms' id='1gr' func={() => console.log('d')} width='11.25' txetSize='1.125'/>
                    <Select options={[{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'},{ lable:'one',value:'one' },{lable:'one',value:'one'}]} lable='Compleation' id='1wg' func={() => console.log('d')} width='11.25' txetSize='1.125'/>
                    <MoreFilter lable='More filters' id='dd' width='11.25' left='-2.3'>
                        <Expandable lable='First one' id='tete'>
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },]} id='dgrwd'/>

                        </Expandable>
                        <Expandable lable='First one' id='tete'>
                            {/* <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'dcd' },{ label:'one',on:'one',off:'f',id:'dwf' },{ label:'one',on:'one',off:'f',id:'dfew' },]} id='dwrgd'/> */}
                            <SelectByCheck options={[{ label:'one',on:'one',off:'f',id:'wefd' },{ label:'one',on:'one',off:'f',id:'fed' },{ label:'one',on:'one',off:'f',id:'dewf' },]} id='dgrwd'/>

                        </Expandable>
                    </MoreFilter>
                    <div className='hover:shadow-[inset_-0.25rem_-0.25rem_0.3125rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer w-[8rem] h-[2.25rem] flex justify-center items-center rounded-full absolute right-[1.3125rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                        <div className='text-grade text-[1.125rem] font-[600]'>
                            Apply
                        </div>
                    </div>
                    {/* <ShowMap id='w-s-s' on='d' off='dd'/> */}

                {/* </div> */}
            </div>

        </div>
    )
}

export default FiltersLine
