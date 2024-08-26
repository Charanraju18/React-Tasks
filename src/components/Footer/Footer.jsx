import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faYoutube,faXTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../../../public/logo.png'
function Footer() {
  return (
	<div className='footer'>
    <div className='icons'>
    <FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff",}} className='social_media_icons'/>
    <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} className='social_media_icons' />
    <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} className='social_media_icons' />
    <FontAwesomeIcon icon={faXTwitter} style={{color: "#ffffff",}} className='social_media_icons' />
    <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} className='social_media_icons' />
    </div>
    <hr />
    <div className='footer_logo'>
      <hr className='logo_hr hr1'/>
    <a  href="#"><img src={logo} width={100} height={90} style={{margin: "auto"}}/></a>
      <hr className='logo_hr hr2'/>
    </div>
  </div>
  )
}

export default Footer