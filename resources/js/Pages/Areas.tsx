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
        setMapOn(false)
    },[])

    useEffect(()=>{
        if(mapOn){
            container.current.style.width = '43.4375rem'
            container.current.style.margin = '0rem'
            map.current.style.width = '43.4375rem'
            // holder.current.style.width = '40.5rem'
            container.current.style.height = 'max-content'
            // map.current.style.marginLeft = '3.125rem'
            // document.querySelector('#map-container').style.width = '100%'
            // setTimeout(() => {
            //     document.querySelector('#map-container').style.transform = 'translateZ(0)'
            //     map.current.style.transform = 'translateZ(0)'
            // }, 1);

        }
        else{
            container.current.style.width = '90rem'
            container.current.style.heifht = '222.5rem'
            map.current.style.width = '0rem'
            holder.current.style.width = '0rem'
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

        <div className='w-[90rem] relative mx-auto h-full  flex justify-between items-start mt-[1.0625rem] '>

            <div className='w-[90rem]  flex flex-wrap gap-x-[3.125rem]  gap-y-[5rem]  transition-all' ref={container}>
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
                <AreaCard/>
            </div>
            <div className='relative w-[0rem] h-[1rem] z-[1] transition-all' ref={holder}>

            </div>
            <div className='transition-all top-[6.1975rem] sticky right-[-20rem] h-[calc(100vh-6.1975rem)] overflow-hidden rounded-lg  z-[2]' ref={map}>

                <div className='w-[43.4375rem] transition-all h-[calc(100vh-6.1975rem)] ' >
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
