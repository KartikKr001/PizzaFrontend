import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import productSlice from './Slices/ProductSlice'
import cartSlice from './Slices/CartSlice'
import orderSlice from './Slices/OrderSlice'
// import refSlice from "./Slices/refSlice"


export  const store = configureStore({
    reducer: {
        auth : AuthSlice,
        product : productSlice,
        cart : cartSlice,
        order : orderSlice,
        // refs : refSlice
    },
    devTools : true
});