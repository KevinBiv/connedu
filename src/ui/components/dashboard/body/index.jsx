import React from "react";
import LeftMenu from "../left-menu";
import Questions from "../middle-menu";
import RightSection from "../right-section";
import './styles.css';


class DashboardBody extends React.Component {
    render() {
        return(
            <div className="dashboard-body-container">
                <LeftMenu />
                <Questions />
                <RightSection />
            </div>
        )
    }
}

export default DashboardBody;