import FirstCarousel from "../assets/components/FirstCarousel";
import SecondCarousel from "../assets/components/SecondCarousel";
import { Link } from "react-router-dom";

function Introduce() {
  const fristSlides = [
    {
      src: "/images/introduce/img1.png",
      alt: "Intro Slide",
      label: "動画をみながら日本語が勉強できる！",
      note: "JLPT N1 N2 N3<br>ぜんぶ勉強できる！",
    },
    {
      src: "/images/introduce/img2.png",
      alt: "Slide 2",
      label: "日本の先生が質問に答えてくれるよ！",
      note: "わからないことは<br>なんでも聞いてね！",
    },
    {
      src: "/images/introduce/img3.png",
      alt: "Slide 3",
      label: "本をつかえば、もっと勉強しやすい！",
      note: "授業ではこの本を<br>つかっています！",
    },
    {
      src: "/images/introduce/img4.png",
      alt: "Slide 4",
      label: "「モリタン」で単語をおぼえるよう！",
      note: "いろんな言葉で<br>通訳されます。",
    },
  ];

  const SecondSlides = [
    {
      src: "/images/introduce/JLPT_N1.jpeg",
      title: "JLPT N1\nこの一冊で合格する",
    },
    {
      src: "/images/introduce/JLPT_N2.jpeg",
      title: "JLPT N2\nこの一冊で合格する",
    },
    {
      src: "/images/introduce/JLPT_N3.jpeg",
      title: "JLPT N3\nこの一冊で合格する",
    },
    {
      src: "/images/introduce/Kanji_N2.jpeg",
      title: "おいしいかんじN2",
    },
    {
      src: "/images/introduce/Kanji_N3.jpeg",
      title: "おいしいかんじN3",
    },
    {
      src: "/images/introduce/Kaiwa_1.jpeg",
      title: "教えてゆか先生！",
    },
    {
      src: "/images/introduce/Kaiwa_2.png",
      title: "教えて！ゆか先生　気持ちが\n伝わる日本語敬語",
    },
  ];

  return (
    <>
      <div className="container mt-5 pt-5 pb-4 shadow-lg rounded-5  bg-white">
        <h2 className="text-center mt-4 pt-1 mb-5 fw-bold text-green-color">
          日本語の森って、なに？
        </h2>
        <FirstCarousel slides={fristSlides} />
      </div>
      <div className="d-flex justify-content-center mt-5 pt-2 mb-5 mx-auto">
        <Link
          className="rounded-3 d-flex align-items-center justify-content-center fs-5 fw-bold px-5 py-2 text-decoration-none"
          style={{
            backgroundColor: "#039d5d",
            color: "white",
          }}
          to="/plan"
        >
          今すぐ勉強をはじめる
        </Link>
      </div>
      <span className="d-block text-center mt-5 pt-3 fs-3 fw-bold text-green-color">
        日本語の森の本
      </span>
      <SecondCarousel slides={SecondSlides} />
      <div className="d-flex justify-content-center mt-5 mx-auto">
        <Link
          className="d-flex align-items-center justify-content-center fs-4 fw-bold px-5 py-2 review-section"
          to="/my-book"
        >
          本のレビュー
        </Link>
      </div>
      <div className="container mt-4 pt-3">
        <div
          className="d-flex gap-2 hide-scroll"
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <img
            src="images/preview1.png"
            alt="Preview 1"
            className="preview-image"
          />

          <img
            src="images/preview2.png"
            alt="Preview 2"
            className="preview-image"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mx-auto mt-3 py-2  mb-4">
        <Link
          className="d-flex align-items-center justify-content-center rounded-3 fs-5 fw-bold  text-decoration-none"
          style={{
            backgroundColor: "#039d5d",
            color: "white",
            width: "100%",
            maxWidth: "400px",
            height: "50px",
          }}
          to="/my-book"
        >
          本を買う
        </Link>
      </div>
    </>
  );
}

export default Introduce;
