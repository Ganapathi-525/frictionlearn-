import React from 'react'
import "./client.css"

import logo1 from '../images/logo1.png'
import logo2 from '../images/Logo2.png'
import logo3 from '../images/Logo3.png'
import logo4 from '../images/Logo4.png'
import logo5 from '../images/Logo5.png'
import logo6 from '../images/Logo6.png'
import logo7 from '../images/Logo7.png'
// import logo1 from '../images/logo1.png'

const Client = () => {
  return (
    <div className='client'>
        <div className='client1'>
            <h1>Our Clients</h1>
            <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='client2'>
           
           <img src={logo1} alt='member'/>
           <img src={logo2} alt='member'/>
           <img src={logo3} alt='member'/>
           <img src={logo4}alt='member'/>
           <img src={logo5}alt='member'/>
           <img src={logo6}alt='member'/>
           <img src={logo7}alt='member'/>
           {/* <img src={logo1}/> */}

        </div>
      
    </div>
  )
}

export default Client
