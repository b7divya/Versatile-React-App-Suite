import React, { useState } from "react"
import './Counter.css'

function Counter () {

        const [number, setNumber] = useState(0);

        const handleDecrement = () => {
            setNumber (previousNumber => previousNumber - 1)
        }

        const handleIncrement = () => {
            setNumber (previousNumber => previousNumber + 1)
        }

        const handleInput = (e) => {
            const inputvalue = parseInt (e.target.value);
            if(!isNaN (inputvalue)) { 
                setNumber (inputvalue);
        };
    }




    return (
        <div className="counter">
            <h1>Counter App</h1>
            <div className="counter-container">
                <div className="counter-container-negetive">
                    <button id="btn1" onClick={handleDecrement} className="negative">-</button>
                </div>
                <div className="counter-container-input">
                    <input type="number" placeholder="Enter Number" className="Input" value={number} onChange={handleInput} id="input" />
                </div>
                <div className="counter-container-positive">
                <button id="btn2" onClick={handleIncrement} className="positive">+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter