import React from "react";
import HeroSection from "./HeroSection";
import img from "../assets/logo.jpg";
import { MdMenu } from "react-icons/md";
const Banner = () => {
  return (
    <div className='banner p-2'>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <a className='navbar-brand fs-4' href='#banner'>
            <img
              src={img}
              width='80px'
              height='80px'
              alt='Prime Construction'
              className='nav-logo'
            />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MdMenu color='#fff' />
          </button>
          <div
            class='collapse navbar-collapse justify-content-between '
            id='navbarNavDropdown'
          >
            <ul class='navbar-nav m-auto'>
              <li class='nav-item'>
                <a
                  className='nav-link active text-white ms-lg-5 banner-btn'
                  aria-current='page'
                  href='#banner'
                >
                  <span className='banner-btn'>Home</span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white ms-lg-5' href='#banner'>
                  <span className='banner-btn'>Services</span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white ms-lg-5' href='#quotation'>
                  <span className='banner-btn'>Quotation</span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link text-white ms-lg-5' href='#gallery'>
                  <span className='banner-btn'>Gallery</span>
                </a>
              </li>
            </ul>
            <div className='mt-xs-3 mt-lg-0 contact-nav-btn'>
              <a
                href='#contact'
                className='nav-item p-2 text-decoration-none text-white contact-btn '
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
      <HeroSection />
    </div>
  );
};

export default Banner;
