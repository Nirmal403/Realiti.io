import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Addtocart } from "../AddToCart/Addtocart";

import Home from "../Home/Home";

import Grocery from "../Products/Grocery";

import { GroceryDetail } from "../SingleProduct/GroceryDetail";

import { Success } from "../Success/Success";

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/grocery" element={<Grocery />} />
          <Route path="/grocery/:groceryId" element={<GroceryDetail />} />

          <Route path="/success" element={<Success />} />
          <Route path="/cart" element={<Addtocart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AllRoutes;
