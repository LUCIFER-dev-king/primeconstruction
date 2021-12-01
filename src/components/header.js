import React from "react";
import img from "../assets/cap.jpg";

export const Header = () => {
  return (
    <div className='vh-100 banner-img'>
      <div className='bg-change'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container'>
            <a className='navbar-brand fs-4' href='#'>
              <span className='fw-bolder text-white'>PRIME</span> CONSTRUCTION
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
              <span class='navbar-toggler-icon'></span>
            </button>
            <div
              class='collapse navbar-collapse justify-content-end fs-4'
              id='navbarNavDropdown'
            >
              <ul class='navbar-nav'>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Features
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          <div className='banner-content'>
            <p>
              Lorem ipsum <br /> dolor sit amet consectetur <br /> adipisicing
              elit. Obcaecati, odio.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
