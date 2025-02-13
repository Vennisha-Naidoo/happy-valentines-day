import { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const lstNames = {
        "Saieshen": "#ff00ff",  // Neon pink
        "My Love": "#00ffff",   // Cyan
        "Nemo": "#32cd32",      // Lime green
        "Ninu": "#1e90ff",      // Dodger blue
        "Bb Fen": "#8a2be2",    // Blue violet
        "Meerkat": "#ff00ff",
        "Baby Love": "#00ffff",
        "Bb Pops": "#1e90ff",
        "Bb Meerkat": "#ff00ff",
        "Best Fen": "#00ffff",
        "Papa": "#32cd32",
    };

    const [currentName, setCurrentName] = useState(Object.keys(lstNames)[0]);
    const [currentColor, setCurrentColor] = useState(lstNames[currentName]);

    useEffect(() => {
        let index = 0;
        const names = Object.keys(lstNames);
        const interval = setInterval(() => {
            index = (index + 1) % names.length;
            setCurrentName(names[index]);
            setCurrentColor(lstNames[names[index]]);
        }, 1000);

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, []);

    return (
        <div className="container">
            <p>Welcome</p><br />
            <p className="anime-text" style={{ color: currentColor }}>
                {currentName}
            </p>
            <br /><br /><br />
            <Link to="/anime">
                <button className="anime-button">Click Here!</button>
            </Link>
        </div>
    );
}
