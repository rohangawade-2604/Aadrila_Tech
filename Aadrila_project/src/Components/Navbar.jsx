import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Images/logo-p.png";
import LogoText from "../assets/Images/logo-name.png";
import "../CSS_Components/Navbar.css";


export const Navbar = ({
  scrollToSection,
  industriesRef,
  productRef,
  blogsRef,
  contactRef,
}) => {


  return (
    <section className='nav-sec'>
      <div className="container nav-container">
        <div className="Navbar">

          <div className="logo">
            <img src={logo} alt="" />
            <img src={LogoText} alt="" />
          </div>

          <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
              </li>
              <li><Link onClick={() => scrollToSection(industriesRef)}>Industries</Link></li>
              <li><Link onClick={() => scrollToSection(blogsRef)}>Blogs</Link></li>
              <li><Link onClick={() => scrollToSection(productRef)}>Products</Link></li>
              <li><Link onClick={() => scrollToSection(contactRef)}>Contact</Link></li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>

          <div className="button">
            <button className='button-primary'>Get a Demo</button>
          </div>
        </div>
      </div>
    </section>

  );
};


