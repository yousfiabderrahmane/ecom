import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Home } from "../components/Home/Home";
import { Services } from "../components/Services/Services";
import { Products } from "../components/Products/Products";
import { Repair } from "../components/Repair/Repair";
import { Newsletter } from "../components/Newsletter/Newsletter";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Products />
      <Repair />
      <Newsletter />
    </>
  );
};
