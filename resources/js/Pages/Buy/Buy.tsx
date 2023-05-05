import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
// import MainLayout
import Tracer from '@/Components/Home/Cards/Common/Tracer'
import FancyCheckeComponent from '@/Components/Home/FiltersAndSearch/CoreFilters/FancyCheckeComponent'
import ShowMap from '@/Components/Home/FiltersAndSearch/CoreFilters/ShowMap'
import HeroVideo from '@/Components/HeroVideo'
import FiltersLine from '@/Components/Home/FiltersAndSearch/CoreFilters/FiltersLine'

const Buy = () => {
    return (
        <div>
            <MainLayout>
                <HeroVideo/>

                <div className='my-[1rem]'>
                    <FiltersLine/>
                </div>
                <div className='m-[10rem]'>
                    <Tracer crumbs={['1','2']}/>
                </div>
            </MainLayout>
        </div>
    )
}

export default Buy
