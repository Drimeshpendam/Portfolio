import React from 'react';
import './Hero.css';
import Drim_pic from '../../assets/Drim_pic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ResumePDF from './Drimesh_Pendam.pdf'; // Import your resume PDF file

const Hero = () => {
  const openResume = () => {
    const link = document.createElement('a');
    link.href = ResumePDF; // Specify the path to your resume PDF
    link.download = 'Drim.pdf'; // Specify the desired file name for the download
    link.click();
  };

  return (
    <div id='home' className='hero'>
      <div className="hero-profile">
        <img src={Drim_pic} alt="" className='profile-img' />
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/drimesh-pendam/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Drimeshpendam" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://leetcode.com/u/DrimeshPendam/" target="_blank" rel="noopener noreferrer"><i className="fab fa-leetcode"></i></a>
          <a href="mailto:drimeshpendam@outlook.com"><i className="fas fa-envelope"></i></a>
          <a href="tel:+9325805716"><i className="fas fa-phone"></i></a>
        </div>
      </div>
      <h1><span>I'm Drimesh Pendam (EX-TCSer)</span> Full Stack Java Developer, India.</h1>
      <p style={{ textAlign: 'justify' }}>
        I am a skilled professional proficient in Core Java, Python, JavaScript, CSS, HTML, React JS, Django, and MySQL, with hands-on experience in Git/Github, Docker, and AWS EC2 deployment. Currently pursuing a Master of Computer Application at Pimpri Chinchwad College Of Engineering, I hold a distinguished Bachelor of Commerce (Computer Application) from Govindram Seksaria College of Commerce. At Tata Consultancy Services, Pune, I excelled as a Process Associate, managing insurance settlement claims and developing SOP documentation websites with HTML, CSS, and JavaScript. I've led significant projects like the IRCTC Website Backend Services using Java and the Food Delivery / Uber Map App with Python and Django, integrating Google Maps API and deploying with Docker on AWS EC2. Passionate about leveraging technology for efficiency and innovation, I thrive in collaborative environments and am committed to continuous learning and professional growth.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={openResume}>
          Download My Resume !
        </div>
      </div>
    </div>
  );
};

export default Hero;
