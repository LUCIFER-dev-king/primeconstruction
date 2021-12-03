import React from "react";
//https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?cs=srgb&dl=pexels-rodolfo-quir%C3%B3s-2219024.jpg&fm=jpg
// /https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?cs=srgb&dl=pexels-anamul-rezwan-1216544.jpg&fm=jpg
//https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?cs=srgb&dl=pexels-anamul-rezwan-1216589.jpg&fm=jpg
const Service = () => {
  return (
    <div className='container'>
      <h4 className='text-center m-3'>Service</h4>
      <div className='m-3 d-flex flex-row justify-content-between align-items-center'>
        <div
          className='card shadow'
          style={{ width: "18rem", height: "20rem" }}
        >
          <img src='' class='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>lorem</h5>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, magni.
            </p>
          </div>
        </div>
        <div className='card' style={{ width: "18rem", height: "20rem" }}>
          <img src='' class='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>lorem</h5>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, magni.
            </p>
          </div>
        </div>
        <div className='card' style={{ width: "18rem", height: "20rem" }}>
          <img src='' class='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>lorem</h5>
            <p className='card-text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos, magni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
