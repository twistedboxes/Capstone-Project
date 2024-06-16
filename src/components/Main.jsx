import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";

const Main = () => {
  return (
    <main>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
