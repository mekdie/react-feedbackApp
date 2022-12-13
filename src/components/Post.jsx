import React from "react";
import {
    useParams,
    Navigate,
    useNavigate,
    Routes,
    Route,
} from "react-router-dom";

const Post = () => {
    const status = 200;

    // const params = useParams();
    // console.log(params);

    const navigate = useNavigate();
    const onClick = () => {
        console.log("Hello");

        //redirect after doing something
        navigate("/about");
    };

    if (status === 404) {
        return <Navigate to="/notfound" />;
    }
    return (
        <div>
            {/* <h1>Post {params.id}</h1>
            <p>{params.name}</p> */}
            <h1>Posts</h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path="/show" element={<h1>Hellow world</h1>} />
            </Routes>
        </div>
    );
};

export default Post;
