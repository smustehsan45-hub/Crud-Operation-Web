import { useState } from "react"
import { useAuth } from "../store/auth"
const defaultContactForm={
  username:"",
  email:"",
  message:""
}
export const Contact =()=>{
    const [contact, setContact] = useState(defaultContactForm)
    const[userData,setUserData]=useState(true)

    const {user}=useAuth()
    if(userData && user){
      setContact({
        username:user.username,
        email:user.email,
        message:""
      })
      setUserData(false)
    }

    // handleinput values
    const handleInput=(e)=>{
        const name =e.target.name
        const value =e.target.value
        setContact({
            ...contact,
            [name]:value,
        })
    }
    // handle submit
    const handleSubmit=async(e)=>{
        e.preventDefault();
      try {
        const response=await fetch("http://localhost:3000/api/form/contact",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(contact)
        })
        if(response.ok){
          setContact(defaultContactForm)
          const data = await response.json();
          console.log(data);
          alert("Message sent Successfully")
        }
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <>
  <div className="section-contact">
  <div className="contact-content container"> {/* ya "contact-container" agar CSS use karna hai */}
    <h1 className="main-heading">Contact Us</h1>
  </div>

  <div className="container grid grid-two-cols">
    {/* left side image */}
    <div className="contact-img">
      <img src="/images/support.png" alt="we are here to help you" />
    </div>

    {/* right side form + map */}
    <section className="section-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={contact.username}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={contact.email}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            value={contact.message}
            onChange={handleInput}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {/* Map outside the form */}

      {/* <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section> */}
    </section>
  </div>
</div>


        </>
    )
}
