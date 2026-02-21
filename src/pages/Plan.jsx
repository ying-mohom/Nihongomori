import { course1 } from "../data/course1";
import { course2 } from "../data/course2";
import SubNav from "./../assets/components/SubNav";
import { Link } from "react-router-dom";

function Plan() {
  //   const secondSection = [
  //     {
  //       id: 1,
  //       title: "BASIC JAPANESE",
  //       subTitle: "JLPT N5/N4",
  //       image: "/images/english.png",
  //       alt: "English",
  //       price: "Price: N4 ￥5,500 / N5 ￥5,500",
  //       period: "Period: 6 months",
  //       textbook: "Minna no Nihongo (Textbook sold separately)",
  //       buttons: [
  //         { text: "Payment N4", link: "/" },
  //         { text: "Payment N5", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "基础日语",
  //       subTitle: "JLPT N5/N4",
  //       image: "/images/chinese.png",
  //       alt: "Chinese",
  //       price: "价格: N4 ￥5,500 / N5 ￥5,500",
  //       period: "期间: 6个月",
  //       textbook: "教材: 大家的日语(另售)",
  //       buttons: [
  //         { text: "購買 N4", link: "/" },
  //         { text: "購買 N5", link: "/" },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "기초 일본어",
  //       subTitle: "JLPT N5/N4",
  //       image: "/images/korea.png",
  //       alt: "Korean",
  //       price: "가격: N4 ￥5,500 / N5 ￥5,500",
  //       period: "기간：6개월",
  //       textbook: "교재：민나노니혼고 （별매）",
  //       buttons: [
  //         { text: "구매 N4", link: "/" },
  //         { text: "구매 N5", link: "/" },
  //       ],
  //     },
  //   ];

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
                    <Link
                      to={`/payment/${course.id}`}
                      className="text-decoration-none text-white"
                    >
                      {course.title}
                      <br />
                      {course.subTitle}
                    </Link>
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
                      <Link
                        to={`/payment/${course.id}`}
                        className="btn-payment"
                      >
                        しはらう
                      </Link>
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
                        <Link key={index} to={btn.link} className="btn-payment">
                          {btn.text}
                        </Link>
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
