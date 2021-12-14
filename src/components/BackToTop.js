import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className='back-to-top'>
      <IoIosArrowUp
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          color: "#fff",
          backgroundColor: "#FFCE52",
          borderRadius: "50%",
          padding: "0.5rem",
        }}
        className='shadow-lg'
      />
    </div>
  );
};

export default BackToTop;
