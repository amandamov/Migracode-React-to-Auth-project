import React, { useState } from "react";

function Login() {    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    function submitLogin() {

    }

    return (
        <div className="container">
            <form>
                <h1>Login</h1>
                <h3>Email</h3>
                <div>
                    <div>
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email} onChange={handleEmail}
                    />
                    </div>
                    <h3>Password</h3>
                    <div>
                    <input 
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={value} onChange={handlePassword}
                        />
                    </div>
                    <button onClick={submitLogin}>Enter</button>
                </div>
            </form>
        </div>
    )
}

export default Login;