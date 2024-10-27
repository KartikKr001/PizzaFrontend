import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn') === true || false,
    role : localStorage.getItem('role') || '',
    data : JSON.parse(localStorage.getItem('data')) || {}
    // local storage m as a string store hota h, we need  to parse it to object
}

const AuthSlice  = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        
    }
});

export default  AuthSlice.reducer;


