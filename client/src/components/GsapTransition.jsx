import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import BuyerDashboard from "../pages/BuyerDashboard.jsx";
import SellerDashboard from "../pages/SellerDashboard.jsx";

import gsap from "gsap";
import { Toaster, toast } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute.jsx";

const GsapTransition = () => {
  const nodeRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (nodeRef.current) {
      gsap.fromTo(
        nodeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
      );
    }
  }, [location]);

  return (
    <div ref={nodeRef}>
      <Toaster />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<ProtectedRoute children={<Login />} requiresAuth={false}/>}
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/signup"
          element={
            <ProtectedRoute children={<Signup />} requiresAuth={false}/>
          }
        />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route
          path="/buyer/profile"
          element={<ProtectedRoute children={<BuyerDashboard />} />}
        />
        {/* <Route
          path="/buyer/profile"
          element={<BuyerDashboard />}
        /> */}
        <Route
          path="/seller/profile"
          element={
            <ProtectedRoute
              children={<SellerDashboard />}
              // requiresAuth={true}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default GsapTransition;
