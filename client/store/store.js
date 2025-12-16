import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import navSlice from "./slices/navSlice.js";
import postSlice from "./slices/postSlice.js"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        nav: navSlice,
        posts : postSlice
    },
})
