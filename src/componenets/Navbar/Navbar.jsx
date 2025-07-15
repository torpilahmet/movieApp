import React from 'react'
import './Navbar.css'
import {PiFilmReelFill} from "react-icons/pi";
import {FaHeart, FaHome} from "react-icons/fa";
import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <Link to="/">
                    <h1>MovieApp</h1>
                </Link>
            </div>
            <div className="center">
                <PiFilmReelFill/>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <Link to="/">
                            <FaHome/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/my-list">
                            <FaHeart/>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
