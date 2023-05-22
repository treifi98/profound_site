import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState  } from '@/store'

import layout from '../../../assets/layout.svg'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import RangeSingle from './RangeSingle'
const MortgageCalculator = () => {
    const [MonthleyPayment,setMonthleyPayment] = useState(0)
    const [loan,setLoan] = useState(0)
    const [propertyPrice,setPropertyPrice] = useState(500000)
    const [loanPeriod,setLoanPeriod] = useState(5)
    const [interstRate,setInterstRate] = useState(0.25)
    const values = useSelector((state:RootState) => state.rangeSingle)
    // M = P [r(1 + r)^n] / [(1 + r)^n – 1]
    useEffect(() => {
        setLoan(values['pp'] - (values['pp'] * (values['dp'] / 100)))
        // alert(loan)
        setLoanPeriod(values['lp'])
        setInterstRate(values['ir'])
        setPropertyPrice(values['pp'])

        // alert(loan)
    },[values])
    useEffect(() => {
        let r = (interstRate / 100) / 12
        let n = loanPeriod*12
        console.log(`--------${loan}---------`)
        setMonthleyPayment(loan * ((r * Math.pow((1+r),n)) / (Math.pow((1+r),n)-1)))
        console.log(MonthleyPayment)
    },[loan,interstRate,loanPeriod,propertyPrice])
    return (
        <div className='w-[91.25rem] h-[38.125rem] border-[#CAD4D5] border-[0.0625rem] rounded-[0.98125rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] overflow-hidden'>
            <div className='w-full h-[3.75rem] flex items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                <img src={layout} alt="" className='w-[2.636875rem] h-[2.636875rem] ml-[0.838125rem]'/>
                <div className='h-full ml-[1rem]'>
                    <InElementSeperator width='0.5rem' />
                </div>
                <div className='text-grade text-[1.625rem] font-[600] ml-[1rem]'>
                    Mortgage Calculator
                </div>
                <div className='h-full ml-[1rem]'>
                    <InElementSeperator width='0.5rem' />
                </div>
                <div className='text-grade text-[1.5rem] font-[400] ml-[1rem]'>
                    Calculate and view the monthly mortgage
                </div>
            </div>
            <div className='flex w-full h-full  '>
                <div className=' w-[41.5rem] '>

                    <div className='w-[39.5rem] mt-[5.2rem] ml-[3.5rem] relative rounded-[6.25rem]'>
                        <div className='w-full rounded-[6.25rem]'>
                            <RangeSingle max={50000000} min={500000} rtl={false} id='pp' step={100000} lable='Property Price (AED)' key={'l'} precantage={false} loan={0} dp={false}/>
                        </div>
                        {/* <div className='absolute w-full top-0 left-0 z-[99999999]'>

                        </div> */}

                    </div>
                    <div className='w-[39.5rem] mt-[7rem] ml-[3.5rem]'>
                        <div className='w-full'>
                                <RangeSingle max={90} min={20} rtl={false} id='dp' step={1} lable='Down Payment (AED)' precantage={true} dp={true} loan={loan}/>
                        </div>

                    </div>
                    <div className='w-[39.5rem] mt-[7rem] ml-[3.5rem]'>
                        <div className='w-full'>
                            <RangeSingle max={25} min={5} rtl={false} id='lp' step={1} lable='Loan Period (Years)' precantage={false} loan={0} dp={false}/>
                        </div>

                    </div>
                    <div className='w-[39.5rem] mt-[7rem] ml-[3.5rem]'>
                        <div className='w-full'>
                            <RangeSingle max={10.00} min={0.250} rtl={false} id='ir' step={0.100000001} lable='Interst Rate (%)' precantage={true} loan={0} dp={false}/>
                        </div>

                    </div>
                </div>

                <div className='h-full ml-[3.125rem]'>
                    <InElementSeperator width='0.375rem'/>
                </div>
                <div>

                    <div className='w-[33.875rem] h-[6.775rem] mt-[2.5625rem] ml-[4.3125rem] flex'>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[0.33875rem_0rem_0rem_0.33875rem] shadow-[-0.3264875rem_-0.3264875rem_0.372255rem_#FFFFFF,0.24817rem_0.24817rem_0.372255rem_#B6C3C5]'>
                            <div className='text-[1.75rem] text-grade font-[600]'>

                                Monthly Payment
                            </div>
                        </div>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-custom-gradient border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_0.33875rem_0.33875rem_0rem] shadow-[inset_-0.246585625rem_-0.246585625rem_0.308231875rem_#1E6970,inset_0.246585625rem_0.246585625rem_0.308231875rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#fff] text-[1.875rem] font-[600] text-center'>

                                {Math.ceil(MonthleyPayment).toLocaleString()} <br/>AED
                            </div>
                        </div>
                    </div>

                    <div className='w-[33.875rem] h-[2.84375rem] mt-[2.875rem] ml-[4.3125rem] flex'>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[5.19341875rem_0rem_0rem_5.19341875rem] shadow-[-0.25967125rem_-0.25967125rem_0.41547375rem_#FFFFFF,0.25967125rem_0.25967125rem_0.363539375rem_#B6C3C5]'>
                            <div className='text-[1.5rem] text-grade'>
                                Total Loan Amount
                            </div>
                        </div>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-custom-gradient border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.19341875rem_5.19341875rem_0rem] shadow-[inset_-0.2274775rem_-0.2274775rem_0.284346875rem_#1E6970,inset_0.2274775rem_0.2274775rem_0.284346875rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#fff] text-[1.625rem] font-[600]'>
                                {loan.toLocaleString()} AED
                            </div>
                        </div>
                    </div>
                    <div className='w-[33.875rem] h-[2.84375rem] mt-[2.875rem] ml-[4.3125rem] flex'>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[5.19341875rem_0rem_0rem_5.19341875rem] shadow-[-0.25967125rem_-0.25967125rem_0.41547375rem_#FFFFFF,0.25967125rem_0.25967125rem_0.363539375rem_#B6C3C5]'>
                            <div className='text-[1.5rem] text-grade'>
                                Interest
                            </div>
                        </div>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-custom-gradient border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.19341875rem_5.19341875rem_0rem] shadow-[inset_-0.2274775rem_-0.2274775rem_0.284346875rem_#1E6970,inset_0.2274775rem_0.2274775rem_0.284346875rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#fff] text-[1.625rem] font-[600]'>
                                {interstRate.toFixed(2)}
                            </div>
                        </div>
                    </div>
                    <div className='w-[33.875rem] h-[2.84375rem] mt-[2.875rem] ml-[4.3125rem] flex'>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[5.19341875rem_0rem_0rem_5.19341875rem] shadow-[-0.25967125rem_-0.25967125rem_0.41547375rem_#FFFFFF,0.25967125rem_0.25967125rem_0.363539375rem_#B6C3C5]'>
                            <div className='text-[1.5rem] text-grade'>
                                Loan Period
                            </div>
                        </div>
                        <div className='flex justify-center items-center h-full w-[16.9375rem] bg-custom-gradient border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.19341875rem_5.19341875rem_0rem] shadow-[inset_-0.2274775rem_-0.2274775rem_0.284346875rem_#1E6970,inset_0.2274775rem_0.2274775rem_0.284346875rem_rgba(0,0,0,0.38)]'>
                            <div className='text-[#fff] text-[1.625rem] font-[600]'>
                                {loanPeriod} Years
                            </div>
                        </div>
                    </div>
                    <div className='mt-[2.875rem] w-[16.89rem] h-[2.84375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] rounded-[5.6875rem] shadow-[-0.25967125rem_-0.25967125rem_0.41547375rem_#FFFFFF,0.25967125rem_0.25967125rem_0.363539375rem_#B6C3C5] mx-auto flex justify-center items-center hover:shadow-[inset_-0.25967125rem_-0.25967125rem_0.41547375rem_#FFFFFF,inset_0.25967125rem_0.25967125rem_0.363539375rem_#B6C3C5] cursor-pointer'>
                        <div className='text-grade font-[600] text-[1.5rem]'>
                            Send Application
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MortgageCalculator
