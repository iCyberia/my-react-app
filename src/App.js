import React, { useState } from 'react'; 
import './App.css';



function App() {
    const [color, setColor] = useState('white');

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className="app-container">
            <h1>React Color Picker</h1>

            <input
                type="text"
                value={color}
                onChange={handleChange}
                placeholder="Enter a color name or hex code"
            />

            <button onClick={() => setColor('white')}>Reset</button>

            <div className="color-box" style={{ backgroundColor: color }}>
                <p>The background is: <strong>{color}</strong></p>
                {color.toLowerCase() === 'black' && (
                    <p style={{ fontStyle: 'italic' }}>🕶️ Nice choice! So mysterious.</p>
                )}
            </div>
        </div>
    );

    
}

export default App;
