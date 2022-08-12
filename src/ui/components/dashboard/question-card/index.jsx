import React from "react";
import './styles.css';
// import pic1 from '../../../resources/Ellipse 3.png';
import up from '../../../resources/up.png';
import down from '../../../resources/down.png';


class QuestionCard extends React.Component {
    render() {
        return(
            <>
            
            
            <div className="question-block">
                <div className="profile-pic-upvotes">
                    <img src={this.props.user} alt="" />
                    <div className="upvotes">
                        <button><img src={up} alt="" /></button>
                        <p>{this.props.upvotes}</p>
                        <button><img src={down} alt="" /></button>
                    </div>
                </div>
                <div className="question-and-answer">
                    <p>Asked {this.props.date}</p>
                    <div className="question">
                        <h3 className="question-title">{this.props.title}</h3>
                        <p className="question-content">{this.props.question}</p>
                    </div>
                    <div className="answers-and-views">
                        <div className="answers-views">
                            <button>
                                {this.props.answers}
                            </button>
                            <button>
                                {this.props.views}
                            </button>
                        </div>
                        <button className="answer-btn">
                            Answer
                        </button>
                    </div>
                </div>
            </div>

            </>
        )
    }
}

export default QuestionCard;