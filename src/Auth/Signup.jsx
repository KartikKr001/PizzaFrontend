import { useState } from "react";
import toast from "react-hot-toast";
import SignupPresentation from "./SignupPresentation";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";



function Signup(){
    const [signupState,setSignupState] = useState({
        firstName: "",
        email: "",
        password: "",
        mobileNumber: ""
    });


    const dispatch = useDispatch();
    const navigate = useNavigate();



    function handleUserInput(e){        //fetches  the input from the user
        const {name,value} = e.target;
        setSignupState({
            ...signupState,
            [name]: value
        });
    }

    async function handleUserSubmit(e){
        e.preventDefault();
        console.log("final signup state: ",signupState);

        // adding validations
        if(signupState.firstName === "" ||  signupState.email === "" || signupState.password === "" || signupState.mobileNumber === ""){
            toast.error("Please fill all the fields");
            return;
        }
        if(signupState.firstName.size < 5){
            toast.error("First Name must be 5 characters long");
            return;
        }

        const apiResponse = await dispatch(createAccount(signupState));
        console.log("res: ",apiResponse);
        if(apiResponse.payload.data.success){
            navigate('/auth/login');
        }
        else{
            
        }

        

    }
    return(
        <SignupPresentation 
            handleUserInput={handleUserInput}  
            handleUserSubmit={handleUserSubmit} 
            signupState={signupState} 
        />
    );
}

export default Signup;