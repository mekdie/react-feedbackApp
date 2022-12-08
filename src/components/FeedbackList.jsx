import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, onDelete }) => {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>;
    }

    return (
        <div className="feedback-list">
            {/*  on every item in feedback return a feedbackitem */}
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default FeedbackList;
