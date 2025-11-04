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
import { Toaster , toast} from "react-hot-toast";

const GsapTransition = () => {
  const nodeRef = useRef(null);

  const location = useLocation();

  // console.log("The location is" + location);

  useEffect(() => {
    if (nodeRef.current) {
      gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 });
      // toast.success(location.pathname);
    }
  }, [location]);

  return (
    <div ref={nodeRef}>
      <Toaster/>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
      </Routes>
    </div>
  );
};

export default GsapTransition;
