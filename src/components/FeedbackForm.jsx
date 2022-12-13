import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import { useState } from "react";
const FeedbackForm = () => {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);

    //context api
    const { handleAdd } = useContext(FeedbackContext);

    const handleTextChange = (e) => {
        let inputText = e.target.value;
        if (inputText === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (inputText.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Text must be at least 10 characters");
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(inputText);
    };

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text, //or text: text
                rating: rating,
            };

            //add to app.js(lifting the state up)
            handleAdd(newFeedback);

            setText("");
            setBtnDisabled(true);

            //need to put back the rating to 10
            document.getElementById("num10").click();
        }
    };
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                {/* Rating select component  */}
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
