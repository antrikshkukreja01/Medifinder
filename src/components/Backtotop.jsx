import React, { useState, useEffect } from "react";

const Backtotop = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div className="me-2a">
      <span
        id="btn"
        onClick={() => top()}
        style={{ zIndex: "99" }}
        className={
          backToTop
            ? "btn d-block position-fixed end-0 bottom-0 mb-3 me-2 z-2     p-0 py-3 px-1 rounded-5"
            : "btn d-none position-fixed end-0 bottom-0 mb-2 me-2 z-2 "
        }
      >
        {" "}
        <a
          href="#"
          className=" back_top bt_btn d-flex   align-items-center justify-content-center"
        >
          <p className=" fs_37  text-white mt-2 ">&#8679;</p>
        </a>
      </span>
    </div>
  );
};

export default Backtotop;
