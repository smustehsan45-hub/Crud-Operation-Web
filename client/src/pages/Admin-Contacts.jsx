import { useEffect, useState } from "react"
import {useAuth} from "../store/auth"
import {toast} from "react-toastify"

export const AdminContacts = ()=>{
    const {authorizationToken} = useAuth();
    const [contactData, setContactData] = useState([])
    const getContactsData = async()=>{
        try {
            const response = await fetch("http://localhost:3000/api/admin/contacts",{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                }
            })
            const data = await response.json();
            console.log("contact data",data);
            if(response.ok){
                setContactData(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    // defininf the deleteContactById
    const deleteContactById =async(id)=>{
try {
    const response = await fetch(`http://localhost:3000/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{ 
            "Content-Type": "application/json",
            Authorization: authorizationToken,
        }
    })
    const data = await response.json();
    console.log("delete contact data",data);
    if(response.ok){
        getContactsData()
        toast.success("Contact Deleted Successfully")

    }

} catch (error) {
    toast.error("Error deleting contact")
}

    }
    useEffect(()=>{
        getContactsData();
    },[])
        return (
  <>
    <section className="admin-contacts-section">
      <h1>Admin Contact Data</h1>

      <div className="container admin-users">
        {contactData.map((curContactData, index) => {
          const { username, email, message,_id } = curContactData;

          return (
            <div key={index}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{message}</p>
              <button className="btn" onClick={()=> deleteContactById(_id)}>delete</button>
            </div>
          );
        })}
      </div>
    </section>
  </>
);
}