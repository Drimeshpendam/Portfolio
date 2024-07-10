import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Drim_rb from '../../assets/Drim_rb.png';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>My Technical Expertise</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Drim_rb} alt="" />          
        </div>
        <div className="about-right">          
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
            </div>
            <div className="about-skill">
              <p>React JS</p>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
            </div>
            <div className="about-skill">
              <p>Core Java</p>
            </div>
            <div className="about-skill">
              <p>Spring Boot</p>
            </div>
            <div className="about-skill">
              <p>Hibernate</p>
            </div>
            <div className="about-skill">
              <p>Spring Data JPA</p>
            </div>
            <div className="about-skill">
              <p>Core Python</p>
            </div>
            <div className="about-skill">
              <p>MySQL</p>
            </div>
            <div className="about-skill">
              <p>Django</p>
            </div>
            <div className="about-skill">
              <p>Git/Github</p>
            </div>
            <div className="about-skill">
              <p>Docker</p>
            </div>
            <div className="about-skill">
              <p>AWS EC2 Deployment</p>
            </div>
            <div className="about-skill">
              <p>Upgading More Skills. . .</p>
            </div>
          </div>
          <div className="about-para">
            <p>With over 2 years of immersive experience in tech, I specialize in Full Stack Java Development. At Tata Consultancy Services Pvt. Ltd, I led transformative projects focused on optimizing Mortgage automation apps and revolutionizing insurance loan settlements. I excel in crafting tailored solutions that prioritize performance and precision.</p>

            <p>Noteworthy achievements include spearheading the development of a robust E-commerce Website utilizing Java, Spring Boot, React, and MySQL, incorporating fortified payment gateways. Additionally, I designed an intuitive Inventory Management System, significantly enhancing operational efficiency.</p>
            <p>I bring a strong track record of delivering high-quality solutions and thrive in collaborative environments. I am passionate about leveraging my expertise in Java Developer Spring Boot roles to drive innovation and success.</p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2.5 +</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achievement">
          <h1>12 +</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achievement">
          <h1>5 +</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
