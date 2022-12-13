import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";

import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
    return (
        <FeedbackProvider>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
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
        </FeedbackProvider>
    );
}

export default App;
