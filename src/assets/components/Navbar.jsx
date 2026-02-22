import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/images/nihongomorlogo.png"
              alt="日本語の森"
              style={{ height: "50px" }}
            />
          </a>

          <div className="collapse navbar-collapse ms-4" id="navbarContent">
            {/* Left links */}
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="/introduce">
                  日本語の森とは？
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="my-book">
                  本
                </a>
              </li>
              <li className="nav-item ms-3">
                <a className="nav-link" href="/plan">
                  プラン
                </a>
              </li>
            </ul>

            {/* Right side */}
            <div className="d-flex align-items-center custom-margin">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                {/* FIX: className instead of class */}
                <i className="fa-brands fa-square-facebook navbar-icon fs-4"></i>
              </a>

              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube navbar-icon fs-4"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="me-4"
              >
                <i className="fa-brands fa-instagram navbar-icon fs-4"></i>
              </a>

              <a
                className="btn btn-outline-success rounded-pill navbar-button d-flex align-items-center justify-content-center me-2"
                href="/login"
              >
                ログイン
              </a>
              <a
                className="btn btn-success rounded-pill navbar-button d-flex align-items-center justify-content-center"
                href="/register"
              >
                登録
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed Social Sidebar */}
      <div className="d-flex flex-column position-fixed social-sidebar">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <img src="/images/facebook.png" alt="facebook" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <img src="/images/instagram.png" alt="instagram" />
        </a>
        <a
          href="https://line.me/R/ti/p/@564avkzx?from=page&accountId=564avkzx"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/line.png" alt="line" />
        </a>
      </div>
    </>
  );
}

export default Navbar;
