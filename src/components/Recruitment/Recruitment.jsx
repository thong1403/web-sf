import React from "react";
import imgBackGroud from "../images/IMAGE (2).png";
import search from "../images/Search_duotone.png";
import "./Recruitment.css";

export default function Recruitment() {
  return (
    <>
      <div>
        <img src={imgBackGroud} alt="" className="w-100" />
      </div>
      <div className="container">
        <div className="row">
          <div className="container-we-are">
            <h1 className=" title-industries text-center mb-5 d-flex align-items-center">
              We are hiring
            </h1>
            <img src={search} alt="" />
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-4 container-information">
                <button className="mb-5">GRAPHIC DESIGNER</button>
                <h3 className="mt-3 mb-3">
                  <b>JOB DESCRIPTION</b>
                </h3>
                <p>
                  • Design images for online marketing (website, fanpage,
                  youtube, video ...), publications, ...
                </p>
                <h3 className="mt-3 mb-3">
                  <b>JOB REQUIREMENT</b>
                </h3>
                <p>
                  · Proficient in Adobe IIIustrator, Photoshop and Figma <br />{" "}
                  · Motion Graphic is a plus <br />
                  ...
                </p>
              </div>
              <div className="col-4 container-information">
                <button className="mb-5">BUSINESS ANALYST</button>
                <h3 className="mt-3 mb-3">
                  <b>JOB DESCRIPTION</b>
                </h3>
                <p>
                  We are looking for a Business Analyst who is passionate about
                  understanding the <br /> ...
                </p>
                <h3 className="mt-3 mb-3">
                  <b>JOB REQUIREMENT</b>
                </h3>
                <p>
                  · Bachelor degree in Science Information or Technical
                  Information preferably <br />
                  ...{" "}
                </p>
              </div>
              <div className="col-4 container-information">
                <button>TESTER</button>
                <h3 className="mt-3 mb-3">
                  <b>Job description</b>
                </h3>
                <p>
                  • Manual Testing, MS Azure DevOps; <br />
                  • Create test case; <br />
                  • Execute test case;
                  <br />
                  ...
                </p>
                <h3 className="mt-3 mb-3">
                  <b>JOB REQUIREMENT</b>
                </h3>
                <p>
                  • At least 02 years of working experience in manual testing;{" "}
                  <br />
                  • Understanding about Web application, <br />
                  ...
                </p>
              </div>
              <div className="col-4 container-information">
                <button>Mobile Engineer (Flutter)</button>
                <h3 className="mt-3 mb-3">
                  <b>JOB DESCRIPTION</b>
                </h3>
                <p>
                  · Collaborate with a cross-functional team to ship valuable
                  product increments <br /> ...
                </p>
                <h3 className="mb-3 mt-3">
                  <b>JOB REQUIREMENT</b>
                </h3>
                <p>
                  At least 3 Years experience in Flutter <br />
                  Good communication skills in English and Vietnamese <br /> ...
                </p>
              </div>
              <div className="col-4 container-information">
                <button className="fs-3">Senior Backend Engineer (Java)</button>
                <h3 className="mt-3 mb-3">
                  <b>JOB DESCRIPTION</b>
                </h3>
                <p>
                  · Writing clean & high-quality code <br />
                  · Maintain & improve running <br /> ...
                </p>
                <h3 className="mt-3 mb-3">
                  <b>JOB REQUIREMENT</b>
                </h3>
                <p>
                  · 5+ years of handson development experience in Java and its
                  frameworks (Spring Framework, Spring boot) <br /> ...
                </p>
              </div>
              <div className="col-4 container-information">
                <button>Technical Lead Frontend</button>
                <h3 className="mt-3 mb-3">
                  <b>JOB DESCRIPTION</b>
                </h3>
                <p>
                  • Lead a team of developers in building and maintaining web
                  applications using modern <br /> ...
                </p>
                <h3 className="mt-3 mb-3">
                  <b>JOB REQUIREMENT</b>
                </h3>
                <p>
                  • Bachelor's degree in Computer Science, Computer Engineering
                  or related field. <br />
                  • Minimum of 5 years of <br />
                  ...
                </p>
              </div>
              <div className="col-4 container-information">
                <button>Backend Middle Nodejs</button>
                <h3 className="mt-3 mb-3">
                  <b>JOB DESCRIPTION</b>
                </h3>
                <p>
                  ● Develop system, software to manage all company operations{" "}
                  <br />
                  ● Build API system for Mobile
                  <br />
                  ...
                </p>
                <h3 className="mt-3 mb-3">
                  <b>JOB REQUIREMENT</b>
                </h3>
                <p>
                  ● Minimum 3 years of experience working with Nodejs <br />
                  ● Graduated from a university specializing in IT training{" "}
                  <br /> ...
                </p>
              </div>
              <div className="col-4 container-information">
                <button>Java Programmer</button>
                <h3 className="mt-3 mb-3">
                  <b>JOB DESCRIPTION</b>
                </h3>
                <p>
                  ● Participate in application analysis, design, development and
                  maintenance <br />
                  ...
                </p>
                <h3 className="mt-3 mb-3">
                  <b>JOB REQUIREMENT</b>
                </h3>
                <p>
                  ● University graduate majoring in information technology,
                  preferred math: Polytechnic, University of Technology, Posts{" "}
                  <br />
                  ...
                </p>
              </div>
              <div className="col-4 container-information">
                <button>HR Manager</button>
                <h3 className="mt-3 mb-3">
                  <b>JOB DESCRIPTION</b>
                </h3>
                <p>
                  · Making plans for recruitment, training and human resource
                  development on a yearly <br />
                  ...
                </p>
                <h3 className="mt-3 mb-3">
                  <b>JOB REQUIREMENT</b>
                </h3>
                <p>
                  · Graduated from University or higher majoring in Human
                  Resource Management, Law, Business Administration, <br />
                  ...
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
