import React from "react";
import "./footer.css";
import icon from "../images/icon1.png";
import ig from "../images/ig.png";
import Social1 from "../images/Social2.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import send from "../images/send.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <h1>Pellentesque suscipit fringilla libero eu.</h1>
        <button>Get a Demo</button>
      </div>
      <div className="footer2">
        <div className="foo1">
          <div className="foo11">
            <img src={icon} alt='member'/>
            {/* <h1>Nexcent</h1> */}
          </div>
          <div className="foo12">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>

          <div className="foo13">
            <img src={ig} alt='member'/>
            <img src={Social1} alt='member' />
            <img src={twitter} alt='member'/>
            <img src={youtube} alt='member'/>
          </div>
        </div>
        <div className="foo2">
          <div className="foo21">
            <div>
              {" "}
              <h3>Company</h3>
            </div>
            <div className="foo8">
              <p>About us</p>
              <p>Blog</p>
              <p> Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>
          <div className="foo22">
            <div>
              <h3>Support</h3>
            </div>
            <div className="foo8">
              {" "}
              <p>Help center</p>
              <p>Terms of service</p>
              <p> Legal</p>
              <p>Privacy policy</p>
              <p>Status</p>
            </div>
          </div>
          <div className="foo23">
            <div>
              <h3>Stay up to date</h3>
            </div>
            <div className="inpg">
              <input type="email"  className="gang" placeholder="Your email address"  /> <img src={send} alt='member'/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
