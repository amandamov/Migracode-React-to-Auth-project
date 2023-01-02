import React, { useState } from "react";

function Login() {    

    const [inputFields, setInputFields] = useState("")

    const handleFormChange = (event) => {
        setInputFields(event.target.value);
    }

    const submitLogin = () => {
        //take data from handleFormChange
        console.log("do something to conect")
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
                        value={inputFields} onChange={handleFormChange}
                    />
                    </div>
                    <h3>Password</h3>
                    <div>
                    <input 
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={inputFields} onChange={handleFormChange}
                        />
                    </div>
                    <button onClick={submitLogin}>Enter</button>
                </div>
            </form>
        </div>
    )
}

export default Login;