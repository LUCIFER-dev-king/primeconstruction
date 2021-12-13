import React, { useEffect, useRef } from "react";
import { FaAngleUp, FaArrowRight } from "react-icons/fa";
// import service1 from "../assets/service/service1.jpg";
// import service2 from "../assets/service/service2.jpg";
// import service3 from "../assets/service/service3.jpg";
// import service4 from "../assets/service/service4.jpg";
// import service5 from "../assets/service/service5.jpg";
import { gsap } from "gsap";
import { Power2 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Service1 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const serviceRef = useRef();
  const tl = useRef();
  const q = gsap.utils.selector(serviceRef);
  const maskAnimate = useRef();
  const imageAnimate = useRef();

  useEffect(() => {
    let masks = document.querySelectorAll(".service-mask");

    masks.forEach((mask) => {
      let image = mask.querySelector(".service-img");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: mask,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(mask, { autoAlpha: 1 });

      tl.from(mask, 1.5, {
        xPercent: -100,
        ease: Power2.out,
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
    });
  });
  return (
    <div>
      <div className='container' ref={serviceRef}>
        <div className='d-md-flex mt-5 py-3 justify-content-start'>
          <div ref={maskAnimate} className='service-mask'>
            <div
              ref={imageAnimate}
              className='service-img'
              style={{
                backgroundImage: `url("https://primeconstruction.s3.ap-south-1.amazonaws.com/service/service3.jpg")`,
              }}
            >
              {" "}
            </div>
          </div>
          <div className='d-flex flex-column pe-lg-5'>
            <div className='d-flex justify-content-between'>
              <div
                className='ms-md-4 ms-lg-5'
                style={{ fontSize: "4rem", color: "#FFCE52" }}
              >
                01{" "}
                <span className='gallery-text' style={{ color: "#fff" }}>
                  Building Erection
                </span>
              </div>
              <div className='d-none d-lg-block'>
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
          <div className='d-flex flex-column pe-lg-5'>
            <div ref={maskAnimate} className='d-md-none service-mask'>
              <div
                ref={imageAnimate}
                className='service-img'
                style={{
                  backgroundImage: `url("https://primeconstruction.s3.ap-south-1.amazonaws.com/service/service1.jpg")`,
                }}
              >
                {" "}
              </div>
            </div>
            <div className='d-flex justify-content-between pe-lg-5'>
              <div style={{ fontSize: "4rem", color: "#FFCE52" }}>
                02{" "}
                <span className='gallery-text' style={{ color: "#fff" }}>
                  Building Repair
                </span>
              </div>
              <div className='d-none d-lg-block'>
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

          <div ref={maskAnimate} className='d-none d-md-block service-mask'>
            <div
              ref={imageAnimate}
              className='service-img'
              style={{
                backgroundImage: `url("https://primeconstruction.s3.ap-south-1.amazonaws.com/service/service1.jpg")`,
              }}
            >
              {" "}
            </div>
          </div>
        </div>
        <div className='d-md-flex mt-5 py-3 justify-content-start'>
          <div ref={maskAnimate} className='service-mask'>
            <div
              ref={imageAnimate}
              className='service-img'
              style={{
                backgroundImage: `url("https://primeconstruction.s3.ap-south-1.amazonaws.com/service/service2.jpg")`,
              }}
            >
              {" "}
            </div>
          </div>
          <div className='d-flex flex-column pe-lg-5'>
            <div className='d-flex justify-content-between'>
              <div
                className='ms-md-5 ms-lg-5'
                style={{ fontSize: "4rem", color: "#FFCE52" }}
              >
                03{" "}
                <span className='gallery-text' style={{ color: "#fff" }}>
                  Renovation
                </span>
              </div>
              <div className='d-none d-lg-block'>
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
          <div className='d-flex flex-column pe-lg-5'>
            <div ref={maskAnimate} className='d-md-none service-mask'>
              <div
                ref={imageAnimate}
                className='service-img'
                style={{
                  backgroundImage: `url("https://primeconstruction.s3.ap-south-1.amazonaws.com/service/service4.jpg")`,
                }}
              >
                {" "}
              </div>
            </div>
            <div className='d-flex justify-content-between pe-lg-5'>
              <div style={{ fontSize: "4rem", color: "#FFCE52" }}>
                04{" "}
                <span className='gallery-text' style={{ color: "#fff" }}>
                  Interior & Exterior
                </span>
              </div>
              <div className='d-none d-lg-block'>
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

          <div ref={maskAnimate} className='d-none d-md-block service-mask'>
            <div
              ref={imageAnimate}
              className='service-img'
              style={{
                backgroundImage: `url("https://primeconstruction.s3.ap-south-1.amazonaws.com/service/service4.jpg")`,
              }}
            >
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1;
