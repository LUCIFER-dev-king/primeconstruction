import React from "react";
// import cap from "../assets/cap.jpg";
import { FaAngleDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className='container'>
      <div className='d-flex pt-md-5 justify-content-between'>
        <div className='d-flex pt-md-5 flex-column'>
          <h4 className='banner-text-heading' style={{ color: "#BD9066" }}>
            Architecture <br /> with people in <br />
            mind<span style={{ color: "#BD4F20" }}>.</span>
          </h4>
          <p className='mt-3' style={{ color: "#B9BAC1" }}>
            Understanding the person or people living in <br /> a home is a
            greater need in design.
          </p>
        </div>
        <div>{""}</div>
      </div>
      <a
        href='#banner'
        className='nav-item p-2 text-decoration-none text-black rounded-0 mt-3'
        style={{
          backgroundColor: "#FFCE52",
          display: "inline-block",
          minWidth: "0",
        }}
      >
        Our Projects
        <FaAngleDown className='ms-1' />
      </a>

      <div className='d-none d-lg-block heroImage'></div>
      <div className='d-none d-lg-block heroImage2'>Imge</div>
    </div>
  );
};

export default HeroSection;
