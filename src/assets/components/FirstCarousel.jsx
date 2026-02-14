// Carousel.jsx
import React from "react";

function FirstCarousel({ slides }) {
  return (
    <div
      id="firstCarousel"
      className="carousel slide mx-auto"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
      style={{ maxWidth: "900px" }}
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#firstCarousel"
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner text-center">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
          >
            {/* Bigger stage container */}
            <div className="carousel-stage">
              <div className="carousel-image-wrapper">
                <img src={slide.src} alt={slide.alt} className="img-fluid" />
              </div>
              {slide.label && (
                <div
                  className="position-absolute top-0 start-0 ms-4 ps-3 text-dark fw-bold"
                  style={{ zIndex: 10 }}
                >
                  <span className="fs-1">{idx + 1}</span>
                  {"  "}
                  <span className="fs-5">{slide.label}</span>
                </div>
              )}

              {slide.note && (
                <div className="carousel-balloon">
                  <img
                    src="/images/introduce/balloon.png"
                    alt="Balloon"
                    className="img-fluid"
                  />
                  <span className="fs-6 text-dark fw-bold text-center">
                    {slide.note.split("<br>").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev text-dark"
        type="button"
        data-bs-target="#firstCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next text-dark"
        type="button"
        data-bs-target="#firstCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default FirstCarousel;
