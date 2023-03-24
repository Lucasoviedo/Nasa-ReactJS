import "./loader.css";
import React from "react";
const Loader = () => {
    return (
        <div className="lds-ring-content">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;