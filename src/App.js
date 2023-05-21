import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModelsProvider } from "./context/Context";


// components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Product from "./components/Product";



function App() {


  let [signedIn, setSignedIn] = useState(false)
  let [user, setUser] = useState('');




  useEffect(() => {

    if (!signedIn) {
      setUser('');
    }

  }, [])


  return (

    <ModelsProvider>
      <BrowserRouter>
        <Navbar signedIn={signedIn} />
        <Routes>
          {/* <Route path="/" element={<Hero />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login user={user} setUser={setUser} setSignedIn={setSignedIn} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/gallery" element={<Products />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </ModelsProvider>

  );
}

export default App;

