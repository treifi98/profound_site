import React, { useEffect, useRef, useState } from 'react'

import QALogo from '../../../assets/QALogo.svg'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import plusIcon from '../../../assets/plus.svg'

interface Props {
    questions:{q:string,a:string}[]
    screen?:Boolean
}
const QA = (props:Props) => {

    const icons = useRef({});
    const questions = useRef({});
    const [active,setActive] = useState(-1)

    const addIcon = (id) => (el) => {
        icons.current[id] = el;
        // alert(id)
    }
    const addQuestion = (id) => (el) => {
        questions.current[id] = el;
    }

    useEffect(() => {
        Object.values(icons.current).forEach(ref => {
        console.log(ref); // Will log each reference
        });
    }, []);
    const handleClick = (index) => {
    //     // alert(index)
    //     console.log(questions)
    let counter = 0;
    Object.values(questions.current).forEach(ref => {
        // console.log(ref); // Will log each reference
        if(counter == index){
            if(active == index){

                icons.current[counter].style.transform = 'rotate(0deg)'
                ref.style.maxHeight = '0rem'
                setActive(-1)
            }
            else{

                icons.current[counter].style.transform = 'rotate(-135deg)'
                ref.style.maxHeight = '25rem'
                console.warn(icons.current[index])
                setActive(index)
            }
        }
        else{
            icons.current[counter].style.transform = 'rotate(0deg)'
            ref.style.maxHeight = '0rem'

        }
        counter++;
    });
    //     // questions.current[index].style.height = "max-content"
    }

    return (
        <>
            {
                props.screen?(
                    <div className='w-[94.9375rem] h-max flex flex-col items-center !font-[nova]'>
                        <div className='w-full h-[3.125rem] flex items-center border-[#DCE3E3] border-[0.0625rem] rounded-[6.25rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5]'>
                            <img src={QALogo} alt="" className='ml-[1.69625rem]' />
                            <div className='h-full ml-[0.883125rem] '>
                                <InElementSeperator/>
                            </div>
                            <div className='ml-[2.054375rem] text-[1.875rem] font-[700] font-[nova] text-grade'>
                                Q&A Creek Rise tower 2 west side
                            </div>
                        </div>
                        <div className=' w-[91.1875rem] mt-[2.875rem] border-[#DCE3E3] border-[0.0625rem] h-max shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5] rounded-[0.9375rem] overflow-hidden'>
                            {
                                props.questions.map((question,index) => (

                                    <div className='w-full h-max cursor-pointer' onClick={() => handleClick(index)}>
                                        <div className='w-full h-[5rem] border-b-[#CAD4D5] border-b-[0.0625rem]'>

                                            <div className='w-[81.76625rem] h-[5rem] flex items-center justify-between ml-[1.625rem]  '>
                                                <div className='text-grade text-[1.875rem] font-[600]'>

                                                    {question.q}
                                                </div>
                                                <img src={plusIcon} alt="" className='w-[0.945rem] h-[0.945rem] transition-all duration-[0.4s]' ref={addIcon(index)}/>
                                            </div>
                                        </div>
                                        <div className='w-[81.76625rem] ml-[1.625rem] max-h-0 overflow-hidden transition-all duration-[0.4s]' ref={addQuestion(index)}>

                                            <div className='w-full mt-[2.1875rem] mb-[4.875rem] text-grade text-[1.7725rem] font-[400] font-[nova] h-max'>
                                                {question.a}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                ):
                (
                    <div className='shadow-[4px_4px_8px_0px_#BABFBF,-4px_-4px_8px_0px_#FFF]'>

                        <div className='w-[375px] h-max flex flex-col items-center !font-[nova]'>
                            <div className='w-full h-[43px] flex items-center shadow-[4px_4px_8px_0px_#BABFBF,-4px_-4px_8px_0px_#FFF] relative z-[9]'>
                                <img src={QALogo} alt="" className='ml-[6px] w-[39px] h-[39px]' />
                                <div className='h-full ml-[6px] '>
                                    <InElementSeperator width='4px'/>
                                </div>
                                <div className='ml-[6px] text-[20px] font-[700] font-[nova] text-grade'>
                                    Q&A Creek Rise tower 2 west side
                                </div>
                            </div>
                            <div className=' w-[375px] mt-[0px] h-max   overflow-hidden relative z-[1]'>
                                {
                                    props.questions.map((question,index) => (

                                        <div className='w-full h-max cursor-pointer' onClick={() => handleClick(index)}>
                                            <div className='w-full h-max py-[9px] border-b-[#CAD4D5] border-b-[0.0625rem]'>

                                                <div className='w-[314.72px] h-max py-[9px] flex items-center justify-between mx-auto  '>
                                                    <div className='text-grade text-[15px] font-[600]'>

                                                        {question.q}
                                                    </div>
                                                    <img src={plusIcon} alt="" className='w-[12px] h-[12px] transition-all duration-[0.4s]' ref={addIcon(index)}/>
                                                </div>
                                            </div>
                                            <div className='w-[314.72px] mx-auto max-h-0 overflow-hidden transition-all duration-[0.4s]' ref={addQuestion(index)}>

                                                <div className='w-full mt-[2.1875rem] mb-[30px] text-grade text-[14px] font-[400] font-[nova] h-max'>
                                                    {question.a}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default QA
