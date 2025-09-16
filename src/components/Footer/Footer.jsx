import React from 'react'
import './Footer.css'
import {Youtube, Instagram, Facebook, Twitter} from 'lucide-react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <Youtube />
        <Instagram />
        <Twitter />
        <Facebook />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">
        © 1997-2025 Netflix, Inc.
      </p>
    </div>
  )
}

export default Footer