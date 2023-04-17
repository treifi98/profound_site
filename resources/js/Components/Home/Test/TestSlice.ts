import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TestSlice {

  }
const initialState: TestSlice = {

}
const  TestSlice = createSlice({
    name:'test',
    initialState,
    reducers:{
        flip:(state:any,action:PayloadAction<any>) => {
            console.log(state,action)
            const id = action.payload.toString();
            if(!state[id]){
                state[id] = false;

            }
            state[id] = !state[id]
            console.log(id,state[id])
        }
    }
})

export const {flip} = TestSlice.actions;

export default TestSlice.reducer;
