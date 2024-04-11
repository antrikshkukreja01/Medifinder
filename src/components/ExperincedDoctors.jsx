import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Doctor from "../assets/imgs/webp/doctor.webp";
import Carousel from "react-bootstrap/Carousel";

const ExperincedDoctors = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <h2 className=" mb-sm-5 clr_Gray ff_Inter fw-semibold fs_37 text-center ">
            Meet Our <span className=" clr_Darkgreen">Experienced Doctors</span>
          </h2>
          <Row className=" d-none d-md-flex align-items-center justify-content-center">
            <Col
              data-aos="fade-up-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className=" mt-4 mt-lg-0"
              sm={6}
              md={4}
              lg={3}
            >
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Col>
            <Col
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className=" mt-4 mt-lg-0"
              sm={6}
              md={4}
              lg={3}
            >
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Col>
            <Col
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className=" mt-4 mt-lg-0"
              sm={6}
              md={4}
              lg={3}
            >
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Col>
            <Col
              data-aos="fade-up-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className=" mt-4 mt-lg-0"
              sm={6}
              md={4}
              lg={3}
            >
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Col>
          </Row>
          <Carousel className="d-md-none ">
            <Carousel.Item>
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default ExperincedDoctors;
