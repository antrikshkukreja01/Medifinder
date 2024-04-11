import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon from "../assets/imgs/png/location_icon.png";
import map from "../assets/imgs/webp/map.webp";
import Carousel from "react-bootstrap/Carousel";

const HospitalLocation = () => {
  return (
    <>
      <section className=" py-5">
        <Container>
          <div className=" d-flex align-items-center justify-content-center gap-3 mb-4">
            <img className="icon_size" src={icon} alt="icon" />
            <h2 className=" mb-0 fw-semibold fs_32 ff_Inter clr_Gray">
              {" "}
              Hospital Location{" "}
            </h2>
          </div>
          <div>
            <iframe
              height={456}
              className="w-100 mb-5 mb-lg-0 "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.23607046412!2d75.67313739504341!3d29.156165789623863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712811221015!5m2!1sen!2sin"
              width="600"
              allowFullscreen=""
              loading="lazy"
              reFerrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Row className=" my-lg-5">
            <Col lg={6}>
              <div className="box">
                <h3 className="mb-lg-4 mb-2 mt-2 ff_Inter fw-bold fs_20 clr_Gray text-capitalize text-center">
                  Specialities In Kolmet Hospital Central Delhi
                </h3>
                <Row className="d-none d-md-flex">
                  <Col className=" mt-sm-4 mt-lg-0" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4 mt-lg-0" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4 mt-lg-0" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                </Row>
                <Carousel className="d-md-none mt-4 ">
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col className=" mt-4 mt-lg-0" lg={6}>
              <div className="box">
                <h3 className="mb-lg-4 mb-2 mt-2 ff_Inter fw-bold fs_20 clr_Gray text-capitalize text-center">
                  Services Offered
                </h3>
                <Row className=" d-none d-md-flex">
                  <Col className=" mt-sm-4 mt-lg-0" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4 mt-lg-0" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4 mt-lg-0" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                  <Col className=" mt-4" sm={4}>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Col>
                </Row>
                <Carousel className="d-md-none mt-4 ">
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                  <Carousel.Item>
                    <a
                      href="#"
                      className="physical_btn d-flex justify-content-center"
                    >
                      <p className="mb-0 ff_Inter fw-bold fs_12 text-white text-center ">
                        Physical examinations
                      </p>
                    </a>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HospitalLocation;
