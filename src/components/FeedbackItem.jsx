import React from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ item, onDelete }) => {
    return (
        <Card reverse={false}>
            {/* This is the children of Card */}
            <div className="num-display">{item.rating}</div>
            <button onClick={() => onDelete(item.id)} className="close">
                <FaTimes color="Purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedbackItem;
