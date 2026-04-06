// import { set } from "mongoose";

import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
// context
export const AuthContext = createContext()
// provider
export const AuthProvider = ({children}) =>{
    const[token, setToken] = useState(localStorage.getItem("token"))
    const [user,setUser]=useState("")
    const [isLoading,setIsLoading]=useState(true)
    const[services,setServices]=useState([])
    const authorizationToken = `Bearer ${token}`
    const storeTokenInLs =(serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem("token", serverToken)
    }
    let isLoggedIn = !!token;
    console.log("isloogedin",isLoggedIn);
    // tackling the logout functionality
    const LogoutUser=()=>{
        setToken("")
        localStorage.removeItem("token")
    }
    //jwt authentication - to get currently loggedin user data
    const userAuthentication=async()=>{
        setIsLoading(true)
        try {
            const response = await fetch("http://localhost:3000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization: authorizationToken ,
                }
            })
            if(response.ok){
                const data = await response.json()
                console.log("user data",data.userData)
                setUser(data.userData)
                setIsLoading(false)

            } else{
                console.error("Error fetching user data");
                setIsLoading(false)
            }
        } catch (error) {
            console.log("error fetching user data");
            setIsLoading(false)
        }
    }
    // to fetch the services data from the database
    const getServices=async()=>{
        try {
            const response = await fetch("http://localhost:3000/api/data/service",{
                method:"GET",
            })
            if(response.ok){
                const data = await response.json()
                console.log(data.msg);
                setServices(data.msg)
            }
        } catch (error) {
            console.log(`services frontend error,${error}`);  
        }
    }
    useEffect(()=>{
        getServices()
        userAuthentication()
    },[])

    return <AuthContext.Provider value={{user,isLoggedIn,storeTokenInLs,LogoutUser,userAuthentication,services, authorizationToken, isLoading}}>
        {children}
    </AuthContext.Provider>
}
// consumer
// here useAuth is custom hook which will be used to consume the context value in any component
export const useAuth=()=>{
    const authContextValue = useContext(AuthContext)
    if(!authContextValue){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return authContextValue;
}
