import React from 'react'
import './Footer.css';
import logo from '../assets/Logocommunion.0485ada0760e4748313f.png'
import facebook from '../assets/facebook-svgrepo-com.svg';
import instagram from '../assets/instagram-svgrepo-com.svg';
import twitter from '../assets/twitter-154-svgrepo-com.svg';
import linkedin from '../assets/linkedin-svgrepo-com.svg';
import youtube from '../assets/youtube-svgrepo-com.svg';

const Footer = () => {
  return (
    <>
    <div className="parent-footer">
        <div className="up-content">
            <img src={logo} alt="" />

            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Join Us</li>
                <li>Get Involved</li>
                <li>Support Us</li>
            </ul>

            <div className="icon">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
            </div>
        </div>

        <div className="down-content">
            <p>Copyright &copy; 2025 Communion App. All right reserved</p>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Cookie Preference</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer
