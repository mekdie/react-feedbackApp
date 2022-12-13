import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This item is feedback item 1",
            rating: 10,
        },
        {
            id: 2,
            text: "This item is feedback item 2",
            rating: 8,
        },
        {
            id: 3,
            text: "This item is feedback item 3",
            rating: 5,
        },
    ]);

    const [newFeedback, setNewFeedback] = useState({ item: {}, edit: false });

    //handle add
    const handleAdd = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]); //add new feedback on top of current feedback array (state) using spread operator
    };

    //handle edit
    const handleEdit = (item) => {
        setNewFeedback({ item, edit: true });
        // console.log(item);
    };

    //update feedback item
    const updateFeedback = (id, updatedItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updatedItem } : item
            )
        );
    };

    //handle delete context
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                handleDelete,
                handleAdd,
                handleEdit,
                newFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
