import React from "react"
import "./Login.css"


function Login () {
        return (
            <div className="login">
                <div className="login-container">
                    <div className="login-container-heading">
                        Login Form!
                    </div>
                    <div className="login-container-form">
                        <form className="formlogin">
                            <input className="inputBoxlogin" type= "email" placeholder="Enter Email" />
                            <input className="inputBoxlogin" type= "Password" placeholder="Enter Password" />
                            <button className="btnlogin">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default Login;