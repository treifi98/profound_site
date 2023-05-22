import { configureStore } from "@reduxjs/toolkit";
import TestSlice from "./Components/Home/Test/TestSlice";
import SelectSlice from "./Components/Home/FiltersAndSearch/SelectSlice";
import CheckComponentSlice from "./Components/Home/FiltersAndSearch/CoreFilters/CheckComponentSlice";
import MenueHoverSlice from "./Components/Home/MenueHoverSlice";
import RangeComponentSlice from "./Components/Home/FiltersAndSearch/RangeComponentSlice";
import RangeSingleSlice from "./Components/Developer/RangeSingleSlice";

export const store = configureStore({
    reducer:{
        test:TestSlice,
        select:SelectSlice,
        check:CheckComponentSlice,
        menue:MenueHoverSlice,
        range:RangeComponentSlice,
        rangeSingle:RangeSingleSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
