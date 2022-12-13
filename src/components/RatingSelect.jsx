import React from "react";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
const RatingSelect = ({ select }) => {
    const [selected, setSelected] = useState(10);

    const { newFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        setSelected(newFeedback.item.rating);
    }, [newFeedback]);
    const handleChange = ({ target: { value } }) => {
        setSelected(+value); //auto turn the value into numbers

        // select(selected); // fell behind, one step behind, delay
        //immediate
        select(+value);
    };

    //if separate variable better

    // const ratings = Array(10).fill(null);
    // const ratingsEl = ratings.map((value, index) => (
    //     <li>
    //         <input
    //             type="radio"
    //             id={`num${index}`}
    //             name="rating"
    //             value={index}
    //             onChange={handleChange}
    //             checked={selected === 1}
    //         />
    //         <label htmlFor={`num${index}`}>{index}</label>
    //     </li>
    // ));
    return (
        <ul className="rating">
            {/* creating a fake array of length 10, and runs map */}
            {Array.from({ length: 10 }, (value, index) => (
                <li key={index}>
                    <input
                        type="radio"
                        id={`num${index + 1}`}
                        name="rating"
                        value={index + 1}
                        onChange={handleChange}
                        checked={selected === index + 1}
                    />
                    <label htmlFor={`num${index + 1}`}>{index + 1}</label>
                </li>
            ))}
        </ul>
    );
};

export default RatingSelect;
