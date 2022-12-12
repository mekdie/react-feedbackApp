import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const handleAdd = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]); //add new feedback on top of current feedback array (state) using spread operator
    };
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm onAdd={(feedback) => handleAdd(feedback)} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} onDelete={handleDelete} />
            </div>
        </>
    );
}

export default App;
