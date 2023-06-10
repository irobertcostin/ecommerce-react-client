import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { UserProvider } from "./context/ContextCustomers";
import PrivateRoute from "./components/PrivateRoute";
import { CartProvider } from "./context/ContextCart";
// components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { ProductsProvider } from "./context/ContextProducts";
import Cookies from 'js-cookie';
import { message } from "antd";
import { ContextUser } from "./context/ContextCustomers";
import { ContextCart } from "./context/ContextCart";
import Footer from "../src/components/Footer";






function App() {


  let [signedIn, setSignedIn] = useState(false)
  let [user, setUser] = useState("");
  // let [cart, setCart] = useContext(ContextCart);



  useEffect(() => {

  }, [user])


  return (



    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Navbar signedIn={signedIn} setSignedIn={setSignedIn} setUser={setUser} user={user} />
          <Routes>

            {/* <PrivateRoute path="/" element={<Home />} /> */}



            <Route element={<PrivateRoute />}>

              <Route path="/" element={<Home user={user} />} />
              <Route path="/gallery" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />

            </Route>


            <Route path="/customers/login" element={<Login user={user} setUser={setUser} setSignedIn={setSignedIn} />} />





          </Routes>
          <Footer />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>


  );
}

export default App;




// lista din new order 
// sa ajunga din front end in backend 
// si sa ramana in cos 
// useContext cos



// de doua ori mesaj confirmare welcome back 
// daca e user in context, de ce sa mai faca login 
// daca sign out, sa stearga si context si cookies 

