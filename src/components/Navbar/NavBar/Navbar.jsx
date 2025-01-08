import { useState } from 'react';
import "./Navbar.css";
import MobileNav from '../MobileNav/MobileNav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />{" "}
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <div className="logo-icon">
                        <a
                            className="logo link"
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.reload();
                            }}
                        >
                            V<span className="logo link">P</span>
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="#home" className="menu-item">
                                O nas
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="menu-item">
                                Co robimy
                            </a>
                        </li>
                        <li>
                            <a href="#orders" className="menu-item">
                                Zamówienia
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="menu-item">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={openMenu ? faXmark : faBars} />{" "}
                    </button>
                </div>
            </nav>
        </>
    );
};



export default Navbar;
