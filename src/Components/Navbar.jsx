import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-brand">Portfolio</div>
            <div className="toggle-button" data-bs-toggle="offcanvas" onClick={toggle}>
                <span className={isOpen ? 'toggle-icon close' : 'toggle-icon'} >
                    {isOpen ? <IoClose /> : <GiHamburgerMenu />}
                </span>

            </div>
            <div className={isOpen ? 'navbar-links show' : 'navbar-links'}>
                <a href="#home" className="navbar-link">HOME</a>
                <a href="#experience" className="navbar-link">EXPERIENCE</a>
                <a href="#skills" className="navbar-link">SKILLS</a>
                <a href="#projects" className="navbar-link">PROJECTS</a>
                <a href="#contact" className="navbar-link">CONTACT</a>
            </div>
        </nav>
    );
}

export default Navbar;