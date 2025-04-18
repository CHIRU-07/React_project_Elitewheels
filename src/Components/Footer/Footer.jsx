import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='Footer'>
      <div id="Ft">
        <div id="brand">
          <p> Elite Wheels a leading car rental company offers rental cars for Long Drive in Hyderabad and various other cities. Elite wheelz offer a huge selection of cars ranging from luxury suvs or a sensible sedan.</p>
        </div>

        <div id="branches">
          <h3>Our Branches</h3>
          <p>Hyderabad</p>
          <p>Vizag</p>
          <p>Bengaluru</p>
          <p>Chennai</p>
          <p>Mumbai</p>
          <p>Delhi</p>
          <p>Kolkata</p>

          
        </div>
        <div id="links">
          <h3>Social Media Links</h3>
          <FaFacebook size={25} id="fb" style={{color:"#1877f2"}}/>
          <FaInstagram size={25} id="insta" style={{color:"#E4405F"}}/>
          <FaLinkedin size={25} id="lin" style={{color:"#0077B5"}}/>
          <FaWhatsapp size={25} id="wa" style={{color:"#25D366"}}/>
        </div>
        <div id="contactandaddress">
          <div id="contact">
            <h3 >Contact Info</h3>
            <div id="number">
              <p>Telangana, AP</p>
              <h3>9000-478-478</h3>
            </div>
          </div>
          <div id="address">
            <h3>Head Office Location</h3>
            <p>Elite Wheels, Pillar No 129, Main Road, beside Medipally, Medipally, Hyderabad, Telangana 500098</p>
          </div>

        </div>
        <img id="cityimg" src="" />
      </div>
      <div id="Fbottom">
        <marquee id="copyrights" direction="right">&copy; Elite Wheels Private Limited.All Rights Reserved</marquee>
      </div>
    </div>


  )
}

export default Footer
