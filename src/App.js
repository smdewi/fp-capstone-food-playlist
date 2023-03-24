import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { SignInExistingUser } from './pages/SignInExistingUser';
import { Account } from './pages/Account';
import { SubscriptionPlan } from './pages/SubscriptionPlan';
import { CuisineSelection } from './pages/CuisineSelection';
import { IngredientExclusion } from './pages/IngredientExclusion';
import { Summary } from './pages/Summary';
import { Payment } from './pages/Payment';
import { CardDetails } from './pages/CardDetails';
import { Confirmation } from './pages/Confirmation';
import { Playlist } from './pages/Playlist';
import { PlaylistPause } from './pages/PlaylistPause';
import { PlaylistPlay } from './pages/PlaylistPlay';
import { DeliveryReminder } from './pages/DeliveryReminder';

import React from "react";

//Components
import NavBar from "./components/NavBar";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <React.Fragment>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignInExistingUser />} />      
      <Route path="account" element={<Account />} />
      <Route path="subscriptionplan" element={<SubscriptionPlan />} />
      <Route path="cuisineselection" element={<CuisineSelection />} />
      <Route path="ingredientexclusion" element={<IngredientExclusion />} />
      <Route path="summary" element={<Summary />} />
      <Route path="payment" element={<Payment />} />
      <Route path="carddetails" element={<CardDetails />} />
      <Route path="confirmation" element={<Confirmation />} />
      <Route path="playlist" element={<Playlist />} />
      <Route path="playlistpause" element={<PlaylistPause />} />
      <Route path="playlistplay" element={<PlaylistPlay />} />
      <Route path="deliveryreminder" element={<DeliveryReminder />} />
    </Routes>
    </React.Fragment>
  );
}

export default App;

