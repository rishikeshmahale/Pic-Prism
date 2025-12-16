import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import GsapTransition from "./components/GsapTransition.jsx";

import { Provider } from "react-redux";
import { store } from "../store/store.js";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />

          <GsapTransition />

          {/* <Footer /> */}
        </Router>
      </Provider>
    </>
  );
}

export default App;
