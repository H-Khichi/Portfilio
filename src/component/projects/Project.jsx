import React from 'react'
import './project.css'
import p1 from './../../images/1.png'
import p2 from './../../images/2.png'
import p3 from './../../images/3.png'
import p4 from './../../images/4.png'
import p5 from './../../images/5.png'
import p6 from './../../images/6.png'

const Project = () => {
    return (
        <>
            <section>
                <div className="project">
                    <div className="project-title">
                        <h1>My Projects</h1>
                    </div>
                    <div className="container">
                        <div className="project-even">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <img src={p1} alt="" width={'90%'} />
                                </div>
                                <div className="col-md-6 mt-sm-3 ">
                                    <h1>Auroxa Tech</h1>
                                </div>
                            </div>
                        </div>
                        <div className="project-odd">
                            <div className="row">
                            <div className="col-md-6 order-2 order-md-1 mt-sm-3 ">
                                    <h1>Stics</h1>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <img src={p2} alt="" width={'90%'} />
                                </div>
                               
                            </div>
                        </div>
                        <div className="project-even">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={p3} alt="" width={'90%'} />
                                </div>
                                <div className="col-md-6 mt-sm-3 ">
                                    <h1>H_khichi</h1>
                                </div>
                            </div>
                        </div>
                        <div className="project-odd">
                            <div className="row">
                            <div className="col-md-6 order-2 order-md-1 mt-sm-3 ">
                                    <h1>Netflix </h1>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <img src={p4} alt="" width={'90%'} />
                                </div>
                                
                            </div>
                        </div>
                        <div className="project-even">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={p5} alt="" width={'90%'} />
                                </div>
                                <div className="col-md-6 mt-sm-3 ">
                                    <h1>Hotel</h1>
                                </div>
                            </div>
                        </div>
                        <div className="project-odd">
                            <div className="row">
                            <div className="col-md-6 order-2 order-md-1 mt-sm-3 ">
                                    <h1>Architecture</h1>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <img src={p6} alt="" width={'90%'} />
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project