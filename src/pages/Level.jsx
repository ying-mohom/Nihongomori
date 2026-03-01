import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Per-level card data: title, count, image
const levelData = {
  N1: [
    {
      id: "kanji",
      title: "この一冊で合格する「漢字」",
      count: 331,
      image: "/images/N1lesson/img1.png",
      teacher: "ゆか先生",
    },
    {
      id: "vocabulary",
      title: "この一冊で合格する「文字・語彙」",
      count: 190,
      image: "/images/N1lesson/img5.png",
      teacher: "ゆか先生",
    },
    {
      id: "grammar",
      title: "この一冊で合格する「文法」",
      count: 214,
      image: "/images/N1lesson/img2.png",
      teacher: "ゆか先生",
    },
    {
      id: "reading",
      title: "この一冊で合格する「読解」",
      count: 28,
      image: "/images/N1lesson/img6.png",
      teacher: "ゆか先生",
    },
    {
      id: "listening",
      title: "この一冊で合格する「聴解」",
      count: 22,
      image: "/images/N1lesson/img3.png",
      teacher: "ゆか先生",
    },
    {
      id: "test",
      title: "この一冊で合格する「模擬試験」",
      count: 78,
      image: "/images/N1lesson/img7.png",
      teacher: "ゆか先生",
    },
    {
      id: "final_test",
      title: "JLPT N1 FINAL TEST（Livestream）",
      count: 50,
      image: "/images/N1lesson/img4.png",
      teacher: "ゆか先生",
    },
  ],
  N2: [
    {
      id: "kanji",
      title: "この一冊で合格する「漢字」",
      count: 290,
      image: "/images/N2lesson/img1.png",
      teacher: "ゆか先生",
    },
    {
      id: "vocabulary",
      title: "この一冊で合格する「文字・語彙」",
      count: 175,
      image: "/images/N2lesson/img2.png",
      teacher: "ゆか先生",
    },
    {
      id: "grammar",
      title: "この一冊で合格する「文法」",
      count: 198,
      image: "/images/N2lesson/img3.png",
      teacher: "ゆか先生",
    },
    {
      id: "reading",
      title: "この一冊で合格する「読解」",
      count: 24,
      image: "/images/N2lesson/img4.png",
      teacher: "ゆか先生",
    },
    {
      id: "listening",
      title: "この一冊で合格する「聴解」",
      count: 20,
      image: "/images/N2lesson/img4.png",
      teacher: "ゆか先生",
    },
    {
      id: "test",
      title: "この一冊で合格する「模擬試験」",
      count: 65,
      image: "/images/N2lesson/img5.png",
      teacher: "ゆか先生",
    },
    {
      id: "final_test",
      title: "JLPT N2 FINAL TEST（Livestream）",
      count: 45,
      image: "/images/N2lesson/img6.png",
      teacher: "ゆか先生",
    },
  ],
  N3: [
    {
      id: "kanji",
      title: "この一冊で合格する「漢字」",
      count: 240,
      image: "/images/N3lesson/img1.png",
      teacher: "ゆか先生",
    },
    {
      id: "vocabulary",
      title: "この一冊で合格する「文字・語彙」",
      count: 155,
      image: "/images/N3lesson/img2.png",
      teacher: "ゆか先生",
    },
    {
      id: "grammar",
      title: "この一冊で合格する「文法」",
      count: 172,
      image: "/images/N3lesson/img3.png",
      teacher: "ゆか先生",
    },
    {
      id: "reading",
      title: "この一冊で合格する「読解」",
      count: 18,
      image: "/images/N3lesson/img4.png",
      teacher: "ゆか先生",
    },
    {
      id: "listening",
      title: "この一冊で合格する「聴解」",
      count: 16,
      image: "/images/N3lesson/img5.png",
      teacher: "ゆか先生",
    },
    {
      id: "test",
      title: "この一冊で合格する「模擬試験」",
      count: 55,
      image: "/images/N3lesson/img6.png",
      teacher: "ゆか先生",
    },
    {
      id: "final_test",
      title: "JLPT N3 FINAL TEST（Livestream）",
      count: 40,
      image: "/images/N3lesson/img7.png",
      teacher: "ゆか先生",
    },
  ],
  N4: [
    {
      id: "course_basic_english_n4",
      title: "Basic Japanese JLPT N4",
      image: "/images/N4lesson/img1.png",
      book: "Textbook: Minna no Nihongo Ⅱ",
    },
    {
      id: "course_basic_chinese_n4",
      title: "基础日语 JLPT N4",
      image: "/images/N4lesson/img2.png",
      book: "教材：大家的日语Ⅱ",
    },
    {
      id: "course_basic_korea_n4",
      title: "기초 일본어 JLPT N4",
      image: "/images/N4lesson/img3.png",
      book: "교재：민나노니혼고 Ⅱ",
    },
  ],
  N5: [
    {
      id: "course_basic_english_n5",
      title: "Basic Japanese JLPT N5",
      image: "/images/N5lesson/img1.png",
      book: "Textbook: Minna no Nihongo I",
    },
    {
      id: "course_basic_chinese_n5",
      title: "基础日语 JLPT N5",
      image: "/images/N5lesson/img2.png",
      book: "教材：大家的日语 I",
    },
    {
      id: "course_basic_korea_n5",
      title: "기초 일본어 JLPT N5",
      image: "/images/N5lesson/img3.png",
      book: "교재：민나노니혼고 I",
    },
  ],
  kaiwa: [
    {
      id: "kansai_dialect",
      title: "この動画でビジネス電話の日本語ができる！",
      count: 10,
      image: "/images/kaiwa/img1.jpg",
      teacher: "ゆか先生",
    },
    {
      id: "Japanese_telephone",
      title: "この一冊で合格する「文字・語彙」",
      count: 4,
      image: "/images/kaiwa/img2.jpg",
      teacher: "うえだ先生",
    },
    {
      id: "kyonani_japanese",
      title: "教科書にない日本語",
      count: 214,
      image: "/images/kaiwa/img3.png",
      teacher: "ゆか先生",
    },
    {
      id: "kaiwa4",
      title: "【AORI】JLPT の単語を使って、友達をからかいましょう！",
      count: 4,
      image: "/images/kaiwa/img4.jpg",
      teacher: "うえだ先生",
    },
    {
      id: "tokuteigino_interview",
      title: "先生も学生も口が疲れる会話クラス【特定技能面接】",
      count: 16,
      image: "/images/kaiwa/img5.jpeg",
      teacher: "おいで先生",
    },
    {
      id: "japanese",
      title: "京都弁講座",
      count: 15,
      image: "/images/kaiwa/img6.png",
      teacher: "レン先生",
    },
  ],
  bunka: [
    {
      id: "bunka3",
      title: "日本人とつきあいたいの？",
      count: 3,
      image: "/images/bunka/img2.jpg",
      teacher: "ハル",
    },
    {
      id: "bunka",
      title: "日本の地理",
      count: 2,
      image: "/images/bunka/img1.jpg",
      teacher: "HANZO先生",
    },
    {
      id: "bunka_1",
      title: "日本の食べ物",
      count: 5,
      image: "/images/bunka/img4.jpg",
      teacher: "ゆか先生",
    },
    {
      id: "japanese_history",
      title: "日本の歴史",
      count: 3,
      image: "/images/bunka/img3.jpg",
      teacher: "HANZO先生",
    },
  ],
};

// Bookmark icon component
function BookmarkIcon({ filled }) {
  return filled ? (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="#039d5d"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 3a2 2 0 0 0-2 2v16l9-4 9 4V5a2 2 0 0 0-2-2H5z" />
    </svg>
  ) : (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aaa"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 3a2 2 0 0 0-2 2v16l9-4 9 4V5a2 2 0 0 0-2-2H5z" />
    </svg>
  );
}

function Level() {
  const { levelSlug } = useParams();
  const level = levelSlug ? levelSlug.replace("level_", "") : "N1";
  const cards = levelData[level] || levelData["N1"];

  const [bookmarked, setBookmarked] = useState({});
  const toggleBookmark = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container lv-page mt-5">
      {/* ── Cards grid ── */}
      <div className="lv-grid-wrap">
        <div className="lv-grid">
          {cards.map((card, idx) => (
            <a
              key={card.id}
              href={`/jlpt/${levelSlug}/${card.id}`}
              className="lv-card"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              {/* Left: background image + 0% pill inside green-bordered box */}
              <div
                className="lv-card-img-wrap"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="lv-card-progress">
                  <span>0%</span>
                </div>
              </div>

              {/* Right: content */}
              <div className="lv-card-body">
                {/* Title row — title + count badge + bookmark all inline */}
                <div className="lv-card-top">
                  <p className="lv-card-title">{card.title}</p>
                  {card.count && (
                    <span className="lv-card-count">{card.count}個</span>
                  )}
                  <button
                    className="lv-bookmark-btn"
                    onClick={(e) => toggleBookmark(e, card.id)}
                    aria-label="bookmark"
                  >
                    <BookmarkIcon filled={!!bookmarked[card.id]} />
                  </button>
                </div>
                <hr className="lv-card-divider" />
                {card.teacher ? (
                  <span className="lv-teacher-badge">{card.teacher}</span>
                ) : (
                  <span className="mt-2">{card.book}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Level;
