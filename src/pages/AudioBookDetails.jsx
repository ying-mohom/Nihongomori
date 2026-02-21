import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SubNav from "../assets/components/SubNav";
import { audioBookConfig } from "../data/audioBookConfig";

function AudioBookDetails() {
  const { bookId, lessonId } = useParams();
  const navigate = useNavigate();
  const bookConfig = audioBookConfig[bookId];

  if (!bookConfig) {
    return <div>Book not found</div>;
  }
  const lessons = bookConfig?.lessons || [];
  const redirectLesson = bookConfig?.redirectLesson || lessons[0];

  const currentIndex = lessons.findIndex((l) => l === lessonId);
  useEffect(() => {
    if (!bookConfig) return;

    if (!lessonId || !lessons.includes(lessonId)) {
      navigate(`/audio/${bookId}/${redirectLesson}`, { replace: true });
    }
  }, [lessonId, bookId]);

  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(`/audio/${bookId}/${lessons[currentIndex - 1]}`);
    }
  };

  const goNext = () => {
    if (currentIndex < lessons.length - 1) {
      navigate(`/audio/${bookId}/${lessons[currentIndex + 1]}`);
    }
  };

  return (
    <>
      {/* Sub Navigation */}
      <SubNav
        items={[
          { label: "ホームページ", link: "/" },
          { label: "私の本", link: "/my-book" },
        ]}
      />

      <div className="audio_detail_wrapper">
        <div className="header-title">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.553 1.596L6.085.064 6.85.83 5.319 2.362l-.766-.766zM.148 6.002L1.68 4.47l.767.766L.914 6.768l-.766-.766zM.342.83l.766-.766L2.64 1.596l-.766.766L.342.83z"
              fill="#A4AFC1"
            ></path>
            <path
              d="M15.959 29.958h-4.334a1.084 1.084 0 01-1.083-1.084V6.124c0-.598.485-1.083 1.083-1.083h4.334c.598 0 1.083.485 1.083 1.083v22.75c0 .598-.485 1.084-1.083 1.084z"
              fill="#F3F3F1"
            ></path>
            <path
              d="M22.459 29.96h-4.334a1.084 1.084 0 01-1.083-1.084v-16.25c0-.598.485-1.083 1.083-1.083h4.334c.598 0 1.083.485 1.083 1.083v16.25c0 .598-.485 1.084-1.083 1.084z"
              fill="#F3F3F1"
            ></path>
            <path d="M17.042 22.375h6.5v3.25h-6.5v-3.25z" fill="#2FDF84"></path>
            <path
              d="M19.209 28.876v-16.25c0-.598.485-1.083 1.083-1.083h-2.167c-.598 0-1.083.485-1.083 1.083v16.25c0 .598.485 1.084 1.083 1.084h2.167a1.084 1.084 0 01-1.083-1.084z"
              fill="#D5DBE1"
            ></path>
            <path
              d="M27.875 12.725c-.17-.061-.351-.1-.542-.1h-1.625v3.25h1.625c.19 0 .372-.039.542-.1v-3.05z"
              fill="#00B871"
            ></path>
            <path
              d="M6.208 28.876v-16.25c0-.598.485-1.083 1.083-1.083H5.124c-.598 0-1.083.485-1.083 1.083v16.25c0 .598.485 1.084 1.083 1.084h2.167a1.084 1.084 0 01-1.083-1.084zM12.709 28.874V6.124c0-.598.485-1.083 1.083-1.083h-2.167c-.598 0-1.083.485-1.083 1.083v22.75c0 .598.485 1.084 1.083 1.084h2.167a1.084 1.084 0 01-1.083-1.084z"
              fill="#D5DBE1"
            ></path>
            <path
              d="M4.041 22.375h2.167v3.25H4.04v-3.25z"
              fill="#00B871"
            ></path>
            <path
              d="M27.334 16.417h-1.625a.542.542 0 01-.542-.541v-3.25c0-.3.243-.542.542-.542h1.625c1.195 0 2.166.972 2.166 2.167a2.169 2.169 0 01-2.166 2.166zm-1.084-1.083h1.084a1.084 1.084 0 000-2.167H26.25v2.167zM20.292 16.417h-1.625a2.169 2.169 0 01-2.167-2.166c0-1.195.972-2.167 2.167-2.167h1.625c.299 0 .541.243.541.542v3.25a.542.542 0 01-.541.541zm-1.625-3.25a1.084 1.084 0 000 2.167h1.083v-2.167h-1.083z"
              fill="#000"
            ></path>
            <path
              d="M27.875 13.167a.542.542 0 01-.542-.542V9.917A4.338 4.338 0 0023 5.583a4.338 4.338 0 00-4.334 4.334v2.708a.542.542 0 01-1.083 0V9.917A5.423 5.423 0 0123 4.5a5.423 5.423 0 015.416 5.417v2.708a.542.542 0 01-.541.542zM9.457 30.5H5.124c-.896 0-1.625-.73-1.625-1.625v-16.25c0-.896.73-1.625 1.625-1.625h4.333c.896 0 1.625.73 1.625 1.625v16.25c0 .896-.729 1.625-1.625 1.625zM5.124 12.083a.543.543 0 00-.542.542v16.25c0 .298.244.542.542.542h4.333a.543.543 0 00.542-.542v-16.25a.543.543 0 00-.542-.542H5.124z"
              fill="#000"
            ></path>
            <path
              d="M15.96 30.5h-4.334c-.896 0-1.625-.73-1.625-1.625V6.125c0-.896.73-1.625 1.625-1.625h4.333a.542.542 0 010 1.083h-4.333a.543.543 0 00-.542.542v22.75c0 .298.244.542.542.542h4.333a.543.543 0 00.542-.542v-9.75a.542.542 0 011.083 0v9.75c0 .896-.729 1.625-1.625 1.625z"
              fill="#000"
            ></path>
            <path
              d="M22.458 30.499h-4.333c-.896 0-1.625-.73-1.625-1.625V21.29a.542.542 0 011.083 0v7.584c0 .298.244.541.542.541h4.333a.543.543 0 00.542-.541v-9.75a.542.542 0 011.083 0v9.75c0 .896-.729 1.625-1.625 1.625zM10.54 26.167h-6.5a.542.542 0 010-1.083h6.5a.542.542 0 010 1.083zM10.54 22.917h-6.5a.542.542 0 010-1.083h6.5a.542.542 0 010 1.083z"
              fill="#000"
            ></path>
            <path
              d="M23.542 22.917h-6.5a.542.542 0 010-1.083h6.5a.542.542 0 010 1.083zM13.79 26.167a.542.542 0 01-.541-.542V8.292a.542.542 0 011.083 0v17.333a.542.542 0 01-.541.542z"
              fill="#000"
            ></path>
          </svg>
          <p>メディアファイルをダウンロードできます。</p>
        </div>
        <div className="d-flex align-items-center justify-content-center my-5 header-select">
          {/* Prev */}
          <div
            className={`select-left ${currentIndex <= 0 ? "disabled" : ""}`}
            onClick={goPrev}
          >
            <svg width="15" height="25" viewBox="0 0 15 25" fill="none">
              <path
                d="M12.56 2.74l-9.671 9.67 9.67 9.671"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Center Select */}
          <div className="select-center d-flex align-items-center">
            <select
              className="custom-select select-center-text"
              value={lessonId || redirectLesson}
              onChange={(e) => navigate(`/audio/${bookId}/${e.target.value}`)}
            >
              {lessons.map((id) => (
                <option key={id} value={id} className="select-center-text">
                  {bookConfig.data?.[id]?.title || id}
                </option>
              ))}
            </select>
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.997 13.333L23.663 0H.33l11.667 13.333z"
                fill="#039D5D"
              ></path>
            </svg>
          </div>

          {/* Next */}
          <div
            className={`select-right ${
              currentIndex >= lessons.length - 1 ? "disabled" : ""
            }`}
            onClick={goNext}
          >
            <svg width="15" height="25" viewBox="0 0 15 25" fill="none">
              <path
                d="M2.44 2.74l9.671 9.67-9.67 9.671"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ======================
            Audio List
        ====================== */}
      <div className="container mt-5 pt-4">
        <h4 className="mb-4 fw-semibold">ファイル名</h4>

        {bookConfig?.data?.[lessonId]?.files?.map((file, index) => (
          <div key={index}>
            <div className="row align-items-center">
              <div className="col-md-2" style={{ minWidth: "150px" }}>
                <p className="mb-0">{file.name}</p>
              </div>

              <div className="col-md-10">
                <audio controls className="w-100">
                  <source src={file.src} type="audio/mpeg" />
                </audio>
              </div>
            </div>

            <hr className="mt-2 mb-4" />
          </div>
        ))}
      </div>
      <div style={{ marginTop: "400px" }}></div>
    </>
  );
}

export default AudioBookDetails;
