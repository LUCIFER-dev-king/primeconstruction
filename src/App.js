import Quote from "./components/quote";
import "./App.css";
import Contact from "./components/contact";
import Banner from "./components/banner";

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
