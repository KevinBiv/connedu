import React from "react";
import './styles.css';
import home from '../../../resources/home.png';


class LeftMenu extends React.Component {
    render() {
        return(
            <div className="left-menu-container">
                <ul className="left-menu-list">
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Home</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>User Profile</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Communities</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Questions</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Polls</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Baddges</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Users</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Help</p>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeftMenu;