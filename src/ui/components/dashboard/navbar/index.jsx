import React from "react";
import './styles.css';
import logo from '../../../resources/connedu-logo.png';
import chevron from '../../../resources/chevron.png';
import bell from '../../../resources/bell.png';
import user from '../../../resources/user.png';
import {FiMoreHorizontal} from 'react-icons/fi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillLock} from 'react-icons/ai';


class DashboardNavbar extends React.Component {
    render() {
        return(
            <>
                <div className="navbar-container">
                    <GiHamburgerMenu className="hamburger-menu" />
                    <div className="navbar-logo-container">
                        <img src={logo} alt="" className="company-logo" />
                        <h1 className="company-name">ConnEdu</h1>
                    </div>
                    <AiFillLock className="lock" />
                    <ul className="navbar-list">
                        <li className="home"><a href="null">Home</a></li>
                        <li className="about"><a href="null">About</a></li>
                        <li className="blog"><a href="null">Blog</a></li>
                        <li className="contact"><a href="null" >Contact</a></li>
                        <li><button><FiMoreHorizontal className="more-menus" /></button></li>
                    </ul>
                    {/* <button className="more-menus">
                        
                    </button> */}
                    <ul className="navbar-account-list">
                        <input type="search" placeholder="Type search" className="dashboard-search-bar" />
                        <div className="logged-in-user">
                            <img src={user} alt="" className="user-img" />
                            <div className="logged-in-user-text">
                                <p>logged in as</p>
                                <p className="username">Ntwali David</p>
                            </div>
                        </div>
                        <button><img src={chevron} alt="" /></button>
                        <button><img src={bell} alt="" /></button>
                    </ul>
                </div>
            </>
        )
    }
}

export default DashboardNavbar;