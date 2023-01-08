import React, { useState, useEffect } from "react";
import TypeWriterEffect from 'react-typewriter-effect';


const HomePage = () => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", activateNavbar);
    }, [])

    function activateNavbar() {
        let windowPosition = window.scrollY > 0;

        windowPosition ? setActive(true) : setActive(false)

    }


    return (
        <>
            <div className="hero">
                <header className={`${!active ? "" : "scroll-active"}`}>
                    <div className="logo"><h1>Afo</h1></div>
                    <div className="burger" onclick="toggleNav(1)">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <div className="d-nav-con">
                        <nav className="d-nav">
                            <ul>
                                <li className="list"><a href="#skills">Skills</a></li>
                                <li className="list"><a href="#portfolio">Portfolio</a></li>
                                <li className="list"><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="m-nav">
                        <nav className="mobile-nav">

                        </nav>
                    </div>

                </header>
                <div className="in-hero">
                    <div className="hero-text h-border">
                        <h1>
                            <TypeWriterEffect
                                startDelay={100}
                                cursorColor="white"
                                multiText={[
                                    "Hi, My name is Afolabi Ogunbanwo.",
                                    "I am a Full Stack Developer.",
                                    "I build Responsive Webpages."
                                ]}
                                typeSpeed={100}
                                eraseSpeed={100}
                                multiTextLoop={true}
                            />
                        </h1>
                    </div>
                    <div className="hero-btn h-border">
                        <input type="button" value="Hire me" id="btn" className="animate__animated animate__heartBeat animate__delay-4s animate__repeat-3" />
                    </div>
                </div>
            </div>
            <section className="sec1" id="skills">
                <h1 className="title" style={{ marginBottom: "70px" }}>Skills</h1>
                <div className="skill-cards">
                    <div className="card">
                        <div className="image">
                            <img src="/img/images.png" alt="img" />
                        </div>
                        <div className="card-title">
                            <h2>HTML 5</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src="/img/css.png" alt="img" />
                        </div>
                        <div className="card-title">
                            <h2>CSS 3</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                            <img src="/img/js.jpg" alt="img" />
                        </div>
                        <div className="card-title">
                            <h2>JavaScript</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <h1 className="title" style={{ marginBottom: "70px" }}>Portfolio</h1>
                <div className="in-sec">
                    <div className="p-image">
                        <div className="image-box1">

                        </div>
                    </div>
                    <div className="description">
                        <div className="project-name  in-desc" >
                            <h1>Udemy Clone</h1>
                        </div>
                        <div className="project-description in-desc" >
                            <p>This is a Responsive website that looks exactly like the udemy website</p>
                        </div>
                        <div className="view-btn in-desc" >
                            <a href="https://demilade211.github.io/udemy-clone/"><button id="p-btn">View</button></a>
                        </div>
                    </div>
                </div>
                <div className="in-sec">
                    <div className="p-image">
                        <div className="image-box2">

                        </div>
                    </div>
                    <div className="description">
                        <div className="project-name  in-desc" >
                            <h1>Self Assessment App</h1>
                        </div>
                        <div className="project-description in-desc" >
                            <p>This is an app that guides you to live a better life</p>
                        </div>
                        <div className="view-btn in-desc" >
                            <a href="https://demilade211.github.io/self-asessment-app/"><button id="p-btn">View</button></a>
                        </div>
                    </div>
                </div>
                <div className="in-sec">
                    <div className="p-image">
                        <div className="image-box3">

                        </div>
                    </div>
                    <div className="description">
                        <div className="project-name  in-desc" >
                            <h1>Rando</h1>
                        </div>
                        <div className="project-description in-desc" >
                            <p>This is a betting app that uses random Numbers</p>
                        </div>
                        <div className="view-btn in-desc" >
                            <a href="https://demilade211.github.io/Rando/#"><button id="p-btn">View</button></a>
                        </div>
                    </div>
                </div>
            </section >
            <section id="contact">
                <h1 className="title" style={{ marginBottom: "70px" }}>Contact</h1>
                <div className="c-container">
                    <div className="contact-card animate__animated animate__delay-1s animate__fadeInDown">
                        <div><img src="/img/whatsapp.png" alt="img" /></div>
                        <div title><h3>Whatsapp</h3></div>
                        <div title><input type="button" value="chat" id="c-btn" /></div>
                    </div>
                    <div className="contact-card animate__animated animate__delay-2s animate__fadeInDown">
                        <div><img src="/img/gmail.png" alt="img" /></div>
                        <div title><h3>Gmail</h3></div>
                        <div title><input type="button" value="Send Mail" id="c-btn" /></div>
                    </div>
                </div>
            </section>
            <footer>
                <div><p>&copy Ogunbanwo Afolabi 2021 All Rights Reserved</p></div>
            </footer>
        </>
    )
}

export default HomePage