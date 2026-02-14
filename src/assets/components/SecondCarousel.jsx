// SecondCarousel.jsx
import React from "react";
import { useEffect } from "react";
import { Carousel as BootstrapCarousel } from "bootstrap";

function SecondCarousel({ slides }) {
  useEffect(() => {
    const el = document.getElementById("secondCarousel");
    if (el) {
      new BootstrapCarousel(el, {
        interval: 1000, // auto-slide every 3s
        ride: "carousel",
        wrap: true,
        touch: true,
      });
    }
  }, []);
  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += 3) {
    groupedSlides.push(slides.slice(i, i + 3));
  }

  return (
    <div
      id="secondCarousel"
      className="carousel slide mt-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {groupedSlides.map((group, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="container">
              <div className="row justify-content-start me-3">
                {group.map((slide, idx) => (
                  <div
                    key={idx}
                    className="col-md-4 d-flex justify-content-center mb-3"
                  >
                    {/* OUTER CARD */}
                    <div
                      className="rounded-4 pt-3 px-4"
                      style={{
                        backgroundColor: "rgba(54, 163, 117, 0.2)",
                        width: "100%",
                      }}
                    >
                      {/* IMAGE */}
                      <div
                        className="mb-3"
                        style={{
                          height: "400px",
                          width: "300px",
                          margin: "0 auto",
                        }}
                      >
                        <img
                          src={slide.src}
                          alt={slide.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      {/* BOTTOM GRAY BOX */}
                      <div className="d-flex text-center fs-5 fw-bold py-2 mb-3 bottom-gray-box">
                        <div className="my-auto">{slide.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#secondCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#secondCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
      {/* Indicators */}
      <div className="carousel-indicators">
        {groupedSlides.map((_, index) => {
          return (
            <button
              key={index}
              type="button"
              data-bs-target="#secondCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SecondCarousel;
