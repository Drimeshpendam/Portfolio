import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = () => {
  
  const [menu, setMenu] = useState("home");
  const [clickedButton, setClickedButton] = useState(null);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  }

  const handleButtonClick = (menuItem) => {
    setMenu(menuItem);
    setClickedButton(menuItem);
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
     
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' href='#home' offset={100}>
            <p onClick={() => handleButtonClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && clickedButton === "home" && <div className="button-border"></div>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => handleButtonClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && clickedButton === "about" && <div className="button-border"></div>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => handleButtonClick("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && clickedButton === "services" && <div className="button-border"></div>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => handleButtonClick("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && clickedButton === "work" && <div className="button-border"></div>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => handleButtonClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && clickedButton === "contact" && <div className="button-border"></div>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
        <p onClick={() => handleButtonClick("contact")} >Connect With Me</p>
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
