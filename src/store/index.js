import { configureStore } from "@reduxjs/toolkit";
import { layoutSlice } from "./slices/layoutSlice";

export const store = configureStore({
    reducer: {
        [layoutSlice.name]:layoutSlice.reducer
    }
})