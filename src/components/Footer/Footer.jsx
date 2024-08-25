import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faYoutube,faXTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
	<div className='footer'>
    <FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff",}} />
    <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
    <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} />
    <FontAwesomeIcon icon={faXTwitter} style={{color: "#ffffff",}} />
    <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
  </div>
  )
}

export default Footer