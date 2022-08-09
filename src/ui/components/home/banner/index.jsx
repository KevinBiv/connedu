import React from "react";
import './styles.css';
import bannerImg from '../../../resources/connedu-banner-img.png';


class Banner extends React.Component {
    render() {
        return(
            <>
                <div className="banner-container">
                    <div className="banner-text">
                        <div className="banner-text-box">
                        
                        </div>
                        <h1 className="banner-title">Join the best education from 
                        the best lecturers</h1>
                        <p className="banner-description">
                            Do you need help, have a question? Join us
                            and meet the best professors in the country!
                        </p>
                        <button className="banner-call_to_action">Get Started</button>
                    </div>
                    <div className="banner-img-container">
                        <div className="banner-img-upper-box">

                        </div>
                        <img src={bannerImg} alt="" className="banner-img" />
                        <div className="banner-img-lower-box">

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Banner;