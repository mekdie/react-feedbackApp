import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

import { useState } from "react";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} onDelete={handleDelete} />
            </div>
        </>
    );
}

export default App;
