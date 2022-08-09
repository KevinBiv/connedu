import React from "react";
import './styles.css';
import logo from '../../../resources/connedu-logo.png';
import chevron from '../../../resources/chevron.png';
import bell from '../../../resources/bell.png';
import user from '../../../resources/user.png';
import {FiMoreHorizontal} from 'react-icons/fi';


class DashboardNavbar extends React.Component {
    render() {
        return(
            <>
                <div className="navbar-container">
                    <div className="navbar-logo-container">
                        <img src={logo} alt="" />
                        <h1 className="company-name">ConnEdu</h1>
                    </div>
                    <ul className="navbar-list">
                        <li><a href="null" className="home">Home</a></li>
                        <li><a href="null" className="about">About</a></li>
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