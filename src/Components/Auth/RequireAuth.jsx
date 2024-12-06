import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Denied from "../../Pages/Denied";

function RequireAuth({userRole}){
    const { isLoggedIn ,role } = useSelector(state => state.auth);
    console.log("user: ",userRole);
    console.log("role:",role);
    if(isLoggedIn){
        if(role == 'ADMIN'){
            return <Outlet />;
        }
        else if(role != 'ADMIN' &&  userRole == 'ADMIN'){
            return <Denied />;
        }
        else return <Outlet/>
    }
    else return <Navigate to={'/auth/login'}/>
}

export default RequireAuth;