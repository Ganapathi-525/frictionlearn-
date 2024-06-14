import React from "react";
import "./body.css";
import mobile from "../images/mobileunlock.png";

import members from "../images/members.png";
import payment from "../images/payment.png";
import club from "../images/club.png";
import tesla from "../images/Tesla.png";

import mobileLogin from "../images/mobilelogin.png";

import frame1 from "../images/frame1.png";
import frame2 from "../images/frame2.png";
import frame3 from "../images/frame3.png";
import frame4 from "../images/frame4.png";
import frame5 from "../images/frame5.png";
import frame6 from "../images/frame6.png";
import event from "../images/event.png";

import laptop1 from "../images/image18.png";
import laptop2 from "../images/image19.png";
import laptop3 from "../images/image20.png";

const BodyPage = () => {
  return (
    <div className="bodypage">
      <div className="Unlock">
        <img src={mobile} alt='member'/>
        <div>
          {" "}
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="Achivements">
        <div className="Achivements1">
          <h1>
            Helping a local <span>business reinvent itself</span>
          </h1>

          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="Achivements2">
          <div>
            <div>
              <img src={members} alt='member'/>
              <div>
                <h1>2,245,341</h1>
                <p>Members</p>
              </div>
            </div>

            <div>
              {" "}
              <img src={club} alt='member' />
              <div>
                <h1>46,341</h1>
                <p>Clubs</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src={event} alt='member' />
              <div>
                {" "}
                <h1>828,867</h1>
                <p>Event Bookings</p>
              </div>
            </div>

            <div>
              {" "}
              <img src={payment} alt='member'/>
              <div>
                {" "}
                <h1>1,926,436</h1>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Calenders">
        <div className="Calenders1">
          <img src={mobileLogin} alt='member'/>
        </div>

        <div className="Calenders2">
          <h1>
            How to design your site footer like <br /> we did
          </h1>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="Custmore">
        <div className="Custmore1">
          <img src={tesla} alt='member'/>
        </div>
        <div className="Custmore2">
          <div className="content">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h2>Tim Smith</h2>
            <p>British Dragon Boat Racing Association</p>
            <div className="Frame">
              <div className="frame1">
                <img src={frame1} alt='member'/>
                <img src={frame2} alt='member'/>
                <img src={frame3} alt='member'/>
                <img src={frame4} alt='member'/>
                <img src={frame5} alt='member'/>
                <img src={frame6} alt='member'/>
              </div>
              <div className="frame2">
                <h2>Meet all customers</h2>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Commmunity">
        <div className="commun1">
          <h1>Caring is the new marketing</h1>
          <p>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className="commun2">
          <div>
            <img src={laptop1} alt='member'/>
            <div className="con">

              <p>
             
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <h4>Readmore</h4>
            </div>
          </div>
          <div>
           
            <img src={laptop2} alt='member'/>
            <div className="con">
              <p>
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <h4>Readmore</h4>
            </div>
          </div>
          <div>
    
            <img src={laptop3} alt='member'/>
            <div className="con">
              <p>Revamping the Membership Model with Triathlon Australia</p>
              <h4>Readmore</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyPage;
