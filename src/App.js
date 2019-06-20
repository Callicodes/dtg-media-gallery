import React from "react";
// import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import MiniNavbar from "./components/MiniNavbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <MiniNavbar />
      <Gallery />
      <Footer />
      <Default />
    </React.Fragment>
  );
}

export default App;
