import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp'
import { Playlist } from './pages/Playlist';

import React from "react";

//Components
import NavBar from "./components/NavBar";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import VendorCardTiles from './components/VendorCardTiles';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/playlist" element={<Playlist />} />
    </Routes>
    </React.Fragment>
  );
}

export default App;

