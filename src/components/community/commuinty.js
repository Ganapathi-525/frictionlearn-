import React from 'react'
import './community.css'

import group from "../images/group.png"
import member from "../images/member.png"
import nation from "../images/national.png"

const Community = () => {
  return (
    <div className='community'>

        <div className='community1'>
            <h1>Manage your entire community in a single system</h1>
            <br/>
            <p>Who is Nextcent suitable for?
            </p>
        </div>
        <div className='community2'>
             
             <div>
            <img src={member}/>
            <h1>Membership <br/> Organisations</h1>
            <p>Our membership management  software provides full automation of  membership renewals and payments</p>

             </div>

             <div>
             <img src={nation}/>
             <h1>National  <br/> Associations</h1>
            <p>Our membership management  software provides full automation of  membership renewals <br/> and payments</p>

             </div>

             <div>
             <img src={group}/>
             <h1>Clubs And   <br/> Groups</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>

             </div>

        </div>
      
    </div>
  )
}

export default Community
