import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import img1 from "../images/Group 8 (3).png";
import imageContent from "../images/Group 7.png";

export default function HomePage() {
  return (
    <>
      <div className="container-backgroud-img">
        <img src={img1} alt="" className="img" />
        <div className="title-backgroud">
          <h1 className="mb-5">
            Mobile <br /> Application <br /> Development
          </h1>
          <p>
            Find best tech talent and rapidly scale your delivery capability.
            Let <br /> our engineers walk you through any challenges with deep
            expertise <br /> & great experience.
          </p>
          <button className="mt-5"> <a href="#footer">Read more</a> </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 container-content-home">
            <div className="container-title mt-5 mb-5">
              <h1 className="text-center title-home mb-5">
                Future SF-Technologies
              </h1>
            </div>
            <div className="row">
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  =============== <br />
                  Be one of outstanding from Vietnam, SF-Technologies is a
                  Development & Design expert company providing superior
                  Software, Web, Mobile and Creative Designing solutions and
                  services globally.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Contributed by the industry’s highly professional and trained
                  individuals, SF-Technologies has made it’s mark as a
                  well-established IT consultor.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Contributed by the industry’s highly professional and trained
                  individuals, SF-Technologies has made it’s mark as a
                  well-established IT consultor.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Contributed by the industry’s highly professional and trained
                  individuals, SF-Technologies has made it’s mark as a
                  well-established IT consultor.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Contributed by the industry’s highly professional and trained
                  individuals, SF-Technologies has made it’s mark as a
                  well-established IT consultor.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Contributed by the industry’s highly professional and trained
                  individuals, SF-Technologies has made it’s mark as a
                  well-established IT consultor.
                </p>
              </div>
              <div className="col-6 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Quality, well-managed and try to best to scope customer's needs are our Definition of Done.
                </p>
              </div>
              <div className="col-6 text-right">
                <Link to='/contactus'>
                <button className="btn-contact-us mt-5">
                  Contact Us
                </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="total-frame-contains-content">
          <img src={imageContent} alt="" className="w-100 mt-5 imgContent" />
          <div className="container container-conten-services">
            <div className="row">
              <div className="container-title-services mt-5 mb-5">
              <h1 className="text-center title-services mb-5">Our services</h1>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Software development services is a complicated process to
                    design an application or software to meet a particular
                    business or personal objective, goal, or strategy. We work
                    and provide personnel to ensure quality in various stages:
                    Planning, Analysis, Product Design, Development &
                    Implementation, Testing, and Maintenance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Software Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Software development services is a complicated process to
                    design an application or software to meet a particular
                    business or personal objective, goal, or strategy. We work
                    and provide personnel to ensure quality in various stages:
                    Planning, Analysis, Product Design, Development &
                    Implementation, Testing, and Maintenance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Software Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Software development services is a complicated process to
                    design an application or software to meet a particular
                    business or personal objective, goal, or strategy. We work
                    and provide personnel to ensure quality in various stages:
                    Planning, Analysis, Product Design, Development &
                    Implementation, Testing, and Maintenance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Software Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Software development services is a complicated process to
                    design an application or software to meet a particular
                    business or personal objective, goal, or strategy. We work
                    and provide personnel to ensure quality in various stages:
                    Planning, Analysis, Product Design, Development &
                    Implementation, Testing, and Maintenance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Software Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Software development services is a complicated process to
                    design an application or software to meet a particular
                    business or personal objective, goal, or strategy. We work
                    and provide personnel to ensure quality in various stages:
                    Planning, Analysis, Product Design, Development &
                    Implementation, Testing, and Maintenance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Software Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Software development services is a complicated process to
                    design an application or software to meet a particular
                    business or personal objective, goal, or strategy. We work
                    and provide personnel to ensure quality in various stages:
                    Planning, Analysis, Product Design, Development &
                    Implementation, Testing, and Maintenance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Software Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Software development services is a complicated process to
                    design an application or software to meet a particular
                    business or personal objective, goal, or strategy. We work
                    and provide personnel to ensure quality in various stages:
                    Planning, Analysis, Product Design, Development &
                    Implementation, Testing, and Maintenance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Software Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Software development services is a complicated process to
                    design an application or software to meet a particular
                    business or personal objective, goal, or strategy. We work
                    and provide personnel to ensure quality in various stages:
                    Planning, Analysis, Product Design, Development &
                    Implementation, Testing, and Maintenance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Software Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Software development services is a complicated process to
                    design an application or software to meet a particular
                    business or personal objective, goal, or strategy. We work
                    and provide personnel to ensure quality in various stages:
                    Planning, Analysis, Product Design, Development &
                    Implementation, Testing, and Maintenance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Software Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
