import React, { useEffect, useRef } from 'react'


interface Props{
    prcantage:number,
    bg?:string
}


const PrecantageBig = (props:Props) => {

    const svg = useRef(null)
    const circle = useRef(null)
    const value = useRef(null)
    const secondBar = useRef(null)
    // const calculateProgress = () => {
    //     let remaning = 0;
    //     if(props.prcantage > 50){
    //         remaning = props.prcantage - 50
    //     }

    // }
    useEffect(()=>{
        let radius = 90; // radius of the circle
        let circumference = 2 * Math.PI * radius;

        // let circle = document.getElementById('circle');

        circle.current.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.current.style.strokeDashoffset = `${circumference}`;

        function setProgress(percent) {
        const offset = (circumference - percent / 100 * circumference);
        circle.current.style.strokeDashoffset = offset;
    }

    // set progress here by changing the percentage variable
    // let propps.percentage = 20;
    setProgress(props.prcantage);

    ////////

    const obj = value.current
    svg.current.style.height='100%'
    animateValue(obj, 0, props.prcantage, 1000)
    },[])


    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start)+'%';
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }

    //   animateValue(obj, 100, 0, 5000);

    return (
        <div className='bg-[#E6EDED] w-[5.6925rem] h-[5.6925rem] rounded-full border-none flex justify-center items-center relative overflow-hidden shadow-[inset_-3.32786px_-3.32786px_5.32458px_#FFFFFF,inset_3.32786px_3.32786px_4.659px_#B6C3C5] '>

            <svg id="svg" viewBox="0 0 200 200" className='w-full h-0 absolute top-[0px]  z-[9999999] rotate-[-90deg] origin-center transition-all duration-[0.2s]' ref={svg}>
                <defs>
                    <filter id="f1" x="-0.2" y="-0.2" width="150%" height="150%">
                    {/* <feOffset result="offOut" in="SourceAlpha" dx="-1" dy="-1" /> */}
                    {/* <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1.2" /> */}
                    {/* <feBlend in="SourceGraphic" in2="blurOut" mode="normal" /> */}
                    </filter>
                    <filter id="f2" x="-0.2" y="-0.2" width="150%" height="150%">
                    {/* <feOffset result="offOut2" in="SourceAlpha" dx="1" dy="1" /> */}
                    {/* <feGaussianBlur result="blurOut2" in="offOut2" stdDeviation="1" /> */}
                        <feBlend in="SourceGraphic" in2="blurOut2" mode="normal" />
                    </filter>
                </defs>
                <circle id="circle-bg" cx="100" cy="100" r="90" stroke="#00494F" stroke-width="30" fill="none" filter="url(#f1)" />
                <circle id="circle" cx="100" cy="100" r="90" stroke="#00494F" stroke-width="30" fill="none" filter="url(#f2)" ref={circle} className='w-full h-full'/>
            </svg>
            <div className='w-[4.27625rem] h-[4.27625rem] rounded-full z-[99999] absolute top-[0.674375rem] left-[0.674375rem] shadow-[-3.32786px_-3.32786px_5.32458px_#FFFFFF,3.32786px_3.32786px_4.659px_#B6C3C5] flex justify-center items-center' style={{ backgroundColor:props.bg?props.bg:'#E6EDED' }}>
            </div>
            <div className='w-[2.895625rem] h-[2.895625rem] shadow-[inset_-2.65701px_-2.65701px_6.55994px_-0.364441px_#FFFFFF,inset_2.65701px_2.65701px_8.38214px_#B6C3C5] rounded-full absolute top-[1.4075rem] left-[1.4075rem] z-[999999999] flex justify-center items-center bg-[#E6EDED]' >
                <div className='text-grade text-[0.91125rem] font-[600]' id='value' ref={value}>
                    {props.prcantage}%
                </div>
            </div>
            <div className='w-[4.27625rem] h-[4.27625rem] rounded-full bg-[#E6EDED] z-[99999999] absolute top-[0.674375rem] left-[0.674375rem] 'style={{ backgroundColor:props.bg?props.bg:'#E6EDED' }}>

            </div>

        </div>
    )
}

export default PrecantageBig
