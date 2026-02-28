import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setShowError(true);
      return;
    }
    // If OK → continue login
    setShowError(false);

    console.log("Login:", email, password);
  };

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

        <button
          className="register-btn"
          onClick={() => navigate("/user/register")}
        >
          登録
        </button>
      </div>

      {/* Main Content */}
      <Container className="login-container">
        <form action="" className="basic-form">
          {/* Logo */}
          <div className="logo">
            <svg
              width="117"
              height="76"
              viewBox="0 0 146 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="login-icon"
            >
              <path
                d="M72.84 60.45s-3.5 13.27 0 29.26"
                stroke="#333"
                stroke-width="5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M3.5 90.9c4.26-4.65 10.46-9.8 17.41-9.19 7.63.67 9.42 7.68 17.27 8.15 8.9.53 11.06-8.21 20.07-7.83 8.49.35 9.78 8.26 17.93 8.15 8.38-.11 10.37-8.49 18.07-7.85 7 .59 7.73 7.72 14.6 8.12 7.09.42 9.48-6.98 17.4-7.85 5.83-.64 11.33 2.62 15.94 6.8"
                fill="#FCFDFF"
              ></path>
              <path
                d="M3.5 90.9c4.26-4.65 10.46-9.8 17.41-9.19 7.63.67 9.42 7.68 17.27 8.15 8.9.53 11.06-8.21 20.07-7.83 8.49.35 9.78 8.26 17.93 8.15 8.38-.11 10.37-8.49 18.07-7.85 7 .59 7.73 7.72 14.6 8.12 7.09.42 9.48-6.98 17.4-7.85 5.83-.64 11.33 2.62 15.94 6.8"
                stroke="#009C5D"
                stroke-width="7"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M79.838 54.756c7.42-7.42 5.204-21.666-4.95-31.82-10.153-10.153-24.4-12.37-31.82-4.95-7.419 7.42-5.203 21.667 4.95 31.82 10.154 10.154 24.4 12.37 31.82 4.95z"
                fill="#039B5C"
                stroke="#333"
                stroke-width="5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M108.275 44.11c9.491-14.462 8.617-31.807-1.951-38.744-10.569-6.937-26.83-.837-36.322 13.624-9.49 14.46-8.617 31.807 1.951 38.743 10.569 6.937 26.83.837 36.322-13.624z"
                fill="#fff"
                stroke="#333"
                stroke-width="5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M98.55 31.91c.75.01 1.5.01 2.25.02.26.01.5-.04.72-.16.23-.08.43-.2.6-.39.18-.17.31-.37.39-.6.12-.22.17-.46.16-.72-.02-.48-.18-.99-.55-1.33-.37-.34-.82-.55-1.33-.55-.75-.01-1.5-.01-2.25-.02-.26-.01-.5.04-.72.16-.23.08-.43.2-.6.39-.18.17-.31.37-.39.6-.12.22-.17.46-.16.72.02.48.18.99.55 1.33.37.34.82.54 1.33.55zM76.96 31.9c.75.01 1.5.01 2.25.02.26.01.5-.04.72-.16.23-.08.43-.2.6-.39.18-.17.31-.37.39-.6.12-.22.17-.46.16-.72-.02-.48-.18-.99-.55-1.33-.37-.34-.82-.55-1.33-.55-.75-.01-1.5-.01-2.25-.02-.26-.01-.5.04-.72.16-.23.08-.43.2-.6.39-.18.17-.31.37-.39.6-.12.22-.17.46-.16.72.02.48.18.99.55 1.33.37.34.82.55 1.33.55z"
                fill="#FFB1BC"
              ></path>
              <path
                d="M78.09 26.33a1.47 1.47 0 100-2.94 1.47 1.47 0 000 2.94zM99.67 26.33a1.47 1.47 0 100-2.94 1.47 1.47 0 000 2.94z"
                fill="#333"
              ></path>
              <path
                d="M95.42 26.13a6.02 6.02 0 01-6.02 6.02c-3.33 0-6.02-2.69-6.02-6.02"
                stroke="#333"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          {/* Error Message */}
          {showError && (
            <div className="error-box">
              <div className="error-title">報告</div>
              <div className="error-text">
                {!email && <p>メールアドレスは入力してください</p>}
                {!password && <p>パスワードは入力してください</p>}
              </div>
            </div>
          )}
          {/* Email */}
          <div className="input-box">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mail-icon"
            >
              <path
                d="M18.593 13.632L15.03 9.443l3.165-1.805a.644.644 0 10-.64-1.12L11 10.258l-6.556-3.74a.645.645 0 10-.638 1.12L6.97 9.443l-3.563 4.189a.644.644 0 10.982.835l3.72-4.374 2.572 1.467c.198.113.44.113.639 0l2.57-1.467 3.72 4.374a.644.644 0 10.983-.835z"
                fill="#C4C4C4"
              ></path>
              <path
                d="M20.066 3.48H1.934A1.936 1.936 0 000 5.414v11.172c0 1.066.867 1.934 1.934 1.934h18.132A1.936 1.936 0 0022 16.585V5.414a1.936 1.936 0 00-1.934-1.934zm.645 13.106c0 .355-.29.645-.645.645H1.934a.645.645 0 01-.645-.645V5.414c0-.355.29-.644.645-.644h18.132c.356 0 .645.289.645.644v11.172z"
                fill="#C4C4C4"
              ></path>
            </svg>
            <input
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="input-box">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="password-icon"
            >
              <path
                d="M16.828 9.356V5.872a5.842 5.842 0 00-1.745-4.198A5.656 5.656 0 0011.068 0h-.075C7.779.005 5.168 2.635 5.168 5.872v3.484c-1.213.145-2.1 1.161-2.1 2.393v7.826C3.069 20.904 4.133 22 5.462 22h11.077c1.33 0 2.393-1.096 2.393-2.425v-7.826c-.005-1.227-.89-2.248-2.103-2.393zM6.096 5.872H6.1C6.1 3.148 8.297.919 10.998.919h.004a4.83 4.83 0 013.424 1.408 4.939 4.939 0 011.464 3.545V9.36h-1.026V5.87a3.93 3.93 0 00-1.161-2.82 3.781 3.781 0 00-2.673-1.11h-.028c-2.145 0-3.88 1.762-3.88 3.926v3.494H6.096V5.87zm7.84 0V9.36H8.059V5.87c0-1.65 1.316-2.993 2.948-2.993h.028a2.86 2.86 0 012.02.84c.568.568.89 1.347.88 2.154zm4.104 13.717c0 .816-.662 1.478-1.478 1.478H5.48a1.479 1.479 0 01-1.478-1.478v-7.817c0-.816.662-1.479 1.478-1.479h11.082c.816 0 1.478.663 1.478 1.479v7.817z"
                fill="#C4C4C4"
              ></path>
              <path
                d="M12.611 15.391a1.674 1.674 0 00-1.613-1.217c-.928 0-1.684.75-1.684 1.684 0 .75.494 1.408 1.217 1.613v1.306a.468.468 0 00.933 0v-1.306a1.677 1.677 0 001.147-2.08zm-1.613 1.213a.75.75 0 11-.001-1.501.75.75 0 010 1.5z"
                fill="#C4C4C4"
              ></path>
            </svg>
            <input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <a href="/forgot-password" className="forgot">
              忘れちゃった？
            </a>
          </div>

          {/* Login Button */}
          <button className="login-btn" onClick={handleLogin}>
            ログインする
          </button>

          {/* Divider */}
          <div className="divider">
            <span></span>
            <p>または</p>
            <span></span>
          </div>

          {/* Social Login */}
          <div className="social-login">
            <div className="social facebook">
              <img src="/images/facebookLogin.png" alt="" />
            </div>
            <div className="social google">
              <img src="/images/googleLogin.png" alt="" />
            </div>
            <div className="social twitter">
              <img src="/images/twitterLogin.png" alt="" />
            </div>
          </div>
          <br />
        </form>
      </Container>
    </div>
  );
}

export default Login;
