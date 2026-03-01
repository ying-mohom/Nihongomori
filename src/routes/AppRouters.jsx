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
import Login from "../pages/Login";
import Register from "../pages/Register";
import {
  Bunka3,
  Food,
  Geography,
  History,
  Japanese,
  JapaneseTelephoneKaiwa,
  Kaiwa4,
  KansaiKaiwa,
  KyoninaiKaiwa,
  N1FINALTEST,
  N1Grammar,
  N1Kanji,
  N1Listening,
  N1MockExam,
  N1Reading,
  N1Vocab,
  N2FINALTEST,
  N2Grammar,
  N2Kanji,
  N2Listening,
  N2MockExam,
  N2Reading,
  N2Vocab,
  N3FINALTEST,
  N3Grammar,
  N3Kanji,
  N3Listening,
  N3MockExam,
  N3Reading,
  N3Vocab,
  N4China,
  N4English,
  N4Korea,
  N5China,
  N5English,
  N5Korea,
  TokuteiginoInterview,
} from "../pages/LessonList";
import Level from "../pages/Level";
function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/register" element={<Register />} />
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
      <Route path="/jlpt/:levelSlug" element={<Level />} />
      {/* For N1 Levele Lesson */}
      <Route path="/jlpt/level_N1/kanji" element={<N1Kanji />} />
      <Route path="/jlpt/level_N1/vocabulary" element={<N1Vocab />} />
      <Route path="/jlpt/level_N1/grammar" element={<N1Grammar />} />
      <Route path="/jlpt/level_N1/reading" element={<N1Reading />} />
      <Route path="/jlpt/level_N1/listening" element={<N1Listening />} />
      <Route path="/jlpt/level_N1/test" element={<N1MockExam />} />
      <Route path="/jlpt/level_N1/final_test" element={<N1FINALTEST />} />
      {/* For N2 Levele Lesson */}
      <Route path="/jlpt/level_N2/kanji" element={<N2Kanji />} />
      <Route path="/jlpt/level_N2/vocabulary" element={<N2Vocab />} />
      <Route path="/jlpt/level_N2/grammar" element={<N2Grammar />} />
      <Route path="/jlpt/level_N2/reading" element={<N2Reading />} />
      <Route path="/jlpt/level_N2/listening" element={<N2Listening />} />
      <Route path="/jlpt/level_N2/test" element={<N2MockExam />} />
      <Route path="/jlpt/level_N2/final_test" element={<N2FINALTEST />} />
      {/* For N3 Levele Lesson */}
      <Route path="/jlpt/level_N3/kanji" element={<N3Kanji />} />
      <Route path="/jlpt/level_N3/vocabulary" element={<N3Vocab />} />
      <Route path="/jlpt/level_N3/grammar" element={<N3Grammar />} />
      <Route path="/jlpt/level_N3/reading" element={<N3Reading />} />
      <Route path="/jlpt/level_N3/listening" element={<N3Listening />} />
      <Route path="/jlpt/level_N3/test" element={<N3MockExam />} />
      <Route path="/jlpt/level_N3/final_test" element={<N3FINALTEST />} />
      {/* For N4 Levele Lesson */}
      <Route
        path="/jlpt/level_N4/course_basic_english_n4"
        element={<N4English />}
      />
      <Route
        path="/jlpt/level_N4/course_basic_chinese_n4"
        element={<N4China />}
      />
      <Route
        path="/jlpt/level_N4/course_basic_korea_n4"
        element={<N4Korea />}
      />
      {/* For N5 Levele Lesson */}
      <Route
        path="/jlpt/level_N5/course_basic_english_n5"
        element={<N5English />}
      />
      <Route
        path="/jlpt/level_N5/course_basic_chinese_n5"
        element={<N5China />}
      />
      <Route
        path="/jlpt/level_N5/course_basic_korea_n5"
        element={<N5Korea />}
      />
      {/* For Kaiwa Lesson */}
      <Route path="/jlpt/kaiwa/kansai_dialect" element={<KansaiKaiwa />} />
      <Route
        path="/jlpt/kaiwa/Japanese_telephone"
        element={<JapaneseTelephoneKaiwa />}
      />
      <Route path="/jlpt/kaiwa/kyonani_japanese" element={<KyoninaiKaiwa />} />
      <Route path="/jlpt/kaiwa/kaiwa4" element={<Kaiwa4 />} />
      <Route
        path="/jlpt/kaiwa/tokuteigino_interview"
        element={<TokuteiginoInterview />}
      />
      <Route path="/jlpt/kaiwa/japanese" element={<Japanese />} />
      {/* For Bunka Lesson */}
      <Route path="/jlpt/bunka/bunka3" element={<Bunka3 />} />
      <Route path="/jlpt/bunka/bunka" element={<Geography />} />
      <Route path="/jlpt/bunka/bunka_1" element={<Food />} />
      <Route path="/jlpt/bunka/japanese_history" element={<History />} />
    </Routes>
  );
}

export default AppRouters;
