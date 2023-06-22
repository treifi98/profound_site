import React, { useState } from 'react'
import InElementSeperator from '../Cards/Common/InElementSeperator'
import plus from '../../../../assets/plus.svg'
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OneCardSwiperMobile from './Nav/OneCardSwiperMobile';
import NewTag from '../Cards/Common/NewTag';
import MenueChild from './MenueChild';
import hauseIcon from '../../../../assets/house.svg'
import OneCardSwiperProjectMobile from './Nav/OneCardSwiperProjectMobile';
import OneCardSwiperAreaMobile from './Nav/OneCardSwiperAreaMobile';

const MenuItems = () => {

    const [oppened,setOppened] = useState('-1')
    const [isOppened,setIsOppened] = useState(false)
    const toggleOpen = (e,id) => {
        document.querySelectorAll('.menueItemNav').forEach((elmnt)=>{
            elmnt.querySelector('img').style.transform = 'rotate(0deg)'
        })
        document.querySelectorAll('.menuItemList').forEach((elmnt)=>{
            elmnt.style.maxHeight = '0px'
        })
        setOppened(e.target.parentElement.parentElement.id)
        if(oppened != e.target.parentElement.parentElement.id ){

            e.target.style.transform = 'rotate(45deg)'
            document.querySelector(`#${id}`).style.maxHeight = '2000px'
            setIsOppened(true)
        }else{
            if(isOppened){

                setIsOppened(false)
            // document.querySelector(`#${id}`).style.maxHeight = '0px'
            }
            else{
                e.target.style.transform = 'rotate(45deg)'
            document.querySelector(`#${id}`).style.maxHeight = '2000px'
                setIsOppened(true)
            }
        }
    }
  return (



    <div
      role="presentation"
    //   onClick={toggleDrawer(false)}
    //   onKeyDown={toggleDrawer(false)}
        className='w-full'
    >
      <List className='!w-full !mx-0 !px-0 !my-0 !py-0'>

          <ListItem button key={'list1'} className='!w-full !mx-0 !px-0 !my-0 !py-0'>
            <div className='w-full flex flex-col min-h-[3.625rem] h-full menueItemNav' id = '2'>
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.625rem] my-auto w-[85%] ml-[5%] flex justify-between items-center  '>
                    <div className='text-grade text-[1.125rem] font-[600] '>
                        Buy
                    </div>
                    <img src={plus} alt=""  onClick={(e)=>toggleOpen(e,'ff')} className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='ff'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[0.375rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all properties
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Apartments for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Villas for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Town houses for sale in Dubai  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Penthouses for sale in Dubai  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Lands for sale in Dubai  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Studio  for sale in Dubai  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='One bed room for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Offices for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Shops for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Commercial for sale in Dubai '/>
                    </div>
                    <div className='scale-[0.67] origin-[15%_20%] '>
                    <MenueChild icon={hauseIcon} title={'HOW TO BUY PROPERTY IN DUBAI'} titleWidth='16rem' text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonTextSize='1.1rem' textMT='1rem'/>


                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>
          <ListItem button key={'list2'} className='!w-full !mx-0 !px-0 !my-0 !py-0'>
            <div className='w-full flex flex-col min-h-[3.625rem] h-full menueItemNav' id = '3'>
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.625rem] my-auto w-[85%] ml-[5%] flex justify-between items-center  '>
                    <div className='text-grade text-[1.125rem] font-[600] '>
                        Rent
                    </div>
                    <img src={plus} alt=""  onClick={(e)=>toggleOpen(e,'rent')} className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='rent'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[0.375rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all properties
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Apartments for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Villas for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Town houses for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Penthouses for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Hotel apartment for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Studio  for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='One bed room for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Offices for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Shops for rent in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Commercial for rent in Dubai '/>
                    </div>
                    <div className='scale-[0.67] origin-[15%_20%] '>
                        <MenueChild icon={hauseIcon} title={'HOW TO RENT PROPERTY IN DUBAI'} titleWidth='20rem' text="Everything you need to know when renting a property in Dubai. From legal requirements to cultural norms, we'll provide you with the knowledge you need to make informed decisions" buttonTextSize='1.1rem' textMT='1rem'/>

                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>
          <ListItem button key={'list2'} className='!w-full !mx-0 !px-0 !my-0 !py-0'>
            <div className='w-full flex flex-col min-h-[3.625rem] h-full menueItemNav' id = '4'>
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.625rem] my-auto w-[85%] ml-[5%] flex justify-between items-center  '>
                    <div className='text-grade text-[1.125rem] font-[600] '>
                        Projects
                    </div>
                    <img src={plus} alt=""  onClick={(e)=>toggleOpen(e,'projects')} className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='projects'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperProjectMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[0.375rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all Projects
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan apartments for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan villas for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan town houses for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan penthouses for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan hotel apartment for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan studio  for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan One bed room for sale in Dubai'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan Offices for sale Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan Shops for sale in Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Off-plan Commercial for sale in Dubai '/>
                    </div>
                    <div className='scale-[0.67] origin-[15%_20%] '>
                        <MenueChild icon={hauseIcon}  titleWidth='26.0625rem' titleSize='1.4375rem' title={'HOW TO BUY OFF-PLAN PROPERTY IN DUBAI'} text="Explore insightful tips for buying off-plan properties in Dubai and simplify your search with our comprehensive guide. Begin your journey to finding your dream home today." buttonMT='1.075rem' buttonTextSize='1.2rem' textMT='1rem'  />

                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>
          <ListItem button key={'list2'} className='!w-full !mx-0 !px-0 !my-0 !py-0'>
            <div className='w-full flex flex-col min-h-[3.625rem] h-full menueItemNav' id = '5'>
                <InElementSeperator height='0.25rem' width='100%'/>
                <div className='h-full min-h-[3.625rem] my-auto w-[85%] ml-[5%] flex justify-between items-center  '>
                    <div className='text-grade text-[1.125rem] font-[600] '>
                        Areas
                    </div>
                    <img src={plus} alt=""  onClick={(e)=>toggleOpen(e,'area')} className='transition-all'/>
                </div>
                <div className='max-h-0 w-full  transition-all duration-[0.5s] overflow-hidden menuItemList' id='area'>
                    <div className='h-max  w-full'>
                        <InElementSeperator height='0.25rem' width='100%'/>
                        <div className='mx-auto w-full mt-[0.25rem]'>
                            <OneCardSwiperAreaMobile/>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2.375rem] mx-auto flex justify-center items-center shadow-[inset_-2px_-2px_3px_#04626B,_inset_2px_2px_3px #011618] rounded-[7.375rem] bg-[#05363B] mt-[0.375rem]'>
                        <div className='w-[96.5%] h-[2rem] rounded-[7.375rem] bg-[#05363B] shadow-[-2px_-2px_3px_#04626B,_2px_2px_3px_#011618] flex justify-center items-center'>
                            <div className='text-[1rem] font-[400] text-[#fff]'>
                                View all Areas
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Beachfront properties In Dubai '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Waterfront properties In Dubai'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai properties Luxury Living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai properties Green Nature Living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai properties urban city Living  '/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='  Dubai iconic island living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai Vibrant Island living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai Dynamic Business Hub living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai Mediterranean Style living'/>
                    </div>
                    <div className='w-[90%] h-[2rem] mx-auto mt-[1.375rem]' style={{ width:'90%',height:'2rem' }}>
                        <NewTag textSize='0.875' textWeight='500' text='Dubai Entertainment Central living'/>
                    </div>
                    <div className='scale-[0.67] origin-[15%_20%] '>
                        <MenueChild icon={hauseIcon}  titleWidth='24.75rem' titleSize='1.4375rem' title={'ABOUT COMMUNITY AREAS'} text="Beachfront homes, waterfront homes, villas, flats, penthouses, townhouses, and land. Buyers can opt to invest in high-end projects or locate properties for under AED 1 million. Green living possibilities include golf course or natural environment residences." buttonMT='1.2625rem' textMT='0.6875rem' texteSize='1.15rem' buttonTextSize='1.2rem' mainHeight='25rem'/>


                        {/* <MenueChild icon={hauseIcon} mainWidth='100%' mainHeight='max-content' titleWidth='9.0375rem' titleSize='0.8875rem' titleAreaWidth='9.4375rem' textWidth='13.375rem' textMT='0.6rem' texteSize='0.8125rem' title={'HOW TO BUY PROPERTY IN DUBAI'} text="Owning property in Dubai has never been easier. Our guide caters to all experience levels, making the buying process seamless for both first-time buyers and seasoned investors" buttonWidth='7.03625rem' buttonHeight='1.50625rem' buttonTextSize='0.875' /> */}
                    </div>

                </div>
            </div>
          </ListItem>


      </List>
    </div>

  )
}

export default MenuItems
