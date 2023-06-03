import AreaCard from '@/Components/Developer/Cards/AreaCard'
import Map from '@/Components/Developer/Map'
import Pagination from '@/Components/Developer/Pagination'
import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import MainLayout1 from '@/Layouts/MainLayout1'
import React, { useEffect, useRef, useState } from 'react'

import emar_logo from '../../assets/emar_logo.png'
import emar_logo_dev from '../../assets/emar_logo_dev.png'
import DubaiProperties from '../../assets/Dubai-Properties-Logo1.png'
import selectGroup from '../../assets/selectGroup.png'
import DeveloperCard from '@/Components/Home/Cards/DeveloperCard'
import FiltersLineDevelopers from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineDevelopers'
import FiltersLineBuy from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineBuy'
import SliderButton from '@/Components/Developer/SliderButton'
import FancyCheckeComponent from '@/Components/Home/FiltersAndSearch/CoreFilters/FancyCheckeComponent'
import BuyCard from '@/Components/Developer/Cards/BuyCard'
import OffplanCard from '@/Components/Home/Cards/New/OffplanCard'
import ProjectCard from '@/Components/Developer/Cards/ProjectCard'
import { useSelector, useDispatch } from 'react-redux'
import { RootState  } from '@/store'
import{check, unCheck, reset, checkSingle, toggle} from '../Components/Home/FiltersAndSearch/CoreFilters/CheckComponentSlice'


const Project = () => {
    const dispatch = useDispatch()

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
    const container = useRef(null)
    const map = useRef(null)


    useEffect(()=>{
        if(mapOn){
            container.current.style.width = "50vw"
            container.current.style.margin = "0rem"
            container.current.style.marginTop = "3.3025rem"
            // container.current.style.marginBottom = ""
            container.current.style.overflow = "scroll"
            container.current.style.height = "100vh"
            container.current.querySelectorAll('.buy-card').forEach((card)=>{
                // let x = window.getComputedStyle(card).getPropertyValue('width').split('px')[0]
                // let y = window.getComputedStyle(card.parentElement).getPropertyValue('width').split('px')[0]
                // alert(y)
                // let z = parseFloat(y) - parseFloat(x)
                // // alert(z)
                // let v = (z/2)/16
                // alert(v)

                    card.style.marginLeft = 'calc((50vw - 45.5625rem) / 2)'
                // card.style.marginTop = '0.3rem'
                // card.style.marginBottom = '0.3rem'
            })
            document.querySelector('#ayo').scrollIntoView()
        }
        else{
            container.current.style.width = "93rem"
            container.current.style.margin = "0 auto"
            container.current.style.marginTop = "3.3025rem"
            container.current.style.overflow = "visible"
            container.current.style.height = "max-content"
            container.current.querySelectorAll('.buy-card').forEach((card)=>{
                card.style.marginLeft = '0rem'
                card.style.marginTop = '0rem'
                card.style.marginBottom = '0rem'
            })

        }
    },[mapOn])





    useEffect(()=>{
        setMapOn(false)
        // try{

            dispatch(check({id:"showMApP",selected:''}))
        // }catch(e){

        // }
    },[])


  return (
    <div className='scroll-smooth'>
    <MainLayout1>
        <HeroSection1/>

        <div className='my-[1.9rem] '>
            <FiltersLineBuy />
        </div>
        <div className='mt-[1.125rem] w-[93rem] mx-auto flex justify-between items-center'>
            <Tracer crumbs={[{title:'Home',link:'/'},{title:'Projects',link:'/projects'}]}/>
            <div className='w-max flex gap-[1.5625rem] items-center'>
                <SliderButton options={['AED','EUR','USD']} title='Price by'/>
                <SliderButton options={['AED','EUR','USD']} title='Price by'/>
                <SliderButton options={['AED','EUR','USD']} title='Price by'/>
                <FancyCheckeComponent id='showMApP' off='d' on='o' funcMap={setMapOn} mapStatus={mapOn}/>
            </div>
        </div>

        <div className='w-full flex '>
            <div className='w-[93rem] flex flex-wrap gap-x-[1.875rem] gap-y-[5rem] mx-auto mt-[3.3025rem] transition-all' ref={container}>
                {/* <div> */}
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                    <ProjectCard cardMB='0rem' cardMT='0rem' cardML='0rem' cardMR='0rem'/>
                {/* </div> */}
            </div>

            <div className='w-0 h-0 relative top-[0rem] right-0 transition-all mt-[3.3025rem] mb-[0.3rem]' ref={map} id='ayo'>

                <div className='w-[50vw] h-[100vh] rounded-[0.9375rem] overflow-hidden transition-all' >
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

export default Project
