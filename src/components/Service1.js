import React, { useEffect, useRef } from "react";
import { FaAngleUp, FaArrowRight } from "react-icons/fa";
// /FaStarOfLife
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
  // const tl = useRef();
  // const q = gsap.utils.selector(serviceRef);
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
              <div className='gallery-text' style={{ color: "#fff" }}>
                <span
                  className='ms-md-4 ms-lg-5'
                  style={{ fontSize: "4rem", color: "#FFCE52" }}
                >
                  01{" "}
                </span>
                Building Erection
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
            <p className='ms-md-5 mt-md-5 lh-4 text-muted text-uppercase service-text-1'>
              Building is about getting around the obstacles that are presented
              to you.
            </p>

            <p className='mt-md-3 ms-md-5 text-light service-text-2'>
              Our integrated approach to building projects means we have
              developed close working relationships with architects, engineers
              and surveyors. These relationships allow Prime Construction to
              fulfil projects that span design, project management and building
              works.
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
              <div className='gallery-text ' style={{ color: "#fff" }}>
                <span style={{ fontSize: "4rem", color: "#FFCE52" }}>02 </span>
                Building Repair
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
            <p className='pe-md-5 mt-md-5 lh-4 text-muted text-uppercase service-text-1'>
              There is nothing more poetic and terrible than the skyscrapers’
              battle with the heavens that cover them.
            </p>

            <p className='pe-md-5 text-light service-text-2'>
              When you desire an extraordinary building experience based on open
              communication and genuine trust, Desert Star Construction is your
              committed and loyal steward in the creation of your new or
              remodeled home.
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
              <div className='gallery-text' style={{ color: "#fff" }}>
                <span
                  className='ms-md-5 ms-lg-5'
                  style={{ fontSize: "4rem", color: "#FFCE52" }}
                >
                  03{" "}
                </span>
                Building Renovation
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
            <p className='ms-md-5 mt-md-5 lh-4 text-muted service-text-1'>
              OUTFIT IS AN ALL IN ONE RENOATION PRODUCT THAT LET'S YOU BUILD
              WITH CONFIDENCE.
            </p>

            <p className='mt-md-3 ms-md-5 text-light service-text-2'>
              When you desire an extraordinary building experience based on open
              communication and genuine trust, Prime Construction is your
              committed and loyal steward in the creation of your renovated
              home. Our job remains the same – to be dedicated stewards through
              the exciting process of making your dream home come to life
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
              <div className='gallery-text' style={{ color: "#fff" }}>
                <span style={{ fontSize: "4rem", color: "#FFCE52" }}>04 </span>
                Interior & Exterior Design
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
            <p className='pe-md-5 mt-md-5 lh-4 text-muted text-uppercase service-text-1'>
              Be faithful to your own taste, because nothing you really like is
              ever out of style.
            </p>

            <p className='pe-md-5 text-light service-text-2'>
              Our greatest priority is to clearly understand what you wish to
              create with your custom project design. We do this by asking
              focused questions and listening carefully to your responses. We
              design your custom home with the highest standard of integrity and
              excellence.
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
