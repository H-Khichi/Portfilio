import React, {  useState } from 'react';

import './navbar.css'
 const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
  return (
   <>
    <navbar>
            <div class="navbar">
                <div class="logo">
                    Huzaifa Umer
                </div>
                <div class={`nav_menu ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about_me">About</a></li>
                        <li><a href="#skills">skills</a></li>
                        <li><a href="#project">My Projects</a></li>
                        <li><a href="#contact_me">Contact</a></li>
                    </ul>
                </div>
               
                <div class="nav_btn">
                    <button>
                       <a href="#contact_me">Contact Me</a> 
                    </button>
                </div>

                <div class="hamburger" id="ham" onClick={toggleNavbar}>
                    <div class="ham_items"></div>
                    <div class="ham_items"></div>
                    <div class="ham_items"></div>
                </div>
            </div>
        </navbar>
   </>
  )
}
export default Navbar;
