import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Card from "./components/shared/Card";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import About from "./components/pages/About";

import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

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
        <BrowserRouter>
            <Header />
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <FeedbackForm
                                    onAdd={(feedback) => handleAdd(feedback)}
                                />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList
                                    feedback={feedback}
                                    onDelete={handleDelete}
                                />
                            </>
                        }
                    ></Route>

                    <Route path="/about" element={<About />} />
                    {/* <Route path="/post/:id/:name" element={<Post />} /> */}
                    <Route path="/post/*" element={<Post />} />
                </Routes>
                {/* <Card>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                    >
                        About
                    </NavLink>
                </Card> */}
            </div>
            <AboutIconLink />
        </BrowserRouter>
    );
}

export default App;
