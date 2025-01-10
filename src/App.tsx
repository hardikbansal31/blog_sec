import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Create_blog from "./components/create_blog";

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

function CreateFn() {
  return (
    <>
      <Create_blog />
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
          <Route path="/create" element={<CreateFn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
