import { Link } from "react-router-dom";

function SubNav({ items, backgroundColor }) {
  return (
    <>
      <div style={{ backgroundColor: backgroundColor || "transparent" }}>
        <div className="container mt-5 pt-3">
          <div className="d-flex align-items-center mt-4 gap-2">
            {/* Home Icon */}
            <Link to="/">
              <img
                src="/images/smile.png"
                alt="Home"
                style={{
                  width: "32px",
                  height: "32px",
                  filter:
                    "invert(42%) sepia(98%) saturate(400%) hue-rotate(100deg)",
                }}
              />
            </Link>

            {/* Breadcrumb Items */}
            {items.map((item, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                {/* Show ">" only if NOT first item */}
                {index !== 0 && <span className="breadcrumb-arrow"></span>}

                {/* Link or Text */}
                {item.link ? (
                  <Link
                    to={item.link}
                    className="text-decoration-none text-dark"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            ))}
          </div>
          <hr className="mb-0" />
        </div>
      </div>
    </>
  );
}

export default SubNav;
