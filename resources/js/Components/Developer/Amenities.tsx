import React, { useEffect, useRef, useState } from 'react'


import mapIcon from '../../../assets/map_icon.svg'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'

interface Props {
    screen?:boolean
}
const Amenities = (props:Props) => {

    const [amenityDisplay,setAmenityDidplay] = useState(1)
    const [z,setZ] = useState(2)
    const handleClick = (display) => {
        setAmenityDidplay(display)
    }
    const display1 = useRef(null)
    const display2 = useRef(null)
    const display3 = useRef(null)

    useEffect(()=>{
        if(amenityDisplay == 1){
            display1.current.style.zIndex = z
            display1.current.style.opacity = 1
            display2.current.style.opacity = 0
            display3.current.style.opacity = 0
            setZ((prev)=>prev++)
        }
        else if(amenityDisplay == 2){
            display2.current.style.zIndex = z
            display2.current.style.opacity = 1
            display1.current.style.opacity = 0
            display3.current.style.opacity = 0
            setZ((prev)=>prev++)
        }
        else if(amenityDisplay == 3){
            display3.current.style.zIndex = z
            display3.current.style.opacity = 1
            display2.current.style.opacity = 0
            display1.current.style.opacity = 0
            setZ((prev)=>prev++)
        }

    },[amenityDisplay])
    return (

        <>
            {
                props.screen?(

                    <div className='w-[91.25rem] h-[38.125rem] rounded-[0.98125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_3.14333px_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] overflow-hidden '>
                        <div className='w-full h-[3.75rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center'>
                            <img src={mapIcon} alt="" className='w-[2.4375rem] h-[2.4375rem] ml-[1rem]' />
                            <div className='h-full ml-[1.125rem]'>
                                <InElementSeperator width='0.5rem'/>
                            </div>
                            <div className='text-grade ml-[1.125rem] font-[600] text-[1.625rem]'>
                                Amenities
                            </div>
                            <div className='flex ml-[14.4375rem] h-full items-center gap-[1.125rem] w-[36rem]'>
                                <div className='w-[11.25rem] h-[2.25rem] rounded-[4.5rem_0rem_0rem_4.5rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.225rem_-0.225rem_0.36rem_#FFFFFF,0.225rem_0.225rem_0.315rem_#B6C3C5] hover:shadow-[inset_-0.225rem_-0.225rem_0.36rem_#FFFFFF,inset_0.225rem_0.225rem_0.315rem_#B6C3C5] cursor-pointer flex justify-center items-center'>
                                    <div className='text-grade text-[1.25rem] font-[600]' onClick={()=>handleClick(1)}>
                                        Property Feature
                                    </div>
                                </div>
                                <div className='w-[11.25rem] h-[2.25rem] rounded-[0.45rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.225rem_-0.225rem_0.36rem_#FFFFFF,0.225rem_0.225rem_0.315rem_#B6C3C5] hover:shadow-[inset_-0.225rem_-0.225rem_0.36rem_#FFFFFF,inset_0.225rem_0.225rem_0.315rem_#B6C3C5] cursor-pointer flex justify-center items-center'>
                                    <div className='text-grade text-[1.25rem] font-[600]' onClick={()=>handleClick(2)}>
                                        Tower Feature
                                    </div>
                                </div>
                                <div className='w-[11.25rem] h-[2.25rem] rounded-[0rem_4.5rem_4.5rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.225rem_-0.225rem_0.36rem_#FFFFFF,0.225rem_0.225rem_0.315rem_#B6C3C5] hover:shadow-[inset_-0.225rem_-0.225rem_0.36rem_#FFFFFF,inset_0.225rem_0.225rem_0.315rem_#B6C3C5] cursor-pointer flex justify-center items-center'>
                                    <div className='text-grade text-[1.25rem] font-[600]' onClick={()=>handleClick(3)}>
                                        Area Feature
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='w-[82.125rem] h-[29.6825rem] mx-auto mt-[2.3125rem] flex flex-wrap flex-col gap-y-[2.875rem] items-center justify-start gap-x-[9rem] ml-[4.5625rem] absolute transition-all duration-[0.2s]' ref={display1}>

                                <div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes
                                            </div>
                                        </div>
                                    </div>


                                </div>

                        </div>

                            <div className='w-[82.125rem] h-[29.6825rem] mx-auto mt-[2.3125rem] flex flex-wrap flex-col gap-y-[2.875rem] items-center justify-start gap-x-[9rem] ml-[4.5625rem] absolute transition-all duration-[0.2s]' ref={display2} >

                                <div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes2
                                            </div>
                                        </div>
                                    </div>


                                </div>

                        </div>
                            <div className='w-[82.125rem] h-[29.6825rem] mx-auto mt-[2.3125rem] flex flex-wrap flex-col gap-y-[2.875rem] items-center justify-start gap-x-[9rem] ml-[4.5625rem] absolute transition-all duration-[0.2s]' ref={display3} >

                                <div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes 3
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes 3
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes 3
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes 3
                                            </div>
                                        </div>
                                    </div>


                                </div><div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes 3
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes 3
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes 3
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div className='flex items-center relative w-[21.375rem] h-[5.239375rem]' >
                        {/* place holder */}
                                    <div className='opacity-0 w-[2.625rem] h-full'>
                                    </div>
                                    {/* place holder end */}
                                    <div className='rounded-full border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] absolute w-[5.239375rem] h-[5.239375rem] shadow-[inset_-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,inset_0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        {/* <img src={props.img} alt="" style={{ width:props.imgWidth?props.imgWidth:'2.875rem',height:props.imgHeight?props.imgHeight:'2.8125rem',marginTop:props.imgMt?props.imgMt:'1.25rem',marginLeft:props.imgMl?props.imgMl:'1.1875rem' }}/> */}
                                    </div>

                                    <div className='rounded-[4.37184375rem] border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] flex  items-center w-[18.75rem] h-[2.375rem] shadow-[-0.1996225rem_-0.1996225rem_0.31939625rem_#FFFFFF,0.1996225rem_0.1996225rem_0.279471875rem_#B6C3C5]'>
                                        <div className='flex justify-center items-center w-[16.135625rem] ml-[2.614rem]'>
                                            <div className='text-center text-grade text-[#E6EDED] text-[1.25rem]'>
                                                Built in wardrobes 3
                                            </div>
                                        </div>
                                    </div>


                                </div>

                        </div>
                    </div>
                ):
                (
                    <div className='h-max w-[375px] shadow-[4px_4px_8px_0px_#BABFBF,-4px_-4px_8px_0px_#FFF]'>
                        <div className='w-[375px] h-[2.625rem] flex justify-center items-center  shadow-[-2.89237px_-2.89237px_4.6278px_#FFFFFF,_2.89237px_2.89237px_4.04932px_#B6C3C5] '>
                            <div className='w-[375px] h-[2.625rem] flex justify-between items-center'>
                                <div className='flex justify-evenly h-[2.625rem] items-center '>

                                    <img src={mapIcon} alt="" className='w-[25.75px] h-[25.75px] object-contain ml-[9px]'/>
                                    <div className='h-[2.625rem] ml-[9px] w-[0.25rem]' >
                                        <InElementSeperator width='0.25rem' height='2.625rem'/>
                                    </div>
                                    <div className='text-[1.125rem] font-[600] text-grade ml-[0.4rem]'>
                                        Emaar Areas in Dubai
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='h-[0.25rem]  except'>
                            <InElementSeperator width='100%' />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Amenities


