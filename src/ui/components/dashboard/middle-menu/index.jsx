import React from "react";
import QuestionCard from "../question-card";
import './styles.css';
import pic1 from '../../../resources/Ellipse 3.png';
import pic2 from '../../../resources/Ellipse 8.png';
import pic3 from '../../../resources/Ellipse 7.png';



class Questions extends React.Component {
    render() {
        return(
            <div className="questions-container">
                {/* <div className="text">
                    fklsajf
                </div>
                <div className="text2">
                    fjdlskfja
                </div> */}
                <QuestionCard className="question-card"
                user={pic1}
                upvotes={20}
                date="July 19, 2022"
                title="Was Ayman al-Zawahiri killed in Afghanistan?"
                question="As he was among the wanted men by USA, Ayman al-Zawahiri was killed by 
                the US drone strike in Afghanistan."
                answers="14 answers"
                views="20 views"
                />

                {/* <hr /> */}

                <QuestionCard className="question-card"
                user={pic2}
                upvotes={20}
                date="July 19, 2022"
                title="Was Ayman al-Zawahiri killed in Afghanistan?"
                question="As he was among the wanted men by USA, Ayman al-Zawahiri was killed by 
                the US drone strike in Afghanistan."
                answers="14 answers"
                views="20 views"
                />

                <QuestionCard className="question-card"
                user={pic3}
                upvotes={20}
                date="July 19, 2022"
                title="Was Ayman al-Zawahiri killed in Afghanistan?"
                question="As he was among the wanted men by USA, Ayman al-Zawahiri was killed by 
                the US drone strike in Afghanistan."
                answers="14 answers"
                views="20 views"
                />

                <QuestionCard className="question-card"
                user={pic1}
                upvotes={20}
                date="July 19, 2022"
                title="Was Ayman al-Zawahiri killed in Afghanistan?"
                question="As he was among the wanted men by USA, Ayman al-Zawahiri was killed by 
                the US drone strike in Afghanistan."
                answers="14 answers"
                views="20 views"
                />

                <QuestionCard className="question-card"
                user={pic2}
                upvotes={20}
                date="July 19, 2022"
                title="Was Ayman al-Zawahiri killed in Afghanistan?"
                question="As he was among the wanted men by USA, Ayman al-Zawahiri was killed by 
                the US drone strike in Afghanistan."
                answers="14 answers"
                views="20 views"
                />

                <QuestionCard className="question-card"
                user={pic3}
                upvotes={20}
                date="July 19, 2022"
                title="Was Ayman al-Zawahiri killed in Afghanistan?"
                question="As he was among the wanted men by USA, Ayman al-Zawahiri was killed by 
                the US drone strike in Afghanistan."
                answers="14 answers"
                views="20 views"
                />

                <QuestionCard className="question-card"
                user={pic1}
                upvotes={20}
                date="July 19, 2022"
                title="Was Ayman al-Zawahiri killed in Afghanistan?"
                question="As he was among the wanted men by USA, Ayman al-Zawahiri was killed by 
                the US drone strike in Afghanistan."
                answers="14 answers"
                views="20 views"
                />

                <QuestionCard className="question-card"
                user={pic2}
                upvotes={20}
                date="July 19, 2022"
                title="Was Ayman al-Zawahiri killed in Afghanistan?"
                question="As he was among the wanted men by USA, Ayman al-Zawahiri was killed by 
                the US drone strike in Afghanistan."
                answers="14 answers"
                views="20 views"
                />
            </div>
        )
    }
}

export default Questions;