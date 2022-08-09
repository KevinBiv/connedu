import React from "react";
import './styles.css';
import logo from '../../../resources/connedu-logo.png';


class Navbar extends React.Component {
    render() {
        return(
            <>
                <div className="navbar-container">
                    <div className="navbar-logo-container">
                        <img src={logo} alt="" />
                        <h1>ConnEdu</h1>
                    </div>
                    <ul className="navbar-list">
                        <li><a className="home" href="null">Home</a></li>
                        <li><a href="null">Services</a></li>
                        <li><a href="null">Dashboard</a></li>
                    </ul>
                    <ul className="navbar-authentication-links">
                        <li><a href="null">Login</a></li>
                        <li><a href="null">Sign Up</a></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Navbar;