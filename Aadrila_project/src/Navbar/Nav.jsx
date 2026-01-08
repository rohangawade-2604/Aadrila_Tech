import React from 'react'
import logo from '../assets/Images/logo-p.png'
import logo_name from '../assets/Images/logo-name.png'
import { NavLink } from 'react-router-dom'
import './nav.css'

export const Nav = () => {

    const links = [
        {name: 'Home', path: '/'},
        {name: 'Industries', path: 'industries'},
        {name: 'Products', path: '/product'},
        {name: 'Blog', path: '/blog'},
        {name: 'Contact Us', path: '/contact_us'},
        {name: 'About Us', path: '/about_us'},
    ];


    const defaultStyle = {
        color: "black"
    }

    const activeStyle = {
        color: "blue"
    }
  return (
  <>
    <div className="navbar">
        <div className="container ">

            <div className="logo">
                <img src={logo} alt="" />
                <img src={logo_name} alt="" />
            </div>

            <div className="nav-links ">
                {
                    links.map((data) => (
                        <NavLink
                        key={data.path}
                        to={data.path}
                        style={({ isActive}) => (isActive ? activeStyle : defaultStyle)}
                        end
                        >
                            {data.name}
                        </NavLink>
                    ))
                }
            </div>

            <div className="button">
                <button className='button-primary'>Get a Demo</button>
            </div>
        </div>
    </div>
  </>
  )
}


