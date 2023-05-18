import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



// components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Hero from "./components/Hero";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;




// icon for title 
// title 
// front-page 