import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './Data/hero.json'
import Typed from "typed.js"

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    
    const options = {
      strings : ["Welcome to my Profile. My name is Harsh Singh Chauhan. I am a Full Stack Developer."],
      typeSpeed:50,
      backSpeed:50,
      showCursor:false,
      loop:false
    }

    const typed = new Typed(typedRef.current, options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-right" data-aos-duration="1000">
          <h1 ref={typedRef}>
          </h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-left" data-aos-duration="1000">
            <img src={`/Images/${hero.imgSrc}`} alt="Hero" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
