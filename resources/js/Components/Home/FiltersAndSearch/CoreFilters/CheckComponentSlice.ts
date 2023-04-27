import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CheckComponentSlice{

}

const initialState: CheckComponentSlice = {
}
function replaceLastInstance(str, search, replacement) {
    let lastIndex = str.lastIndexOf(search);

    if (lastIndex === -1) {
        return str;
    }
    let newStr = str.substring(0, lastIndex) + replacement + str.substring(lastIndex + search.length);
    return newStr;
}

const isolateParentWrapperStyletate = (id) => {
    return replaceLastInstance(id,'-','#').split('#')
}
const CheckComponentSlice = createSlice({
    name: "check",
    initialState,
    reducers: {
        check:(state:any,action:PayloadAction<{id:string,selected:string}>) => {
            if(!state[action.payload.id]){
                state[action.payload.id] = [];

            }
            state[action.payload.id].push(action.payload.selected)
            console.log(action.payload.id,state[action.payload.id])
        },
        unCheck:(state:any,action:PayloadAction<{id:string,selected:string}>) => {
            state[action.payload.id] = state[action.payload.id].filter((sts) => sts != action.payload.selected)
            console.log(action.payload.id,state[action.payload.id])
        },
        reset:(state:any,action:PayloadAction<{id:string}>) => {
            state[action.payload.id] = []
            console.log(action.payload.id,state[action.payload.id])
        },
        checkSingle:(state:any,action:PayloadAction<{id:string,selected:string}>) => {
            state[action.payload.id] = [action.payload.selected]
            console.log(action.payload.id,state[action.payload.id])
        },
        toggle:(state:any,action:PayloadAction<{id:string,vals:{on:string,off:string}}>) => {
            let id = isolateParentWrapperStyletate(action.payload.id)
            if(!state[id[0]]){
                state[id[0]] = {};
            }
            if(!state[id[0]][id[1]]){
                state[id[0]][id[1]] = {status:false,value:''};
            }
            if(state[id[0]][id[1]].status){
                state[id[0]][id[1]].value = action.payload.vals.off
            }else{
                state[id[0]][id[1]].value = action.payload.vals.on
            }
            state[id[0]][id[1]].status = !state[id[0]][id[1]].status
            console.log(id[0],id[1],state[id[0]][id[1]].status)

        }
    }
})

export const {check, unCheck, reset, checkSingle, toggle} = CheckComponentSlice.actions
export default CheckComponentSlice.reducer
