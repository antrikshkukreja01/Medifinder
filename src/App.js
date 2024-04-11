import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ExperincedDoctors from "./components/ExperincedDoctors";
import HospitalLocation from "./components/HospitalLocation";
import Insurance from "./components/Insurance";
import Faq from "./components/Faq";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/Preloader";
import Backtotop from "./components/Backtotop";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className=" overflow-hidden">
        <Preloader />
        <Backtotop />
        <NavBar />
        <Header />
        <AboutUs />
        <HospitalLocation />
        <ExperincedDoctors />
        <Faq />
        <Insurance />
        <Footer />
      </div>
    </>
  );
}

export default App;
