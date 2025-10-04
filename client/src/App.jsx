import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import GsapTransition from "./components/GsapTransition.jsx";

function App() {
  return (
    <>
      <Router>
        
        <Navbar />

        <GsapTransition />

        <Footer />
      </Router>
    </>
  );
}

export default App;
