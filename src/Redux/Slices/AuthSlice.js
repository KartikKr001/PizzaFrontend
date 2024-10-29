import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn') === 'true' || false,
    role : localStorage.getItem('role') || '',
    data : JSON.parse(localStorage.getItem('data')) || {}
    // local storage m as a string store hota h, we need  to parse it to object
}

export const createAccount = createAsyncThunk('/auth/createAccount',async (data) =>{
    console.log("Incoming data to thunk",data);
    try{
        const response = axiosInstance.post('/users',data);
        toast.promise(response ,{
            loading : 'Hold tight, we are registering your id...',
            success : 'Account created successfully',
            error : 'Ohh No! something went wrong, Please try again'
        });
        const apiResponse = await response;
        return apiResponse;
    }
    catch(error){
        console.log(error);
        throw error;
    }
})

const AuthSlice  = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        
    }
});

export default  AuthSlice.reducer;


