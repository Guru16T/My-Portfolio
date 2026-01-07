import './Nav.css';

function Navbar() {
    return (
        <>
            <nav className="navbar d-flex align navbar-expand-lg">
                <div className="container-fluid py-3 px-4">
                    <a className="navbar-brand text-white fs-3 fo" href="#">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-2 mb-lg-0">
                            <li className="nav-item nav-gap">
                                <a className="nav-link nav-txt" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-txt" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-txt" href="#resume">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-txt" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-txt" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-danger rounded-5 px-3 py-2" href="mailto:gurupandiguru1@gmail.com">Message</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;