import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Account } from './pages/Account';
import { Playlist } from './pages/Playlist';
import { SubscriptionPlan } from './pages/SubscriptionPlan';
import { Summary } from './pages/Summary';
import { Payment } from './pages/Payment';
import { CardDetails } from './pages/CardDetails';
import { Confirmation } from './pages/Confirmation';
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
      <Route path="account" element={<Account />} />
      <Route path="playlist" element={<Playlist />} />
      <Route path="subscriptionplan" element={<SubscriptionPlan />} />
      <Route path="summary" element={<Summary />} />
      <Route path="payment" element={<Payment />} />
      <Route path="carddetails" element={<CardDetails />} />
      <Route path="confirmation" element={<Confirmation />} />
      <Route path="deliveryreminder" element={<DeliveryReminder />} />
    </Routes>
    </React.Fragment>
  );
}

export default App;

