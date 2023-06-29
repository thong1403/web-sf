import React from "react";
import "./AboutUs.css";
import imgBackgroud from "../images/353399350_137125962717203_6462137882169683759_n.jpg";
import imgContent from "../images/Frame 42962.png";
import img1 from '../images/Rectangle 1.png'
import img2 from '../images/Rectangle 2.png'
import img3 from '../images/Rectangle 3.png'
import img4 from '../images/Rectangle 4.png'


export default function AboutUs() {
  return (
    <>
      <img src={imgBackgroud} alt="" className="w-100" />
      <div className="container">
        <div className="row">
          <h1 className="text-center title-about-us mt-5 mb-5">ABOUT US</h1>
          <div className="col-12 col-12-content">
            <p className="fs-2">
              Part of SF-Technologies , we are experts in technology <br />
              SF-Technologies exists in a group that boasts a global <br />
              technology talent solutions business. <br />
              We deliver smart solutions that solve business challenges and
              create value.
            </p>
            <img src={imgContent} alt="" className="mt-5 mb-5 w-100" />
            <h3 className="mt-5 mb-5">
              We care, we share, we innovate <br />
              Supportive environment encouraging friendliness and openness
            </h3>
            <div className="row container-img-content-col-3">
              <div className="col-3">
                <img src={img1} alt="" />
              </div>
              <div className="col-3">
                <img src={img2} alt="" />
              </div>
              <div className="col-3">
                <img src={img3} alt="" />
              </div>
              <div className="col-3">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
