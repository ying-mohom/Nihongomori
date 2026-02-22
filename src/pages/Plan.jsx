import { course1 } from "../data/course1";
import { course2 } from "../data/course2";
import SubNav from "./../assets/components/SubNav";

function Plan() {
  return (
    <div>
      <SubNav
        items={[{ label: "ホームページ", link: "/" }, { label: "プラン" }]}
        backgroundColor="#fff"
      />

      <div className="our-plan">
        <div className="container py-5">
          <h4 className="mb-4">勉強したいコースを選んでください</h4>
          {/* first Section */}
          <div className="row g-4">
            {course1.map((course) => (
              <div className="col-md-4" key={course.id}>
                <div className="item">
                  {/* Title */}
                  <div className="title">
                    <a
                      href={`/payment/${course.id}`}
                      className="text-decoration-none text-white"
                    >
                      {course.title}
                      <br />
                      {course.subTitle}
                    </a>
                  </div>

                  <div className="content">
                    {/* Image */}
                    <div className="image">
                      <img
                        src="/images/introduce/JLPT_N1.jpeg"
                        alt={course.title}
                      />
                    </div>

                    {/* Price */}
                    <div className="price">
                      <div className="text">{course.priceText}</div>

                      {/* ✅ Show note only if exists */}
                      {course.note && (
                        <div className="note">
                          {course.note}
                          <br />
                        </div>
                      )}

                      {/* ✅ Show sale image only if exists */}
                      {course.saleImg && (
                        <div className="sale-off">
                          <img src={course.saleImg} alt="Sale" />
                        </div>
                      )}
                    </div>

                    {/* Course */}
                    <div className="course">
                      <div className="text">
                        内容：N1、N2、N3、のすべての授業動画。
                        <br />
                        日本語会話、日本文化の動画もあるよ
                      </div>
                    </div>

                    {/* Document */}
                    <div className="document">
                      <div className="text">
                        教科書：
                        <br />
                        この一冊で合格する（別売）
                      </div>
                    </div>

                    {/* Button */}
                    <div className="action">
                      <a
                        href={`/payment/${course.id}`}
                        className="btn-payment"
                      >
                        しはらう
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* second Section */}
          <div className="row g-4 mt-4">
            {course2.map((course) => (
              <div className="col-md-4" key={course.id}>
                <div className="item">
                  {/* Title */}
                  <div className="title text-white">
                    {course.title}
                    <br />
                    {course.subTitle}
                  </div>

                  <div className="content">
                    {/* Image */}
                    <div className="image">
                      <img
                        src={course.image}
                        alt={course.alt}
                        className="border-0"
                      />
                    </div>

                    {/* Price */}
                    <div className="price">
                      <div className="text">{course.price}</div>
                    </div>

                    {/* Period */}
                    <div className="expire-day">
                      <div className="text">{course.period}</div>
                    </div>

                    {/* Textbook */}
                    <div className="textbook">{course.textbook}</div>

                    {/* Buttons */}
                    <div className="action">
                      {course?.buttons?.map((btn, index) => (
                        <a key={index} href={btn.link} className="btn-payment">
                          {btn.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
