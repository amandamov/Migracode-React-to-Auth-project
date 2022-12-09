import React from "react";
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Login from "./Login";
import Sign_up from "./Sign-up";
import Layout from "./Layout";



function Home() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login')
    }

    const navigateToSignUp = () => {
        navigate('/sign-up')
    }

    return (
        <div className="container">
            <h1>Welcome to the Authentication Project</h1>
            <h2>A cool project to practice the contents learned in Migracode classes.</h2>
            <h3>We've learned about Node.js / API and now bundling with React. </h3>
            <p>Please, wish me luck!</p>
            {/* <img src={require('./img/computer.jpg').default} alt="Computer photo" height={200} width={200}/> */}
            <button onClick={navigateToLogin} className="button-login">Login</button>
            <button onClick={navigateToSignUp}>Sign-up</button>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path='login' element={<Login />} />
                    <Route path='sign-up' element={<Sign_up />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Home;