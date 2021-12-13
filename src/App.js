import Quote from "./components/quote";
import "./App.css";
import Contact from "./components/contact";
import Banner from "./components/banner";

import Gallery from "./components/Gallery";
import Service1 from "./components/Service1";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App' style={{ backgroundColor: "#1B1825" }}>
      <Banner />
      <Service1 />
      <Quote />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
