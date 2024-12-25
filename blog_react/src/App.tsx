// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/navbar";
import Commonheader from "./components/commonheader";
import "./components/css/bootstrap.min.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Commonheader />
      <Navbar />
    </>
  );
}

export default App;
