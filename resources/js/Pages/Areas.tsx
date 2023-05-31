import HeroSection1 from '@/Components/HeroSection1'
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FiltersLineAreas from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLineAreas'
import MainLayout1 from '@/Layouts/MainLayout1'
import React from 'react'

const Areas = () => {
  return (
    <div>
    <MainLayout1>
        <HeroSection1/>

        <div className='my-[1.9rem]'>
            <FiltersLineAreas/>
        </div>
        <div className='mt-[1.125rem] ml-[2.5rem]'>
            <Tracer crumbs={[{title:'Home',link:'/'},{title:'Areas in Dubai',link:'/areas'}]}/>
        </div>
    </MainLayout1>
</div>
  )
}

export default Areas
