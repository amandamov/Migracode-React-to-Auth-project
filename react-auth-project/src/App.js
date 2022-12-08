import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Sign_up from './pages/Sign-up';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<Sign_up />} />
        </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;