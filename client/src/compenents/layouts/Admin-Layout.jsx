import { Navigate, NavLink, Outlet } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { useAuth } from "../../store/auth";
export const AdminLayout = () => {
    const {user, isLoading} = useAuth();
    console.log("admmin layout", user);

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
    return <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li> <NavLink to="/admin/users"><FaUser /> Users</NavLink></li>
                        <li> <NavLink to="/admin/contacts"><MdContactPage /> Contacts</NavLink></li>
                        <li> <NavLink to="/admin/services"><MdMiscellaneousServices /> Services</NavLink></li>
                        <li> <NavLink to="/admin"><IoMdHome /> Home</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
    </>
}