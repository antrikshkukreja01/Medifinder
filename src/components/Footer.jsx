import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/imgs/png/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg_color py-5">
        <Container Container className="CustomContainer mb-lg-5">
          <a className="mb-4 mt-lg-3 d-inline-block" href="#">
            <img className="w_261" src={logo} alt="logo" />
          </a>
          <Row className="mt-5  ">
            <Col lg={8}>
              <Row className="">
                <Col sm={6} md={4}>
                  <p className=" mb-3 ff_Heebo fw-medium fs_22 text-white">
                    Patients
                  </p>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Book a Test</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Upload Prescription</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Download Report</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Health Packages </p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center "
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Lab Locator</p>
                  </a>
                </Col>
                <Col className="mt-4 mt-sm-0" sm={6} md={4}>
                  <p className=" mb-3 ff_Heebo fw-medium fs_22 text-white">
                    Partner with us
                  </p>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Franchise Opportunities</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Corporate Wellness</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Hospital Lab Management</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Organise Camps </p>
                  </a>
                </Col>
                <Col className="mt-4 mt-md-0" sm={6} md={4}>
                  <p className=" mb-3 ff_Heebo fw-medium fs_22 text-white">
                    Doctors
                  </p>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> National Reference Lab</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Research and Development</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Download Forms</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Scientific Literature </p>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col className="mt-4 mt-lg-0" lg={4}>
              <Row>
                <Col sm={6}>
                  <p className=" mb-3 ff_Heebo fw-medium fs_22 text-white">
                    Company
                  </p>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> About Us</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Mission & Vision</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Management</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Career </p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3 "
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Newsletter</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3 "
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> PR Media</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center "
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Disclosures</p>
                  </a>
                </Col>
                <Col sm={6}>
                  <p className=" mb-3 ff_Heebo fw-medium fs_22 text-white">
                    Contact Us
                  </p>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0">Get in touch</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Faq</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0">Sitemap</p>
                  </a>
                  <a
                    className=" ff_Heebo fw-normal fs_14 text-white d-flex align-items-center mb-3"
                    href="#"
                  >
                    <span className="white-ball"></span>
                    <p className="mb-0"> Share Your Feedback </p>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
