import * as React from 'react';
import { Range,Direction, getTrackBackground } from 'react-range';

import strips  from '../../../assets/strips.svg'
const STEP = 0.1;
const MIN = 10;
const MAX = 18;

const ZoomRange: React.FC<{ rtl: boolean, func:Function }> = ({ rtl,func }) => {
  const [values, setValues] = React.useState([14]);
  React.useEffect(()=>{
    func(values[0])
  },[values])
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column'
        }}
    >
      <Range
        direction={Direction.Up}
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              flexGrow: 1,
              width: '0.5625rem',
              display: 'flex',
              height: '100%',
              backgroundColor:'red',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 45, 49, 0.2), rgba(0, 45, 49, 0.2)), conic-gradient(from 145.26deg at 50% 48.35%, #04474D -18.82deg, #248F99 33.86deg, #00464D 88.94deg, #248F99 170.04deg, #00464D 235.72deg, #008D99 294.54deg, #04474D 341.18deg, #248F99 393.86deg)',
            }}
          >
            <div
              ref={props.ref}
              style={{
                width: '0.5625rem',
                height: 'calc(100% - 3.41875rem)',
                borderRadius: '0px',

                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '3.41875rem',
              width: '1.311875rem',
              borderRadius: '2.15625rem',
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 45, 49, 0.2), rgba(0, 45, 49, 0.2)), conic-gradient(from 145.26deg at 50% 48.35%, #04474D -18.82deg, #248F99 33.86deg, #00464D 88.94deg, #248F99 170.04deg, #00464D 235.72deg, #008D99 294.54deg, #04474D 341.18deg, #248F99 393.86deg)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'none',
              outline:'none',
              padding:'1.709375rem 0rem',

            //   marginTop:'1.709375rem'
            }}
          >
            {/* <div
              style={{
                width: '16px',
                height: '5px',
                background: isDragged ? '#f00' : 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 45, 49, 0.2), rgba(0, 45, 49, 0.2)), conic-gradient(from 145.26deg at 50% 48.35%, #04474D -18.82deg, #248F99 33.86deg, #00464D 88.94deg, #248F99 170.04deg, #00464D 235.72deg, #008D99 294.54deg, #04474D 341.18deg, #248F99 393.86deg)'
              }}
            /> */}
            <img src={strips} className='w-[0.5225rem] h-[2.549375rem]'/>
          </div>
        )}
      />
      {
        // <output style={{ marginTop: '50px', width: '56px' }} id="output">
        //   {values[0].toFixed(1)}
        // </output>
      }
    </div>
  );
};

export default ZoomRange;
