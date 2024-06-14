import React from 'react'
import "./herosection.css"

import Illustration from "../images/Illustration.png";
import dot from "../images/Dot.png";

const Herosection = () => {
  return (
    <div className='herosection'>
        <div className='frame11'>
            <h1>Lessons and insights <br/><span>from 8 years</span> </h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <button>Register</button>

        </div>
        <img src={Illustration}/>

        <img className="dot" src={dot}/>
      
    </div>
  )
}

export default Herosection
