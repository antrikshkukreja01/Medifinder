import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Doctor from "../assets/imgs/webp/doctor.webp";

const ExperincedDoctors = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <h2 className=" mb-sm-5 clr_Gray ff_Inter fw-semibold fs_37 text-center ">
            Meet Our <span className=" clr_Darkgreen">Experienced Doctors</span>
          </h2>
          <Row className=" align-items-center justify-content-center">
            <Col className=" mt-4 mt-lg-0" sm={6} md={4} lg={3}>
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Col>
            <Col className=" mt-4 mt-lg-0" sm={6} md={4} lg={3}>
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Col>
            <Col className=" mt-4 mt-lg-0" sm={6} md={4} lg={3}>
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Col>
            <Col className=" mt-4 mt-lg-0" sm={6} md={4} lg={3}>
              <img className=" w-100 mb-2" src={Doctor} alt="Doctor" />
              <p className="mb-0 ff_Inter fs_24 fw-semibold clr_LightGray text-center">
                Dr. Vinay Kumar
              </p>
              <p className="clr_Black fw-normal fs_14 ff_Kite mb-0 text-center">
                M.D. D.M. Cardiology
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ExperincedDoctors;
