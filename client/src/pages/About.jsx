import { NavLink } from "react-router-dom"
import { Analytics } from "../compenents/Analytics"
import { useAuth } from "../store/auth"
import { useState } from "react"

export const About =()=>{
    const [username,setUsername]=useState(true)
    const {user}=useAuth()
    if(username && user){
        setUsername({
            username:user.username
        })
        setUsername(false)
    }
    return <>
    <main>
        <section className="section-hero">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    {/* <p>Welcome to Our Website</p> */}
                      <p>Hi {user?.username || ""}, Welcome to our website</p>
                    <h1>Why  Choose Us</h1>
                    <p>
                       At our platform, we aim to provide a simple and reliable experience for users to connect and manage their information easily. Users can register, log in, and securely interact with the system without any hassle.
                    </p>
                    <p>
                       Our system is designed with efficiency and control in mind. Admins have the ability to manage users and contacts through complete CRUD operations, ensuring smooth handling of all data and maintaining system integrity.
                    </p>
                    <p>
                      We also focus on delivering dynamic content, where services are fetched directly from the database. This makes the platform flexible, scalable, and easy to update as the system grows.
                    </p>
                    <p>
                       Our goal is to build a fast, secure, and user-friendly application that solves real-world problems with clean and modern technology.
                    </p>
                    <div className="btn btn-group">
                        <NavLink to="/contact">
                        <button className="btn">Connect Now</button>
                        </NavLink>
                        <button className="btn secondary-btn">Learn More</button>
                    </div>
                </div>
                <div className="hero-img">
                <img src="/images/about.png" alt="coding budies" width="400" height="500" />
                </div>
            </div>
        </section>
    <Analytics />
    </main>
    </>
}