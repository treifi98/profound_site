import React from 'react'

import arrowRight from '../../../../../assets/crumbArrow.svg'
import { Link } from '@inertiajs/react'
interface Props{
    crumbs:{title:string,link:string}[]
}
const Tracer = (props:Props) => {
    return (
        <div className='flex gap-[0.625rem]'>
            {
                props.crumbs.map((crumb,index) => (
                    <div className='flex gap-[0.625rem]'>
                        <Link href={crumb.link} className='text-grade'>
                            {crumb.title}
                        </Link>
                        {
                            (index < props.crumbs.length) ? <img src={arrowRight} alt="" />:''
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Tracer
