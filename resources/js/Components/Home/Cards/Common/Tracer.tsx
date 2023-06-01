import React from 'react'

import arrowRight from '../../../../../assets/crumbArrow.svg'
import { Link } from '@inertiajs/react'
interface Props{
    crumbs:{title:string,link:string}[]
}
const Tracer = (props:Props) => {
    return (
        <div className='flex gap-[0.625rem] w-full'>
            {
                props.crumbs.map((crumb,index) => (
                    <div className='flex gap-[0.625rem] items-center'>
                        <Link href={crumb.link} className='text-grade'>
                            {crumb.title}
                        </Link>
                        {
                            (index < props.crumbs.length-1) ? <img src={arrowRight} alt="" className='h-[0.548125rem] w-[0.27375rem]' />:''
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Tracer
