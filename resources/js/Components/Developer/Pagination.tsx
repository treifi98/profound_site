import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'

import arow from '../../../assets/arrowRightPill.svg'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator';

interface Props{
    itemsPerPage:number,
    totalCount:number,
    prefix:string
    // page:number,

}
const Pagination = (props:Props) => {
    const [page,setPage] = useState(1)
    const [elemnt,setElmnt] = useState(<div></div>)
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        setPage(parseInt(urlParams.get('page')))
        // alert(paramValue)


    },[])
    // useEffect(()=>{
    //     let elmnt = null

    //     setElmnt(elmnt)


    // },[page])
  return (
    <div className='w-max h-[2.25rem] mx-auto flex gap-[0.625rem]'>
        {
            (page == 1) ?(

                <div className='w-[7.9375rem] h-full flex items-center rounded-[6.25rem_0.1875rem_0.1875rem_6.25rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5] justify-center gap-[0.5rem] cursor-not-allowed  opacity-[0.7]'>
                    <img src={arow} alt="" className='rotate-[180deg] h-[0.673125rem] w-[0.33625rem] object-cover '/>
                    <div className='h-full'>

                        <InElementSeperator width='0.3125rem'/>
                    </div>
                    <div className='text-[1.125rem] text-grade'>
                        Previous
                    </div>
                </div>
            ):(
                <Link href={`${props.prefix}?page=${page-1}`}>
                    <div className='w-[7.9375rem] h-full flex items-center rounded-[6.25rem_0.1875rem_0.1875rem_6.25rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5] justify-center gap-[0.5rem]'>
                        <img src={arow} alt="" className='rotate-[180deg] h-[0.673125rem] w-[0.33625rem] object-cover '/>
                        <div className='h-full'>

                            <InElementSeperator width='0.3125rem'/>
                        </div>
                        <div className='text-[1.125rem] text-grade'>
                            Previous
                        </div>
                    </div>
                </Link>
            )

        }
        {
            (page <= 6)?
               [1,2,3,4,5,6,7].map((e,index)=>(
                    (index == 6)?(
                        <>

                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                ...
                                </div>
                            </div>
                            <Link  href={`${props.prefix}?page=${props.totalCount-1}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {props.totalCount-1}
                                </div>
                            </div>
                        </Link>   <Link  href={`${props.prefix}?page=${props.totalCount}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {props.totalCount}
                                </div>
                            </div>
                        </Link>
                        </>

                    ):(

                        <Link  href={`${props.prefix}?page=${index+1}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {index+1}
                                </div>
                            </div>
                        </Link>
                    )


                )
               )
            :(<></>)

        }
        {
            (page >= props.totalCount-4)?(
            //    [1,2,3,4,5,6,7].map((e,index)=>(

                    <>
                        <Link  href={`${props.prefix}?page=${1}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {1}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${2}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {2}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${3}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {3}
                                </div>
                            </div>
                        </Link>
                        <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                            <div className='text-grade text-[1.25rem]'>
                                ...
                            </div>
                        </div>
                        <Link  href={`${props.prefix}?page=${props.totalCount-4}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {props.totalCount-4}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${props.totalCount-3}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {props.totalCount-3}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${props.totalCount-2}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {props.totalCount-2}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${props.totalCount-1}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {props.totalCount-1}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${props.totalCount}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {props.totalCount}
                                </div>
                            </div>
                        </Link>
                    </>

                // )
               )
            :(<></>)

        }

{
            (page < props.totalCount-4 && page > 6)?
                (
                    <>

                        <Link  href={`${props.prefix}?page=${1}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {1}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${2}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {2}
                                </div>
                            </div>
                        </Link>
                        <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                            <div className='text-grade text-[1.25rem]'>
                                ...
                            </div>
                        </div>
                        <Link  href={`${props.prefix}?page=${page-1}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {page-1}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${page}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {page}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${page+1}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {page+1}
                                </div>
                            </div>
                        </Link>
                        <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                            <div className='text-grade text-[1.25rem]'>
                                ...
                            </div>
                        </div>
                        <Link  href={`${props.prefix}?page=${props.totalCount-1}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {props.totalCount-1}
                                </div>
                            </div>
                        </Link>
                        <Link  href={`${props.prefix}?page=${props.totalCount}`}>
                            <div className='rounded-[0.135625rem] w-[3.125rem] h-full flex justify-center items-center border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5]'>
                                <div className='text-grade text-[1.25rem]'>
                                    {props.totalCount}
                                </div>
                            </div>
                        </Link>
                    </>
                )


            :(<></>)

        }

{
            (page == props.totalCount) ?(

                <div className='w-[7.9375rem] h-full flex items-center rounded-[0.1875rem_6.25rem_6.25rem_0.1875rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5] justify-center gap-[0.5rem] cursor-not-allowed  opacity-[0.7]'>
                    <div className='text-[1.125rem] text-grade'>
                        Next
                    </div>
                    <div className='h-full'>

                        <InElementSeperator width='0.3125rem'/>
                    </div>
                    <img src={arow} alt="" className=' h-[0.673125rem] w-[0.33625rem] object-cover '/>
                </div>
            ):(
                <Link href={`${props.prefix}?page=${page+1}`}>
                    <div className='w-[7.9375rem] h-full flex items-center rounded-[0.1875rem_6.25rem_6.25rem_0.1875rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.204044375rem_-0.204044375rem_0.27205875rem_#FFFFFF,0.204044375rem_0.204044375rem_0.27205875rem_#B6C3C5] justify-center gap-[1.1875rem]'>
                        <div className='text-[1.125rem] text-grade'>
                            Next
                        </div>
                        <div className='h-full'>

                            <InElementSeperator width='0.3125rem'/>
                        </div>
                        <img src={arow} alt="" className=' h-[0.673125rem] w-[0.33625rem] object-cover '/>
                    </div>
                </Link>
            )

        }
    </div>
  )
}

export default Pagination
