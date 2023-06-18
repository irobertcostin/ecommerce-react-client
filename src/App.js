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
  let [totalCartObj, setTotalCartObj] = useState();
  // let [cart, setCart] = useContext(ContextCart);



  useEffect(() => {

  }, [user])


  useEffect(() => {

  }, [totalCartObj])

  return (



    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Navbar signedIn={signedIn} setSignedIn={setSignedIn} setUser={setUser} user={user} totalCartObj={totalCartObj} setTotalCartObj={setTotalCartObj} />
          <Routes>

            {/* <PrivateRoute path="/" element={<Home />} /> */}



            <Route element={<PrivateRoute />}>

              <Route path="/" element={<Home user={user} />} />
              <Route path="/gallery" element={<Products />} />
              <Route path="/product/:id" element={<Product setTotalCartObj={setTotalCartObj} />} />

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






// cannot send props from navbar to cart to cartRow 
// pagina pentru orders -> order details 
// conturi access copy to clipboard
// parte administrator 
// delete users 
// delete orders 
// delete order details 
// add single products
// create users
// actualizare cart items , cart total price live
// cart price with limit in front-end and backend
// checkout successfully , or redirect to another page 


