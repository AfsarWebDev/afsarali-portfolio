import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Afsar Ali,</span> a frontend developer based in India.</h1>
      <p>I build modern, responsive web interfaces using React, JavaScript, and CSS.
        Actively seeking Frontend Developer roles and freelance projects.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">
          <a href="/resume.pdf" download="Afsar_Ali_Resume"> Download Resume </a>
        </div>
      </div>
    </div>
  )
}

export default Hero