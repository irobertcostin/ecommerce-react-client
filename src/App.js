import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { UserProvider } from "./context/ContextCustomers";
import PrivateRoute from "./components/PrivateRoute";

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


function App() {


  let [signedIn, setSignedIn] = useState(false)
  let [user, setUser] = useState("");




  useEffect(() => {

  }, [user])


  return (



    <BrowserRouter>
      <UserProvider>
        <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
        <Routes>

          {/* <PrivateRoute path="/" element={<Home />} /> */}



          <Route element={<PrivateRoute />}>

            <Route path="/" element={<Home />} />


          </Route>


          <Route path="/customers/login" element={<Login user={user} setUser={setUser} setSignedIn={setSignedIn} />} />





        </Routes>
      </UserProvider>
    </BrowserRouter>


  );
}

export default App;

