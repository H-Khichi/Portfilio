import React from 'react'
import './contact.css'
import c1 from './../../images/c1.png'
import c2 from './../../images/c2.png'
import c3 from './../../images/c3.png'
import whatsapp from './../../images/icons8-whatsapp.svg'
const Contact = () => {
    return (
        <>
            <section>
                <div class="contact_sec" id="contact_me">
                    <img src={c1} alt="" id='con-img' />
                    <div class="contact_title">
                        <h1>Contact Me</h1>
                    </div>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <div class="input">
                            <div className="con-d-2">
                                <img src={c2} alt="" width={'150px'} height={'300px'} />
                            </div>
                            <input type="hidden" name="access_key" value="540fe866-1f06-48ae-be4e-69f7b16ebe9b" />

                            <label for="name">Full Name*</label><br />
                            <input type="text" placeholder="Enter your name..." /><br />
                            <label for="ename">Email*</label><br />
                            <input type="email" placeholder="Enter your Email..." /><br />
                            <label for="mname">Message*</label><br />
                            <textarea name="mname" id="mess" cols="53" rows="6" placeholder="Enter your message..."></textarea>


                        </div>
                        <div class="contact_btn">
                            <div className="con-d-3">
                                <img src={c3} alt="" />
                            </div>
                            <button id="submit_btn">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="whatsapp-icon">
                      <a href='https://wa.me/03090444094'><img src={whatsapp} alt="" width={'110px'}/></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact