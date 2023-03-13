import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { lazy } from "react";
// import { Suspense } from "react";
import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import FlightTracker from "../components/FlightTracker";
// import Auth from "../components/Auth";
import AdminLogin from "../components/AdminLogin";
import Admindash from "../components/Admindash";
import "bootstrap/dist/css/bootstrap.min.css"

import SignUp from "../components/SignUp";
 import Home from "../pages/Home";
import BrowsePage from "../pages/BrowsePage"

const RoutePaths = () => {


  const flights = [
    { airline: "KQ ticket purchase", departureTime: "10:00 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "2:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:00 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase", departureTime: "8:00 PM", departureGateNumber: "14", price: "$100" },
    { airline: "KQ ticket purchase", departureTime: "10:00 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "2:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:00 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase", departureTime: "8:00 PM", departureGateNumber: "14", price: "$100" },
    { airline: "KQ ticket purchase", departureTime: "10:00 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "2:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:00 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase", departureTime: "8:00 PM", departureGateNumber: "14", price: "$100" },
    { airline: "KQ ticket purchase", departureTime: "10:00 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "2:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:00 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase ", departureTime: "8:00 PM", departureGateNumber: "14", price: "$100" },
    { airline: "KQ ticket purchase", departureTime: "10:00 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "2:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:00 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase", departureTime: "8:00 PM", departureGateNumber: "14", price: "$100" },
  ];

  return (
    <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Navigate to="/auth" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/FlyM/browse-page" element={<BrowsePage flights={flights} />}></Route>
          <Route path="/page" element={<FlightTracker />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/dash" element={<Admindash flights={flights} />}></Route>
          <Route path="/auth" element={<SignUp /> }></Route>
        </Routes>
    
    </BrowserRouter>
  );
};

export default RoutePaths;
