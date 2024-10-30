import LoginPresentation from "./LoginPresentation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { login } from "../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function Login(){
    const [loginState,setloginState] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleUserInput(e){        //fetches  the input from the user
        const {name,value} = e.target;
        setloginState({
            ...loginState,
            [name]: value
        });
    }

    async function handleUserSubmit(e){
        e.preventDefault();
        console.log("final login state: ",loginState);

        // adding validations
        if(loginState.email === "" || loginState.password === ""){
            toast.error("Please fill all the fields");
            return;
        }

        const apiResponse = await dispatch(login(loginState));
        
        if(apiResponse.payload.data.success){
            navigate('/')
        }
    }
    return(
        <LoginPresentation 
            handleUserInput={handleUserInput}  
            handleUserSubmit={handleUserSubmit} 
            loginState={loginState} 
        />
    );
}

export default Login;