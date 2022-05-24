import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Navigation from "./localComponents/Navigation/Navigation";
import Listings from "../pages/Listings/Listings";
import Details from "../pages/Details/Details";
import Login from "../pages/Login/Login";
import AddListing from "../pages/AddListing/AddListing";
import ProtectedAuthRoute from "./localComponents/ProtectedAuthRoute/ProtectedAuthRoute";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/add"
          element={
            <ProtectedAuthRoute>
              <AddListing />
            </ProtectedAuthRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
