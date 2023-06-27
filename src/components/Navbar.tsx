import { NavLink } from "react-router-dom";
import { activeLink, link, navLinks, navbar } from '../styles/navbar.css.ts';

function Navbar() {
    return (
        <nav className={navbar}>
            <h1 className="logo">Color Generator</h1>
            <ul className={navLinks}>
                <li
                className={link}
                >
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) => 
                             ` ${isActive ? activeLink : isPending ? "pending" : ''}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li
                className={link}
                >
                    <a href="https://github.com/Dellysn/color-generator.git">
                        Github
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
