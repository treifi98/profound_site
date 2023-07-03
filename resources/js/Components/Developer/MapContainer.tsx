import React, { useEffect, useState } from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import Map from './Map'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ZoomRange from './ZoomRange';
mapboxgl.accessToken = 'pk.eyJ1IjoidHJldmk5OCIsImEiOiJjbDNwcWhyOWgwMnppM2twN3JicG5wMmY2In0.m_eFeF9ZP_4xkJA9e5N05Q';


import diningLogo from '../../../assets/DiningLogo.svg'
import shoppingIcon from '../../../assets/shoppingIcon.svg'
import transportationIcon from '../../../assets/transportationIcon.svg'
import schoolIcon from '../../../assets/schoolIcon.svg'
import HospitalIcon from '../../../assets/HospitalIcon.svg'
import Eicon from '../../../assets/Eicon.svg'
import activitiesIcon from '../../../assets/activitiesIcon.svg'

interface Props{
    screen?:Boolean
}
const MapContainer = (props:Props) => {

    const [changes,setChanges] = useState(-1)
    const [rchanges,setRChanges] = useState(-1)
    const [zoom,setZoom] = useState(-14)

    const [points,setPoints] = useState([
        {
            point: [55.2667940551224,25.18752435627845],
            bg:'#002d31'

        },
        {
            point: [55.20497582813278,25.039942764298452],
            bg:'#002d31'

        }
    ])
    useEffect(()=>{
        setPoints(
            [
                {
                    point: [55.2667940551224,25.18752435627845],
                    bg:'#002d31'

                },
                {
                    point: [55.20497582813278,25.039942764298452],
                    bg:'#002d31'

                }
            ]
        )
    },[])
    // const [changes, setChanges] = useState(-1)
    const handleMouseEnter = (i) => {
        setChanges(i)
        setRChanges(-1)

        // alert ('s'+i)
    }
    const handleMouseLeave = (i) => {
        setRChanges(i)
        setChanges(-1)

    }





  return (

    <>
        {
            props.screen?
            (
                <div className='w-[91.25rem] h-[38.125rem] rounded-[0.98125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] overflow-hidden '>
                    <div className='w-full h-[4rem]  border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] '>
                        <div className='w-[89.875rem] h-full flex items-center justify-start gap-[1.5625rem] mx-auto'>

                            <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer'>
                                <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] '>
                                    <img src={diningLogo} alt="" className='w-[1.828125rem] h-[1.7675rem] object-contain ml-[0.670625rem] mt-[0.21rem]' />
                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.3125rem'/>
                                </div>
                                <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[1.25rem]'>
                                        Dining
                                    </div>
                                </div>
                            </div>
                            <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer'>
                                <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                                    <img src={shoppingIcon} alt="" className='w-[1.49375rem] h-[1.521875rem] object-contain ml-[0.971875rem] mt-[0.346875rem]' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.3125rem'/>
                                </div>
                                <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[1.25rem]'>
                                        Shopping
                                    </div>
                                </div>
                            </div>
                            <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer'>
                                <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                                    <img src={transportationIcon} alt="" className='w-[1.88625rem] h-[1.890625rem] object-contain ml-[0.85125rem] mt-[0.22625rem]' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.3125rem'/>
                                </div>
                                <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[1.125rem]'>
                                        Transportation
                                    </div>
                                </div>
                            </div>
                            <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer'>
                                <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                                    <img src={schoolIcon} alt="" className='w-[2rem] h-[2rem] object-contain ml-[0.8125rem] mt-[0.125rem] ' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.3125rem'/>
                                </div>
                                <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[1.25rem]'>
                                        Schools
                                    </div>
                                </div>
                            </div>
                            <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer'>
                                <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                                    <img src={HospitalIcon} alt="" className='w-[1.9375rem] h-[1.9375rem] object-contain ml-[0.875rem] mt-[0.1875rem] ' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.3125rem'/>
                                </div>
                                <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[1.25rem]'>
                                        Hospitals
                                    </div>
                                </div>
                            </div>
                            <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer'>
                                <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>

                                    <img src={Eicon} alt="" className='w-[1.78125rem] h-[1.78125rem] object-contain ml-[0.6875rem] mt-[0.25rem] ' />
                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.3125rem'/>
                                </div>
                                <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[1.125rem]'>
                                        Entertainment
                                    </div>
                                </div>
                            </div>
                            <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer'>
                                <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                                    <img src={activitiesIcon} alt="" className='w-[2.1875rem] h-[1.625rem] object-contain ml-[0.6875rem] mt-[0.25rem] ' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.3125rem'/>
                                </div>
                                <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[1.25rem]'>
                                        Activities
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[88.3125rem] flex mx-auto h-[34.1875rem] items-center'>
                        <div className='w-[36.375rem] max-h-[30rem] h-min  flex flex-wrap gap-[2.5rem] justify-start items-start'>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Elite 8
                                </div>
                            </div>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Elite 8
                                </div>
                            </div>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Elite 8
                                </div>
                            </div>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Elite 8
                                </div>
                            </div>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[1.125rem]'>
                                    Elite 8
                                </div>
                            </div>

                        </div>
                        <div className='w-[1.311875rem] h-[34.1875rem] ml-[1.875rem] mr-[1.875rem]'>
                            <ZoomRange
                                rtl={false}
                                func={setZoom}
                            />
                        </div>
                        <div className='h-[31.619375rem] w-[46.8675rem] rounded-[0.98125rem] overflow-hidden '>
                            <Map
                                points={points}
                                changes={changes}
                                rchanges={rchanges}
                                zoom={zoom}
                                isZoom={false}
                            />

                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className='w-[375px] h-max shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] overflow-hidden mobil-comp'>
                    <div className='w-[375px] h-[125px]   shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center'>
                        <div className='w-[349.62px] h-[101px] flex items-center gap-y-[0px] gap-x-[0.55rem] mx-auto flex-wrap justify-between my-0 py-0'>

                            <div className='w-[6.53375rem] h-[1.278125rem] flex group cursor-pointer'>
                                <div className='w-[1.6875rem] h-full rounded-[3.2428125rem_0rem_0rem_3.2428125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,-2.5942280292510986px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] overflow-hidden '>
                                    <img src={diningLogo} alt="" className='w-[1.03875rem] h-[1.004375rem] object-contain ml-[0.440625rem] mt-[0.1rem]' />
                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.17756rem'/>
                                </div>
                                <div className='w-[4.6875rem]  h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_3.2428125rem_3.2428125rem_0rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,0px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[0.71019rem] except'>
                                        Dining
                                    </div>
                                </div>
                            </div>
                            <div className='w-[6.53375rem] h-[1.278125rem] flex group cursor-pointer'>
                                <div className='w-[1.6875rem] h-full rounded-[3.2428125rem_0rem_0rem_3.2428125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,-2.5942280292510986px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] overflow-hidden'>
                                    <img src={shoppingIcon} alt="" className='w-[0.8875rem] h-[0.90375rem] object-contain ml-[0.471875rem] mt-[0.146875rem]' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.17756rem'/>
                                </div>
                                <div className='w-[4.6875rem]  h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_3.2428125rem_3.2428125rem_0rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,0px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[0.71019rem] except'>
                                        Shopping
                                    </div>
                                </div>
                            </div>

                            <div className='w-[6.53375rem] h-[1.278125rem] flex group cursor-pointer'>
                                <div className='w-[1.6875rem] h-full rounded-[3.2428125rem_0rem_0rem_3.2428125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,-2.5942280292510986px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] overflow-hidden'>
                                    <img src={schoolIcon} alt="" className='w-[1.13625rem] h-[1.13625rem] object-contain ml-[0.3125rem] mt-[0.025rem] ' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.17756rem'/>
                                </div>
                                <div className='w-[4.6875rem]  h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_3.2428125rem_3.2428125rem_0rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,0px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[0.71019rem] except'>
                                        Schools
                                    </div>
                                </div>
                            </div>
                            <div className='w-[6.53375rem] h-[1.278125rem] flex group cursor-pointer'>
                                <div className='w-[1.6875rem] h-full rounded-[3.2428125rem_0rem_0rem_3.2428125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,-2.5942280292510986px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] overflow-hidden'>
                                    <img src={HospitalIcon} alt="" className='w-[1.100625rem] h-[1.100625rem] object-contain ml-[0.425rem] mt-[0.0575rem] ' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.17756rem'/>
                                </div>
                                <div className='w-[4.6875rem]  h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_3.2428125rem_3.2428125rem_0rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,0px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[0.71019rem] except'>
                                        Hospitals
                                    </div>
                                </div>
                            </div>

                            <div className='w-[6.53375rem] h-[1.278125rem] flex group cursor-pointer'>
                                <div className='w-[1.6875rem] h-full rounded-[3.2428125rem_0rem_0rem_3.2428125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,-2.5942280292510986px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] overflow-hidden'>
                                    <img src={activitiesIcon} alt="" className='w-[1.24281rem] h-[0.92325rem] object-contain ml-[0.2875rem] mt-[0.1rem] ' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.17756rem'/>
                                </div>
                                <div className='w-[4.6875rem]  h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_3.2428125rem_3.2428125rem_0rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,0px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[0.71019rem] except'>
                                        Activities
                                    </div>
                                </div>
                            </div>
                            <div className='w-[6.53375rem] h-[1.278125rem] flex group cursor-pointer'>
                                <div className='w-[1.6875rem] h-full rounded-[3.2428125rem_0rem_0rem_3.2428125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,-2.5942280292510986px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] overflow-hidden'>
                                    <img src={transportationIcon} alt="" className='w-[1.071875rem] h-[1.071875rem] object-contain ml-[0.45125rem] mt-[0.12625rem]' />

                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.17756rem'/>
                                </div>
                                <div className='w-[4.6875rem]  h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_3.2428125rem_3.2428125rem_0rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,0px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[0.63919rem]'>
                                        Transportation
                                    </div>
                                </div>
                            </div>
                            <div className='w-[6.53375rem] h-[1.278125rem] flex group cursor-pointer'>
                                <div className='w-[1.6875rem] h-full rounded-[3.2428125rem_0rem_0rem_3.2428125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,-2.5942280292510986px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] overflow-hidden'>

                                    <img src={Eicon} alt="" className='w-[1.0125rem] h-[1.0125rem] object-contain ml-[0.3875rem] mt-[0.15rem] ' />
                                </div>
                                <div className='h-[1.278125rem]'>
                                    <InElementSeperator shadow='inset -1.14px -1.14px 1.14px #fff ,inset 1.14px 1.14px 1.14px #B6C3C5' width='0.17756rem'/>
                                </div>
                                <div className='w-[4.6875rem]  h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_3.2428125rem_3.2428125rem_0rem] shadow-[2.5942280292510986px_2.5942280292510986px_3.6319191455841064px_0px_#B6C3C5,0px_-2.5942280292510986px_4.150764465332031px_0px_#FFF] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                                    <div className='text-grade font-[600] text-[0.63919rem]'>
                                        Entertainment
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[335.11px] flex flex-col mx-auto h-max items-center '>
                        <div className='w-[335.11px] max-h-[30rem] h-min  flex flex-wrap justify-between gap-y-[1.13rem] items-start py-[1.5rem]'>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Elite 8
                                </div>
                            </div>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Elite 8
                                </div>
                            </div>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Elite 8
                                </div>
                            </div>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Elite 8
                                </div>
                            </div>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Binary Tower
                                </div>
                            </div>
                            <div className='w-[9.69106rem] h-[2.28869rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                                <div className='text-grade text-[0.6875rem]'>
                                    Elite 8
                                </div>
                            </div>

                        </div>
                        <div className='w-[335.11px] h-[28.7395rem] mx-auto rounded-[0.78125rem] overflow-hidden mb-[1.5rem]'>
                            <Map
                                points={points}
                                changes={changes}
                                rchanges={rchanges}
                                zoom={zoom}
                                isZoom={false}
                            />

                        </div>
                    </div>
                </div>
            )
        }
    </>

  )
}

export default MapContainer
