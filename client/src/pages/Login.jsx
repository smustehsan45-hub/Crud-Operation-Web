import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

export const Login =()=>{
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const  {storeTokenInLs} = useAuth();
    const handleInput=(e)=>{
        let name= e.target.name;
        let value= e.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            console.log("login form",response);
            const res_data = await response.json();
            if(response.ok){
                console.log("response from server",res_data);
                // store the token in local storage
                storeTokenInLs(res_data.token)
                //  alert("Login successful");
                setUser({
                    email:"",
                    password:""
                })
                toast.success("Login Successfull")
                navigate("/")
               
            }else{
               toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
                console.log("invalid data");
            }
        } catch (error) {
            console.log("login",error);
        }
    }

    return <>
     <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registrarion-image">
                            <img src="/images/login.png" alt="login form" width="400" height="400" />
                        </div>
                        {/* lets tackle registrarion form */}
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Login form</h1>
                            <br />
                            <form onSubmit={handleSubmit} >
                    
                        
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="enter your email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
                        </div>

                      
                        
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
                        </div>
                        <br />
                        <button className="btn btn-submit">Register Now</button>

                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}
