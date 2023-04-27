import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { useThumbOverlap } from 'react-range';

interface Props{
    step:number,
    min:number,
    max:number,
    rtl:boolean,

}
// const STEP = 0.1;
// const MIN = 0;
// const MAX = 100;
const COLORS = ['#E6EDED','#00494F','#E6EDED'];
const THUMB_SIZE = 42;

function ThumbLabel({
  rangeRef,
  values,
  index
}: {
  rangeRef: Range | null;
  values: number[];
  index: number;
}) {
  const [labelValue, labelStyle] = useThumbOverlap(
    rangeRef,
    values,
    index,
    1,
    ' - ',
    (value) => `${value}`
  );
  return (
    <div
      data-label={index}
      style={{
        display: 'flex',
        position: 'absolute',
        top: '2.25875rem',
        color: '#E6EDED',
        fontWeight: '600',
        // fonttfa
        fontSize: '0.81rem',
        fontFamily: 'nova',
        // padding: '4px',
        borderRadius: '3.13rem',
        // backgroundColor: '#548BF4',
        backgroundImage:'linear-gradient(126.1deg, #002E33 13.25%, #18494E 52.94%, #00474D 89.81%)',
        whiteSpace: 'nowrap',
        minWidth:'4.63rem',
        padding:'0 0.5rem',
        textAlign:'center',
        height:'1.38rem',
        justifyContent:'center',
        alignItems:'center',
        // borderRadius:''
        ...(labelStyle as React.CSSProperties)
      }}
    >
        <div>

            {labelValue }
        </div>
    </div>
  );
}

const RangeComponent: React.FC<{ RTL: boolean, max:number, min:number, step:number,MinStep:number, MaxStep:number, StepDefault:boolean }> = ({ RTL, max, min, step,MinStep, MaxStep,StepDefault }) => {
  const rtl = RTL
  const MIN = min
  const MAX = max
  const STEP = step
  const [values, setValues] = React.useState([min,max]);


  const handleOnChange = (newValues) => {
    const [minValue, maxValue] = newValues;

    // Define different steps for min and max thumbs
    let minStep = MinStep;
    let maxStep = MaxStep;
    if(!StepDefault){

        if (minValue >= 1000000){
            minStep = 500000
        }
        else if (minValue >= 5000000){
            minStep = 1000000
        }
        else if (minValue >= 50000000){
            minStep = 10000000
        }
        if (maxValue <= 10000000){
            maxStep = 1000000
        }
        else if (maxValue <= 500000){
            maxStep = 500000
        }
        else if (maxValue <= 100000){
            maxStep = 100000
        }
    }

    // Calculate the new values based on the desired steps
    let newMinValue = Math.round(minValue / minStep) * minStep;
    let newMaxValue = maxValue ;
    if((Math.round(maxValue / 1000000) * 1000000) > (minValue + 1000000)){
        newMaxValue = Math.round(maxValue / maxStep) * maxStep
    }
    console.log(maxValue)
    const minDistance = 1000000;
    // if (newMaxValue - newMinValue < minDistance) {
    //   if (newMinValue === minValue) {
    //     newMaxValue = newMinValue + minDistance;
    //   } else {
    //     newMinValue = newMaxValue - minDistance;
    //   }
    // }


    // Update the state with the new values
    setValues([newMinValue, newMaxValue]);
  };


  const rangeRef: any = React.useRef<Range>();
  const Thumb = ({ props, index, isDragged }: any) => (
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
      <ThumbLabel rangeRef={rangeRef.current} values={values} index={index} />
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
        borderRadius:'1.06rem'
      }}
    >
      <div
        ref={props.ref}
        style={{
          height: '0px',
          width: '100%',
          borderRadius: '0px',
          background: getTrackBackground({
            values: values,
            colors: COLORS,
            min: MIN,
            max: MAX,
            rtl
          }),
          alignSelf: 'center'
        }}
      >
            <div
                style={{
                position: 'absolute',
                height: '0.875rem',
                width: `${(values[1] - values[0]) * 100 / (MAX - MIN)}%`,
                borderRadius: '0.25rem',
                background: '#00494F',
                left: `${(values[0] * 100) / (MAX - MIN)}%`,
                border:'0.0625rem solid #19464B',
                top: 0,
                    // boxShadow: '0px 0px 6px #B6C3C5'
                boxShadow:'inset -0.13030875rem -0.13030875rem 0.216748125rem #007580, inset 0.13030875rem 0.13030875rem 0.1704075rem #002D31'

                }}
            />
        {children}
      </div>
    </div>
  );
  return (
    <Range
      ref={rangeRef}
      values={values}
      onChange={handleOnChange}
      renderThumb={Thumb}
      renderTrack={Track}
      step={STEP}
      min={MIN}
      max={MAX}
      rtl={rtl}
    />
  );
};

export default RangeComponent;
