import React from "react";
import imgBackgroudProduct from "../images/Group 8 (8).png";
import "./Product.css";
import imgContent1 from "../images/Group 25.png";
import imgContent2 from "../images/Frame 43016.png";
import img3 from "../images/1482 copy 1.png";
import img4 from "../images/home rent 1.png";
import img5 from "../images/ai 3.png";
import img6 from "../images/Frame 43018.png";

export default function Product() {
  return (
    <>
      <img src={imgBackgroudProduct} alt="" className="w-100" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 mt-5 ">
            <button className="btn-out-product">Out products</button>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row d-flex align-items-center">
              <div className="col-6 container-content-product">
                <img src={imgContent1} alt="" className="w-50 mb-5" />
                <p>
                  AirData specializes in providing flight booking services from
                  leading airlines in Vietnam and the world, bringing the best
                  travel experiences to customers. <br />
                  AirData is an online flight booking platform that makes the
                  flight booking process easier, always providing detailed
                  information about flights, fares, cancellation policies,
                  schedule changes and requirements. Other special requirements
                  to help customers book tickets quickly and conveniently
                  AirData provides fare and flight comparison tools to help
                  customers find the best fares and flights to suit their needs.
                  AirData supports payment by many different methods, secure,
                  safe and 24/7 support
                </p>
              </div>
              <div className="col-6">
                <img src={imgContent2} alt="" className="w-100" />
              </div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col-6">
                <img src={img3} alt="" className="w-100 " />
              </div>
              <div
                className="col-6 container-content-product text-right"
                id="container-rigth"
              >
                <img src={img4} alt="" className="w-50 mb-5" />
                <p>
                  Home Rent is a rental housing management system that helps
                  landlords and tenants learn and approach each other quickly
                  and conveniently. With Home Rent, you can easily and quickly
                  find an apartment or hostel that suits your needs and desires.
                </p>
              </div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col-6 container-content-product">
                <img src={img5} alt="" className="w-50 mb-5" />
                <p>
                  Solution AI is a system that applies Artificial Intelligence
                  (AI) technology in consulting, supporting and answering
                  people's questions. Built on OpenAI's GPT-3.5 platform,
                  Solution AI has the ability to understand and respond to users
                  in a natural and flexible way. Solution AI can help users in
                  many different areas, including: Product and service
                  consulting Technical support Inquiries Answering Career advice
                  Education support Solution AI not only provides information
                  but also Ability to absorb and learn from user experience.
                  This improves thinking ability and gives better and better
                  feedback over time.
                </p>
              </div>
              <div className="col-6">
                <img src={img6} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}
