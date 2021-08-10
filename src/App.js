import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
//PAGES
import NavBar from "./Pages/Navbar"
import Transactions from './Pages/Transactions'
import axios from "axios";
import NavBar from "./Components/NavBar";
import Transactions from "./Pages/"
function App() {
  return <div className="App">

    <NavBar/>
  </div>;
}

export default App;
