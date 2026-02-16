import { useState, useRef } from "react";
import { Modal, Button, Ratio } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const YuchoVideoModal = () => {
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onModalEntered = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented. User interaction required:", error);
      });
    }
  };

  const onModalExited = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <button
          variant="outline-success"
          onClick={handleShow}
          className="d-flex align-items-center px-3 pt-3 pb-2 bg-white fs-4 video-button"
        >
          <div className="text-start me-1">
            <span>ゆうちょ</span>
            <ruby>
              銀行<rt>ぎんこう</rt>
            </ruby>
            からの
            <ruby>
              振込方法<rt>ふりこみほうほう</rt>
            </ruby>
            を
            <ruby>
              見る<rt>み</rt>
            </ruby>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
          </svg>
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        onEntered={onModalEntered}
        onExited={onModalExited}
        centered
        dialogClassName="mobile-frame-modal"
      >
        <button className="external-close-btn" onClick={handleClose}>
          ×
        </button>

        <Modal.Body
          className="p-0 overflow-hidden d-flex flex-column"
          style={{
            height: "590px",
            borderRadius: "40px",
            border: "5px solid #333",
            backgroundColor: "#fff",
          }}
        >
          <div className="d-flex align-items-center justify-content-center overflow-hidden">
            <video
              ref={videoRef}
              muted
              playsInline
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            >
              <source src="/videos/bank_transfer.mp4" type="video/mp4" />
            </video>
          </div>
        </Modal.Body>
      </Modal>

      <style>{`


        .mobile-frame-modal {
          max-width: 340px;
        }
        
        .mobile-frame-modal .modal-content {
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .iphone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 140px;
          height: 28px;
          background: #333;
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 18px;
        }

        .external-close-btn {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #fff;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 28px;
          z-index: 1060;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        ruby rt {
          font-size: 0.6em;
        }
      `}</style>
    </>
  );
};

export default YuchoVideoModal;
