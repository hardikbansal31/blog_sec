import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./components/styles/nav.css";

// import './components/styles/Home.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function HomeFn() {
  return (
    <>
      <Home />
    </>
  );
}

function AboutFn() {
  return (
    <>
      <About />
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeFn />} />
          <Route path="/about" element={<AboutFn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
