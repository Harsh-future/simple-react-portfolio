import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { SiLeetcode } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";



const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"  data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://github.com/Harsh-future" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="https://leetcode.com/u/Harsh-541/" target="_blank" className="items">
            <SiLeetcode className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-chauhan-dailylife-2021/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.youtube.com/@HarshChauhan-i7s" target="_blank" className="items">
            <FiYoutube className="icons" />
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