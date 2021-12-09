import React from "react";
import { FaAngleUp, FaArrowRight } from "react-icons/fa";
import service1 from "../assets/service/service1.jpg";
import service2 from "../assets/service/service2.jpg";
import service3 from "../assets/service/service3.jpg";
import service4 from "../assets/service/service4.jpg";
// import service5 from "../assets/service/service5.jpg";
const Service1 = () => {
  return (
    <div>
      <div className='container'>
        <div className='d-md-flex mt-5 py-3 justify-content-start'>
          <div
            className='service-img'
            style={{ backgroundImage: `url(${service1})` }}
          >
            {" "}
          </div>
          <div className='d-flex flex-column pe-md-5'>
            <div className='d-flex justify-content-between'>
              <div
                className='ms-md-5'
                style={{ fontSize: "4rem", color: "#FFCE52" }}
              >
                01{" "}
                <span className='gallery-text' style={{ color: "#fff" }}>
                  Building Erection
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
            <p className='ms-md-5 mt-md-5 lh-4 text-muted'>
              OUTFIT IS AN ALL IN ONE RENOATION PRODUCT THAT LET'S YOU BUILD
              WITH CONFIDENCE.
            </p>

            <p className='mt-md-3 ms-md-5 text-light'>
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
        <div className='d-md-flex mt-5 py-3 justify-content-between'>
          <div className='d-flex flex-column pe-md-5'>
            <div className='d-flex justify-content-between pe-md-5'>
              <div style={{ fontSize: "4rem", color: "#FFCE52" }}>
                02{" "}
                <span className='gallery-text' style={{ color: "#fff" }}>
                  Building Repair
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
            <p className='pe-md-5 mt-md-5 lh-4 text-muted'>
              OUTFIT IS AN ALL IN ONE RENOATION PRODUCT THAT LET'S YOU BUILD
              WITH CONFIDENCE.
            </p>

            <p className='pe-md-5 text-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
              minus assumenda, omnis facere sit dolorum autem placeat animi
              recusandae! Perferendis quis iure mollitia eum, rerum fugit
              deserunt blanditiis nisi?
            </p>

            <a
              href='#gallery'
              className='p-2 text-decoration-none text-black rounded-0 mt-3 me-auto btn-quote'
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
          <div
            className='service-img pe-md-5'
            style={{ backgroundImage: `url(${service2})` }}
          >
            {" "}
          </div>
        </div>
        <div className='d-md-flex mt-5 py-3 justify-content-start'>
          <div
            className='service-img'
            style={{ backgroundImage: `url(${service3})` }}
          >
            {" "}
          </div>
          <div className='d-flex flex-column pe-md-5'>
            <div className='d-flex justify-content-between'>
              <div
                className='ms-md-5'
                style={{ fontSize: "4rem", color: "#FFCE52" }}
              >
                03{" "}
                <span className='gallery-text' style={{ color: "#fff" }}>
                  Building Renovation
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
            <p className='ms-md-5 mt-md-5 lh-4 text-muted'>
              OUTFIT IS AN ALL IN ONE RENOATION PRODUCT THAT LET'S YOU BUILD
              WITH CONFIDENCE.
            </p>

            <p className='mt-md-3 ms-md-5 text-light'>
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
        <div className='d-md-flex mt-5 py-3 justify-content-between'>
          <div className='d-flex flex-column pe-md-5'>
            <div className='d-flex justify-content-between pe-md-5'>
              <div style={{ fontSize: "4rem", color: "#FFCE52" }}>
                04{" "}
                <span className='gallery-text' style={{ color: "#fff" }}>
                  Interior & Exterior
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
            <p className='pe-md-5 mt-md-5 lh-4 text-muted'>
              OUTFIT IS AN ALL IN ONE RENOATION PRODUCT THAT LET'S YOU BUILD
              WITH CONFIDENCE.
            </p>

            <p className='pe-md-5 text-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
              minus assumenda, omnis facere sit dolorum autem placeat animi
              recusandae! Perferendis quis iure mollitia eum, rerum fugit
              deserunt blanditiis nisi?
            </p>

            <a
              href='#gallery'
              className='p-2 text-decoration-none text-black rounded-0 mt-3 me-auto btn-quote'
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
          <div
            className='service-img pe-md-5'
            style={{ backgroundImage: `url(${service4})` }}
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1;
