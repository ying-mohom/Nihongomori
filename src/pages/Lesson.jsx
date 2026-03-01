import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubNav from "../assets/components/SubNav";

function Lesson({ courseTitle, breadcrumbs, chapters }) {
  const [openChapter, setOpenChapter] = useState(chapters[0].id); // open "はじめに"
  const [selectedLesson, setSelectedLesson] = useState(chapters[0].lessons[0]);
  const [selectedVideo, setSelectedVideo] = useState(chapters[0].videos[0]);
  const [selectedViewCount, setSelectedViewCount] = useState(
    chapters[0].viewCounts[0],
  );
  const [showLockedMessage, setShowLockedMessage] = useState(false);

  function isLockedLesson(lesson, video) {
    return lesson === "みることができません。" || !video;
  }

  React.useEffect(() => {
    const firstLesson = chapters[0].lessons[0];
    const firstVideo = chapters[0].videos[0];
    const firstViewCount = chapters[0].viewCounts[0];
    setSelectedLesson(firstLesson);
    if (isLockedLesson(firstLesson, firstVideo)) {
      setShowLockedMessage(true);
      setSelectedVideo(null);
      setSelectedViewCount(null);
    } else {
      setShowLockedMessage(false);
      setSelectedVideo(firstVideo);
      setSelectedViewCount(firstViewCount);
    }
  }, [chapters]);

  // Toggle chapter open/close
  function toggleChapter(id) {
    setOpenChapter(openChapter === id ? null : id);
  }

  // Handle lesson click
  function handleLessonClick(lesson, video, viewCount) {
    setSelectedLesson(lesson);

    if (isLockedLesson(lesson, video)) {
      setShowLockedMessage(true);
      setSelectedVideo(null);
      setSelectedViewCount(null);
    } else {
      setShowLockedMessage(false);
      setSelectedVideo(video);
      setSelectedViewCount(viewCount);
    }
  }

  return (
    <>
      <SubNav items={breadcrumbs} />

      <Container className="lesson-page mt-5 mb-5">
        <Row>
          {/* ================= LEFT MENU ================= */}
          <Col md={4} className="sidebar">
            <p className="sidebar-title mb-2">{courseTitle}</p>

            {chapters.map((chapter) => (
              <div key={chapter.id}>
                {/* Chapter Button */}
                <button
                  className="menu-btn"
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <span className="menu-title">{chapter.title}</span>
                  <i
                    className={
                      openChapter === chapter.id
                        ? "fa-solid fa-angle-down"
                        : "fa-solid fa-angle-right"
                    }
                  ></i>
                </button>

                {/* Lessons */}
                {openChapter === chapter.id && (
                  <div className="lesson-box">
                    {chapter.lessons.map((lesson, index) => (
                      <div
                        key={index}
                        className={`lesson-item ${selectedLesson === lesson ? "selected" : ""}`}
                        onClick={() =>
                          handleLessonClick(
                            lesson,
                            chapter.videos[index],
                            chapter.viewCounts[index],
                          )
                        }
                      >
                        <div dangerouslySetInnerHTML={{ __html: lesson }} />
                        {lesson === "みることができません。" ? (
                          <svg
                            width="16"
                            height="21"
                            viewBox="0 0 16 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="lesson-lock"
                          >
                            <path
                              d="M8 16a2 2 0 100-4 2 2 0 000 4zm6-9a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V9a2 2 0 012-2h1V5a5 5 0 1110 0v2h1zM8 2a3 3 0 00-3 3v2h6V5a3 3 0 00-3-3z"
                              fill="#C4C4C4"
                            />
                          </svg>
                        ) : (
                          <svg
                            height="32"
                            width="32"
                            className="lesson-progress"
                          >
                            <circle
                              stroke="#060606"
                              fill="transparent"
                              strokeWidth="3"
                              r="13"
                              cx="16"
                              cy="16"
                            />
                            <circle
                              stroke="#060606"
                              fill="transparent"
                              strokeWidth="3"
                              r="13"
                              cx="16"
                              cy="16"
                              strokeDasharray={2 * Math.PI * 12}
                              strokeDashoffset={2 * Math.PI * 12}
                              transform="rotate(-90 16 16)"
                            />
                            <text
                              x="50%"
                              y="50%"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              fontSize="10"
                              fill="#000"
                            >
                              0%
                            </text>
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Col>

          {/* ================= RIGHT CONTENT ================= */}
          <Col md={8} className="main-content">
            {showLockedMessage ? (
              <div className="mt-5 pt-5 d-flex flex-column">
                <div className="d-flex justify-content-center">
                  <h4>
                    もっとビデオを
                    <ruby>
                      見<rt>み</rt>
                    </ruby>
                    たい
                    <ruby>
                      人<rt>ひと</rt>
                    </ruby>
                    は、お
                    <ruby>
                      金<rt>かね</rt>
                    </ruby>
                    をはらってください。
                  </h4>
                </div>
                <a href="/plan" className="btn-payment text-decoration-none">
                  <ruby>
                    勉強<rt>べんきょう</rt>
                  </ruby>
                  をはじめる
                </a>
              </div>
            ) : (
              <div className="video-box">
                {selectedVideo && (
                  <iframe
                    width="100%"
                    height="400"
                    src={selectedVideo}
                    title="YouTube lesson video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="youtube-video"
                  ></iframe>
                )}
                <h5 className="lesson-title">
                  <div dangerouslySetInnerHTML={{ __html: selectedLesson }} />
                </h5>
                {selectedViewCount && (
                  <p className="view-count">{selectedViewCount}</p>
                )}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Lesson;
