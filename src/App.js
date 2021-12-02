import { Header } from "./components/header";
import Quote from "./components/quote";
import Service from "./components/serivce";
import "./App.css";
import Contact from "./components/contact";
import Banner from "./components/banner";
import HeroSection from "./components/HeroSection";
import Service1 from "./components/Service1";
import Coursel from "./components/Coursel";
import Compare from "./components/Compare";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className='App' style={{ backgroundColor: "#1B1825" }}>
      <Banner />
      <Quote />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
