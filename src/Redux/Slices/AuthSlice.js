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

export const login = createAsyncThunk('/auth/login',async (data) =>{
    console.log("Incoming data to thunk",data);
    try{
        const response = axiosInstance.post('/auth/login',data);
        toast.promise(response ,{
            loading : 'Hold tight, we are getting you in...',
            success : 'Logged in successfully',
            error : 'Ohh No! something went wrong, Please try again'
        });
        const apiResponse = await response;
        return apiResponse;
    }
    catch(error){
        console.log(error);
        throw error;
    }
});


export const logout = createAsyncThunk('/auth/logout',async () =>{
    try{
        const response = axiosInstance.post('/auth/logout');
        toast.promise(response ,{
            loading : 'Logging out...',
            success : 'Logged out successfully',
            error : 'Ohh No! something went wrong, Please try again'
        });
        const apiResponse = await response;
        return apiResponse;
    }
    catch(error){
        console.log(error);
        throw error;
    }
});


const AuthSlice  = createSlice({
    name : 'auth',
    initialState,
    reducers : {},
    extraReducers  : (builder) =>{      //Redux passes this builder object by itself
        //changes in state after successful execution of thunk
        builder.addCase(login.fulfilled,(state,action) =>{  
            state.isLoggedIn = true,
            state.role = action?.payload?.data?.data?.userRole,
            state.data = action?.payload?.data?.data?.userData
            
            localStorage.setItem('isLoggedIn',true)
            localStorage.setItem('role',action?.payload?.data?.data?.userRole)
            localStorage.setItem('data',JSON.stringify(action?.payload?.data?.data?.userData));
        })


        builder.addCase(logout.fulfilled,(state) =>{  
            localStorage.clear();
            state.isLoggedIn = false 
        })

    }
});

export default  AuthSlice.reducer;


