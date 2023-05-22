import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RangeSingleSlice{
}

const initialState: RangeSingleSlice = {

}

const RangeSingleSlice = createSlice({
    name:'rangeSingleSlice',
    initialState,
    reducers:{
        handleChange:(state:any,action:PayloadAction<{value:number,id:string}>)=>{
            // if(!state[action.payload.id]){
                state[action.payload.id] = action.payload.value
            // }
            // else{

            // }
        },
    }
})

export const {handleChange} = RangeSingleSlice.actions
export default RangeSingleSlice.reducer
