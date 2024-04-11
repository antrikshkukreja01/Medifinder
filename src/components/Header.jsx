import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hospital from "../assets/imgs/webp/Hospital.webp";
import icon2 from "../assets/imgs/png/icon2.png";
import share from "../assets/imgs/png/share.png";
import bed from "../assets/imgs/png/bed.png";
import doctor from "../assets/imgs/png/doctor.png";
import icu from "../assets/imgs/png/icu.png";
import clock from "../assets/imgs/png/clock.png";
import hospital_icon from "../assets/imgs/png/hospital_icon.png";
import ambulance from "../assets/imgs/png/ambulance.png";
import phone from "../assets/imgs/png/phone.png";
import mail from "../assets/imgs/png/mail.png";
import location from "../assets/imgs/png/location.png";
import img_header from "../assets/imgs/webp/img_header.webp";
import home from "../assets/imgs/png/home.png";
import health from "../assets/imgs/png/health.png";
import labs from "../assets/imgs/png/labs.png";
import doctors from "../assets/imgs/png/doctors.png";
import Hospitals from "../assets/imgs/png/Hospitals.png";
import documents from "../assets/imgs/png/documents.png";

const Header = () => {
  return (
    <>
      <section className="pb-5 pt-5 pt-lg-0 min-vh- 100 d-flex flex-column">
        <Container className="flex-grow-1 d-flex align-items-center justify-content-center flex-column position-relative z-1">
          <div className=" d-lg-flex align-items-center justify-content-between w-100 mb-4 mt-4 d-none ">
            <a className=" d-flex align-items-center gap-1" href="#">
              <img className=" w_20" src={home} alt="home" />
              <p className=" ff_Inter fw-medium fs_18 clr_Gray mb-0">Home</p>
            </a>
            <a className=" d-flex align-items-center gap-1" href="#">
              <img className=" w_20" src={health} alt="health" />
              <p className=" ff_Inter fw-medium fs_18 clr_Gray mb-0">
                Health Packages
              </p>
            </a>
            <a className=" d-flex align-items-center gap-1" href="#">
              <img className=" w_20" src={labs} alt="labs" />
              <p className=" ff_Inter fw-medium fs_18 clr_Gray mb-0">
                Nearest Labs
              </p>
            </a>
            <a className=" d-flex align-items-center gap-1" href="#">
              <img className=" w_20" src={doctors} alt="doctors" />
              <p className=" ff_Inter fw-medium fs_18 clr_Gray mb-0">Doctors</p>
            </a>
            <a className=" d-flex align-items-center gap-1" href="#">
              <img className=" w_20" src={Hospitals} alt="hospitals" />
              <p className=" ff_Inter fw-medium fs_18 clr_Gray mb-0">
                Hospitals
              </p>
            </a>
            <a className=" d-flex align-items-center gap-1" href="#">
              <img className=" w_20" src={documents} alt="documents" />
              <p className=" ff_Inter fw-medium fs_18 clr_Gray mb-0">
                Upload Prescription
              </p>
            </a>
          </div>
          <div className="header_box">
            <Row className=" flex-column-reverse flex-md-row">
              <Col
                className=" d-flex flex-column align-items-center mt-5 mt-xl-0 "
                xl={4}
              >
                <img
                  className=" w_100 mb-3 mb-xl-5"
                  src={Hospital}
                  alt="Hospital_img"
                />
                <div className=" d-flex align-items-center mb-3 mb-sm-0 justify-content-center gap-2">
                  <a
                    className=" ff_Inter fw-bold fs_14 Book_btn text-capitalize"
                    href="#"
                  >
                    Book Appointment
                  </a>

                  <a
                    className=" ff_Inter fw-medium fs_14 Direction_btn text-capitalize"
                    href="#"
                  >
                    Get Directions
                    <img className="icon_size_2" src={icon2} alt="icon2" />
                  </a>
                </div>
              </Col>
              <Col className=" mt-md-5 mt-xl-0" xl={8}>
                <div className=" d-flex align-items-center justify-content-between mb-3">
                  <h2 className=" ff_Inter fw-semibold fs_24 clr_Gray">
                    Kolmet Hospital - Karol Bagh, Central Delhi
                  </h2>
                  <a className="me-sm-5" href="#">
                    <img className="w_30" src={share} alt="share" />
                  </a>
                </div>
                <Row className="enquiry_box align-items-center pb-4 pb-md-0 ">
                  <Col className="ps_40 mt-4 mt-md-0" md={7}>
                    <div className=" d-flex align-items-center justify-content-center   gap_34 mb-4 ">
                      <span className="small_box d-flex align-items-center gap-3">
                        <img className=" w_30" src={bed} alt="bed" />
                        <p className="mb-0 ff_Inter fw-medium fs_16 clr_Gray">
                          120
                        </p>
                      </span>
                      <span className="small_box d-flex align-items-center gap-3">
                        <img className=" w_30" src={doctor} alt="doctor" />
                        <p className="mb-0 ff_Inter fw-medium fs_16 clr_Gray">
                          25
                        </p>
                      </span>
                      <span className="small_box d-sm-flex align-items-center d-none gap-3">
                        <img className=" w_30" src={icu} alt="icu" />
                        <p className="mb-0 ff_Inter fw-medium fs_16 clr_Gray">
                          25
                        </p>
                      </span>
                    </div>
                    <span className="small_box d-flex align-items-center justify-content-center mx-auto w-50 d-sm-none gap-3">
                      <img className=" w_30" src={icu} alt="icu" />
                      <p className="mb-0 ff_Inter fw-medium fs_16 clr_Gray">
                        25
                      </p>
                    </span>
                    <span className=" mt-3 d-flex align-items-center gap-3">
                      <img className="w_30" src={clock} alt="clock" />
                      <p className=" mb-0 ff_Inter fw-medium fs_16 clr_Gray">
                        10:00 AM - 2:00 PM
                      </p>
                    </span>
                    <span className=" mt_12 d-flex align-items-center gap-3">
                      <img
                        className="w_30"
                        src={hospital_icon}
                        alt="hospital_icon"
                      />
                      <p className=" mb-0 ff_Inter fw-normal fs_16 clr_Gray">
                        34621341238
                      </p>
                    </span>
                    <span className=" mt_12 d-flex align-items-center gap-3">
                      <img className="w_30" src={ambulance} alt="clock" />
                      <p className=" mb-0 ff_Inter fw-normal fs_16 clr_Gray">
                        34621341238
                      </p>
                    </span>
                    <span className=" mt_12 d-flex align-items-center gap-3">
                      <img className="w_30" src={phone} alt="clock" />
                      <p className=" mb-0 ff_Inter fw-normal fs_16 clr_Gray">
                        34621341238
                      </p>
                    </span>
                    <span className=" mt_12 d-flex align-items-center gap-3">
                      <img className="w_30" src={mail} alt="clock" />
                      <p className=" mb-0 ff_Inter fw-normal fs_16 clr_Gray">
                        hello@medsev.com
                      </p>
                    </span>
                    <span className=" mt_12 d-flex align-items-center gap-3">
                      <img className="w_30" src={location} alt="clock" />
                      <p className=" mb-0 ff_Inter fw-normal fs_16 clr_Gray">
                        4th Floor, 408 No Chamber, 4th Floor, 408 No Chamber
                      </p>
                    </span>
                  </Col>
                  <Col className="pe-md-0 mt-4 mt-md-0" md={5}>
                    <div className=" bg-white">
                      <span className="heading py-3 d-flex align-items-center justify-content-center ">
                        <h3 className=" ff_Inter fw-bold fs_14 text-white ">
                          Enquiry or Book Hospital
                        </h3>
                      </span>
                      <div className=" d-flex justify-content-center pt-2">
                        <img className="w_img" src={img_header} alt="img" />
                      </div>
                      <div className=" px-sm-4 mx-3 mt-4">
                        <span className=" mt-3">
                          <p className=" mb-1 ff_Inter fw-light fs_12 clr_LightGray2">
                            Full Name
                          </p>
                          <input className="input" type="text" />
                        </span>
                        <span>
                          <p className=" mt-3 mb-1 ff_Inter fw-light fs_12 clr_LightGray2">
                            Mobile Number
                          </p>
                          <input className="input" type="text" />
                        </span>
                        <a
                          className=" ff_Inter fw-bold fs_14 Book_btn w-100 d-inline-block my-3 text-center text-capitalize"
                          href="#"
                        >
                          Submit
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
