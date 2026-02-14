function Modal({ children, onClose, type }) {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="custom-modal-overlay" onClick={handleOutsideClick}>
      <div className={`${type === "buy" ? "buy-modal" : "schedule-modal"}`}>
        {type === "schedule" && (
          <>
            <button className="custom-close" onClick={onClose}>
              ✕
            </button>

            <p
              className="text-center fs-4"
              style={{ paddingTop: "80px", paddingBottom: "20px" }}
            >
              自分に合ったスケジュールを選んでください。
            </p>
          </>
        )}

        <div
          className={`${
            type === "schedule" ? "schedule-layout" : "buy-layout"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
