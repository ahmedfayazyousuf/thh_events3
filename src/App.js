import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./components/Home";
import StaffLinks from "./components/StaffLinks";
import AdminLinks from "./components/AdminLinks";
import DemoLinks from "./components/DemoLinks";
import RegistrationApps from "./components/Registration";
import ActivationApps from "./components/Activation";
import BookingApps from "./components/Booking";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/stafflinks" element={<StaffLinks />} />
            <Route path="/adminlinks" element={<AdminLinks />} />
            <Route path="/demolinks" element={<DemoLinks />} />
            <Route path="/registrationapps" element={<RegistrationApps />} />
            <Route path="/activationapps" element={<ActivationApps />} />
            <Route path="/bookingapps" element={<BookingApps />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;