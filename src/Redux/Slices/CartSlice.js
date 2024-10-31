import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";

const initialState = {
    cartsData : ''
}

export const addProductToCart = createAsyncThunk('/cart/addProduct',async (productId)=>{
    try{
        const response = axiosInstance.post(`/carts/add/${productId}`);
        toast.promise(response,{
            loading : 'Added product to cart',
            error : "Something went wrong, Cann't add product",
            success : "Product added successfully"
        })
        const apiResponse = await response;
        return apiResponse;
    }
    catch(error){
        console.log(error)
        if(error?.response?.status == 401){
            toast.error('Please login again')
        }
        throw error;
    }
})

export const getCartDetails = createAsyncThunk('/cart/getdetails',async ()=>{
    try{
        const response = axiosInstance.get(`/carts`);
        toast.promise(response,{
            loading : 'Fetching cart details...',
            error : "Something went wrong, Cann't fetch cart",
            success : "Cart Fetched successfully"
        })
        const apiResponse = await response;
        console.log(apiResponse);
        return apiResponse;
    }
    catch(error){
        console.log(error)
        throw error;
    }
})

export const removeProductFromCart = createAsyncThunk('/cart/removeProduct',async (productId)=>{
    try{
        const response = axiosInstance.post(`/carts/remove/${productId}`);
        toast.promise(response,{
            loading : 'Removed product to cart',
            error : "Something went wrong, Cann't remove product",
            success : "Product removed successfully"
        })
        const apiResponse = await response;
        return apiResponse;
    }   
    catch(error){
        console.log(error)
        throw error;
    }
})


const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getCartDetails.fulfilled, (state, action) => {
            state.cartsData = action?.payload?.data?.data;
        });
    }
})

export default cartSlice.reducer