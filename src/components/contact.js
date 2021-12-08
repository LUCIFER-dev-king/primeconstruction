import React from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";

// #1B1825
// #1B2259
// blue 234AE2
const Contact = () => {
  const [state, handleSubmit] = useForm("mnqwqqlv");
  if (state.succeeded) {
    console.log("Thanks for joining!");
  }
  return (
    <div
      id='contact'
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
              <p className='mt-1'>Prime_construction_cdm</p>
            </div>
          </a>
        </div>
      </div>
      <div className='container p-1' style={{ fontSize: "1rem" }}>
        <form onSubmit={handleSubmit}>
          <div className='mx-auto rounded-2 bg-white w-100 w-md-75 text-black pb-2'>
            <div className='d-lg-flex justify-content-around py-4 px-md-4 contact-form'>
              <div className='d-md-flex flex-column w-100 p-2 contact-form'>
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='form-control text-muted'
                    id='name'
                    name='name'
                    placeholder='Prime Construction'
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control text-muted'
                    id='email'
                    name='email'
                    placeholder='primeconstruction@gmail.com'
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='phone' className='form-label'>
                    Phone
                  </label>
                  <input
                    type='tel'
                    className='form-control text-muted'
                    id='phone'
                    name='phone'
                    placeholder='9999999999'
                  />
                </div>
              </div>
              <div className='mb-3 w-100 p-2'>
                <label htmlFor='message' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control h-100 text-muted'
                  id='message'
                  rows='3'
                  name='message'
                  placeholder='Hi there!'
                ></textarea>
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
            </div>
            <button
              className='d-flex rounded-2 mx-auto p-2 border border-0'
              type='submit'
              disabled={state.submitting}
              style={{
                backgroundColor: "#FFCE52",
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
