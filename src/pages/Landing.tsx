import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Home } from "../components/Home/Home";
import { Services } from "../components/Services/Services";
import { Products } from "../components/Products/Products";
import { Repair } from "../components/Repair/Repair";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { Footer } from "../components/Footer/Footer";

export const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Home />
      <Services />
      <Products />
      <Repair />
      <Newsletter />
      <Footer />
    </>
  );
};
