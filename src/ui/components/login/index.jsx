import React from "react";
import './styles.css';
import loginPicture from '../../resources/login-picture.png';
import logo from '../../resources/connedu-logo.png';


class Login extends React.Component {
    render() {
        return(
            <>
                <div className="login-container">
                    <div className="left-login-container">
                        <img src={loginPicture} alt="" className="login-picture"/>
                        <p className="login-picture-text">
                        You’re wondering where to find some of the answers to the questions you face while studying, making research? Join our community and explore.
                        </p>
                    </div>
                    <div className="right-login-container">
                        <div className="login-logo-container">
                            <img src={logo} alt="" />
                            <h1>ConnEdu</h1>
                        </div>
                        <section className="login-form">
                            <h2>Login</h2>
                            <p className="login-form-description">Enter your email and password to login to our dashboard</p>
                            <form>
                                <label className="form-label" htmlFor="email-input">Email</label>
                                <input type="email" />
                                <section className="password-label-section">
                                    <label className="form-label" htmlFor="password-input">Password</label>
                                    <a href="null">Forgot Password?</a>
                                </section>
                                <input type="password" />
                                <button className="login-submit-btn" type="submit">Login</button>
                                <p className="signup-alternative-text">or don't have an account?</p>
                                <div className="login-signup-btns">
                                    <button className="login-student-signup">Student Account</button>
                                    <button className="login-lecturer-signup">Lecturer's Account</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;