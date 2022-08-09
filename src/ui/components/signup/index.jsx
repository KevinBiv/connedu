import React from "react";
import './styles.css';
import signupPicture from '../../resources/signup-picture.png';
import logo from '../../resources/connedu-logo.png';


class SignUp extends React.Component {
    render() {
        return(
            <>
                <div className="login-container">
                    <div className="left-login-container">
                        <img src={signupPicture} alt="" className="login-picture"/>
                        <p className="signup-picture-text">
                        CREATE YOUR ACCOUNT FOR FREE 100%
                        </p>
                    </div>
                    <div className="right-login-container">
                        <div className="login-logo-container">
                            <img src={logo} alt="" />
                            <h1>ConnEdu</h1>
                        </div>
                        <section className="login-form">
                            <form>
                                <input type="email" placeholder="Names" />
                                <input type="email" placeholder="Email" />
                                <input type="email" placeholder="Password" />
                                <input type="email" placeholder="Confirm Password" />
                                <input type="email" placeholder="Academic Level" />
                                <input type="email" placeholder="Phone Number" />
                                <button className="login-submit-btn" type="submit">Sign Up</button>
                            </form>
                        </section>
                    </div>
                </div>
            </>
        )
    }
}

export default SignUp;