import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import github_icon from '../../assets/github_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>Frontend Developer crafting modern web experiences.</p>
        </div>
        <div className="footer-top-right">
          <a href="https://www.linkedin.com/in/digitalafsar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>

          <a href="https://github.com/AfsarWebDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={github_icon} alt="GitHub" />
          </a>

          <a href="https://wa.me/919113613336" target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>
          2025 Afsar Ali. All right reserved
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer