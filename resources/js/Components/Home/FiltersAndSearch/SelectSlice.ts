import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectSlice{

}
const initialState: SelectSlice = {

}

const SelectSlice = createSlice({
    name:'select',
    initialState,
    reducers:{
        select:(state:any,action:PayloadAction<{id:string,selected:string}>) => {
            if(!state[action.payload.id]){
                state[action.payload.id] = [];

            }
            state[action.payload.id].push(action.payload.selected)
            console.log(action.payload.id,state[action.payload.id])
        },
        deSelect:(state:any,action:PayloadAction<{id:string,selected:string}>) => {
            state[action.payload.id] = state[action.payload.id].filter((sts) => sts != action.payload.selected)
            console.log(action.payload.id,state[action.payload.id])
        },
        reset:(state:any,action:PayloadAction<{id:string}>) => {
            state[action.payload.id] = []
            console.log(action.payload.id,state[action.payload.id])
        },
        selectSingle:(state:any,action:PayloadAction<{id:string,selected:string}>) => {
            state[action.payload.id] = [action.payload.selected]
            console.log(action.payload.id,state[action.payload.id])
        },
    }
})

export const {select, deSelect, reset, selectSingle} = SelectSlice.actions
export default SelectSlice.reducer
