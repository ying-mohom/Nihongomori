import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/images/nihongomorlogo.png"
              alt="日本語の森"
              style={{ height: "50px" }}
            />
          </Link>

          <div className="collapse navbar-collapse ms-4" id="navbarContent">
            {/* Left links */}
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/introduce">
                  日本語の森とは？
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link" to="my-book">
                  本
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link" to="/plan">
                  プラン
                </NavLink>
              </li>
            </ul>

            {/* Right side */}
            <div className="d-flex align-items-center custom-margin">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                {/* FIX: className instead of class */}
                <i className="fa-brands fa-square-facebook navbar-icon fs-4"></i>
              </a>

              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-youtube navbar-icon fs-4"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="me-4"
              >
                <i class="fa-brands fa-instagram navbar-icon fs-4"></i>
              </a>

              <Link
                className="btn btn-outline-success rounded-pill navbar-button d-flex align-items-center justify-content-center me-2"
                to="/login"
              >
                ログイン
              </Link>
              <Link
                className="btn btn-success rounded-pill navbar-button d-flex align-items-center justify-content-center"
                to="/register"
              >
                登録
              </Link>
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
