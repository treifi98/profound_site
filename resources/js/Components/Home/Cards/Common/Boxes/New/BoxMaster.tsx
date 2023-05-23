import React from 'react'
import StanderdBox from './StanderdBox'
import CornerdBox from './CornerdBox'
import ZibraFlip from './Flips/ZibraFlip'
import PaymentPlanFlip from './Flips/PaymentPlanFlip'
import SimpleFlip from './Flips/SimpleFlip'
import SplitFlip from './Flips/SplitFlip'
interface Props{
    BoxType: string,
    flipType?: string,
    boxArgs?:{},
    flipArgs?:{}
}
const BoxMaster = (props:Props) => {
    const renderBox = () => {
        let Box ;
        let flip;

        if(props.flipType == 'zibra'){
            flip = <ZibraFlip/>
        }
        else if(props.flipType == 'paymentPlan'){
            flip = <PaymentPlanFlip/>
        }
        else if(props.flipType == 'simpleFlip'){
            flip = <SimpleFlip/>
        }
        else if(props.flipType == 'split'){
            flip = <SplitFlip/>
        }

        if(props.BoxType == 'standerd') {
            Box = <StanderdBox flipComp = { flip} Args={
                {
                    ...props.boxArgs
                }
            } flipArgs={props.flipArgs}/>
        }
        else if(props.BoxType == 'cornerd') {
            Box = <CornerdBox flipComp = { flip} Args={
                {
                    ...props.boxArgs
                }
            } flipArgs={props.flipArgs}/>
        }
        return Box
    }

    return (
        <>
            {
                renderBox()
            }
        </>
    )
}

export default BoxMaster
