import React, { useState } from "react";
import { Container } from "react-bootstrap";
import home from "../assets/imgs/png/home.png";
import health from "../assets/imgs/png/health.png";
import labs from "../assets/imgs/png/labs.png";
import doctors from "../assets/imgs/png/doctors.png";
import Hospitals from "../assets/imgs/png/Hospitals.png";
import documents from "../assets/imgs/png/documents.png";
import logo from "../assets/imgs/png/logo.png";
import icon from "../assets/imgs/png/location2.png";
import search from "../assets/imgs/png/search.png";
import phone from "../assets/imgs/png/phone2.png";
import cart from "../assets/imgs/png/cart.png";

const Nav = () => {
  const [navShow, setNavShow] = useState(false);

  // useEffect to handle document.body.style based on navShow state
  React.useEffect(() => {
    if (navShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [navShow]);

  return (
    <>
      <nav className="py-4">
        <Container>
          <div className="d-flex justify-content-between align-items-center w-100">
            <a href="#">
              <img className="w_210" src={logo} alt="logo" />
            </a>
            <div className="d-lg-flex d-none align-items-center bg-white rounded-2 ">
              <span className="d-flex align-items-center gap-2 location_box">
                <img className="w-10" src={icon} alt="icon" />
                <p className="mb-0 ff_Inter fw-semibold fs_12 clr_Black2">
                  Gurugram
                </p>
              </span>
              <div className="mx-4 d-flex justify-content-between ">
                <input
                  className="input2 w_220 "
                  type="text"
                  placeholder="Search for a test, health package or Labs"
                />
                <a href="">
                  <img className="w_18" src={search} alt="search" />
                </a>
              </div>
            </div>
            <div className=" d-md-flex align-items-center gap-4 d-none d-lg-none d-xl-flex ">
              <a
                className="d-flex align-items-center ff_Inter fw-medium fs_18 text-white"
                href="#"
              >
                <img className="w_25 me-2" src={phone} alt="phone" />
                75000 75111
              </a>
              <a
                className="d-flex align-items-center ff_Inter fw-medium fs_18 text-white"
                href="#"
              >
                <img className="w_25 me-2" src={cart} alt="cart" />
                Cart
              </a>

              <a
                className=" ff_Inter fw-medium fs_16 signIn_btn d-inline-block "
                href="#"
              >
                Sign in
              </a>
            </div>
            <label
              className="menu_formatting d-flex justify-content-end d-lg-none"
              htmlFor="check"
            >
              <input
                onClick={() => setNavShow(!navShow)}
                className="menu bg-black"
                type="checkbox"
                id="check"
              />
              <span className="span_nav1"></span>
              <span className="span_nav2"></span>
              <span className="span_nav3"></span>
            </label>{" "}
          </div>
          <div className=" d-lg-flex align-items-center gap-4 d-none  d-xl-none mt-4 justify-content-center ">
            <a
              className="d-flex align-items-center ff_Inter fw-medium fs_18 text-white"
              href="#"
            >
              <img className="w_25 me-2" src={phone} alt="phone" />
              75000 75111
            </a>
            <a
              className="d-flex align-items-center ff_Inter fw-medium fs_18 text-white"
              href="#"
            >
              <img className="w_25 me-2" src={cart} alt="cart" />
              Cart
            </a>

            <a
              className=" ff_Inter fw-medium fs_16 signIn_btn d-inline-block "
              href="#"
            >
              Sign in
            </a>
          </div>
          <div className="d-lg-none d-flex">
            <div className={`${navShow ? "nav-fix" : "fix-navbar"}`}>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center gap-4 flex-column justify-content-between w-100 mb-4">
                  <a className="d-flex align-items-center gap-1" href="#">
                    <img className="w-20" src={home} alt="home" />
                    <p className="ff_Inter fw-medium fs_18 clr_Gray mb-0">
                      Home
                    </p>
                  </a>
                  <a className="d-flex align-items-center gap-1" href="#">
                    <img className="w-20" src={health} alt="health" />
                    <p className="ff_Inter fw-medium fs_18 clr_Gray mb-0">
                      Health Packages
                    </p>
                  </a>
                  <a className="d-flex align-items-center gap-1" href="#">
                    <img className="w-20" src={labs} alt="labs" />
                    <p className="ff_Inter fw-medium fs_18 clr_Gray mb-0">
                      Nearest Labs
                    </p>
                  </a>
                  <a className="d-flex align-items-center gap-1" href="#">
                    <img className="w-20" src={doctors} alt="doctors" />
                    <p className="ff_Inter fw-medium fs_18 clr_Gray mb-0">
                      Doctors
                    </p>
                  </a>
                  <a className="d-flex align-items-center gap-1" href="#">
                    <img className="w-20" src={Hospitals} alt="hospitals" />
                    <p className="ff_Inter fw-medium fs_18 clr_Gray mb-0">
                      Hospitals
                    </p>
                  </a>
                  <a className="d-flex align-items-center gap-1" href="#">
                    <img className="w-20" src={documents} alt="documents" />
                    <p className="ff_Inter fw-medium fs_18 clr_Gray mb-0">
                      Upload Prescription
                    </p>
                  </a>
                </div>
                <div className=" d-flex align-items-center justify-content-center gap-4 ">
                  <a
                    className="d-flex align-items-center ff_Inter fw-medium fs_18 clr_Gray"
                    href="#"
                  >
                    <img className="w_25 me-2" src={phone} alt="phone" />
                    75000 75111
                  </a>
                  <a
                    className="d-flex align-items-center ff_Inter fw-medium fs_18 clr_Gray"
                    href="#"
                  >
                    <img className="w_25 me-2" src={cart} alt="cart" />
                    Cart
                  </a>
                </div>
                <div className=" justify-content-center d-flex mt-3">
                  <a
                    className=" ff_Inter fw-medium fs_16 signIn_btn w-50  "
                    href="#"
                  >
                    Sign in
                  </a>
                </div>
                <div className="d-flex align-items-center bg-white rounded-2 mt-4">
                  <span className="d-flex align-items-center gap-2 location_box">
                    <img className="w-10" src={icon} alt="icon" />
                    <p className="mb-0 ff_Inter fw-semibold fs_12 clr_Black2">
                      Gurugram
                    </p>
                  </span>
                  <div className="mx-4 d-flex justify-content-between ">
                    <input
                      className="input2 w_220 "
                      type="text"
                      placeholder="Search for a test, health package or Labs"
                    />
                    <a href="">
                      <img className="w_18" src={search} alt="search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Nav;
