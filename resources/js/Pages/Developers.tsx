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
const Developers = () => {


  return (
    <div>
    <MainLayout1>
        <HeroSection1/>

        <div className='my-[1.9rem] '>
            <FiltersLineDevelopers />
        </div>
        <div className='mt-[1.125rem] w-[86.78rem] mx-auto'>
            <Tracer crumbs={[{title:'Home',link:'/'},{title:'Developers in Dubai',link:'/developers'}]}/>
        </div>

            <div className='w-[86.78rem] gap-y-[5rem]  mx-auto gap-x-[4.930625rem] flex flex-wrap  transition-all mt-[1.125rem] ' >
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                    <DeveloperCard scaleFactor='1.114' img={selectGroup} name="Select group" established='Established 2007' projectNumber='Developed projects 33+' priceFrom='Price from AED 1,290,000' button={{  }}/>
                {/* <AreaCard/> */}
                </div>



        <div className='my-[6.25rem]'>
            <Pagination itemsPerPage={20} prefix='/areas' totalCount={100}/>
        </div>
    </MainLayout1>
</div>
  )
}

export default Developers
