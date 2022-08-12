import React from "react";
import './styles.css';
import pic1 from '../../../../resources/Ellipse 3.png';


class RightSectionCard extends React.Component {
    render() {
        return(
            <div className="right-section-card-container">
                <img src={this.props.image} alt="" />
                <p>{this.props.question}</p>
                <div className="">
                    <img src="" alt="" />
                </div>
            </div>
        )
    }
}

export default RightSectionCard;