import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import BuyerDashboard from "./pages/BuyerDashboard.jsx";
import SellerDashboard from "./pages/SellerDashboard.jsx";

import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Router>
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/buyer/profile" element={<BuyerDashboard />} />
          <Route path="/seller/profile" element={<SellerDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
