import React from "react";
import { useState } from "react";

function Sign_up() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleNameInput(event) {
        setName(event.target.value)
    };

    function handleEmailInput(event) {
        setEmail(event.target.value)
    };

    function handlePasswordInput(event) {
        setPassword(event.target.value)
    };

    //trying sign-up function and connect with server
    // const signup = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await fetch("http://localhost:5000/users/sign-up")
    //         .then((response)=> response.json())
    //         .then((data) => {
    //             console.log(JSON.stringify(data))
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    

    return (
        <div className="container">
            <form>
                <h1>Sign-up</h1>
                <h3>Name</h3>
                <div>
                <input type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleNameInput}
                />
                </div>
                <h3>Email</h3>
                <input type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleEmailInput}
                />
                <h3>Password</h3>
                <input type="number"
                    name="password"
                    placeholder="Password"
                    onChange={handlePasswordInput}
                />
            </form>
            <button onClick={signup}>Signup</button>
        
    </div>
    )
}

export default Sign_up;