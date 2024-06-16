import React from "react";
import { Routes, Route,} from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";

const Main = () => {
  return (
    <main>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
