import React from 'react'
import './hero.css'
import Navbar from './../navbar/Navbar';
import hero1 from './../../images/hero.png'
import hero2 from './../../images/h-r-1.png'
import hero3 from './../../images/h-r-2.png'
import hero4 from './../../images/h-r-4.png'
import hero5 from './../../images/h-r-5.png'
const Hero = () => {
    return (
        <>
            <section id='hero' >
                <div className="hero" id='home'>
                    <Navbar />
                    <div className="row">
                        <div className="hero-container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="hero-left">
                                        <div class="hero_svg">
                                            <img src={hero1} id="hero_svg_1" alt="" />
                                            <img src={hero1} id="hero_svg_2" alt="" />
                                            <img src={hero1} id="hero_svg_3" alt="" />
                                        </div>

                                        <div className="hero-content">
                                            <p >Front-End Web Developer</p>
                                            <h2 ><b>Huzaifa</b></h2>
                                            <h2 ><b>Umer</b></h2>
                                            <div className="hero-con-5-img">
                                                <img src={hero5} alt="" />
                                            </div>
                                            <div class="content" >
                                                <div class="title_line" >
                                                    <span style={{ height: '70px', width: '4px', marginRight: '30px', background: 'gray' }}></span>
                                                    <p >I’m a Full Stack Web Developer <br />
                                                        And I Work Remotely From Lahore</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="her-right-img">
                                            <img src={hero4} alt="" />
                                        </div>
                                    <div className="hero-right">
                                      
                                        <div class="hero_right_img">
                                            <img src={hero2} alt="" width={'100px'} />
                                            <img src={hero3} alt="" width={'100px'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero