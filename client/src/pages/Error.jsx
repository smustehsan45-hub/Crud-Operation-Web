import { NavLink } from "react-router-dom"

export const Error=()=>{
    return <>
    <div id="error-page">
        <div className=" content">
            <h2 className="header">404</h2>
            <h4>Sorry! Page not found</h4>
            <p>
                Oops! It seems like the page you are trying to access doesn'nt exist.
                If you believe there is an issue, feel free to report it, and we will look into it.
            </p>
            <div className="btns">
                <NavLink to="/">return home</NavLink>
                <NavLink to="/contact">report problem</NavLink>
            </div>
        </div>
    </div>
    </>
}