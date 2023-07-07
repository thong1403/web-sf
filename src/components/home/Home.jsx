import React from "react";
import Navbar from "./../navbar/Navbar";
import Footer from "../footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../aboutUs/AboutUs";
import ContactUs from "../contactUs/ContactUs";
import Industries from "../Industries/Industries";
import HomePage from "./../homePage/HomePage";
import './Home.css'
import Services from './../services/Services';
import Recruitment from "../Recruitment/Recruitment";
import ButtonTop from "../buttonTop/ButtonTop";
import Infomation from "../information/Infomation";
import Product from "../products/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="router-page">
        <Routes>
          <Route path="/web-sf" element={<HomePage />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Industries" element={<Industries />} />
          <Route path="/Recruitment" element={<Recruitment/>}/>
          <Route path="/information" element={<Infomation/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </div>
      <ButtonTop/>

      <Footer />
    </div>
  );
}
