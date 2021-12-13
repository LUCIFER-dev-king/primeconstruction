import React, { useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { gsap } from "gsap";
import { Power4, Power2 } from "gsap/all";

// import hero1 from "../assets/HeroSection/hero1.jpg";
// import hero2 from "../assets/HeroSection/hero2.jpg";

const HeroSection = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const bannerTextAnimate = useRef();
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline().staggerFrom(
      q(".banner-text-heading-animate"),
      1.5,
      {
        opacity: 0,
      },
      { opacity: 1, y: "100%", ease: Power4.easeOut },
      0.15
    );
  });

  useEffect(() => {
    tl.current = gsap.timeline().staggerFrom(
      q(".hero-image-animate"),
      1.5,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        y: "10%",
        ease: Power2.out,
      },
      0.15
    );
  }, []);

  return (
    <div className='container' ref={el}>
      <div className='d-flex pt-md-5 justify-content-between'>
        <div className='d-flex pt-5 flex-column'>
          <h4
            className='banner-text-heading banner-text-heading-animate'
            ref={bannerTextAnimate}
            style={{ color: "#BD9066" }}
          >
            Construction
          </h4>
          <h4
            className='d-none d-sm-block banner-text-heading banner-text-heading-animate'
            style={{ color: "#BD9066" }}
          >
            with people in
          </h4>
          <h4
            className='d-none d-sm-block banner-text-heading banner-text-heading-animate'
            style={{ color: "#BD9066" }}
          >
            mind<span style={{ color: "#BD4F20" }}>.</span>
          </h4>
          <h4
            className='d-sm-none banner-text-heading banner-text-heading-animate'
            style={{ color: "#BD9066" }}
          >
            with people
          </h4>
          <h4
            className='d-sm-none banner-text-heading banner-text-heading-animate'
            style={{ color: "#BD9066" }}
          >
            in mind<span style={{ color: "#BD4F20" }}>.</span>
          </h4>
          <p
            className='mt-3 banner-text-animate banner-text-heading-animate'
            style={{ color: "#B9BAC1" }}
          >
            Understanding the person or people living in <br /> a home is a
            greater need in design.
          </p>
          <a
            href='#banner'
            className='nav-item p-2 text-decoration-none text-black rounded-0 mt-3 me-auto banner-text-heading-animate'
            style={{
              backgroundColor: "#FFCE52",
              display: "inline-block",
              minWidth: "0",
            }}
          >
            Our Projects
            <FaAngleDown className='ms-1' />
          </a>
        </div>

        <div>{""}</div>
      </div>

      <div className='d-none d-lg-block heroImage hero-image-animate'></div>
      <div className='d-none d-lg-block heroImage2 hero-image-animate'></div>
    </div>
  );
};

export default HeroSection;
