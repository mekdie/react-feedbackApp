import React from "react";

const FeedbackStats = ({ feedback }) => {
    //calculate the ratings qty and average
    let average =
        feedback.reduce((prev, current) => prev + current.rating, 0) /
        feedback.length;

    //make the average 1 decimal place
    average = average.toFixed(1).replace(/[.,]0$/, "");

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {!isNaN(average) ? average : 0}</h4>
        </div>
    );
};

export default FeedbackStats;
