import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left"></div>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt=''/>
                <input type='email' placeholder='Enter your email'></input>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>	© 2024 Harshdeep singh. All rights reserved.</p>
            <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Contact with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer