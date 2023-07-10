import React, { useEffect, useRef, useState } from 'react'
import SearchAction from './SearchActionComponent'
import CheckComponent from './CoreFilters/CheckComponent'
import filter from '../../../../assets/fliter.svg'
import cosex from '../../../../assets/cosex.svg'
import InElementSeperator from '../Cards/Common/InElementSeperator'
import ButtonSelect from './ButtonSelect'
// import Select from './Select'
// import SquareSelect from './SquareSelect'
// import RangeComponent from './RangeComponent'
import SelectMobile from './SelectMobile'
// import ButtonSelectMobile from './ButtonSelectMobile'
// import SliderButton from '@/Components/Developer/SliderButton'
// import RangeComponentMobile from './RangeComponentMobile'


const FliterAreaMobile = () => {
    // const dispatch = useDispatch()

    const [scaleFactor,setScaleFactor] = useState(1.0)
    const [mainScreen,setMainScreen] = useState(375)
    const [changer,setChanger] = useState(1)
    // const [currentScreen,setCurrentScreen] = useState(375)
    const initChange = () => {
        setChanger(window.innerWidth)
    }
    const ScaleforMobile = () => {
        let x = window.innerWidth / 375
        setScaleFactor(x)

    }
    useEffect(()=>{
        console.log(mainScreen)
        ScaleforMobile()
        setMainScreen(window.innerWidth)
        console.log(scaleFactor)
    },[changer])

    useEffect(()=>{
        // document.querySelectorAll('.mobil-comp').forEach((elmnt)=>{
        //     elmnt.parentElement.style.scale = scaleFactor.toString()
        //     // elmnt.parentElement.style.marginTop = (5 * scaleFactor).toString()+'rem'
        //     // alert((elmnt.parentElement.style.marginTop))
        // })
        if(window.innerWidth < 1530){

            document.querySelector('.scalable').style.scale = scaleFactor
        }
        else{

            document.querySelector('.scalable').style.scale = 1
        }
    },[scaleFactor])


    const multiplyDimensions = (element, factor) => {
        // first, get the computed style of the element

        let style = window.getComputedStyle(element);

        // get the width and height of the element
        let width = parseFloat(style.width.replace("rem", ""));
        let height = parseFloat(style.height.replace("rem", ""));
        let textSize = parseFloat(style.fontSize.replace("rem", ""));

        // multiply the width and height by the factor
        width *= factor;
        height *= factor;
        textSize *= factor;

        // set the new width and height
        element.style.width = `${width}px`;
        element.style.height = `${height}px`;
        element.style.fontSize = `${textSize}px`;

        // repeat for each child element
        for (let i = 0; i < element.children.length; i++) {
            // console.log(element.children[i].classList)
            if(element.children[i].classList.contains('except')){
                continue
            }
            console.log('-------')
            console.log(scaleFactor)
            multiplyDimensions(element.children[i], factor);
        }

    }


    useEffect(() => {
        const updateScreenWidth = () => {
            if (window.innerWidth >= 1530){

                setScreenLG(true);
            }
            else{
                setScreenLG(false);

            }
            initChange()
        }
        updateScreenWidth()
        window.addEventListener('resize', updateScreenWidth);
        return () => window.removeEventListener('resize', updateScreenWidth);
      }, []);

    // const dispatch = useDispatch()

    const [screenLG,setScreenLG] = useState(true)
    useEffect(() => {
        const updateScreenWidth = () => {
            if (window.innerWidth >= 1530){

                setScreenLG(true);
            }
            else{
                setScreenLG(false);

            }


        }
        // dispatch(addGracePeriod())
        // dispatch(setHoverState(false))
        // alert('d')
        updateScreenWidth()
        window.addEventListener('resize', updateScreenWidth);
        return () => window.removeEventListener('resize', updateScreenWidth);
      }, []);
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
    const rectifier = useRef(null)
    useEffect(()=>{
        if(!screenLG){

            // let correctionFactor = (-((pfe.current.offsetHeight * scaleFactor) - (pfe.current.offsetHeight)))
            // console.log(correctionFactor)
            // rectifier.current.style.top = correctionFactor+'px'
        }



    },[screenLG])


    const [numberOfBeds,setNumberOfBeds] = useState([])
    const [sizes,setSizes] = useState([0,15000])
    const [prices,setPrices] = useState([400000,100000000])


    const inp1 = useRef(null);
    const inp2 = useRef(null);
    const inp3 = useRef(null);
    const inp4 = useRef(null);
    const changeSizes = (sizes:number[]) => {
        setSizes(sizes)
        // alert(sizes[0])
    }
    const changePrices = (prices:number[]) => {
        setPrices(prices)
        // alert(sizes[0])
    }
    const changeMin = (min:number) => {
        setSizes((prev)=>[min,prev[1]])
        // alert(sizes[0])
    }
    const changeMax = (max:number) => {
        setSizes((prev)=>[prev[0],max])
        // alert(sizes[0])
    }
    const changeMinPrice = (min:number) => {
        setPrices((prev)=>[min,prev[1]])
        // alert(sizes[0])
    }
    const changeMaxPrice = (max:number) => {
        setPrices((prev)=>[prev[0],max])
        // alert(sizes[0])
    }
    const x = (nums:string[]) => setNumberOfBeds(nums)
    const [clicked,setClicked] = useState(false)
    const btn = useRef(null)
    const cont = useRef(null)
    const main = useRef(null)
    useEffect(()=>{
        if(clicked){
            btn.current.style.boxShadow = 'inset -3.46558px -3.46558px 4.33198px #FFFFFF,inset 3.95604px 3.95604px 5.53846px #B6C3C5'
            btn.current.querySelector('img').src = cosex
            btn.current.querySelector('img').style.width = '0.861875rem'
            btn.current.querySelector('img').style.height = '0.861875rem'
            main.current.style.boxShadow = 'none'
            cont.current.style.height = '140px'
            cont.current.style.overflow = 'visible'
            window.scrollTo({top: window.innerHeight/2, behavior: 'auto'});

            cont.current.style.paddingBottom = '1rem'

        }else{

            btn.current.style.boxShadow = ' -2.06558px -2.06558px 4.33198px #FFFFFF, 3.95604px 3.95604px 5.53846px #B6C3C5'
            btn.current.querySelector('img').src = filter
            btn.current.querySelector('img').style.width = '1.5625rem'
            btn.current.querySelector('img').style.height = '1.458125rem'
            main.current.style.boxShadow = '-5px -5px 8px #FFFFFF,5px 5px 7px #B6C3C5'
            cont.current.style.height = '0rem'
            cont.current.style.overflow = 'hidden'
            cont.current.style.paddingBottom = '0rem'
        }
    },[clicked])
    return (
        <>

        <div className='w-[375px] h-[3.4375rem] bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5]  relative z-[1] flex justify-center items-center gap-[2rem] mt-[0rem]' ref={main}>
            <div className=' w-[100%] h-full flex items-center justify-evenly'>
                <div className=''>

                    <SearchAction
                        mainWidth='2.5rem'
                        mainHeight='2.445625rem'
                        effectCircleHeight='1.645625rem'
                        effectCircleWidth='1.6rem'
                        effectInnerCircleHeight='2.2825rem'
                        effectInnerCircleWidth='2.2825rem'
                    />
                </div>
                <input type="text" name="" id="" placeholder="budling, community, Areas or Developer" className='focus:border-transparent focus:ring-0 bg-[#E6EDED] w-[17.0625rem] h-[1.75rem] text-[0.875rem] border-[1px] border-[#DDE4E4] rounded-[1.3125rem] shadow-[inset_-2.58808px_-2.58808px_5.17615px_#F7FFFF,inset_2.58808px_2.58808px_5.17615px_#B6C3C5] ml-[-0.1rem]'/>

                <div className='w-[1.775rem] h-[1.775rem] shadow-[-2.06558px_-2.06558px_4.33198px_#FFFFFF,3.95604px_3.95604px_5.53846px_#B6C3C5] rounded-[0.2125rem] flex justify-center items-center hover:!shadow-[inset_-3.46558px_-3.46558px_4.33198px_#FFFFFF,inset_3.95604px_3.95604px_5.53846px_#B6C3C5] cursor-pointer' onClick={() => setClicked((prev) => !prev)} ref={btn} >
                    <img src={filter} alt="" className='!w-[1.071875rem] h-[0.99375em]' />
                </div>

            </div>

        </div>

        <div className=' h-0 w-[375px] pb-[0rem] transition-all duration-[0.1s] ' ref={cont}>

            <div className=' w-[375px] h-[4px] z-[1] relative'>
                <InElementSeperator width='100%' shadow=' inset -1.56609px -1.56609px 2px #FFFFFF, inset 1px 1px 1.5px #B6C3C5' height='4px'/>
            </div>
            <div className='w-full h-max  bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  relative z-[4] flex justify-center items-center gap-[2rem] '>
                <div className=' w-[345.43px] h-full flex items-center justify-between flex-wrap gap-y-[1.2475rem] py-[1rem]'>

                    <div className='relative z-[4]'>
                        <SelectMobile options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Area' id='af' func={() => console.log('d')}/>
                    </div>
                    <div className=''>
                        <SelectMobile options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Area Features' id='pf' func={() => console.log('d')}/>
                    </div>
                </div>
            </div>
            <div className=' w-[375px] h-[4px] z-[3] relative'>
                <InElementSeperator width='100%' shadow=' inset -1.56609px -1.56609px 2px #FFFFFF, inset 1px 1px 1.5px #B6C3C5' height='4px'/>
            </div>
            <div className='w-full h-max  bg-[#E6EDED] border-[#DCE3E3] border-[0.0625rem]  relative  flex justify-center items-center gap-[2rem] shadow-[-5px_-5px_8px_#FFFFFF,5px_5px_7px_#B6C3C5] z-[2]'>
                <div className=' w-[345.43px] h-full flex items-center justify-between flex-wrap gap-y-[1.2475rem] py-[1rem]'>

                    <div className=''>
                        <SelectMobile options={[{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'},{lable:'one',value:'1'}]} lable='Property type' id='pt' func={() => console.log('d')}/>
                    </div>
                </div>
            </div>


        </div>
        </>
    )
}

export default FliterAreaMobile
