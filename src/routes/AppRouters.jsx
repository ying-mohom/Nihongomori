import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Introduce from "../pages/Introduce";
import MyBook from "../pages/MyBook";
import Plan from "../pages/Plan";
import Payment from "../assets/components/Payment";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import Tokushohou from "../pages/Tokushohou";
import AudioBook from "../pages/AudioBook";
import AudioBookDetails from "../pages/AudioBookDetails";
import FAQ from "../pages/FAQ";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/my-book" element={<MyBook />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<Terms />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/tokushohou" element={<Tokushohou />} />
      <Route path="/audio/:bookId" element={<AudioBook />} />
      <Route path="/audio/:bookId/:lessonId" element={<AudioBookDetails />} />
    </Routes>
  );
}

export default AppRouters;
