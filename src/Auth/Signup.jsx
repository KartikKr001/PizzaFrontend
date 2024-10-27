import { useState } from "react";
import toast from "react-hot-toast";
import SignupPresentation from "./SignupPresentation";

function Signup(){
    const [signupState,setSignupState] = useState({
        firstName: "",
        email: "",
        password: "",
        mobileNumber: ""
    });

    function handleUserInput(e){        //fetches  the input from the user
        const {name,value} = e.target;
        setSignupState({
            ...signupState,
            [name]: value
        });
    }

    function handleUserSubmit(e){
        e.preventDefault();
        console.log(signupState);

        // adding validations
        if(signupState.firstName === "" ||  signupState.email === "" || signupState.password === "" || signupState.mobileNumber === ""){
            toast.error("Please fill all the fields");
            return;
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