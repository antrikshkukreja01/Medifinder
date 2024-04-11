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

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <HospitalLocation />
      <ExperincedDoctors />
      <Faq />
      <Insurance />
      <Footer />
    </>
  );
}

export default App;
