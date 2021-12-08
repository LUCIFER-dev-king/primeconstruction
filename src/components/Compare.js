import React from "react";
import ReactCompareImage from "react-compare-image";
import img1 from "../assets/renovate1/1.jpg";
import img2 from "../assets/renovate1/2.jpg";

const Compare = () => {
  return (
    <div className='container p-md-5 mt-3 mt-md-0'>
      <div
        id='carouselExampleDark'
        className='carousel slide rounded-1 border border-2 shadow-lg ms-md-5 me-md-5 mb-md-5 mt-md-2'
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
            <ReactCompareImage
              leftImage={img1}
              rightImage={img2}
              handleSize={40}
            />
          </div>
          <div class='carousel-item' data-bs-interval='10000'>
            <ReactCompareImage
              leftImage={img1}
              rightImage={img2}
              handleSize={40}
            />
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

export default Compare;
