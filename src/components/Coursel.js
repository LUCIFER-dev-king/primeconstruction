import React from "react";
import checkdam1 from "../assets/checkdam/checkdam 1.jpg";
import checkdam2 from "../assets/checkdam/checkdam 2.jpg";
const Coursel = () => {
  return (
    <div className='container p-lg-5 p-md-3 p-sm-1 mt-3 mt-md-0'>
      <div
        id='carouselExampleDark'
        className='carousel slide rounded-1 border border-2 shadow-lg ms-xl-5 me-xl-5 mb-xl-5 mt-xl-2'
        data-bs-ride='carousel'
      >
        <div class='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='0'
            class='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div class='carousel-item active' data-bs-interval='10000'>
            <img src={checkdam1} class='d-block w-100' alt='...' />
            <div class='carousel-caption d-none d-md-block'>
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class='carousel-item' data-bs-interval='2000'>
            <img src={checkdam2} class='d-block w-100' alt='...' />
            <div class='carousel-caption d-none d-md-block'>
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class='carousel-item'>
            <img
              src='https://images.pexels.com/photos/7031414/pexels-photo-7031414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              class='d-block w-100'
              alt='...'
            />
            <div class='carousel-caption d-none d-md-block'>
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Coursel;
