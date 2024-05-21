import React from 'react'
import './skill.css'
import s2 from '../../images/s2.png'

const Skill = () => {
  return (
    <>
        <section >
            <div className="skill" id='skills'>
                <div className="skill-title">
                    <h1>My Skills</h1>
                </div>
                <div className="row ab-row">
                    <div className="col-md-6">
                       <div className="skill-left">
                       <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Javascript</li>
                        <li>React</li>
                       </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill-right">
                        <li>MongoDB</li>
                        <li>My SQL</li>
                        <li>C++</li>
                        <li>OPP</li>
                        <li></li>
                        </div>
                    </div>
                    <div className="skill-design">
                    <img src={s2} alt="" width={'100px'} />
                </div>
                </div>
               
            </div>
        </section>
    </>
  )
}

export default Skill