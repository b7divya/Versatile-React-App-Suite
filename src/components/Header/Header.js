import React from 'react'
import { Link } from 'react-router-dom'
 
const Header = (props) => {
    return(
        <div className="main-header">
            <div className="main-header-home">
                <Link to="/">
                    <button className="btn">Home</button>
                </Link>
            </div>
            <div className="main-header-login">
                <Link to="/login">
                    <button className="btn">Login</button>
                </Link>
            </div>
            <div className="main-header-signup">
                <Link to="/signup">
                    <button className="btn">SignUp</button> 
                </Link> 
            </div>
            <div className="main-header-scooby">
                <Link to="/doo">
                    <button className="btn">Scooby</button>
                </Link>
            </div>
        </div>
    )
}

export default Header