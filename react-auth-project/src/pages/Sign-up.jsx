import React from "react";

function Sign_up() {
    return (
        <div className="container">
            <form>
                <h1>Sign-up</h1>
                <h3>Name</h3>
                <div>
                <input type="text"
                    name="name"
                    placeholder="Name"
                />
                </div>
                <h3>Email</h3>
                <input type="text"
                    name="email"
                    placeholder="Email"
                />
               
                
                
            </form>
        
    </div>
    )
}

export default Sign_up;