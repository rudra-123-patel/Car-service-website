import React from "react";
// import Hero from "../Components/Hero";

import SignUp from "../Components/Signup";
import Login from "../Components/login";
import { Route, BrowserRouter, Routes } from "react-router";

function Home() {
  return (
    <>
      <div className="form_area">
        {/* <h1>Home</h1> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Home;
