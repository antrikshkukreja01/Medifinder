import React from "react";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <section className=" pb-5">
        <Container>
          <span className=" d-flex align-items-center gap-4">
            <a className=" ff_Inter fw-bold fs_14 clr_Gray2" href="#">
              About Us
            </a>
            <a className=" ff_Inter fw-normal fs_14 clr_Gray2" href="#">
              Reviews
            </a>
          </span>
          <div className=" line mt-2">
            <div className="line2"></div>
          </div>
          <div className="about_box mt-4">
            <p className=" mb-4 ff_Inter fw-bold fs_20 clr_Black2 ">
              About Kolmet Hospital
            </p>
            <p className="mb-0 ff_Inter fw-normal fs_20 text-black lh_43">
              Kolmet Hospital is one of the leading hospital in Central Delhi.
              The best healthcare professionals provide Comprehensive
              healthcare. It is located at Karol Bagh. It provides advanced
              levels of care in over different specialties including Gynecology
              and Obstetrics, Gastroenterology, General Medicine, Ophthalmology,
              Endocrinology, Physiotherapy, Anesthesiology.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
