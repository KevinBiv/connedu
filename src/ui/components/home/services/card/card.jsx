import React from "react";
import './card.css';

class Card extends React.Component {
    render() {
        return(
            <>
                {/* <div className="container"> */}
                    <div className="card">
                        <img src="" alt="" />
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-content">{this.props.content}</p>
                    </div>
                {/* </div> */}
            </>
        )
    }
}

export default Card;