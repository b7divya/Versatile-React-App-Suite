import React from 'react'
import { Link } from 'react-router-dom'

const Section = () => {
    return(
        <div className="main-section">
            <div className="main-section-counter">
                <Link to="/counter" className="btnCounter">
                    <div className="counter-heading">
                        <h1>Counter App</h1>
                    </div>
                    <div className="counter-description">
                        <h6>This is a counter application which can be used to count anything upto any infinite nummber with an interval of 1.</h6>
                    </div>
                </Link>
            </div>
            <div className="main-section-calculator">
                <Link to="/calculator" className="btnCalculator">
                    <div className="calculator-heading">
                        <h1>Calculator App</h1>
                    </div>
                    <div className="calculator-Desc">
                        <h6>This Calculator app belongs to all those lazy peoples who always are in search of a calculator even for small calculations.</h6>
                    </div>
                </Link>
            </div>
            <div className="main-section-color">
                <Link to="/color" className="btnColor">
                    <div className="color-heading">
                        <h1>Color App</h1>
                    </div>
                    <div className="color-Desc">
                        <h6>This Color app cointains some color tricks which works on button clicks, visit to know more.</h6>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Section