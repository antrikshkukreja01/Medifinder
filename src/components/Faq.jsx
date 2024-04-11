import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Faq_img from "../assets/imgs/webp/faq_img.webp";

const Faq = () => {
  return (
    <>
      <section className="py-5 ">
        <Container>
          <Row className=" align-items-center">
            <Col xl={6}>
              <img
                data-aos="fade-down-left"
                data-aos-duration="3000"
                className="w-100 "
                src={Faq_img}
                alt="Img"
              />
            </Col>
            <Col className="mt-5 mt-xl-0" xl={6}>
              <h2 className=" mb-2 fw-bold fs_32 ff_Inter clr_Gray text-center">
                FAQ
              </h2>
              <Accordion defaultActiveKey={["0"]}>
                <Accordion.Item eventKey="0" className=" mb-4 ">
                  <Accordion.Header>
                    <span className="ball "></span>
                    <p className=" ff_Heebo fw-normal fs_18 clr_Darkgray mb-0">
                      What is the emergency number of hospital ambulance.
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_Inter fw-medium fs_16 clr_Darkgray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className=" mb-4 ">
                  <Accordion.Header>
                    <span className="ball "></span>
                    <p className=" ff_Heebo fw-normal fs_18 clr_Darkgray mb-0">
                      What is the emergency number of hospital ambulance.
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_Inter fw-medium fs_16 clr_Darkgray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className=" mb-4 ">
                  <Accordion.Header>
                    <span className="ball "></span>
                    <p className=" ff_Heebo fw-normal fs_18 clr_Darkgray mb-0">
                      What is the emergency number of hospital ambulance.
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_Inter fw-medium fs_16 clr_Darkgray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className=" mb-4 ">
                  <Accordion.Header>
                    <span className="ball "></span>
                    <p className=" ff_Heebo fw-normal fs_18 clr_Darkgray mb-0">
                      What is the emergency number of hospital ambulance.
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className=" mb-0 ff_Inter fw-medium fs_16 clr_Darkgray">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faq;
