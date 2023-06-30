import React from "react";
import "./Industries.css";
import imgBackgroud from "../images/Group 8 (1).png";
import imgIndustres from '../images/Frame 42958.png';
import img1 from '../images/Frame 42998.png';
import img2 from '../images/Frame 42993.png';
import img3 from '../images/Frame 42994.png';
import img4 from '../images/Frame 42995.png';
import img5 from '../images/Frame 42996.png';
import img6 from '../images/Frame 42997.png';


export default function Industries() {
  return (
    <>
      <img src={imgBackgroud} alt="" className="w-100" />
      <div className="container">
      <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
          <div >
            <img src={imgIndustres} alt="" className="w-100 img-backGrod-content-industries mt-5 mb-5" />
          </div>
            <div className="row">
              <div className="col-4 img-content-industries">
                <img src={img2} alt="" className="w-100" />
              </div>
              <div className="col-4 img-content-industries">
                <img src={img3} alt="" className="w-100" />
              </div>
              <div className="col-4 img-content-industries">
                <img src={img4} alt="" className="w-100" />
              </div>
              <div className="col-4 img-content-industries">
                <img src={img5} alt="" className="w-100" />
              </div>
              <div className="col-4 img-content-industries">
                <img src={img6} alt="" className="w-100" />
              </div>
              <div className="col-4 img-content-industries">
                <img src={img1} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>

    </>
  );
}
