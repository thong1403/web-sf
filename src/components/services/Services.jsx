import React from "react";
import imgBackGroud from "../images/Group 8 (6).png";
import "./Services.css";
import img1 from "../images/digital-transformation-690x450-1 1.png";
import img2 from "../images/digital-transformation-690x450-1 1 (1).png";
import img3 from "../images/it-oursourcing-690x450-1 1.png";

export default function Services() {
  return (
    <>
      <div className="container-backGroud-title">
        <img src={imgBackGroud} alt="" className="w-100" />
        <div className="container-title container">
          <h1>
            Trusted Effective <br /> Services and Solutions <br /> for Business
            Growth
          </h1>
          <p>
            Entrusted by hundreds of clients worldwide, we believe in <br />{" "}
            empowering your business with top-certified IT talents and <br />{" "}
            innovative world-class service delivery.
          </p>
          <button className="mt-5">Contact Us</button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-container-content d-flex align-items-center">
          <div className="col-12">
            <div className="row d-flex align-items-center">
              <div className="col-5">
                <img src={img1} alt="" className="w-100" />
              </div>
              <div className="col-7 content-services ">
                <h1 className="text-right mb-5" >OUR SOLUTIONS</h1>
                <p className="text-right">
                  SF-Technologies offers end-to-end IT and digital solutions,
                  including software development, digital transformation, and IT
                  consulting. With a focus on innovation, quality, and customer
                  satisfaction, SF-Technologies delivers customized and scalable
                  services to help businesses achieve their digital goals. Our
                  expertise, experience, and commitment to delivering results
                  make us a trusted partner for organizations worldwide.
                </p>
              </div>
            </div>
            <div className="row row-container-content d-flex align-items-center">
              <div className="col-7 content-services ">
                <h1 className="text-left mb-5">World-class IT Outsourcing</h1>
                <p className="text-left">
                  Our world-class engineering services are here to help your
                  business in adapting to today’s ever-changing technology era
                  while boosting software portfolio variety in the shortest
                  period. SF-Technologies supplies enterprises with a huge pool
                  of service offer, from all solutions related to software
                  development, maintenance, and migration to all kinds of
                  testing services in every stage, to empower your future
                  growth.Find your best fit IT services with our consulting team
                  for the ultimate customized software!
                </p>
              </div>
              <div className="col-5">
                <img src={img2} alt="" className="w-100" />
              </div>
            </div>
            <div className="row row-container-content d-flex align-items-center">
              <div className="col-5 ">
                <img src={img3} alt="" className="w-100" />
              </div>
              <div className="col-7 content-services ">
                <h1 className="text-right mb-5">Digital Transformation</h1>
                <p className="text-right">
                  Digital transformation is the answer to business success in
                  this computerized era. SF-Technologies’s innovation-led
                  solutions of implementing Artificial Intelligence (AI), Cloud
                  Computing, Robotic Automation (RPA), and Low Code, enable your
                  business to achieve cost-saving, improve efficiency, and make
                  use of emerging technology to drive value long into the
                  future. Our clients get the ability to access a whole team of
                  certified experts, using IT systems from the world’s “giant”
                  providers in Cloud (AWS, Microsoft Azure, Google Cloud), RPA
                  (BluePrism, Automation Anywhere, UIPaths), and Low Code (ut
                  System, MS Power Apps) sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
