import './Home.css';
import Navbar from "../navbar/Navbar";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import About from '../about/About';

function Home() {

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Designer", "Developer", "Freelancer", "Photographer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });

        // cleanup (IMPORTANT in React)
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
        <div className="container-fluid home-bg" id='home'>
            <Navbar />
            <div className="cotainer">
                <div className="row justify-content-center align-items-center pb-5" style={{ height: "85vh" }}>
                    <div className="col-md-6 text-center">
                        <span className="home-txt fw-medium">Hi, I'm Guru Pandi</span>
                        <p className="text-white py-3 fs-3">I'm a <span className='home-color' ref={typedRef}></span></p>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <a className=' social-links' href="mailto:gurupandiguru1@gmail.com"><i className="bi bi-envelope text-white"></i></a>
                            <a className=' social-links' href="#"><i className="bi bi-facebook text-white"></i></a>
                            <a className=' social-links' href="https://www.instagram.com/guru.58_"><i className="bi bi-instagram text-white"></i></a>
                            <a className=' social-links' href="https://www.linkedin.com/in/gurupandimurugan58/"><i className="bi bi-linkedin text-white"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About />
        </>
    )
}

export default Home;