// PrivacyPolicyPage.jsx
import React from "react";
import { Row, Col } from "react-bootstrap";
import SubNav from "../assets/components/SubNav";

const PrivacyPolicy = () => {
  return (
    <>
      <SubNav
        items={[
          { label: "ホームページ", link: "/" },
          { label: "個人情報保護方針" },
        ]}
      />
      <div className="my-4 container" style={{ color: "#181818" }}>
        <h3 className="information-page_title mb-5">個人情報保護方針</h3>
        <div className="information-page_main">
          <div>
            日本語の森　株式会社（以下「日本語の森」といいます。）は、日本語の森が取得した個人情報の取扱いに関し、個人情報の保護に関する法律、個人情報保護に関する指針、その他個人情報保護に関する関係法令を遵守します。
          </div>
          <br />
          <div>
            なお、この個人情報保護方針 (以下、「本方針」といいます)
            に定める内容は、すべて日本の法令に準拠し、日本の法律に従って解釈されるものとします。
          </div>
          <br />
          <div>
            <h6 className="fw-bold">Privacy Policy</h6>
          </div>
          <div>
            Nihongo no Mori Co., Ltd. (hereinafter referred to as "Nihongo no
            Mori") complies with the Act on the Protection of Personal
            Information, guidelines related to personal information protection,
            and other related laws concerning the handling of personal
            information acquired by Nihongo no Mori.
          </div>
          <div>
            Furthermore, the contents defined in this Privacy Policy
            (hereinafter referred to as "this Policy") will comply with and be
            interpreted according to the laws of Japan.
          </div>
        </div>
        <br />
        <br />

        {/* Section 1 */}
        <Row className="mb-5">
          <h5>1.個人情報の取り扱い</h5>
          <Col md={6} className="pe-4">
            <div className="mt-3">
              <h6 className="fw-bold mb-1">第1条（定義）</h6>
              本方針において、「個人情報」という用語は、その情報に関連する特定の個人を識別できる氏名・住所・電話番号・メールアドレスならびにそれに準ずる個人にかかわる情報と定義します。
            </div>
            <div className="mt-4">
              <h6 className="fw-bold mb-1">第2条　（個人情報の取得）</h6>
              日本語の森は、日本語の森が管理するインターネットによるネット講義サイト（以下、「公式サイト」といいます）およびネット講義アプリ（以下、「公式アプリ」といいます）への一般利用者（以下、「ユーザー」といいます）の登録を目的として。
              または、その他の日本語の森が販売・提供するサービスを購入・利用するユーザーから、ユーザーに係る個人情報を取得します。
            </div>
            <div className="mt-4">
              <h6 className="fw-bold mb-1">第3条　（個人情報の利用目的）</h6>
              日本語の森は、日本語の森が取得した個人情報について、法令に定める場合またはユーザー本人の同意を得た場合を除き、
              以下に定める利用目的の範囲を超えてユーザーの個人情報を利用することはありません。
            </div>
            <br />
            <div className="ms-3">
              【利用目的】
              <br />
              ・公式サイトおよび公式アプリの運営・維持・管理
              <br />
              ・商品の発送やユーザーから依頼を受けたサービスの提供業務、および取引管理
              <br />
              ・日本語の森が提供するサービスの改善
              <br />
              ・日本語の森からの新しいサービスの紹介
              <br />
              ・日本語の森あてお問合せへの返答、および情報の管理
              <br />
              ・日本語の森の公式サイトおよび公式アプリのシステム上、または決済時に問題が発生した際、解決に係るユーザー情報の識別
              <br />
              ・日本語の森の採用募集に応募した方の連絡、面接、採用などのすべての管理業務
            </div>
          </Col>
          <Col md={6} className="p-3" style={{ background: "#f4f8f5" }}>
            <div>
              <span style={{ whiteSpaceCollapse: "preserve" }}>
                1. Handling of Personal Information
              </span>
            </div>
            <p>
              <strong>Article 1 (Definition)</strong>
              <br />
              <br />
              In this Policy, the term "personal information" is defined as
              information that can identify a specific individual by their name,
              address, telephone number, email address, and other similar
              personal-related information.
            </p>
            <br />
            <p>
              <strong>Article 2 (Acquisition of Personal Information)</strong>
              <br />
              <br />
              Nihongo no Mori acquires personal information from users who
              register for the general use of the official site and the official
              app. Additionally, personal information is collected from users
              who purchase or use other services provided by Nihongo no Mori.
            </p>
            <br />
            <p>
              <strong>
                Article 3 (Purpose of Use of Personal Information)
              </strong>
              <br />
              <br />
              Nihongo no Mori will not use the personal information obtained for
              any purposes other than those defined below, except as required by
              law or with the user's consent:
            </p>
            Purposes of Use:
            <ul>
              <li>
                Operation, maintenance, and management of the official site and
                the official app
              </li>
              <li>
                Dispatching products and providing services requested by users,
                and managing transactions
              </li>
              <li>Improvement of services offered by Nihongo no Mori</li>
              <li>Introduction of new services from Nihongo no Mori</li>
              <li>
                Responding to inquiries sent to Nihongo no Mori and managing
                information
              </li>
              <li>
                Identification of user information for resolving issues on the
                official site, official app systems, or during payment
              </li>
              <li>
                All management activities related to contacting, interviewing,
                and hiring applicants at Nihongo no Mori
              </li>
            </ul>
          </Col>
        </Row>

        {/* Section 2 */}
        <Row className="mb-5">
          <h5>2. 個人情報の保護</h5>
          <br />
          <br />
          <Col md={6} className="pe-4">
            <div>
              <h6 className="fw-bold mb-1">第1条（クレジット情報の保護）</h6>
              日本語の森の提供するサービスの利用を目的とする決済のために、公式サイト上でユーザーから氏名、クレジットカード番号、ならびにその他の機密情報を取得する場合のセキュリティ確保のため、
              日本語の森ではユーザーの個人情報をSSL（Secure Socket
              Layer：インターネット上で情報を暗号化して通信するセキュリティ機能）により保護します。
            </div>
            <br />
            <div>
              <h6 className="fw-bold mb-1">第2条（個人情報の保管期間）</h6>
              日本語の森は、法令の定める期間、または日本語の森のサービスの提供の目的の達成に必要な範囲・期間において、ユーザーの個人情報を保管・利用します。
              <br />
              <br />
              ユーザー本人または代理人は、日本語の森の定める手続きにしたがって、個人情報の開示・内容の訂正、追加または削除・利用の停止または消去、および利用目的の通知を求めることができます。
              <br />
              <br />
              ご希望の方は、日本語の森の公式LINE、またはinfo@nihongonomori.comあてにご連絡ください。
            </div>
          </Col>
          <Col md={6} className="p-3" style={{ background: "#f4f8f5" }}>
            <div>
              <span style={{ whiteSpaceCollapse: "preserve" }}>
                2. Protection of Personal Information
              </span>
            </div>
            <p>
              <strong>Article 1 (Protection of Credit Information)</strong>
              <br />
              <br />
              To ensure the safeguarding of the names, credit card numbers, and
              other confidential information obtained from users on the official
              site of Nihongo No Mori for the purpose of using services provided
              by Nihongo no Mori, SSL (Secure Socket Layer: a security feature
              that encrypts information on the internet) has been employed.
            </p>
            <br />
            <p>
              <strong>
                Article 2 (Retention Period of Personal Information)
              </strong>
              <br />
              <br />
              Nihongo no Mori retains and uses the personal information of users
              for the period specified by law or as necessary to achieve the
              purposes of providing Nihongo no Mori's services.
              <br />
              <br />
              Users or their designated representatives can request the
              disclosure, correction, addition or deletion of their personal
              information, complete suspension or deletion of its use, and
              notification of the purposes of use, following the procedures
              established by Nihongo no Mori.
              <br />
              <br />
              If you wish to request anything regarding the use of personal
              information, please contact us via the official LINE of Nihongo no
              Mori, or at info@nihongonomori.com.
            </p>
            <br />
          </Col>
        </Row>

        {/* Section 3 */}
        <Row className="mb-5">
          <h5>3.第三者への個人情報の開示</h5>
          <br />
          <br />
          <Col md={6} className="pe-4">
            <div>
              <h6 className="fw-bold mb-1">
                第1条　（個人情報の第三者への提供）
              </h6>
              日本語の森は、日本語の森の取り扱う個人情報を適切に管理し、以下のいずれかに該当する場合を除き、個人情報を第三者へ提供、開示等はいっさい行いません。
              <div className="ms-3 mt-3 mb-3">
                ・ユーザー本人の同意がある場合
                <br />
                ・法令に基づき開示・提供を求められた場合
                <br />
                ・人の生命、身体または財産の保護のために必要な場合であって、ユーザー本人の同意を得ることが困難な場合
                <br />
                ・国または地方公共団体等が公的な事務を実施する上で、協力する必要がある場合であって、ユーザー本人の同意を得ることにより当該事務の遂行に支障をおよぼすおそれがある場合
              </div>
              なお、日本語の森が提供するサービスを利用するため、ユーザーが決済時に日本語の森に提供した、クレジットカード等の機密情報については、ユーザー本人の同意があるかないかに関わらず、第三者へ提供または開示することはありません。
            </div>
            <br />
            <div>
              <h6 className="fw-bold mb-1">第2条　（個人情報の販売の禁止）</h6>
              日本語の森が製品やサービスを販売を目的として、ユーザーの個人情報を他社に販売または提供・開示することはありません。
              <br />
              <br />
            </div>
          </Col>
          <Col md={6} className="p-3" style={{ background: "#f4f8f5" }}>
            <div>
              <span style={{ whiteSpaceCollapse: "preserve" }}>
                3. Disclosure of Personal Information to Third Parties
              </span>
            </div>
            <p>
              <strong>
                Article 1 (Provision of Personal Information to Third Parties)
              </strong>
              <br />
              <br />
              Nihongo no Mori appropriately handles the user’s personal
              information and will not provide or disclose it to third parties
              except in the following cases:
              <br />
              <br />
              <ul>
                <li>With the user's consent</li>
                <li>When required by law</li>
                <li>
                  When necessary to protect the life, body, or property of a
                  person and it is difficult to obtain the user's consent
                </li>
                <li>
                  When it is necessary to cooperate with national or local
                  public entities in performing public duties and obtaining the
                  user's consent could impede the performance of such duties
                </li>
              </ul>
              <br />
              Furthermore, regardless of the users’ consent, confidential
              information such as credit card details provided to Nihongo no
              Mori at the time of payment will not be provided or disclosed to
              third parties.
            </p>
            <br />
            <p>
              <strong>
                Article 2 (Prohibition of Sale of Personal Information)
              </strong>
              <br />
              <br />
              Nihongo no Mori will not sell or provide, nor disclose users'
              personal information to other companies for the purpose of selling
              products or services.
            </p>
            <br />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PrivacyPolicy;
