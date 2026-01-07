import "./resume.css"

function Resume() {
    return (
        <>
            <div className="container" id="resume">
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <div className="timeline-card experience-card" data-aos="fade-up-right">
                                    <span className="timeline-icon">
                                        <i className="bi bi-briefcase"></i>
                                    </span>
                                    <span className="timeline-badge">INTERNSHIP</span>

                                    <h4>Frontend Developer</h4>
                                    <p className="timeline-sub">Startup / Hermon Solution</p>

                                    <span className="timeline-date">Nov 2024 – Present</span>

                                    <p className="timeline-desc">
                                        Worked on building responsive web applications using React, Javascript,
                                        Bootstrap, Css and HTML. Focused on clean code and API integration.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-4">
                                <div className="timeline-card experience-card" data-aos="fade-up-right">
                                    <span className="timeline-icon">
                                        <i className="bi bi-briefcase"></i>
                                    </span>
                                    <span className="timeline-badge">INTERNSHIP</span>

                                    <h4>Web Development</h4>
                                    <p className="timeline-sub">Startup / Code Interns</p>

                                    <span className="timeline-date">May 2024 – June 2024</span>

                                    <p className="timeline-desc">Gaining hands-on experience in HTML, CSS, and JavaScript. Developing web pages while learning modern front-end practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <div className="timeline-card education-card" data-aos="fade-up-left">
                                    <span className="timeline-icon">
                                        <i className="bi bi-mortarboard"></i>
                                    </span>

                                    <span className="timeline-badge">EDUCATION</span>

                                    <h4>Master of Science</h4>
                                    <p className="timeline-sub">Computer Science</p>

                                    <span className="timeline-date">2023 – 2025</span>

                                    <p className="timeline-desc">
                                        Studied core Computer Science, covering subjects like Algorithms, Computer Networks, Software Engineering, and Artificial Intelligence.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12 mb-4">
                                <div className="timeline-card education-card" data-aos="fade-up-left">
                                    <span className="timeline-icon">
                                        <i className="bi bi-mortarboard"></i>
                                    </span>

                                    <span className="timeline-badge">EDUCATION</span>

                                    <h4>Bachelor of Science</h4>
                                    <p className="timeline-sub">Computer Science</p>

                                    <span className="timeline-date">2020 – 2023</span>

                                    <p className="timeline-desc">
                                        Studied core Computer Science, subjects including Data Structures,
                                        Databases, Operating Systems, and Web Technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;