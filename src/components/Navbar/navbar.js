import React from 'react'
import "./navbar.css"

import icon from "../images/Icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
    <div className='icondiv'>
<img src={icon} alt='member'/>
<h1>Nexcent</h1>
    </div>

   <div className='midnav'>

    <p>Home</p>
    <p>Service</p>
    <p>Feature</p>
    <p>Product</p>
    <p>Testimonial</p>
    <p>FAQ</p>

   </div>

   <div className='Logindiv'>
     <div className='login'><Link to="/login" style={{ textDecoration: "none",color:"#4CAF4F" }}><h1 className='loginh1'>Login</h1></Link></div>
    <Link to="/signup"><div className='signup'><h1>Signup</h1></div></Link>

   </div>
      
    </nav>
  )
}

export default Navbar