import React from 'react'
import './footer.css'
import f1 from './../../images/Asset 28-8.png'
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-1">
                            <div className="col-md-6">
                                <div class="footer_1">
                                    <h1>Follow me</h1>
                                    <img src={f1} alt="" width={'100%'} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="social">
                                  <a href="https://www.linkedin.com/in/huzaifa-umer-01b324300/" ><FaLinkedin  style={{color:'#ff00ff', width:'70px', height:'70px'}}/></a>
                                  <a href="https://www.facebook.com/profile.php?id=100037410160995" ><FaFacebookSquare style={{color:'#ff00ff', width:'70px', height:'70px', marginLeft:'5px'}}/></a>
                                  <a href="https://www.instagram.com/h__khichi?igsh=MXBkbnAweWNnanM5aw%3D%3D&utm_source=qr" ><FaInstagramSquare style={{color:'#ff00ff', width:'70px', height:'70px', marginLeft:'5px'}}/></a>  
                                    
                                    
                                </div>
                            </div>
                            </div>
                            <div class="footer_bar_2"></div>
                        </div>
                        <div class="footer_2">
                            <h3 id="footer_name">Huzaifa Umer</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about_me">About Me</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#my_projects">My Projects</a></li>
                                <li><a href="#contact_me">Contect Me</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="powered_by">
                        <h4>Powered By <span>Huzaifa Umer</span></h4>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer