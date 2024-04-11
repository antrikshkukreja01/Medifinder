import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExperincedDoctors from "./components/ExperincedDoctors";
import HospitalLocation from "./components/HospitalLocation";
import Insurance from "./components/Insurance";
import Faq from "./components/Faq";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <HospitalLocation />
      <ExperincedDoctors />
      <Faq />
      <Insurance />
    </>
  );
}

export default App;
