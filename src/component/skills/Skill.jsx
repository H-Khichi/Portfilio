import React from 'react'
import './skill.css'
import s2 from '../../images/s2.png'
import skill1 from '../../images/html.png'
import skill2 from '../../images/css.png'
import skill3 from '../../images/js.png'
import skill4 from '../../images/react.png'
import skill5 from '../../images/mgdb.png'
import skill6 from '../../images/sql.png'
import skill7 from '../../images/c++.png'
import skill8 from '../../images/nodejs.png'
const Skill = () => {
    return (
        <>
            <section >
                <div className="skill" id='skills'>
                    <div className="skill-title">
                        <h1>My Skills</h1>
                    </div>
                    <div className="container">
                       
                            <div className="skill-imgs mt-4 mx-4">
                                <div className="skil-img">
                                    <img src={skill1} alt="" width={'100px'} />
                                </div>
                                <div className="skil-img">
                                    <img src={skill2} alt="" width={'130px'}  style={{marginTop:'-8px', marginRight:'10px'}}/>
                                </div>
                                <div className="skil-img">
                                    <img src={skill3} alt="" width={'100px'} />
                                </div>
                                <div className="skil-img">
                                    <img src={skill4} alt="" width={'100px'} />
                                </div>
                                <div className="skil-img">
                                <img src={skill5} alt="" width={'100px'} />
                                </div>
                                <div className="skil-img">
                                <img src={skill6} alt="" width={'100px'} />
                                </div>
                                <div className="skil-img">
                                <img src={skill7} alt="" width={'100px'} />
                                </div>
                                <div className="skil-img">
                                <img src={skill8} alt="" width={'100px'} />
                                </div>


                            <div className="skill-design">
                                <img src={s2} alt="" width={'100px'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill