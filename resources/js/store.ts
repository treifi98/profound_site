import { configureStore } from "@reduxjs/toolkit";
import TestSlice from "./Components/Home/Test/TestSlice";
import SelectSlice from "./Components/Home/FiltersAndSearch/SelectSlice";
import CheckComponentSlice from "./Components/Home/FiltersAndSearch/CoreFilters/CheckComponentSlice";
import MenueHoverSlice from "./Components/Home/MenueHoverSlice";

export const store = configureStore({
    reducer:{
        test:TestSlice,
        select:SelectSlice,
        check:CheckComponentSlice,
        menue:MenueHoverSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
