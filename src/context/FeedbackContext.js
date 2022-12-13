import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [newFeedback, setNewFeedback] = useState({ item: {}, edit: false });

    //useEffect
    useEffect(() => {
        fetchFeedback();
    }, []);
    //handle add
    const handleAdd = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]); //add new feedback on top of current feedback array (state) using spread operator
    };

    //Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(
            "http://localhost:5000/feedback?_sort=id&_order=asc"
        );
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
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
                isLoading,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
