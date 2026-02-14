import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Introduce from "../pages/Introduce";
import MyBook from "../pages/MyBook";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/my-book" element={<MyBook />} />
    </Routes>
  );
}

export default AppRouters;
