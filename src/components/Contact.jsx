import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CgMail } from "react-icons/cg";


const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"  data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.google.com" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <BsTwitterX className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="mailto:harshchauhan.go@gmail.com" target="_blank" className="items">
            <CgMail className="icons" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact