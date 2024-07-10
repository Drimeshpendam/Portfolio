import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';



const Footer = () => {
  return (
    <div className='footer'>
      
   
      <hr />
      <div className="footer-center-copy">
         <h2> © 2024 Drimesh Pendam. All rights reserved.</h2>        
       </div>

    </div>
  );
}

export default Footer;
