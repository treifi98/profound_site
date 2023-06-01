import AreaCard from '@/Components/Developer/Cards/AreaCard'
import Map from '@/Components/Developer/Map'
import Pagination from '@/Components/Developer/Pagination'
import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import MainLayout1 from '@/Layouts/MainLayout1'
import React, { useEffect, useRef, useState } from 'react'

const Areas = () => {

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
    const [mapOn,setMapOn] = useState(false)
    const handleMap = () => {

    }








    useEffect(()=>{
        // setMapOn(false)
    },[])

    useEffect(()=>{
        if(mapOn){
            container.current.style.width = '49.0625rem'
            container.current.style.margin = '0rem'
            // container.current.style.marginRight = '2rem'
            // document.querySelector('.area-card')
            // container.current.style.marginLeft = '2.8125rem'
            map.current.style.width = '46.4375rem'
            // map.current.style.marginLeft = '0.125rem'
            container.current.style.height = '100vh'
            container.current.style.overflowY = 'scroll'
            document.querySelectorAll('.area-card').forEach((elmnt)=>{
                elmnt.style.marginLeft='2.8125rem'
                elmnt.style.marginRight='2.8125rem'
                elmnt.style.marginTop='1rem'
                elmnt.style.marginBottim='1rem'
            })
            document.querySelector('#ayo').scrollIntoView()


            // holder.current.style.width = '40.5rem'
            // map.current.style.marginLeft = '3.125rem'
            // document.querySelector('#map-container').style.width = '100%'
            // setTimeout(() => {
                //     document.querySelector('#map-container').style.transform = 'translateZ(0)'
                //     map.current.style.transform = 'translateZ(0)'
                // }, 1);

            }
            else{
                // container.current.style.width = '49.0625rem'
            container.current.style.overflowY = 'hidden'
            container.current.style.width = '100%'
            container.current.style.height = '223.1rem'
            map.current.style.width = '0rem'
            map.current.style.marginLeft = '0rem'
            document.querySelectorAll('.area-card').forEach((elmnt,key)=>{
                if(key%2==0){
                    // alert(key)
                    elmnt.style.marginRight='3.025rem'
                    elmnt.style.marginLeft='2.2125rem'
                }
                else{

                    elmnt.style.marginLeft='0rem'
                    elmnt.style.marginright='0rem'
                }
                elmnt.style.marginTop='2rem'
                elmnt.style.marginBottim='1rem'
            })


            // map.current.style.marginLeft = '0rem'

        }
    },[mapOn])
    const container = useRef(null)
    const map = useRef(null)
    const holder = useRef(null)
  return (
    <div>
    <MainLayout1>
        <HeroSection1/>

        <div className='my-[1.9rem]'>
            <FiltersLineAreas funcMap={setMapOn} mapStatus={mapOn}/>
        </div>
        <div className='mt-[1.125rem] ml-[2.5rem]'>
            <Tracer crumbs={[{title:'Home',link:'/'},{title:'Areas in Dubai',link:'/areas'}]}/>
        </div>

        <div className='w-full flex mt-[1.125rem] relative' >
            <div className='w-full h-[222.5rem]  flex flex-wrap   gap-y-[5.5625rem]  transition-all  ' ref={container}>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                {/* <AreaCard/> */}
                </div>
                <div className='w-0 h-0 absolute top-[1rem] right-0' ref={map} id='ayo'>

                    <div className='w-[46.4375rem] transition-all h-[100vh] rounded-[0.9375rem] overflow-hidden' >
                        <Map
                            points={points}
                            // changes={changes}
                            // rchanges={rchanges}
                            // zoom={zoom}
                            isZoom={true}
                        />
                    </div>
                </div>
            </div>


        <div className='my-[6.25rem]'>
            <Pagination itemsPerPage={20} prefix='/areas' totalCount={100}/>
        </div>
    </MainLayout1>
</div>
  )
}

export default Areas
