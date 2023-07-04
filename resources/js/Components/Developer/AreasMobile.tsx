import React from 'react'
import InElementSeperator from '../Home/Cards/Common/InElementSeperator'
import ViewAllButtonDynamic from '../Home/Cards/Common/ViewAllButtonDynamic'
import NewTag from '../Home/Cards/Common/NewTag'
import NewCardImage from '../Home/Cards/Common/NewCardImage'
import marinaImage3 from '../../../assets/marina3.png'
import icon from '../../../assets/mapbarmobile.svg'


const AreasMobile = () => {
  return (
    <div className='w-[375px] h-[67.425rem]  shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] mt-[0rem] mb-[1rem] mobil-comp'>
        <div className='w-[375px] h-[2.625rem] flex justify-center items-center  shadow-[-2.89237px_-2.89237px_4.6278px_#FFFFFF,_2.89237px_2.89237px_4.04932px_#B6C3C5] '>
            <div className='w-[375px] h-[2.625rem] flex justify-between items-center'>
                <div className='flex justify-evenly h-[2.625rem] items-center '>

                    <img src={icon} alt="" className='w-[3.5rem] h-[2.625rem] object-cover '/>
                    <div className='h-[2.625rem] ml-[0.1rem] w-[0.25rem]' >
                        <InElementSeperator width='0.25rem' height='2.625rem'/>
                    </div>
                    <div className='text-[1.125rem] font-[600] text-grade ml-[0.4rem]'>
                        Emaar Areas in Dubai
                    </div>
                </div>
                <div className='ml-auto mr-[0.5rem] except'>
                    <ViewAllButtonDynamic text='Show all Areas' w='6.725rem' h='1.5rem' textSize='0.75rem' imgML='-0.2rem' ml='auto' wrapperWidth='88%' img_width='0.6825rem' imgHeight='0.523125rem'/>
                </div>
            </div>

            </div>

            <div className='h-[0.25rem]  except'>
                <InElementSeperator width='100%' />
            </div>

                <div className='w-[375px] h-[7rem] rounded-[0rem_0rem_0.625rem_0.625rem] shadow-[-4.56609px_-4.56609px_7.30575px_#FFFFFF,_4.56609px_4.56609px_6.39253px_#B6C3C5] flex justify-center items-center'>
                    <div className='w-[20.54375rem] mx-auto flex justify-between items-center flex-wrap gap-y-[1.375rem] except'>

                            <div style={{ width:'9.584375rem',height:'1.641875rem' }}>
                                <NewTag text='Apartments for sale' textSize='0.844375' textWeight='400'/>

                            </div>
                            <div style={{ width:'9.584375rem',height:'1.641875rem' }}>
                                <NewTag text='Villas for sale ' textSize='0.844375' textWeight='400'/>

                            </div>
                            <div style={{ width:'9.584375rem',height:'1.641875rem' }}>
                                <NewTag text='Town houses for sale' textSize='0.844375' textWeight='400'/>

                            </div>
                            <div style={{ width:'9.584375rem',height:'1.641875rem' }}>
                                <NewTag text='Villas for sale ' textSize='0.844375' textWeight='400'/>

                            </div>
                        </div>
                </div>
            <div className='w-[375px] mx-auto h-[57rem] overflow-y-scroll'>
                <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
                    <div className='w-[20rem] h-[11.030625rem] relative'>
                        {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                        <NewCardImage src={marinaImage3} rounded='0.625' width='20rem' height='11.030625rem'/>
                        <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                            <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                                Dubai Marina
                            </div>
                            <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                                Price start at 890,000 AED
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
                    <div className='w-[20rem] h-[11.030625rem] relative'>
                        {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                        <NewCardImage src={marinaImage3} rounded='0.625' width='20rem' height='11.030625rem'/>
                        <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                            <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                                Dubai Marina
                            </div>
                            <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                                Price start at 890,000 AED
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
                    <div className='w-[20rem] h-[11.030625rem] relative'>
                        {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                        <NewCardImage src={marinaImage3} rounded='0.625' width='20rem' height='11.030625rem'/>
                        <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                            <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                                Dubai Marina
                            </div>
                            <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                                Price start at 890,000 AED
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
                    <div className='w-[20rem] h-[11.030625rem] relative'>
                        {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                        <NewCardImage src={marinaImage3} rounded='0.625' width='20rem' height='11.030625rem'/>
                        <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                            <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                                Dubai Marina
                            </div>
                            <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                                Price start at 890,000 AED
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
                    <div className='w-[20rem] h-[11.030625rem] relative'>
                        {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                        <NewCardImage src={marinaImage3} rounded='0.625' width='20rem' height='11.030625rem'/>
                        <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                            <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                                Dubai Marina
                            </div>
                            <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                                Price start at 890,000 AED
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[21.623125rem] h-[12.5625rem] mx-auto border-[#DCE3E3] border-[0.0625rem] shadow-[-4.02516px_-4.02516px_8.05032px_2.01258px_#FFFFFF,_4.02516px_4.02516px_8.05032px_#BABFBF] rounded-[-4.02516px -4.02516px 8.05032px 2.01258px #FFFFFF, 4.02516px 4.02516px 8.05032px #BABFBFrem] mt-[1.375rem] flex justify-center items-center rounded-[0.625rem]'>
                    <div className='w-[20rem] h-[11.030625rem] relative'>
                        {/* <img src={marinaImage3} alt="" className='w-full h-full object-cover object-center rounded-[0.625rem]'/> */}
                        <NewCardImage src={marinaImage3} rounded='0.625' width='20rem' height='11.030625rem'/>
                        <div className='min-w-[15.4375rem] h-[2.8125rem] rounded-[0rem_1.59375rem_1.59375rem_0.9375rem] absolute bottom-0 left-0 bg-[#11252480] pl-[0.4875rem]' >
                            <div className='text-[1rem] font-[700] text-[#fff] h-[1.8125rem] mt-[0.3rem]'>
                                Dubai Marina
                            </div>
                            <div className='text-[0.755rem] font-[500] text-[#fff] mt-[-0.5rem]'>
                                Price start at 890,000 AED
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default AreasMobile
