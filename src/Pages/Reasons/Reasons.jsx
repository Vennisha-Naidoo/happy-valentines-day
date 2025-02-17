// Reasons.jsx
import React from "react";
import reasons from "./reasonsList"; // Import the array of reasons

export default function Reasons() {
    return (
        <React.Fragment>
            <h1>Why I Love You</h1>
            <ul>
                {reasons.map((reason, index) => (
                    <li key={index}>{reason}</li>
                ))}
            </ul>
        </React.Fragment>
    );
}
