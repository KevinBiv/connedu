import React from "react";
import Card from "./card/card";
import './styles.css';


class Services extends React.Component {
    render() {
        return(
            <>
                <div className="services-container">

                        <Card 
                        title="Book an online live session"
                        content="The top lecturers in the nation are available for online booking. You may register for an account using your email address,  then book a live session for a time that works for you."
                        className="middle-card"
                        />

                        <Card 
                        title="Book an online live session"
                        content="The top lecturers in the nation are available for online booking. You may register for an account using your email address,  then book a live session for a time that works for you."
                        className="middle-card"
                        />

                        <Card 
                        title="Book an online live session"
                        content="The top lecturers in the nation are available for online booking. You may register for an account using your email address,  then book a live session for a time that works for you."
                        className="right-card"
                        />

                        <Card 
                        title="Book an online live session"
                        content="The top lecturers in the nation are available for online booking. You may register for an account using your email address,  then book a live session for a time that works for you."
                        />

                        <Card 
                        title="Book an online live session"
                        content="The top lecturers in the nation are available for online booking. You may register for an account using your email address,  then book a live session for a time that works for you."
                        />

                        <Card 
                        title="Book an online live session"
                        content="The top lecturers in the nation are available for online booking. You may register for an account using your email address,  then book a live session for a time that works for you."
                        />

                </div>
            </>
        )
    }
}

export default Services;