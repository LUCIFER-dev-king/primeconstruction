import React, { useState } from "react";
import Compare from "./Compare";
import Coursel from "./Coursel";

const Gallery = () => {
  const [galleryState, setGalleryState] = useState(true);

  const setGAlleryStateFunc = () => {
    if (galleryState) {
      setGalleryState(false);
    } else {
      setGalleryState(true);
    }
  };
  return (
    <div className='container'>
      <div className='d-flex justify-content-between mt-5'>
        <div
          style={{ fontSize: "2rem", color: "#FFCE52", textAlign: "center" }}
        >
          GALLERY
        </div>
        <div class='dropdown'>
          <button
            class='btn btn-secondary dropdown-toggle'
            type='button'
            id='dropdownMenuButton2'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            style={{ backgroundColor: "#1B1825" }}
          >
            Dropdown button
          </button>
          <ul
            class='dropdown-menu dropdown-menu-dark shadow-lg rounded'
            aria-labelledby='dropdownMenuButton2'
            style={{ backgroundColor: "#1B1825" }}
          >
            <li>
              <a
                class='dropdown-item active rounded'
                onClick={setGAlleryStateFunc}
              >
                Construction
              </a>
            </li>
            <li>
              <a class='dropdown-item rounded' onClick={setGAlleryStateFunc}>
                Renovation
              </a>
            </li>
          </ul>
        </div>
      </div>
      {galleryState ? <Coursel></Coursel> : <Compare></Compare>}
    </div>
  );
};

export default Gallery;
