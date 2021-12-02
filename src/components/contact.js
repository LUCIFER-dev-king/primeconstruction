import React from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
// #1B1825
// #1B2259
// blue 234AE2
const Contact = () => {
  return (
    <div
      id='contact '
      style={{ backgroundColor: "#1B1825", height: "100%", color: "#fff" }}
      className='mt-5'
    >
      <div className='text-center'>
        <h3 className='gallery-text'>
          GET IN<span style={{ color: "#FFCE52" }}> TOUCH!</span>
        </h3>
      </div>
      <p className='text-center'>
        Fill up the form and our Team will get back to you within 24 hours
      </p>
      <div className='container'>
        <div className='contact-links'>
          <a
            href='https://goo.gl/maps/2TMXXomoJDbCiUPf6'
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div className='d-flex p-1 flex-column justify-content-center align-items-center contact-link-icon'>
              <MdLocationOn style={{ fontSize: "1.5rem", color: "#FF7433" }} />
              <p className='mt-1'>Chidambaram</p>
            </div>
          </a>
          <a
            href='tel:81232312312'
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div className='d-flex p-1 flex-column justify-content-center align-items-center contact-link-icon'>
              <FaPhoneAlt style={{ fontSize: "1.5rem", color: "#FF7433" }} />
              <p href='tel:81232312312' className='mt-1'>
                81232312312
              </p>
            </div>
          </a>

          <a
            href='https://www.instagram.com/Prime_construction_cdm/'
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div className='d-flex p-1 flex-column justify-content-center align-items-center contact-link-icon'>
              <FaInstagram style={{ fontSize: "1.5rem", color: "#FF7433" }} />
              <p>Prime_construction_cdm</p>
            </div>
          </a>
        </div>
      </div>
      <div className='container p-2' style={{ fontSize: "1rem" }}>
        <div className='mx-auto rounded-2 bg-white w-75 text-black pb-2'>
          <div className='d-lg-flex justify-content-around py-4 px-md-4 contact-form'>
            <div className='d-md-flex flex-column w-100 p-2 contact-form'>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='Prime Construction'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='primeconstruction@gmail.com'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Phone
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='9999999999'
                />
              </div>
            </div>
            <div className='mb-3 w-100 p-2'>
              <label for='exampleFormControlTextarea1' className='form-label'>
                Example textarea
              </label>
              <textarea
                className='form-control h-100'
                id='exampleFormControlTextarea1'
                rows='3'
              ></textarea>
            </div>
          </div>
          <button
            className='d-flex rounded-2 mx-auto p-2 border border-0 '
            style={{
              backgroundColor: "#FFCE52",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
