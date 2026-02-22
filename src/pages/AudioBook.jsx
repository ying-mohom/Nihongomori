import SubNav from "../assets/components/SubNav";
import { useParams } from "react-router-dom";
import { audioBookConfig } from "../data/audioBookConfig";

function AudioBook() {
  const { bookId } = useParams();
  const bookConfig = audioBookConfig[bookId];
  if (!bookConfig) return <div>Book not found</div>;
  return (
    <>
      <SubNav
        items={[
          { label: "ホームページ", link: "/" },
          { label: "私の本", link: "/my-book" },
        ]}
      />
      <br />
      <br />
      <div className="container">
        <div className="audio_book__wrapper-title d-flex justify-content-between align-items-center">
          <p className="ms-4 fs-2">{bookConfig.title}</p>
          <div>
            <a
              target="_blank"
              href={bookConfig.downloadUrl.replaceAll("&amp;", "&")}
              className="btn-download"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                  stroke="#039D5D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              ダウンロード
            </a>
          </div>
        </div>
        <div className="audio_book__wrapper-content">
          {bookConfig.lessons.map((lesson) => (
            <a
              key={lesson}
              href={`/audio/${bookId}/${lesson}`}
              className="lesson text-decoration-none"
            >
              <span className="lesson-right">
                {lesson.replace("audio", "")}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default AudioBook;
