import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = ({ feedback, onDelete }) => {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>;
    }

    return (
        <div className="feedback-list">
            {/* <AnimatePresence> */}
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        onDelete={onDelete}
                    />
                </motion.div>
            ))}
            {/* </AnimatePresence> */}
        </div>
    );

    //no animation

    // return (
    //     <div className="feedback-list">
    //         {/*  on every item in feedback return a feedbackitem */}
    //         {feedback.map((item) => (
    //             <FeedbackItem key={item.id} item={item} onDelete={onDelete} />
    //         ))}
    //     </div>
    // );
};

export default FeedbackList;
