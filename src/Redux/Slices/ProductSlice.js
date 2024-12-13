import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";

const initialState = {
    productsData : [] //array of products
}

axiosInstance.defaults.withCredentials = true; // Ensure cookies are sent with every request

export const getAllProducts = createAsyncThunk('/products/getAll',async () =>{
    try{
        const products = axiosInstance.get('/products');
        toast.promise(products,{
            loading : 'Loading all the products',
            error : "Something went wrong, Cann't load products",
            success : "Products loaded successfully"
        })
        const apiResponse = await products;
        return apiResponse;
    }
    catch(error){
        console.log(error)
        throw error;
    }
})

export const getProductDetails = createAsyncThunk('/products/details',async (id) =>{ 
    try{
        const product = axiosInstance.get(`/products/${id}`);
        toast.promise(product,{
            // loading : 'Fetching your product',
            // error : "Something went wrong, Cann't load product",
            // success : "Product loaded successfully"
        })
        const apiResponse = await product;
        return apiResponse;
    }
    catch(error){
        console.log(error)
        throw error;
    }
})

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {},
    extraReducers : (builder) =>{
        builder.addCase(getAllProducts.fulfilled,(state,action) => {
            state.productsData = action?.payload?.data?.data;
        })
    }
})

export default  productSlice.reducer
