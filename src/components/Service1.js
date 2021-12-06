import React from "react";
import { FaAngleUp, FaArrowRight } from "react-icons/fa";
const Service1 = () => {
  return (
    <div>
      <div className='container'>
        <div className='d-md-flex mt-5 py-3 justify-content-start'>
          <div className='service-img'> </div>
          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-between'>
              <div
                className='ms-md-5'
                style={{ fontSize: "4rem", color: "#FFCE52" }}
              >
                01{" "}
                <span className='gallery-text' style={{ color: "#fff" }}>
                  Interior Design
                </span>
              </div>
              <div className='d-none d-md-block'>
                <FaAngleUp
                  style={{
                    transform: "rotate(45deg)",
                    fontSize: "2rem",
                    color: "#FFCE52",
                    marginTop: "4rem",
                  }}
                />
              </div>
            </div>
            <h5 className='ms-md-5 mt-md-5 lh-4 text-light'>
              OUTFIT IS AN ALL IN ONE RENOATION PRODUCT THAT LET'S YOU BILD WITH
              CONFIDENCE.
            </h5>

            <p className='mt-md-3 ms-md-5 lh-lg text-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
              minus assumenda, omnis facere sit dolorum autem placeat animi
              recusandae! Perferendis quis iure mollitia eum, rerum fugit
              deserunt blanditiis nisi?
            </p>

            <a
              href='#gallery'
              className='p-2 text-decoration-none text-black rounded-0 mt-3 ms-md-5 me-auto btn-quote'
              style={{
                backgroundColor: "#FFF",
                display: "inline-block",
                fontSize: "1rem",
              }}
            >
              Our Projects
              <FaArrowRight className='ms-1' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1;
