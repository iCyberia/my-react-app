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
            <select onChange={handleChange} value={color}>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
             </select>
                <button onClick={() => setColor('white')}>Reset</button>
                <div className="color-box" style={{ backgroundColor: color }}>

                    </div>
            </div>
    );
    
}

export default App;
