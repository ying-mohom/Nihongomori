import React from "react";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";

function Home() {
  const cards = [
    { id: 1, label: "JLPT N1", image: "images/introduce/JLPT_N1.jpeg" },
    { id: 2, label: "JLPT N2", image: "images/introduce/JLPT_N2.jpeg" },
    { id: 3, label: "JLPT N3", image: "images/introduce/JLPT_N3.jpeg" },
    { id: 4, label: "JLPT N4", image: "images/N4_nyumon.png" },
    { id: 5, label: "JLPT N5", image: "images/N5_nyumon.png" },
    { id: 6, label: "日本語会話", image: "images/kaiwa.png" },
    { id: 7, label: "日本文化", image: "images/bunka.png" },
  ];

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="package">
          <div className="item">
            {cards.map((card) => (
              <div key={card.id} className="card">
                <div className="d-flex align-items-center pb-2">
                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.level}
                    className="rounded me-5"
                  />

                  {/* Text */}
                  <div className="flex-grow-1 text-center">
                    <h1 className="mb-0 text-dark fs-1">{card.label}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="m-5">
        <div className="shadow-lg border-0 rounded-4 p-4">
          <div className="text-center">
            <h2 className="fw-bold text-success mb-4 pt-4">
              アプリ、日本語の森
            </h2>
            <p className="text-dark mb-3">
              アプリだけの機能もあるよ！日本語の森のアプリで、
              いつでもどこでも日本語を勉強しよう♪
            </p>
            <img src="images/nihogomoriapp.png" alt="" width="80%" />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <a
              href="https://apps.apple.com/us/app/nihongonomori-%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AE%E6%A3%AE/id1542940653"
              target="_blank"
              rel="noreferrer"
              className="me-4"
            >
              <img src="images/downloadOnAppStore.png"></img>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.nihongonomori.app"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <img src="images/getOnGooglePlay.png"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
