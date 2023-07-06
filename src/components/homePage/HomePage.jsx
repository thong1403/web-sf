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
          <button className="mt-5">
            {" "}
            <a href="#footer">Read more</a>{" "}
          </button>
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
                  Technological innovation: SF-Technologies always devotes time
                  and resources to the research and development of the latest
                  technology. We are constantly exploring and applying
                  disruptive technological advancements, such as artificial
                  intelligence, machine learning, blockchain, and IoT. This
                  helps your business pioneer the use of technology and seize
                  new opportunities.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Smart customer interactions: SF-Technologies places an
                  emphasis on intelligent and interactive customer experiences.
                  We provide advanced CRM solutions, intelligent chatbots and
                  multi-channel interaction systems to help businesses build
                  close relationships with customers. We not only meet current
                  customer needs, but also anticipate and meet potential needs.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Intelligent Data Analytics: SF-Technologies uses artificial
                  intelligence and data analytics to help businesses capture
                  critical information and make strategic decisions. We provide
                  intelligent data analysis tools and systems, helping customers
                  identify trends, predict business results, and optimize
                  workflow.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Advanced mobile technology: SF-Technologies develops mobile
                  applications and user-friendly interfaces on mobile platforms.
                  We help businesses connect and interact with customers
                  conveniently and flexibly through advanced mobile
                  applications. This enhances the customer experience and
                  creates a seamless connection between the business and the
                  customer.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Safety and security: SF-Technologies always puts the safety
                  and security of data first. We apply advanced security
                  measures to ensure that the information of our customers and
                  businesses is protected in the best way. We not only meet the
                  highest security standards, but also help our customers comply
                  with data privacy regulations.
                </p>
              </div>
              <div className="col-6 mb-5 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  International expansion: SF-Technologies is not only focused
                  on serving domestic customers, but also aims to expand
                  internationally. We aim to be a trusted technology partner
                  globally, working with businesses and organizations in every
                  country, delivering innovative technology solutions and
                  creating sustainable value.
                </p>
              </div>
              <div className="col-6 fs-2 container-content-furuter">
                <p>
                  ============== <br />
                  Continue to innovate and improve quality: SF-Technologies is
                  committed to maintaining innovation and continuously improving
                  the quality of technology solutions. We will pursue the latest
                  research and development, and listen and understand the needs
                  of our customers well to satisfy all requirements.
                </p>
              </div>
              <div className="col-6 text-right">
                <Link to="/contactus">
                  <button className="btn-contact-us mt-5">Contact Us</button>
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
                <h1 className="text-center title-services mb-5">
                  Our services
                </h1>
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
                    Web development services help create all types of web-based
                    software and ensure a great experience for web users. At SF,
                    we professionally design, redesign and continuously support
                    customer-facing and enterprise web apps to achieve high
                    conversion and adoption rates.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Web Development Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Do you buy a commercial CMS, or do you use an open-source
                    CMS? Or should you customize and build your own CMS based on
                    an open-source CMS? The team at SF will help in the
                    open-source customization of different products to suit your
                    needs by creating/designing templates, adding custom
                    modules, or changing the product's core functionality.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Open Source & CMS Customization</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    SF team has extensive experience creating high-performing,
                    digitally transformative, and feature-packed native mobile
                    applications for Android and iOS. Whether your mobile app
                    needs to store data in the Cloud, communicate with connected
                    home devices, allow in-app purchases, support Apple Pay
                    services, handle user requests with voice technology, or
                    integrate machine learning models, we will cover your
                    product’s entire lifecycle, from ideation, business
                    strategy, and design to App Store Submission and build you
                    best-in-class functionality.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Mobile Application Development</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    The best solutions that should be designed for your
                    organization answer your specific needs, no more and no
                    less. SF team will innovative business solutions allow any
                    enterprise to digitize and automate their existing tools and
                    processes without impact on other processes in the meantime.
                    Our expert engineers specially trained in cloud application
                    development provides customized Enterprise cloud computing
                    and will guarantee that all your information, data, and
                    business processes are secured, protected, and well-guarded.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Custom Enterprise Solutions</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Implementing a new ERP system is a long-term project, and it
                    includes more than the IT part and the involvement of a
                    software vendor. This process demands drastic changes inside
                    the company, which probably will bring a lot of pressure.
                    Our team of experienced business analysts, project
                    coordinators, solution architects, and designers will create
                    the best-adapted ERP package to drive your business
                    development to your need.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Package ERP Implementations</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Technology Integration Services aims to build a safe
                    environment that provides quick access and reliable
                    information management. Whether it is product information,
                    marketing content, eCommerce, or B2B data, our team has the
                    ability and experience to evaluate your technology
                    landscape, design simple or complex integrations and deliver
                    outcomes that will drive efficiency, improve accuracy, and
                    allow your business to achieve its goals. Technology
                    Integration has never been quicker & easier than that is.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Technology Integration Services</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    Efficient, cost-effective, and comprehensive outsourcing
                    services can help boost profits and reduce risk, especially
                    in MIS (Management Information Systems). With a team of
                    highly qualified professionals, we are always ready to serve
                    your needs thoughtfully. Full-time, fixed-contract,
                    unlimited on-site or remote troubleshooting, and fixed
                    periods, we could undertake the management and operation of
                    the Information Technology segment for on-site processing
                    enterprise with best-adapted cost.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">MIS Outsourcing</h2>
                  <i className="fa-solid fa-arrow-up-right-from-square fs-2"></i>
                </div>
              </div>
              <div className="col-4 container-services-content mb-3">
                <div className="text-content">
                  <p>
                    If you aim to rely on IT consulting to keep pace with
                    today’s fast-moving IT landscape. If you feel you don't have
                    the right internal resources, enlisting IT consulting
                    services may be the missing piece to this picture — whether
                    for a one-time project or ongoing strategic advice and
                    guidance. At SF, our mission is solely focused on helping
                    our clients leverage their technology investments to improve
                    business performance.
                  </p>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                  <h2 className="mt-4 mb-4">Consultancy Services</h2>
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
