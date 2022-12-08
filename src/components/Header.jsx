import React from "react";

const Header = ({ text, bgColor, textColor }) => {
    //react styling using object
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    );
};

//default Props
Header.defaultProps = {
    text: "React Feedback App",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
};

export default Header;
