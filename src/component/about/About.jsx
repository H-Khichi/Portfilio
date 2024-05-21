import React from 'react'
import './about.css'
import a2 from '../../images/a2.png'
import a3 from '../../images/a3.png'
import a4 from '../../images/a4.png'
import a5 from '../../images/a5.png'
const About = () => {
    return (
        <>
            <section>
                <div className="about" id='about_me'>
                    <div className="row ab-row">
                        <div className="col md-6">
                            <div className="about-left">
                                <h1>About <br /> me</h1>
                                <img src={a2} alt="" width={'80%'} style={{margin:'50px'}}/>
                                <img src={a3} alt="" width={'10%'} id='ab-3'/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-right">
                            <div className="about-desgn">
                                    <img src={a5} alt="" />
                                </div>
                                <p>Hi, I'm Huzaifa Umer, a front-end developer with 6 months of experience at Aroux Tech. I specialize
                                    in creating engaging and functional user interfaces. Excited to contribute my skills and knowledge
                                    to future projects!
                                </p>
                                <button className="about-btn">Contact me</button>
                            </div>
                        </div>
                        <div className="ab-design">
                            <img src={a4} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;
