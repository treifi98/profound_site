import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RangeComponentSlice{
    rangecomponentId:string,
    minValue:number,
    maxValue:number,
    step:number,
    minStep:number,
    maxStep:number,
    stepDefault:boolean,
    toggle:boolean
}

const initialState: RangeComponentSlice = {
    rangecomponentId: '0',
    maxStep:0,
    minStep:0,
    minValue:0,
    maxValue:0,
    stepDefault:true,
    step:200,
    toggle:false
}

const RangeComponentSlice = createSlice({
    name:'rangeComonentSlice',
    initialState,
    reducers:{
        changeValues:(state:any,action:PayloadAction<{componentId:string,minValue:string,maxValue:string,step:string,func:Function}>)=>{
            action.payload.func('2')
        },
        trigger: (state:any,action:PayloadAction<{rangecomponentId:string,minValue:number,maxValue:number,step:number,minStep:number,maxStep:number,stepDefault:boolean}>) => {
            state.rangecomponentId = action.payload.rangecomponentId
            state.maxStep = action.payload.maxStep
            state.minStep = action.payload.minStep
            state.minValue = action.payload.minValue
            state.maxValue = action.payload.maxValue
            state.stepDefault = action.payload.stepDefault
            state.step = action.payload.step,
            state.toggle = !state.toggle
        }
    }
})

export const {changeValues,trigger} = RangeComponentSlice.actions
export default RangeComponentSlice.reducer
