import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Introduce from "../pages/Introduce";
import MyBook from "../pages/MyBook";
import Plan from "../pages/Plan";
import Payment from "../assets/components/Payment";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/my-book" element={<MyBook />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/payment/:id" element={<Payment />} />
    </Routes>
  );
}

export default AppRouters;
