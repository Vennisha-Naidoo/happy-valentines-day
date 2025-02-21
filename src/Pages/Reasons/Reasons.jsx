// Reasons.jsx
import React from "react";
import reasons from "./reasonsList"; // Import the array of reasons

export default function Reasons() {
    return (
        <React.Fragment>
            <h1 style={{ padding:10 }}>Reasons I Love You</h1>

            <ul>
                {reasons.map((reason, index) => (
                    <li key={index}
                        style={{ padding:10 }}
                    >
                        { index+1 }. {reason}
                    </li>
                ))}
            </ul>

            <br />
            <h2 style={{ padding:10, textAlign:'center' }}>I LOVE YOU THE MOST, IN THE WHOLE WORLD!</h2>
            <img src="https://steamuserimages-a.akamaihd.net/ugc/884258877069058497/3E55D4C5B081FECD1194890EC10F45B3E889C042/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
        </React.Fragment>
    );
}
