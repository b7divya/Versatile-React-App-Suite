import React from "react"
import "./Signin.css"


function Signup () {
        return (
            <div className="signup">
                <div className="signup-container">
                    <div className="signup-container-heading">
                        SignUp Form!
                    </div>
                    <div className="signup-container-form">
                        <form clasName="signUpForm">
                            <input className="inputBoxsign" type="text" placeholder="First Name" />
                            <input className="inputBoxsign" type="text" placeholder="Last Name" />
                            <input className="inputBoxsign" type= "email" placeholder="Enter Email" />
                            <input className="inputBoxsign" type="number" placeholder="Mobile Number" />
                            <input className="inputBoxsign" type= "Password" placeholder="Enter Password" />
                            <input className="inputBoxsign" type= "Password" placeholder="Confirm Password" />
                            <button className="btnsign">Signin</button>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default Signup;