import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import React from "react";

export interface MenueHoverSlice{
    open:boolean,
    child:any,
    hoverd:boolean,
    hoverId:number,
}

const initialState: MenueHoverSlice = {
    open:false,
    child:React.createElement('div'),
    hoverd:false,
    hoverId:0,
}

const MenueHoverSlice = createSlice({
    name:'homeMenue',
    initialState,
    reducers:{
        toggle:(state:any,action:PayloadAction<any>) => {
            state.open = !state.open

            state.hoverd = false
            state.hoverId = 0
            if(state.open){
                state.child = action.payload
            }else{
                // state.child = React.createElement('div')
            }
        },
        displayForNav:(state:any,action:PayloadAction<any>) => {
            state.open = false
            state.hoverd = true
            // if(state.hoverd){
                state.hoverId = action.payload.id
                state.child = action.payload.elmnt
            // }else{
                // state.hoverId = 0
                // state.child = React.createElement('div')
            // }
        },
        hideForNav:(state:any) => {
            state.open = false
            state.hoverd = false
            // if(state.hoverd){
            //     state.hoverId = action.payload.id
            //     state.child = action.payload.elmnt
            // }else{
            //     // state.hoverId = 0
            //     // state.child = React.createElement('div')
            // }
        },
        setHoverState:(state:any,action:PayloadAction<any>) => {
            state.hoverd = action.payload
        },
    }

})

export const {toggle,displayForNav, setHoverState, hideForNav} = MenueHoverSlice.actions
export default MenueHoverSlice.reducer
