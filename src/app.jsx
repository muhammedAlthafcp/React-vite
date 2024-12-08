import React from "react";
import ReactDOM from "react-dom/client";
// import { Link, Route, Router } from "wouter"; // Importing Wouter
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

const Home = () => (
  <div>
    <Header />
    <Body />
    <About />
  </div>
);
function App() {
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
