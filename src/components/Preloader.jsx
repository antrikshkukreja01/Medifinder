import React, { useEffect, useState } from "react";
function Preloader() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 4500);
  }, []);
  {
    if (loader === true) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {loader ? (
        <section>
          <div
            id="preloder"
            class="min-vh-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center w-100 bg-white z-3"
          >
            <div id="css3-spinner-svg-pulse-wrapper">
              <svg
                id="css3-spinner-svg-pulse"
                version="1.2"
                height="210"
                width="550"
                xmlns="http://www.w3.org/2000/svg"
                viewport="0 0 60 60"
              >
                <path
                  id="css3-spinner-pulse"
                  stroke="#076787"
                  fill="none"
                  stroke-width="2"
                  stroke-linejoin="round"
                  d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
                />
              </svg>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Preloader;
