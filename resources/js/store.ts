import { configureStore } from "@reduxjs/toolkit";
import TestSlice from "./Components/Home/Test/TestSlice";
import SelectSlice from "./Components/Home/FiltersAndSearch/SelectSlice";

export const store = configureStore({
    reducer:{
        test:TestSlice,
        select:SelectSlice
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
