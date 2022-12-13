import { createContext, useState, useEffect } from "react";
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
    const handleAdd = async (newFeedback) => {
        const response = await fetch("/feedback", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        });
        const data = await response.json();
        setFeedback([data, ...feedback]);
        // newFeedback.id = uuidv4();
        // setFeedback([newFeedback, ...feedback]); //add new feedback on top of current feedback array (state) using spread operator
    };

    //Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch("/feedback");
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
    const updateFeedback = async (id, updatedItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedItem),
        });
        const data = await response.json();
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...data } : item
            )
        );
    };

    //handle delete context
    const handleDelete = async (id) => {
        await fetch(`/feedback/${id}`, {
            method: "DELETE",
        });

        //ui
        setFeedback(feedback.filter((item) => item.id !== id));
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
