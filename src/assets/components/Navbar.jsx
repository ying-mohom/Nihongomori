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
          {/* Mobile Hamburger */}
          <button
            className="navbar-toggler border-0 d-lg-none ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse ms-4" id="navbarContent">
            {/* Left links */}
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/introduce"
                  style={{ fontWeight: 500, color: "#323232" }}
                >
                  日本語の森とは？
                </a>
              </li>
              <li className="nav-item ms-3">
                <a
                  className="nav-link"
                  href="/my-book"
                  style={{ fontWeight: 500, color: "#323232" }}
                >
                  本
                </a>
              </li>
              <li className="nav-item ms-3">
                <a
                  className="nav-link"
                  href="/plan"
                  style={{ fontWeight: 500, color: "#323232" }}
                >
                  プラン
                </a>
              </li>
            </ul>

            {/* Right side */}
            <div className="d-flex align-items-center custom-margin">
              <a
                href="https://www.facebook.com/Nihongonomori"
                target="_blank"
                rel="noreferrer"
              >
                {/* FIX: className instead of class */}
                <i className="fa-brands fa-square-facebook navbar-icon fs-4"></i>
              </a>

              <a
                href="https://www.youtube.com/c/nihongonomori2013/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-youtube navbar-icon fs-4"></i>
              </a>

              <a
                href="https://www.instagram.com/nihongono_mori/"
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
                href="/user/register"
              >
                登録
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Menu Only ===== */}
      <div
        className="offcanvas offcanvas-end d-lg-none"
        tabIndex="-1"
        id="mobileMenu"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          {/* Login Buttons */}
          <div className="mb-4">
            <a
              href="/login"
              className="btn btn-outline-success rounded-pill mb-3"
              style={{ width: "35%", fontSize: "16px" }}
            >
              ログイン
            </a>
            <br />
            <a
              href="/user/register"
              className="btn btn-success rounded-pill"
              style={{ width: "35%", fontSize: "16px" }}
            >
              登録
            </a>
          </div>

          <hr />

          {/* Menu Links */}
          <ul className="list-unstyled mt-4 mobile-menu-links">
            <li>
              <a href="/" className="mobile-link">
                <span className="custom-ul"></span>TOP
              </a>
            </li>
            <li>
              <a href="/introduce" className="mobile-link">
                <span className="custom-ul"></span>日本語の森とは？
              </a>
            </li>
            <li>
              <a href="/my-book" className="mobile-link">
                <span className="custom-ul"></span>本
              </a>
            </li>
            <li>
              <a href="/plan" className="mobile-link">
                <span className="custom-ul"></span>プラン
              </a>
            </li>
          </ul>

          {/* Plant Group */}
          <div className="d-flex align-items-end justify-content-end me-5 pe-3 mt-5 pt-5">
            <img
              src="/images/footer.png"
              alt="small plant"
              height="50"
              width="60"
            />

            <img
              src="/images/footer.png"
              alt="big plant"
              height="90"
              width="80"
              className="position-relative"
              style={{ marginLeft: "-53px" }}
            />
          </div>
        </div>
      </div>

      {/* Fixed Social Sidebar */}
      <div className="d-flex flex-column position-fixed social-sidebar">
        <a
          href="https://www.facebook.com/Nihongonomori"
          target="_blank"
          rel="noreferrer"
          className="mb-2"
        >
          <img src="/images/facebook.png" alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/nihongono_mori/"
          target="_blank"
          rel="noreferrer"
          className="mb-2"
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
