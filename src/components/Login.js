import React from 'react'
import  Logo  from "../assets/spotifyLogo.jpg";
import "../styles/login.css";
import { loginUri } from "../spotify";

function Login() {
    return (
        <div className="login">
            <img  src={Logo} alt=""/>
            {/* Logo Here */}
            {/* Login button here */}
            <a href={loginUri}>LOG IN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
