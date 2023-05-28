import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/ContextCustomers";


// components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { ProductsProvider } from "./context/ContextProducts";



function App() {


  let [signedIn, setSignedIn] = useState(true)
  let [user, setUser] = useState('');




  useEffect(() => {

    if (!signedIn) {
      setUser('');
    }

  }, [])


  return (

    <UserProvider>
      <ProductsProvider>
        <BrowserRouter>
          <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
          <Routes>
            {/* <Route path="/" element={<Hero />}></Route> */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/customers/login" element={<Login user={user} setUser={setUser} setSignedIn={setSignedIn} />}></Route>
            {/* <Route path="/register" element={<Register />}></Route> */}
            <Route path="/gallery" element={<Products />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </UserProvider>

  );
}

export default App;

