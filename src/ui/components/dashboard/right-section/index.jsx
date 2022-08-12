import React from "react";
import './styles.css';


class RightSection extends React.Component {
    render() {
        return(
            <div className="right-section-container">
                <div className="ask-question">
                    <button className="ask-question-btn">Ask A Question</button>
                </div>
                <div className="questions-answers">
                    <div className="questions">
                        <p>Questions</p>
                        <p className="numbers">999+</p>
                    </div>
                    <div className="answers">
                        <p>Answers</p>
                        <p className="numbers">555+</p>
                    </div>
                </div>
                <div className="right-section-navbar">
                    <button>Hot</button>
                    <button>Recent</button>
                    <button>Trending</button>
                </div>
            </div>
        )
    }
}

export default RightSection;