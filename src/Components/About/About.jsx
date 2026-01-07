import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_im from '../../assets/profile_im.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_im} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Currently, I work at Cimpress India as a WIX Website Designer, where I collaborate with cross-functional teams to design and develop high-quality websites for international clients. My experience has strengthened my understanding of UI/UX principles, responsive design, and real-world production workflows.</p>
                        <p>I’m now looking to transition fully into Frontend Developer roles, where I can leverage my expertise in React, JavaScript, CSS, and modern frontend tooling to build impactful digital products and grow with a forward-thinking team.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>CSS</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "55%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Tailwind CSS</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About