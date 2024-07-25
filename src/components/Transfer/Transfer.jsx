import React, {useState} from 'react'
import'./Transfer.css'

const Transfer = () => {
    return (
        <div className="transfer-object">
            <div className="transfer-object-left">
                {
                    data?.map((val, i) => {
                        return(
                            <div 
                                className={`transfer-object-left-item
                                    ${selected === i ? "active": ''}
                                `}
                                onClick={() => handleSlected(i)}
                            >
                                {val}
                            </div>
                        )
                    })
                }
            </div>
            <div className="transfer-object-center">
                <button onClick={handleRight} className="arrow"></button>
                <button onClick={handleft} className="arrow"></button>
            </div>
            <div className="transfer-object-right">
                {
                    outputData.?map((val, i) => {
                        return(
                            <div
                                className={`transfer-object-right-item
                                `}
                                onClick={()=> handleSelected(i)}
                            >
                                {val}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Transfer;