import React from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackItem = ({ item }) => {
    const { handleEdit, handleDelete } = useContext(FeedbackContext);
    return (
        <Card reverse={false}>
            {/* This is the children of Card */}
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color="Purple" />
            </button>
            <button onClick={() => handleEdit(item)} className="edit">
                <FaEdit color="Purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedbackItem;
