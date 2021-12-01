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
                <span style={{ fontSize: "2rem", color: "#fff" }}>
                  Interior Design
                </span>
              </div>
              <div>
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
            <h4 className='ms-md-5 mt-md-5 lh-4'>
              OUTFIT IS AN ALL IN ONE RENOATION PRODUCT THAT LET'S YOU BILD WITH
              CONFIDENCE.
            </h4>

            <h5 className='mt-md-3 ms-md-5 lh-md-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
              minus assumenda, omnis facere sit dolorum autem placeat animi
              recusandae! Perferendis quis iure mollitia eum, rerum fugit
              deserunt blanditiis nisi?
            </h5>

            <a
              href='#'
              className='p-2 text-decoration-none text-black rounded-0 mt-3 ms-5 btn-quote'
              style={{
                backgroundColor: "#FFF",
                display: "inline-block",
                width: "18%",
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
