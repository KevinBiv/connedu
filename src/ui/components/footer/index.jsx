import React from "react";
import './styles.css';
import twitter from '../../resources/twitter.png';
import facebook from '../../resources/facebook.png';
import instagram from '../../resources/instagram.png';


class Footer extends React.Component {
    render() {
        return(
            <>
                <div className="footer-container">
                    <h3 className="footer-title">FOLLOW US</h3>
                    <div className="social-media-links">
                        <ul>
                            <li className="social-item"><a href="null">
                                <img src={twitter} alt="" />    
                            </a></li>
                            <li className="social-item"><a href="null">
                                <img src={instagram} alt="" />    
                            </a></li>
                            <li className="social-item"><a href="null">
                                <img src={facebook} alt="" />    
                            </a></li>
                        </ul>
                    </div>
                    <p className="footer-copyright">Copyright@2022- ConnEdu all rights reserved</p>
                </div>
            </>
        )
    }
}

export default Footer;