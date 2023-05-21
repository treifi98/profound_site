import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { useSelector, useDispatch } from 'react-redux'
import { RootState  } from '@/store'
// import {changeValues} from './RangeComponentSlice'

interface Props{
    step:number,
    min:number,
    max:number,
    rtl:boolean,
    id:string
}

const COLORS = ['#00494F','#E6EDED'];
const THUMB_SIZE = 42;

const RangeSingle: React.FC<Props> = ({ rtl, max, min, step, id }) => {
  const dispatch = useDispatch()
  const rangeInfo = useSelector((state:RootState) => state.range)

  const [MIN,setMIN] = React.useState(min)
  const [MAX,setMAX] = React.useState(max)
  const [value, setValue] = React.useState(min);

  React.useEffect(() => {
    if(rangeInfo.rangecomponentId === id){
        setMIN(rangeInfo.minValue)
        setMAX(rangeInfo.maxValue)
        setValue(rangeInfo.minValue)
    }
  },[rangeInfo])

//   React.useEffect(()=>{alert(value)},[value])

  const rangeRef: any = React.useRef<Range>();

  const Thumb = ({ props, isDragged }: any) => (
    <div
      {...props}
      style={{
        ...props.style,
        height: '1.97375rem',
        width: '2.0175rem',
        borderRadius: '100%',
        backgroundColor: '#DDE4E4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'inset -0.212621875rem -0.212621875rem 0.531555rem #F2F9F8, inset 0.212621875rem 0.212621875rem 0.531555rem #B6C3C5',
        outline:'none',
      }}
    >
       {/* <ThumbLabel rangeRef={rangeRef.current} values={value}  /> */}
        <div className='group'
            {...props}
            style={{
            height: '1.8425rem',
            width: '1.8425rem',
            borderRadius: '100%',
            backgroundColor: '#DDE4E4',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0.22561875rem 0.22561875rem 0.5640475rem rgba(12, 63, 71, 0.18), inset 0.22561875rem 0.22561875rem 0.5640475rem rgba(255, 255, 255, 0.25), inset -0.22561875rem -0.22561875rem 0.5640475rem #B6C3C5, inset 0.22561875rem 0.22561875rem 0.5640475rem #FFFFFF',
            outline:'none'
            }}
        >
            <div className=''
            style={{
                height: '0.770625rem',
                width: '0.770625rem',
                backgroundColor: '#00494F',
                border:'0.0625rem solid #19464B',
                borderRadius:'100%',
                boxShadow:'inset -0.13030875rem -0.13030875rem 0.216748125rem -0.072249375rem #007580, inset 0.13030875rem 0.13030875rem 0.1704075rem #002D31'
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
            height: '0.875rem',
            display: 'flex',
            width: '100%',
            border:'0.0694444444444444rem solid #CAD4D5',
            boxShadow:'inset -0.285380625rem -0.285380625rem 0.456609375rem #FFFFFF, inset 0.285380625rem 0.285380625rem 0.399533125rem #B6C3C5',
            borderRadius:'1.06rem',
            // backgroundColor:'red'
        }}
        >
        <div
            ref={props.ref}
            style={{
            height: '0px',
            width: '100%',
            borderRadius: '0px',
            //   backgroundColor:'red',
            background: getTrackBackground({
                // height: '0px',
                // width: '100%',
                values: [value],
                colors: ['#f00',"#000"],
                min: 0,
                max: 5000,
                rtl:false
            }),
            alignSelf: 'center'
            }}
        >
                <div
                    style={{
                    position: 'absolute',
                    height: '0.875rem',
                    width: `${(value) * 100 / (max)}%`,
                    borderRadius: '0.25rem',
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
        <div className='w-[10.625rem] h-[2.1875rem] absolute top-[1.875rem] left-0 rounded-[5.6875rem] flex justify-center items-center bg-[#E6EDED] shadow-[inset_-0.25967125rem_-0.25967125rem_0.41547375rem_#FFFFFF,inset_0.25967125rem_0.25967125rem_0.363539375rem_#B6C3C5]'>
            <div className='text-[#7D8989] font-[600] text-[1.25rem]'>

                {value.toLocaleString()}
            </div>
            </div>
        <div className='w-[10.625rem] h-[2.1875rem] absolute top-[-2.575rem] right-0 rounded-[5.6875rem] flex justify-center items-center ]'>
            <div className='text-[#7D8989] font-[600] text-[1.125rem]'>
                {max.toLocaleString()} AED
            </div>
        </div>
        <div className='w-[10.625rem] h-[2.1875rem] absolute top-[-2.575rem] left-0 rounded-[5.6875rem] flex justify-center items-center ]'>
            <div className='text-[#7D8989] font-[600] text-[1.125rem]'>
                Loan Amount ( AED)
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

export default RangeSingle
