import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      {/* Top Bar */}
      <div className="login-header">
        <span
          className="close-btn"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          ✕
        </span>
      </div>

      {/* Main Content */}
      <Container className="login-container">
        <form action="" className="basic-form">
          {/* Logo */}
          <div className="logo">
            <svg
              width="143"
              height="97"
              viewBox="0 0 179 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="login-icon"
            >
              <path
                d="M138.2 31.94c0 15.33-7.8 28.65-20.92 41.55-13.12 12.9-26.07 18.06-39.54 18.06-15.98 0-28.94-12.96-28.94-28.94 0-13.76 10.75-26.28 26.28-37.77 4.02-2.97 7.71-4.71 10.98-7.36 2.55-2.07 3.79-4.36 6.35-6.95C98.11 4.76 105.13 3 109.26 3c15.99 0 28.94 12.96 28.94 28.94z"
                fill="#FCFCFC"
              ></path>
              <path
                d="M138.2 31.94c0 15.33-7.8 28.65-20.92 41.55-13.12 12.9-26.07 18.06-39.54 18.06-15.98 0-28.94-12.96-28.94-28.94 0-13.76 10.75-26.28 26.28-37.77 4.02-2.97 7.71-4.71 10.98-7.36 2.55-2.07 3.79-4.36 6.35-6.95C98.11 4.76 105.13 3 109.26 3c15.99 0 28.94 12.96 28.94 28.94z"
                stroke="#333"
                stroke-width="6"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M79.24 26.19c1.72.95 3.57 1.18 5.51 1.23 1.61.04 3.23.06 4.83-.11 3.57-.38 6.7-1.67 9.15-4.36 4.45-4.87 6.66-11.74 5.94-18.29-.15-1.34-1.04-2.5-2.5-2.5-1.24 0-2.65 1.15-2.5 2.5.55 5.02-.72 10.31-4.01 14.23-1.64 1.95-3.52 3.11-6.08 3.43-1.35.16-2.74.14-4.1.12-1.24-.02-2.6.06-3.72-.56-2.81-1.57-5.34 2.75-2.52 4.31zM83.56 39.24a1.95 1.95 0 100-3.9 1.95 1.95 0 000 3.9zM112.32 39.24a1.95 1.95 0 100-3.9 1.95 1.95 0 000 3.9z"
                fill="#333"
              ></path>
              <path
                d="M107.83 38.93c0 5.34-4.33 9.67-9.67 9.67s-9.67-4.33-9.67-9.67"
                stroke="#333"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path d="M179 83.05H0v38.93h179V83.05z" fill="#FCFDFF"></path>
              <path
                d="M113.34 44.5l3.62.03c.64 0 1.32-.28 1.77-.73.43-.43.76-1.15.73-1.77-.03-.65-.24-1.32-.73-1.77-.49-.45-1.09-.73-1.77-.73l-3.62-.03c-.64 0-1.32.28-1.77.73-.43.43-.76 1.15-.73 1.77.03.65.24 1.32.73 1.77.5.44 1.09.72 1.77.73zM78.69 44.48l3.62.03c.64 0 1.32-.28 1.77-.73.43-.43.76-1.15.73-1.77-.03-.65-.24-1.32-.73-1.77-.49-.45-1.09-.73-1.77-.73l-3.62-.03c-.64 0-1.32.28-1.77.73-.43.43-.76 1.15-.73 1.77.03.65.24 1.32.73 1.77.49.45 1.09.73 1.77.73z"
                fill="#FFB1BC"
              ></path>
              <path
                d="M20.16 86.17c4.26-4.65 10.46-9.8 17.41-9.19 7.63.67 9.42 7.68 17.27 8.15 8.9.53 11.06-8.21 20.07-7.83 8.49.35 9.78 8.26 17.93 8.15 8.38-.11 10.37-8.49 18.07-7.85 7 .59 7.73 7.72 14.6 8.12 7.09.42 9.48-6.98 17.4-7.85 5.83-.64 11.33 2.62 15.94 6.8"
                fill="#FDFEFF"
              ></path>
              <path
                d="M20.16 86.17c4.26-4.65 10.46-9.8 17.41-9.19 7.63.67 9.42 7.68 17.27 8.15 8.9.53 11.06-8.21 20.07-7.83 8.49.35 9.78 8.26 17.93 8.15 8.38-.11 10.37-8.49 18.07-7.85 7 .59 7.73 7.72 14.6 8.12 7.09.42 9.48-6.98 17.4-7.85 5.83-.64 11.33 2.62 15.94 6.8"
                stroke="#009C5D"
                stroke-width="6"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div className="login-google">
            <button className="btn-login-by-google">
              <img src="/images/google1.png" alt="Google Login" />
              <span>Sign in with Google</span>
            </button>
          </div>

          {/* Social Login */}
          <div className="form-group">
            <div className="social-login-area">
              <div className="social-icon">
                <img src="/images/facebook1.png" alt="Facebook Login" />
              </div>
              <div className="social-icon">
                <img src="/images/x.png" alt="Twitter Login" />
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Register;
