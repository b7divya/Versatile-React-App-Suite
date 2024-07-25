import React, {useRef, useState} from 'react'
import './Calculator.css'

function Calculator()  {

        const [result, setResult] = useState(0)
        const [num1, setNum1] = useState()
        const [num2, setNum2] = useState()
        const ref1 = useRef()
        const ref2 = useRef()

       const HandleSum = () => {
        setResult(parseInt(num1) + parseInt(num2));
       };
       
       const HandleSubtract = () => {
        setResult (parseInt(num1) - parseInt(num2));
       };

       const HandleMultiply = () => {
        setResult(parseInt(num1) * parseInt(num2));
       };

       const HandleDivide = () => {
        setResult(parseInt(num1) / (num2));
       }

       const HandleSquare = () => {
        if(num1) {
            setResult(parseInt(num1) * parseInt(num1) )
        } else {
            setResult(parseInt(num2) * parseInt(num2) )
        }
       }

       const HandleCube = () => {
        setResult(parseInt(num1) * parseInt(num1) * parseInt(num1))
       }

       const HandleCubeRoot = () => {
        setResult(Math.pow(num1, 1/3))
       }

       const Power = () => {
        setResult(Math.pow(num1, num2))
       }

       const Prime = () => {
        if (result <= 1) return false;
        for (let i = 2; i <= result; i++) {
            if (result % i === 0) return false;
        }
        return true;
       }

       const HandleReset = () => {
        setResult()
        setNum1()
        setNum2()
        ref1.current.value = ''
        ref2.current.value = ''
       }

       const onChangeNum1 = (e) => {
        setNum1(parseInt(e.target.value))
       }

       const onChangeNum2 = (e) => {
        setNum2(parseInt(e.target.value))
       }

    return(
        <div className="calculator">
            <div className="calculator-container">
                <div className="calculator-container-input">
                    <input id="Num1" ref={ref1} onChange={onChangeNum1} placeholder='Enter Number' className="input" type="number" />
                    <input id="Num2" ref={ref2} onChange={onChangeNum2} placeholder='Enter Number' className="input" type="number" />
                </div>
                <div className="calculator-container-buttons">
                    <button onClick={HandleSum} className="btn">Sum</button>
                    <button onClick={HandleSubtract} className="btn">Subtract</button>
                    <button onClick={HandleMultiply} className="btn">Multiply</button>
                    <button onClick={HandleDivide} className="btn">Divide</button>
                    <button onClick={HandleSquare} className="btn">Square</button>
                    <button onClick={HandleCube} className="btn">Cube</button>
                    <button onClick={HandleCubeRoot} className="btn">CubeRoot</button>
                    <button onClick={Power} className="btn">Power</button>
                    <button onClick={Prime} className="btn">Prime</button>
                    <button onClick={HandleReset} className="btnReset">Reset</button>
                </div>
                <div className="calculator-container-output">
                    <div id="calculatoroutput" className="output">{result}</div>
                </div>
            </div>
        </div>
    )

}


export default Calculator