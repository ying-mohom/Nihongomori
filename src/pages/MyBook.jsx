import { useState } from "react";
import BuyButton from "../assets/components/BuyButton";
import SubNav from "../assets/components/SubNav";
import OrangeButton from "../assets/components/OrangeButton";
import Modal from "../assets/components/Modal";

function MyBook() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalType, setModalType] = useState(null);

  const firstSection = [
    {
      src: "/images/introduce/JLPT_N1.jpeg",
      pdf: "Books/pdf/JLPT_N1.pdf",
      buy: [
        {
          name: "Amazonで買う",
          url: "https://www.amazon.co.jp/dp/4910337156?_encoding=UTF8&psc=1&ref=cm_sw_r_ffobk_cp_ud_dp_V9P05D1KQMMCDBPNNH76&ref_=cm_sw_r_ffobk_cp_ud_dp_V9P05D1KQMMCDBPNNH76&social_share=cm_sw_r_ffobk_cp_ud_dp_V9P05D1KQMMCDBPNNH76&bestFormat=true",
        },
        {
          name: "韓国から買う",
          url: "https://www.yes24.com/product/goods/150379616",
        },
        {
          name: "台湾から買う",
          url: "https://www.books.com.tw/products/0011039428?loc=P_br_r0vq68ygz_D_2aabd0_B_1",
        },
      ],
      schedule: [
        { name: "4ヶ月スケジュール", url: "Books/schedule/N1_4months.pdf" },
        { name: "6ヶ月スケジュール", url: "Books/schedule/N1_6months.pdf" },
      ],
      videoLink: "book-N1",
    },
    {
      src: "/images/introduce/JLPT_N2.jpeg",
      pdf: "Books/pdf/JLPT_N2.pdf",
      buy: [
        {
          name: "Amazonで買う",
          url: "https://www.amazon.co.jp/dp/4910337164?_encoding=UTF8&psc=1&ref=cm_sw_r_ffobk_cp_ud_dp_5F26WYGGZX132HYA8KAX_1&ref_=cm_sw_r_ffobk_cp_ud_dp_5F26WYGGZX132HYA8KAX_1&social_share=cm_sw_r_ffobk_cp_ud_dp_5F26WYGGZX132HYA8KAX_1&bestFormat=true",
        },
        {
          name: "韓国から買う",
          url: "https://www.yes24.com/product/goods/146738725",
        },
        {
          name: "台湾から買う",
          url: "https://www.books.com.tw/products/0011035279?utm_source=www&utm_medium=share&utm_content=copy&utm_campaign=product&utm_term=0011035279",
        },
      ],
      schedule: [
        { name: "4ヶ月スケジュール", url: "Books/schedule/N2_4months.pdf" },
        { name: "6ヶ月スケジュール", url: "Books/schedule/N2_6months.pdf" },
      ],
      videoLink: "book-N2",
    },
    {
      src: "/images/introduce/JLPT_N3.jpeg",
      pdf: "Books/pdf/JLPT_N3.pdf",
      buy: [
        {
          name: "Amazonで買う",
          url: "https://www.amazon.co.jp/dp/4910337172?_encoding=UTF8&psc=1&ref=cm_sw_r_ffobk_cp_ud_dp_MD01K6QWNBTN3S41YH9F&ref_=cm_sw_r_ffobk_cp_ud_dp_MD01K6QWNBTN3S41YH9F&social_share=cm_sw_r_ffobk_cp_ud_dp_MD01K6QWNBTN3S41YH9F&bestFormat=true",
        },
        {
          name: "韓国から買う",
          url: "https://www.yes24.com/product/goods/142844421",
        },
        {
          name: "台湾から買う",
          url: "https://www.books.com.tw/products/0011029270?sloc=main_mb",
        },
      ],
      schedule: [
        { name: "4ヶ月スケジュール", url: "Books/schedule/N3_4months.pdf" },
        { name: "6ヶ月スケジュール", url: "Books/schedule/N3_6months.pdf" },
      ],
      videoLink: "book-N3",
    },
  ];
  const secondSection = [
    {
      src: "/images/introduce/Kanji_N1.jpeg",
      content: "JLPT N1 おいしいかんじ",
    },
    {
      src: "/images/introduce/Kanji_N2.jpeg",
      content: "JLPT N2 おいしいかんじ",
    },
    {
      src: "/images/introduce/Kanji_N3.jpeg",
      content: "JLPT N3 おいしいかんじ",
    },
  ];
  const thirdSection = [
    {
      src: "/images/introduce/N2_vocab.png",
      content: "JLPT N2 FAST PASS 合格\n単語 Vocabulary",
      pdf: "Books/pdf/N2_Vocab.pdf",
      buy: [
        {
          name: "Amazon",
          url: "https://www.amazon.co.jp/dp/4910337237?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_2MFFQ43TQV7AYDP8KNDT&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_2MFFQ43TQV7AYDP8KNDT&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_2MFFQ43TQV7AYDP8KNDT&bestFormat=true",
        },
      ],
    },
    {
      src: "/images/introduce/N2_Kanji_new.png",
      content: "JLPT N2 I LOVE KANJI\n",
      pdf: "Books/pdf/N2_Kanji.pdf",
      buy: [
        {
          name: "Amazon",
          url: "https://www.amazon.co.jp/dp/4910337180?ref=cm_sw_r_ffobk_cp_ud_dp_QKB3GQP97JEF9KYWWV6H&ref_=cm_sw_r_ffobk_cp_ud_dp_QKB3GQP97JEF9KYWWV6H&social_share=cm_sw_r_ffobk_cp_ud_dp_QKB3GQP97JEF9KYWWV6H&_encoding=UTF8&psc=1&bestFormat=true",
        },
      ],
    },
    {
      src: "/images/introduce/N3_Kanji_new.png",
      content: "JLPT N3 I LOVE KANJI\n",
      pdf: "Books/pdf/N3_Kanji.pdf",
      buy: [
        {
          name: "Amazon",
          url: "https://www.amazon.co.jp/dp/4910337199?ref=cm_sw_r_ffobk_cp_ud_dp_K1PAPEY9M463SBKZZXET_1&ref_=cm_sw_r_ffobk_cp_ud_dp_K1PAPEY9M463SBKZZXET_1&social_share=cm_sw_r_ffobk_cp_ud_dp_K1PAPEY9M463SBKZZXET_1&bestFormat=true&previewDoh=1",
        },
      ],
    },
  ];
  const fourthSection = [
    {
      src: "/images/introduce/Speaking.jpeg",
      content: "教えて! ゆか先生 日本語会話表現60",
      pdf: "Books/pdf/Speaking.pdf",
      buy: [
        {
          name: "Amazon",
          url: "https://www.amazon.co.jp/dp/B09NKRFVVF/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1639385150&sr=1-2",
        },
        {
          name: "Ask_online",
          url: "https://ask-online.net/student/normal/sign-up/YK?purchase_package_id=191",
        },
      ],
    },
    {
      src: "/images/introduce/Keigo.png",
      content: "教えて！ゆか先生 気持ちが伝わる日本語敬語",
      pdf: "Books/pdf/Keigo.pdf",
      buy: [
        {
          name: "Amazon",
          url: "https://www.amazon.co.jp/dp/486639708X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=",
        },
        {
          name: "Ask_online",
          url: "https://ask-online.net/student/normal/purchase-package?entry_point=YK&purchase_package_id=427",
        },
      ],
    },
    {
      src: "/images/introduce/Speaking1.png",
      content: "日本語の森的60個會話筆記 ゆか老師，這樣說可以嗎？",
      pdf: "Books/pdf/Speaking1.pdf",
      buy: [
        {
          name: "online",
          url: "https://www.books.com.tw/products/0010941083?srsltid=AfmBOop37vfBcFfSxkUCYr9-3oen2Ey0agyvbdMkt2mJ32o6vvabtGOH",
        },
      ],
    },
    {
      src: "/images/introduce/Speaking2.png",
      content: "유카쌤이 알려주는 진짜 일본어 대표 문장 390",
      pdf: "Books/pdf/Speaking2.pdf",
      buy: [
        {
          name: "online",
          url: "https://www.yes24.com/Product/Goods/132757636",
        },
      ],
    },
  ];

  const openModal = (book, type) => {
    setSelectedBook(book);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setModalType(null);
  };

  return (
    <>
      <SubNav
        items={[{ label: "ホームページ", link: "/" }, { label: "私の本" }]}
      />

      <div className="container">
        {/* first Section */}
        <div className="row my-book-wrapper-detail mt-5">
          {firstSection.map((book, index) => (
            <div className="col-md-4 gx-5" key={index}>
              <img src={book.src} alt="" className="img-fluid" />

              <div className="item-content">
                <p>{book.content}</p>
              </div>

              <div className="item-action d-flex gap-2 flex-wrap">
                {/* Orange Button */}
                <OrangeButton onClick={() => window.open(book.pdf, "_blank")} />

                {/* Buy Button */}
                <BuyButton text="買う" onClick={() => openModal(book, "buy")} />

                {/* Schedule Icon */}
                <img
                  src="images/schedule.png"
                  alt="Schedule"
                  onClick={() => openModal(book, "schedule")}
                />
                <a href={`/audio/${book.videoLink}`}>
                  <img src="images/audio.png" alt="Audio" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* first Section */}
        {/* second Section */}
        <div className="row my-book-wrapper-detail mt-5">
          {secondSection.map((book, index) => (
            <div className="col-md-4 gx-5" key={index}>
              <img src={book.src} alt="" className="img-fluid" />

              <div className="item-content">
                <p>{book.content}</p>
              </div>
            </div>
          ))}
        </div>
        {/* second Section */}

        {/* third Section */}
        <div className="row my-book-wrapper-detail mt-5">
          {thirdSection.map((book, index) => (
            <div className="col-md-4 gx-5 d-flex" key={index}>
              <div className="d-flex flex-column h-100 w-100">
                <img src={book.src} alt="" className="img-fluid" />

                <div className="item-content flex-grow-1 mt-2">
                  <p className="mb-0">{book.content}</p>
                </div>

                {/* Buttons at the bottom */}
                <div className="item-action d-flex gap-2 flex-wrap mt-3">
                  <OrangeButton
                    onClick={() => window.open(book.pdf, "_blank")}
                  />
                  <BuyButton
                    text="Amazonで買う"
                    onClick={() => window.open(book.buy[0].url, "_blank")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* third Section */}

        {/* fourth Section */}
        <div className="row my-book-wrapper-detail mt-5">
          {fourthSection.map((book, index) => (
            <div className="col-md-4 gx-5 d-flex mb-5" key={index}>
              <div className="d-flex flex-column h-100 w-100">
                <img src={book.src} alt="" className="img-fluid" />

                <div className="item-content flex-grow-1 mt-2">
                  <p className="mb-0">{book.content}</p>
                </div>

                <div className="item-action d-flex gap-2 flex-wrap mt-3">
                  <OrangeButton
                    onClick={() => window.open(book.pdf, "_blank")}
                  />
                  {book.buy.map((store, i) => (
                    <BuyButton
                      key={i}
                      text={
                        store.name === "Amazon"
                          ? "Amazonで買う"
                          : store.name === "online"
                            ? "オンラインで買う"
                            : "日本以外の国から電子書籍を買う"
                      }
                      onClick={() => window.open(store.url, "_blank")}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* fourth Section */}
        <div className="mt-5 pt-5"></div>
      </div>

      {/* ========== MODAL RENDERING ========== */}
      {modalType && selectedBook && (
        <Modal type={modalType} onClose={closeModal}>
          {/* BUY MODAL */}
          {modalType === "buy" &&
            selectedBook.buy.map((store, index) => (
              <button
                key={index}
                className="custom-buy-btn"
                onClick={() => window.open(store.url)}
              >
                {store.name}
              </button>
            ))}

          {/* SCHEDULE MODAL */}
          {modalType === "schedule" &&
            selectedBook.schedule.map((item, index) => (
              <button
                key={index}
                className="custom-schedule-btn"
                onClick={() => window.open(item.url, "_blank")}
              >
                {item.name}
              </button>
            ))}
        </Modal>
      )}
    </>
  );
}

export default MyBook;
