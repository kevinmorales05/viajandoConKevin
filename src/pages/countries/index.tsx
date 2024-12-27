import Countries from "@/components/Countries";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function index() {
  return (
    <div>
      <Navbar />
      <Countries />
      <Footer />
    </div>
  );
}
