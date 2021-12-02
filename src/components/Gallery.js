import React, { useState, useEffect, useRef } from "react";
import Compare from "./Compare";
import Coursel from "./Coursel";

const Gallery = () => {
  const [galleryState, setGalleryState] = useState(true);
  const [galleryAtConstruction, setGalleryAtConstruction] = useState(true);
  const galleryRenovationView = useRef(null);
  const galleryConstructionView = useRef(null);

  useEffect(() => {
    if (galleryAtConstruction) {
      galleryConstructionView.current.className =
        "dropdown-item rounded active";
      galleryRenovationView.current.className = "dropdown-item rounded";
    } else {
      galleryRenovationView.current.className = "dropdown-item rounded active";
      galleryConstructionView.current.className = "dropdown-item rounded";
    }
  }, [galleryAtConstruction]);

  const setGAlleryStateFunc = () => {
    if (galleryState) {
      setGalleryState(false);
      setGalleryAtConstruction(false);
    } else {
      setGalleryState(true);
      setGalleryAtConstruction(true);
    }
  };
  return (
    <div id='gallery' className='container'>
      <div className='d-flex justify-content-between pt-5'>
        <div
          className='gallery-text'
          style={{ color: "#FFCE52", textAlign: "center" }}
        >
          GALLERY
        </div>
        <div className='dropdown gallery-text'>
          <button
            className='btn btn-secondary dropdown-toggle '
            type='button'
            id='dropdownMenuButton2'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            style={{ backgroundColor: "#1B1825" }}
          ></button>
          <ul
            class='dropdown-menu dropdown-menu-dark shadow-lg rounded'
            aria-labelledby='dropdownMenuButton2'
            style={{ backgroundColor: "#1B1825" }}
          >
            <li>
              <a
                className='dropdown-item active rounded'
                onClick={setGAlleryStateFunc}
                ref={galleryConstructionView}
              >
                Construction Site
              </a>
            </li>
            <li>
              <a
                ref={galleryRenovationView}
                className='dropdown-item rounded'
                onClick={setGAlleryStateFunc}
              >
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
