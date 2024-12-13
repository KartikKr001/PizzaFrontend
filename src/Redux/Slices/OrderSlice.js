import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    ordersData: null
}

axiosInstance.defaults.withCredentials = true; // Ensure cookies are sent with every request

export const placeOfflineOrder = createAsyncThunk('/order/placeOrder', async (data) => {
    try {
        const response = axiosInstance.post(`/orders`,data);
        toast.promise(response, {
            loading: 'Creating order',
            error: 'Something went wrong cannot create order',
            success: 'Order created successfully',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});

export const placeOnlineOrder = createAsyncThunk('/payment/checkout', async (data) => {
    try {
        const response = axiosInstance.post(`/payment/checkout`,data);
        toast.promise(response, {
            loading: 'Creating order',
            error: 'Something went wrong cannot create order',
            success: 'Order created successfully',
        });
        const apiResponse = await response;
        return apiResponse;
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
});


const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(placeOfflineOrder.fulfilled, (state, action) => {
            state.ordersData = action?.payload?.data;
        });
        builder.addCase(placeOnlineOrder.fulfilled, (state, action) => {
            state.ordersData = action?.payload?.data;
        });
    }
});

export default OrderSlice.reducer;