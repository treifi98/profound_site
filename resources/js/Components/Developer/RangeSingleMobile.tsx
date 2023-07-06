import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { useSelector, useDispatch } from 'react-redux'
import { RootState  } from '@/store'
import {handleChange} from './RangeSingleSlice'

interface Props{
    step:number,
    min:number,
    max:number,
    rtl:boolean,
    id:string,
    lable:string,
    precanteage?:boolean
    dp?:boolean
    loan?:number
    // precantage?:string,
    // id:tring
}

const COLORS = ['#00494F','#E6EDED'];
const THUMB_SIZE = 42;

const RangeSingleMobile: React.FC<{ rtl:boolean, max:number, min:number, step:number, id:string, lable:string,precantage:boolean,dp:boolean,loan:number,width?:number,scaleFactor?:number }> = ({ rtl, max, min, step, id, lable,precantage,dp,loan,width,scaleFactor }) => {
  const dispatch = useDispatch()
//   const rangeVals = useSelector((state:RootState) => state.RangeSingleMobile)

  const [MIN,setMIN] = React.useState(min)
  const [MAX,setMAX] = React.useState(max)
  const [value, setValue] = React.useState(min);
  const [fatcor, setFatcor] = React.useState(16);

    React.useEffect(() => {
        dispatch(handleChange({value,id:id}))
    },[value])
    const xon = React.useRef(null)
    const [displacment, setDisplacment] = React.useState('0')

  React.useEffect(()=>{
        setDisplacment(xon.current.parentElement.style.transform.split(',')[0].split('(')[1].split('px')[0])

        window.addEventListener('resize',()=>{
            setFatcor(parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size').split('px')[0]))
        })
        // window.getComputedStyle(document.body).getPropertyValue('font-size');
        setFatcor(parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size').split('px')[0]))
    })

  const rangeRef: any = React.useRef<Range>();

  const Thumb = ({ props, isDragged }: any) => (
    <div
      {...props}
      style={{
        ...props.style,
        height: '20.5px',
        width: '20.5px',
        borderRadius: '100%',
        backgroundColor: '#DDE4E4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'inset -2.07px -2.07px 5.17px #F2F9F8, inset 2.07px 2.07px 5.17px #B6C3C5',
        outline:'none',
        position:'relative',
        zIndex:'999999999'

      }}
    >

        <div className='absolute h-[8.51px]  top-[0.43rem] left-[0.005rem] bg-[#E6EDED] z-[9999999] rounded-md shadow-[2.7766876220703125px_2.7766876220703125px_3.887362480163574px_0px_#B6C3C5_inset,-2.7766876220703125px_-2.7766876220703125px_4.442699909210205px_0px_#FFF_inset]' style={{ width:`calc(89.333vw - ${((parseFloat(displacment)))}px)` }}>

        </div>
       {/* <ThumbLabel rangeRef={rangeRef.current} values={value}  /> */}
        <div className='group xon'
            {...props}
            style={{
            height: '18.52px',
            width: '18.52px',
            borderRadius: '100%',
            backgroundColor: '#DDE4E4',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0.22561875rem 0.22561875rem 0.5640475rem rgba(12, 63, 71, 0.18), inset 0.22561875rem 0.22561875rem 0.5640475rem rgba(255, 255, 255, 0.25), inset -0.22561875rem -0.22561875rem 0.5640475rem #B6C3C5, inset 0.22561875rem 0.22561875rem 0.5640475rem #FFFFFF',
            outline:'none',
            zIndex:'9999999999999999'
            }}
            ref={xon}
        >
            <div className=''
            style={{
                height: '7.5px',
                width: '7.5px',
                backgroundColor: '#00494F',
                border:'0.0625rem solid #19464B',
                borderRadius:'100%',
                boxShadow:'inset -0.13030875rem -0.13030875rem 0.216748125rem -0.072249375rem #007580, inset 0.13030875rem 0.13030875rem 0.1704075rem #002D31',
                zIndex:'9999999999999999'
            }}
            />
        </div>

    </div>
  );

  const Track = ({ props, children }: any) => (
    <div className='relative'>

        <div
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        style={{
            ...props.style,
            height: '8.51px',
            display: 'flex',
            width: '89.18vw',
            border:'0.0694444444444444rem solid #CAD4D5',
            // boxShadow:'inset -0.285380625rem -0.285380625rem 0.456609375rem #FFFFFF, inset 0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5',
            borderRadius:'6.25rem',
            // backgroundColor:'red'
            // overflowX:'hidden'
        }}
        >
        <div
            ref={props.ref}
            style={{
            height: '0px',
            width: '89.18vw',
            borderRadius: '0px',
            //   backgroundColor:'red',
            background: getTrackBackground({
                // height: '0px',
                // width: '336px',
                values: [value],
                colors: ['#f00',"#000"],
                min: min,
                max: max,
                rtl:false
            }),
            alignSelf: 'center'
            }}
        >
                <div
                    style={{
                    position: 'absolute',
                    height: '8.51px',

                    width: `${((value) * 100 / (max))}%`,
                    borderRadius: '6.25rem',
                    background: '#00494F',
                    left: `0`,
                    border:'0.0625rem solid #19464B',
                    top: 0,
                        // boxShadow: '0px 0px 6px #B6C3C5'
                    boxShadow:'inset -0.13030875rem -0.13030875rem 0.216748125rem #007580, inset 0.13030875rem 0.13030875rem 0.1704075rem #002D31'

                    }}

                />
            {children}
        </div>
        </div>
        {
            dp?
            <div className='w-[83.72px] h-[20px] absolute top-[22.51px] left-0 rounded-[5.6875rem] flex justify-center items-center bg-[#E6EDED] shadow-[2.046081781387329px_2.046081781387329px_2.8645145893096924px_0px_#B6C3C5_inset,-2.046081781387329px_-2.046081781387329px_3.273730754852295px_0px_#FFF_inset] '>
                <div className='text-[#7D8989] font-[600] text-[12px]'>

                    {(value*loan).toLocaleString()}
                </div>
            </div>
            :
            <div className='w-[83.72px] h-[20px] absolute top-[22.51px] left-0 rounded-[5.6875rem] flex justify-center items-center bg-[#E6EDED] shadow-[2.046081781387329px_2.046081781387329px_2.8645145893096924px_0px_#B6C3C5_inset,-2.046081781387329px_-2.046081781387329px_3.273730754852295px_0px_#FFF_inset] '>
                <div className='text-[#7D8989] font-[600] text-[12px]'>

                    {value.toLocaleString()}
                </div>
            </div>

        }
        {
            dp?
            <div className='w-[83.72px] h-[20px] absolute top-[22.51px] right-0 flex justify-end items-center '>
                <div className='text-grade font-[600] text-[12px]'>

                    {value.toLocaleString()}%
                </div>
            </div>:''
        }
        <div className='w-[83.72px] h-[20px] absolute top-[-31.51px] right-0 rounded-[5.6875rem] flex justify-end items-center ]'>
            <div className='text-[#7D8989] font-[600] text-right text-[12px]'>
                {max.toLocaleString()}{precantage? '%': 'AED'}
            </div>
        </div>
        <div className='w-[11.625rem] h-[20px] absolute top-[-31.51px] left-0 rounded-[5.6875rem] flex justify-start items-center ]'>
            <div className='text-[#7D8989] font-[600] text-[12px]'>
                {lable}
            </div>
        </div>
    </div>
  );

  return (
    <Range
      ref={rangeRef}
      values={[value]}
      onChange={(values) => setValue(values[0])}
      renderThumb={Thumb}
      renderTrack={Track}
      step={step}
      min={MIN}
      max={MAX}
      rtl={rtl}
    />
  );
};

export default RangeSingleMobile
