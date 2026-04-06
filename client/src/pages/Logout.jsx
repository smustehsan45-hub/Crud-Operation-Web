import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


export const Logout =()=>{
    const {LogoutUser} = useAuth();
     const navigate=useNavigate()
    // remove the token from local storage
    useEffect(()=>{
        LogoutUser();
    },[LogoutUser])
    return <Navigate to="/login" />
}