import Navbar from "./components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./components/styles/nav.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>home</h1>
    </>
  );
}

function About() {
  return (
    <>
      <h1>about</h1>
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
