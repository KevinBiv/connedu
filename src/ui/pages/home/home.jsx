import React from "react";
import Footer from "../../components/footer";
import Banner from "../../components/home/banner";
import Navbar from "../../components/home/navbar";
import Services from "../../components/home/services";
import './home.css';

class HomePage extends React.Component {
    render() {
        return(
            <div className="homepage-container">
                <Navbar />
                <Banner />
                <Services />
                <Footer />
            </div>
        )
    }
}

export default HomePage;