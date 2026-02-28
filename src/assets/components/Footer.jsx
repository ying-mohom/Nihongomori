import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <hr className="mt-0" />
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-4 mt-5">
              <h5 className="fw-bold fs-2 mb-5">日本語の森</h5>
              <a
                href="/introduce"
                className="text-decoration-none text-dark mt-3 fs-5"
              >
                日本語の森とは？
              </a>
            </div>

            {/* Center Section */}
            <div className="col-md-4 mt-5 pt-5">
              <a
                href="/privacy-policy"
                className="d-block mb-4 mt-4 pt-3 text-dark text-decoration-none fs-5"
              >
                個人情報保護方針
              </a>

              <a
                href="/terms-of-service"
                className="d-block mb-4 text-dark text-decoration-none fs-5"
              >
                利用規約
              </a>

              <a
                href="/faq"
                className="d-block mb-4 text-dark text-decoration-none fs-5"
              >
                よくあるご質問（FAQ）
              </a>

              <a
                href="/tokushohou"
                className="d-block mb-4 text-dark text-decoration-none fs-5"
              >
                特定商取引法に基づく表記
              </a>
            </div>

            {/* Right Section */}
            <div className="col-md-4 mt-5">
              {/* SNS */}
              <h5 className="fw-bold fs-2 ms-1">SNS</h5>

              <div className="d-flex gap-4 mt-5 mb-5">
                <a
                  href="https://www.facebook.com/Nihongonomori"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-square-facebook navbar-icon fs-1"></i>
                </a>

                <a
                  href="https://www.youtube.com/c/nihongonomori2013"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-youtube navbar-icon fs-1"></i>
                </a>

                <a
                  href="https://www.instagram.com/nihongono_mori/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram navbar-icon fs-1"></i>
                </a>
              </div>

              {/* Store Buttons */}
              <div className="d-flex gap-2">
                <a
                  href="https://apps.apple.com/us/app/nihongonomori-%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AE%E6%A3%AE/id1542940653"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/downloadOnAppStore.png" alt="App Store" />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.nihongonomori.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/getOnGooglePlay.png" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-bottom my-5">
          <div className="container d-flex align-items-end">
            {/* Plant Group */}
            <div className="position-relative d-flex align-items-end">
              <img
                src="/images/footer.png"
                alt="small plant"
                height="38"
                width="50"
              />

              <img
                src="/images/footer.png"
                alt="big plant"
                height="80"
                width="60"
                className="position-relative"
                style={{ marginLeft: "-45px" }}
              />
            </div>

            {/* Copyright */}
            <span className="text-muted fs-5 mb-1">
              © Copyright Nihongonomori
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
