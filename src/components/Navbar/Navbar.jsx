import React from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './navbar.css';
import logo from '../../assets/logo.svg';


const Navbar= () =>{
    return(
        <div className="gpt3__navbar">
            <div className="gp3__navbar-links">
                <div className="gp3__navbar-links-logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;