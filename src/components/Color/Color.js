import React from 'react'
import { useState } from 'react'
import './Color.css'

const Color = () => {

    const [data, setData] = useState ([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ])

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleBack = () => {
        if (currentIndex > 0 ) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handleData = () => {
        setData([...data, data.length + 1])
    }
    return (
        <div className="color">
            <div className="color-container">
                <div className="color-container-button">
                    <button onClick={handleBack} className="previousBtn">{"<"}Previous</button>
                    <button onClick={handleNext} className="nextBtn">{">"}Next</button>
                </div>
                <div className="color-container-box">
                    {
                        data.map((value, index) => {
                            return (
                                <div className= {`color-container-box-element ${currentIndex === index ? 'active' : "" }`}>
                                    {value}
                                </div>
                            )
                        })
                    }
                    <div onClick={handleData} className="color-container-box-element add">
                        +
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Color