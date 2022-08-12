import React from "react";
import DashboardBody from "../../components/dashboard/body";
// import LeftMenu from "../../components/dashboard/left-menu";
import DashboardNavbar from "../../components/dashboard/navbar";
import './dashboard.css';


class Dashboard extends React.Component {
    render() {
        return(
            <div className="dashboard">
                <DashboardNavbar />
                <DashboardBody />
            </div>
        )
    }
}

export default Dashboard;