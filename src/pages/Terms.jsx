// PrivacyPolicyPage.jsx
import React from "react";
import { Row, Col } from "react-bootstrap";
import SubNav from "../assets/components/SubNav";

const Terms = () => {
	return (
		<>
			<SubNav
				items={[{ label: "ホームページ", link: "/" }, { label: "利用規約" }]}
			/>
			<div className="my-4 container" style={{ color: "#181818" }}>
				<h3 className="information-page_title mb-5">利用規約</h3>
				<div className="information-page_main lh-lg">
					<div style={{ letterSpacing: "0.5px" }}>
						この利用規約（以下、「本規約」といいます）は、日本語の森　株式会社（以下、「日本語の森」といいます）がインターネット上で提供するネット講議（以下、「公式サイト」といいます）ならびにネット講義アプリ（以下、「公式アプリ」といいます）の利用条件を定めるものです。
					</div>
					<div style={{ letterSpacing: "0.5px" }}>
						公式サイトおよび公式アプリのサービス（以下、「本サービス」といいます）を利用する登録ユーザーの皆さん（以下、「ユーザー」といいます）は、本規約にしたがって、サービスを利用することができます。
					</div>
					<div style={{ letterSpacing: "0.5px" }}>
						また、ユーザーが本規約の「第2章　利用登録」の定めにしたがって本サービスに利用登録をすることにより、ユーザーは本規約の条項に同意したものとみなされます。
					</div>
					<br />
					<div>
						<h6 className="fw-bold">Terms of Use</h6>
					</div>
					<div>
						These Terms of Use (hereinafter referred to as the "Terms")
						establish the terms and conditions for the use of the online
						lectures provided by Nihongo no Mori Co., Ltd. (hereinafter referred
						to as "Nihongo no Mori") on the Internet, including the official
						website (hereinafter referred to as the "Official Website") and the
						online lecture application (hereinafter referred to as the "Official
						App").
					</div>
					<div>
						Registered Users (hereinafter referred to as "Users") who use the
						services of the Official Website and Official App (hereinafter
						referred to as the "Services") must comply with these Terms.
					</div>
					<div>
						By registering to use the Services in accordance with "Chapter 2.
						User Registration" of these Terms, Users are deemed to have agreed
						to the provisions of these Terms.
					</div>
					<div>
						Furthermore, by registering to use the Services in accordance with
						the provisions of "Chapter 2. User Registration" of these Terms,
						Users are deemed to have agreed to the provisions of these Terms.
					</div>
				</div>
				<br />
				<br />

				{/* Section 1 */}
				<Row className="mb-5">
					<h5>1.適用</h5>
					<Col md={6} className="pe-4">
						<div className="mt-3">
							<h6 className="fw-bold mb-1">第1条　（適用の範囲）</h6>
							本規約は、日本語の森が提供する月額または年額のサービスへのユーザーの登録の有無にかかわらず、
							日本語の森とすべてのユーザーとの間のサービスの利用にかかわるすべての関係に適用されるものとします。
						</div>
						<div className="mt-4">
							<h6 className="fw-bold mb-1">第2条　（個別規定）</h6>
							日本語の森は、本サービスに関して、本規約のほかにも、利用にあたってのルールなど、各種の定め（以下、「個別規定」といいます）をすることがあります。
							<br />
							これらの個別規定は、本規約の一部を構成するものとします。
						</div>
						<div className="mt-4">
							<h6 className="fw-bold mb-1">
								第3条　（本規約と個別規定の関係）
							</h6>
							本規約の規定が前項の個別規定の規定と矛盾する場合、個別規定の規定が優先されるものとします。
						</div>
						<br />
					</Col>
					<Col md={6} className="px-3 py-4" style={{ background: "#f4f8f5" }}>
						<div>
							<strong>Chapter 1. Application</strong>
						</div>
						<br />
						<p>
							<strong>Section 1 (Scope of Application)</strong>
							<br />
							These Terms apply to all relationships related to the use of the
							Services provided by Nihongo no Mori, regardless of whether the
							User is registered for monthly or annual services.
						</p>
						<p>
							<strong>Section 2 (Individual Provisions)</strong>
							<br />
							Nihongo no Mori may establish various provisions, such as rules
							for using the Services, in addition to these Terms (hereinafter
							referred to as "Individual Provisions").
							<br />
							These Individual Provisions shall form part of these Terms.
						</p>
						<p>
							<strong>
								Section 3 (Relationship between these Terms and Individual
								Provisions)
							</strong>
							<br />
							In the event of any contradiction between the provisions of these
							Terms and the Individual Provisions, the Individual Provisions
							shall prevail.
						</p>
						<br />
					</Col>
				</Row>

				{/* Section 2 */}
				<Row className="mb-5">
					<h5>2.利用登録</h5>
					<br />
					<br />
					<Col md={6} className="pe-4">
						<div>
							<h6 className="fw-bold mb-1">第1条　（利用登録）</h6>
							本サービスに登録を希望するユーザーは、本規約に同意の上、
							日本語の森の定めた登録画面にしたがって、メールアドレスなどの登録情報を登録することによって、利用登録が完了するものとします。
							<br /><br />
							ユーザーが日本語の森に利用登録をした時点で、ユーザーは本規約の内容に同意したものとみなされます。
							<br /><br />
							なお、ユーザーが日本語の森に利用登録を行う際、日本語の森に提供するユーザーの個人情報については
							日本語の森が定める「個人情報保護方針」にしたがい、適切に取り扱うものとします。
						</div>
						<br />
					</Col>
					<Col md={6} className="px-3 py-4" style={{ background: "#f4f8f5" }}>
						<div>
							<strong>Chapter 2. User Registration</strong>
						</div>
						<br />
						<p>
							<strong>Section 4 (User Registration)</strong>
							<br />
							Users who wish to register for the Services must agree to these Terms and complete the registration by entering registration information such as email addresses according to the registration screen established by Nihongo no Mori.
							<br />
							When a User registers with Nihongo no Mori, they are deemed to have agreed to the contents of these Terms.
							<br />
							Furthermore, when a User provides personal information to Nihongo no Mori during registration for the Services, Nihongo no Mori shall handle such personal information appropriately in accordance with the "Privacy Policy" established by Nihongo no Mori.
							<br />
							Please refer to the Privacy Policy at https://Nihongo no Mori.com/privacy-policy for details on how personal information, such as email addresses, is used and stored.
						</p>
						<br />
					</Col>
				</Row>

				{/* Section 3 */}
				<Row className="mb-5">
					<h5>3.有料サービスの利用</h5>
					<Col md={6} className="pe-4">
						<div className="mt-3">
							<h6 className="fw-bold mb-1">第1条　（有料サービス）</h6>
							日本語の森はユーザーに対して、公式サイトおよび公式アプリ上にて、月額（以下、「月額サービス」といいます）および年額（以下、「年額サービス」といいます）の有料のサービス（以下、「有料サービス」といいます）を提供します。
						</div>
						<div className="mt-4">
							<h6 className="fw-bold mb-1">第2条　（利用料金）</h6>
							有料サービスの利用を希望するユーザーは、有料サービスの利用の対価として、<br />
							日本語の森が別途定め、公式サイトおよび公式アプリに表示する利用料金を、日本語の森が指定する方法により支払うものとします。
						</div>
						<div className="mt-4">
							<h6 className="fw-bold mb-1">
								第3条　（有料サービスの契約期間）
							</h6>
							有料サービスの利用期間（以下、「契約期間」といいます）は、日本語の森が別途定め、公式サイトおよび公式アプリに表示します。
						</div>
						<div className="mt-4">
							<h6 className="fw-bold mb-1">
								第4条　（有料登録の方法）
							</h6>
							有料サービスに登録を希望するユーザーは、日本語の森の定める方法にしたがって、<br />
							日本語の森の定める期間ごとの有料サービスの利用料を支払うことによって、有料サービスへの登録を完了することができます。
							<br /><br />
							なお、有料サービスへ登録する際、ユーザーが日本語の森に提供したユーザーの個人情報については
							日本語の森が定める「個人情報保護方針」にしたがい、適切に取り扱うものとします。
						</div>
						<div className="mt-4">
							<h6 className="fw-bold mb-1">
								第5条　（月額サービスの登録の解除）
							</h6>
							月額サービスに登録を行ったユーザーは、
							ユーザーが利用登録の解除を希望する場合、日本語の森が定める方法にしたがって、
							ユーザー自身が手続きを行うことによって月額登録を解除することができます。
							<br /><br />
							ユーザーが月額登録の解除を行った場合でも、
							ユーザーは契約期間が終了する日まで、月額サービスを利用することができます。
						</div>
						<div className="mt-4">
							<h6 className="fw-bold mb-1">
								第6条　（年額サービスの登録の解除）
							</h6>
							年額サービスに登録を行ったユーザーは、<br />
							ユーザーが利用登録の解除を希望する場合、<br />
							日本語の森が本規約の「3.有料サービスの利用」に定める方法にしたがって、日本語の森に対して解除の申込みを行うことができます。
							<br /><br />
							ユーザーが契約期間の満了までに年額登録の解除を日本語の森に申込んだ場合、
							ユーザーが日本語の森に対して支払った年額サービスの登録料のうち、
							日本語の森は本項　「第7条　（年額サービスの登録の解除にかかる手数料）」の内容にしたがって手数料を差し引いた残額をユーザーに返金するものとします。
						</div>
						<div className="mt-4">
							<h6 className="fw-bold mb-1">
								第7条　（年額サービスの登録の解除にかかる手数料）
							</h6>
							ユーザーが年額サービスに登録した後、年額サービスの解除を希望する場合
							ユーザーは日本語の森に対して解約と返金の請求を申し込むことができます。
							<br /><br />
							なお、日本語の森がユーザーに対して返金を行う際<br />
							年額サービスの登録料から、下記に定める通りの手数料を差し引いた残額をユーザーに返金するものとします。
							<br /><br />
							※年額サービスの登録料は　11000円 / 1年として計算します。（2023年1月17日　時点）
							<br />
							<span>------------------------------------------</span>
							<br /><br />
							【1か月以内の解約】<br />
							・登録料　　　　　 　   …2500円<br />
							・授業料（1か月分）　  …2750円<br />
							・解約にかかる手数料　…1000円<br /><br />
							日本語の森は登録料から上記の合計額を差し引いた、4750円をユーザーに返金します。
							<br /><br />
							【2か月以内の解約】<br />
							・登録料　　　　　 　   …2500円<br />
							・授業料（2か月分）　  …5500円<br />
							・解約にかかる手数料　…1000円<br />
							日本語の森は登録料から上記の合計額を差し引いた、2000円をユーザーに返金します。<br /><br />
							【2か月以降の解約】<br />
							ユーザーが年額サービスに登録し、2か月間サービスを利用した後の解約の申し込みを行った場合<br />
							日本語の森は返金を受け付けないものとします。<br />
							<span>------------------------------------------</span>
							<br />
							<div className="mt-4">
								<h6 className="fw-bold mb-1">
									第8条　（返金）
								</h6>
								ユーザーが有料サービスに登録するため、<br />
								日本語の森のクレジットカード決済システム（以下、「決済システム」といいます）にユーザー自身のクレジットカード番号などを登録する際<br /><br />

								システムの不具合・エラー・障害、またはユーザーの誤操作などが発生したことにより、<br />
								日本語の森のクレジット決済システムがユーザーに対して複数回の請求を行った場合、<br />
								日本語の森はユーザーに対して返金を行います。<br /><br />

								返金を行う際、決済システムは手数料を請求しません。<br />
								ただし、元の支払いのためにユーザーが決済システムに対し支払った手数料はユーザーが負担するものとし、日本語の森はこれを返金しません。
							</div>
							<div className="mt-4">
								<h6 className="fw-bold mb-1">
									第9条　（有料サービスの内容の変更）
								</h6>
								日本語の森は、ユーザーへの予告なしに、有料サービスの利用料金および契約期間を変更することができるものとします。
								<br /><br />
								なお、有料サービスの内容の変更の前に、日本語の森の有料サービスに登録したユーザーについては、<br />
								ユーザーが本項「第5条　（月額サービスの登録の解除）」ならびに「第6条　（年額サービスの登録の解除）」の規定にしたがい登録の解除を行うまでは、<br />
								いかなる理由があっても日本語の森は当該ユーザーの利用料金および契約期間を変更することはできません。
							</div>
						</div>
						<br />
					</Col>
					<Col md={6} className="px-3 py-4" style={{ background: "#f4f8f5" }}>
						<div>
							<strong>Chapter 3. Use of Paid Services</strong>
						</div>
						<br />
						<p>
							<strong>Section 5 (Paid Services)</strong>
							<br />
							Nihongo no Mori offers paid services (hereinafter referred to as "Paid Services") on the Official Website and Official App, available on a monthly (hereinafter referred to as "Monthly Services") and annual basis (hereinafter referred to as "Annual Services").
						</p>
						<p>
							<strong>Section 6 (Service Fees)</strong>
							<br />
							Users who wish to use the Paid Services must pay the service fees displayed on the Official Website and Official App, as determined separately by Nihongo no Mori, using the payment method specified by Nihongo no Mori.
						</p>
						<p>
							<strong>
								Section 7 (Contract Period for Paid Services)
							</strong>
							<br />
							The period of use of the Paid Services (hereinafter referred to as the "Contract Period") will be specified separately by Nihongo no Mori and displayed on the Official Website and Official App.
						</p>
						<p>
							<strong>
								Section 8 (Method of Paid Registration)
							</strong>
							<br />
							Users who wish to register for the Paid Services can complete their registration by paying the service fee for the specified period, according to the method established by Nihongo no Mori.<br />
							All transactions for the Services must be conducted through the designated payment system. Payments by other methods are not accepted.<br />
							Also, when registering for the Paid Services, the personal information provided by the User to Nihongo no Mori will be handled appropriately according to the established "Privacy Policy."
						</p>
						<p>
							<strong>
								Section 9 (Cancellation of Monthly Service Registration)
							</strong>
							<br />
							Users who have registered for the Monthly Services can cancel their registration by following the method determined by Nihongo no Mori. <br />
							Even if a User cancels their Monthly registration, they can continue to use the Monthly Services until the end of the contract period.
							<br />
						</p>
						<p>
							<strong>
								Section 10 (Cancellation of Annual Service Registration)
							</strong>
							<br />
							Users who have registered for the Annual Services can apply for cancellation to Nihongo no Mori in accordance with the method defined in "Chapter 3. Use of Paid Services" of these Terms.
							<br />
							If a User applies for cancellation of their Annual registration before the expiration of the contract period, Nihongo no Mori will refund the balance of the registration fee for the Annual Services, after deducting the fee specified in "Section 11 (Cancellation Fee for Annual Service Registration)."
						</p>
						<p>
							<strong>
								Section 11 (Cancellation Fee for Annual Service Registration)
							</strong>
							<br />
							If a User wishes to cancel their registration for the Annual Services after registering, they can apply for cancellation and a refund to Nihongo no Mori.
							<br />
							When issuing a refund to the User, Nihongo no Mori will refund the remaining amount after deducting the fees as specified below.
							<br />
							*The registration fee for the Annual Services is calculated at 11,000 yen per year (as of January 17, 2023).
							<br />
							*Fees written below are JPY(¥, Japanese Yen)
							<br />
							Cancellation Within 1 Month
							<br />
							Registration Fee: ¥2500
							<br />
							Tuition Fee (for 1 month): ¥2750
							<br />
							Cancellation Fee: ¥1000
							<br />
							Nihongo no Mori will refund the user ¥4750, deducted from the registration fee as mentioned above.
							<br />
							Cancellation within 2 months:
							<br />
							Registration fee: ¥2500
							<br />
							Tuition Fee (for 2 months): ¥5500
							<br />
							Cancellation fee: ¥1000
							<br />
							Nihongo no Mori will refund ¥2000 to the User after deducting the total amount specified above.
							<br />
							Cancellation after 2 months:
							<br />
							If a User who has registered for the annual service and has used the service for two months applies for cancellation, Nihongo no Mori will not accept any refunds.
						</p>
						<p>
							<strong>
								Section 12 (Refunds)
							</strong>
							<br />
							If a User registers his/her credit card information in Nihongo no Mori's payment system (hereinafter referred to as "Payment System") for paid service registration, and multiple charges occur due to the system malfunctions, errors, failures, or user misoperations, Nihongo no Mori will issue a refund to the User.
							<br />
							The Payment System will not charge a fee for the refund. However, any fees paid by the User to the Payment System for the original payment will not be refunded by Nihongo no Mori.
							<br />
						</p>
						<p>
							<strong>
								Section 13 (Changes to Paid Services)
							</strong>
							<br />
							Nihongo no Mori may change the fees and contract period for paid services without prior notice to the User.
							<br />
							However, before any changes to the content of paid services, Nihongo no Mori cannot change the fees or contract period for any User who has registered for the services until the User cancels the registration according to the provisions of "Section 9 (Cancellation of Monthly Service Registration)" and "Section 10 (Cancellation of Annual Service Registration)" for any reason.
						</p>
					</Col>
				</Row>

				{/* Section 4 */}
				<Row className="mb-5">
					<h5>4.サービスの変更等</h5>
					<br />
					<br />
					<Col md={6} className="pe-4">
						日本語の森は、日本語の森の都合により、<br />
						ユーザーへの予告なく、任意の理由によってサービスの内容を追加・変更・中断・終了することができるものとします。<br />
						本の内容やPDFについても同様で、公開されていたものが、見れなくなる場合もございます。
					</Col>
					<Col md={6} className="px-3 py-4" style={{ background: "#f4f8f5" }}>
						<div>
							<strong>Chapter 4. Changes to Services</strong>
						</div>
						<br />
						<p>
							<strong>Section 14 (Changes to Services)</strong>
							<br />
							Nihongo no Mori may, at its discretion and without prior notice to the User, add, change, suspend, or terminate the services for any reason. This also applies to the contents of books or PDFs, which may become unavailable.
						</p>
						<br />
					</Col>
				</Row>

				{/* Section 5 */}
				<Row className="mb-5">
					<h5>5.日本語の森の権利</h5>
					<Col md={6} className="pe-4">
						<div className="mt-3">
							<h6 className="fw-bold mb-1">第1条　（日本語の森の権利）</h6>
							本サービスにふくまれるすべてのコンテンツ・情報に関する財産権は日本語の森に帰属します。
							<br /><br />
							本サービスにふくまれるすべてのコンテンツ・情報は、著作権法・商標法・意匠法などにより保護されています。
						</div>
						<div className="mt-4">
							<h6 className="fw-bold mb-1">第2条　（二次利用の禁止）</h6>
							本サービスを利用するユーザーは、日本語の森の書面による許可なしに、
							本サービスの利用を通して得たコンテンツの内容・情報を、個人的または商用的な目的で複製、販売、または使用することはできません。
							<br /><br />
							また、日本語の森がユーザーに対して配布する画像、日本語の森のロゴ、その他ユーザーが本サービスを通して得たすべてのコンテンツを
							ユーザーが検索エンジンやその他の従来のマーケティング手法に関連するマーケティングツールに使用することを禁止します。
						</div>
						<br />
					</Col>
					<Col md={6} className="px-3 py-4" style={{ background: "#f4f8f5" }}>
						<div>
							<strong>Chapter 5. Rights of Nihongo no Mori</strong>
						</div>
						<br />
						<p>
							<strong>Section 15 (Rights of Nihongo no Mori)</strong>
							<br />
							All intellectual property rights in the contents and information included in the services belong to Nihongo no Mori.
							<br />
							All contents and information included in the services are protected by copyright, trademark law, design law, and other intellectual property laws.
						</p>
						<p>
							<strong>Section 16 (Prohibition of Secondary Use)</strong>
							<br />
							Users of the service shall not reproduce, sell, or use content and information obtained through the use of the service for personal or commercial purposes without written permission from Nihongo no Mori.
							<br />
							Furthermore, the use of images, logos of Nihongo no Mori, and all other content obtained through the service by Users in search engines or other traditional marketing tools is prohibited.
						</p>
						<br />
					</Col>
				</Row>

				{/* Section 6 */}
				<Row className="mb-5">
					<h5>6.禁止行為</h5>
					<br />
					<br />
					<Col md={6} className="pe-4">
						<div>
							<h6 className="fw-bold mb-1">第1条　（譲渡の禁止）</h6>
							本サービスを利用できる者は、<br />
							本規約「2.利用登録」「3.有料サービスの利用」の定めにしたがい、<br />
							日本語の森に登録をしたユーザー本人のみとします。
							<br /><br />
							ユーザーは、いかなる場合においても、本サービスの提供を受ける権利を第三者に譲渡したり、売買などの行為を行うことができないものとします。
							<br /><br />
						</div>
						<br />
						<div>
							<h6 className="fw-bold mb-1">第2条　（その他の禁止事項）</h6>
							日本語の森は下記の行為を禁止事項として定め、ユーザーはこれを行わないこととします。
							<br /><br />
							・日本語の森、または日本語の森の従業員のの保有する
							<br />
							著作権・商標権などの知的財産権を侵害する行為、または侵害する恐れのある行為
							<br />
							・本規約に違反するすべての行為
							<br />
							・日本語の森、もしくは本サービスを利用するほかのユーザーへの
							<br />
							暴力的・猥褻・不利益を与える・気分を害すると認められるすべての発言および行為
							<br />
							・犯罪的行為、不法行為、またはそのおそれのある行為
							<br />
							・日本語の森、もしくは本サービスの管理・運営を妨げる行為、またはその恐れのある行為
							<br />
							・日本語の森、または本サービスの信用を毀損する行為、またはそのおそれのある行為
							<br />
							・上記、各号に定める行為を助長する行為
							<br />
							・その他、日本語の森が不適当と判断すること
							<br /><br />
						</div>
						<div>
							<h6 className="fw-bold mb-1">第3条　利用制限</h6>
							日本語の森は、ユーザーが本項「第1条　（譲渡の禁止）」「第2条　（その他の禁止事項）」のいずれかに該当する行為を行ったと認められた場合、<br />
							当該ユーザーの承諾を得ることなく、当該ユーザーによる本サービスの利用を制限します。
						</div>
					</Col>
					<Col md={6} className="px-3 py-4" style={{ background: "#f4f8f5" }}>
						<div>
							<strong>Chapter 6. Prohibited Activities</strong>
						</div>
						<br />
						<p>
							<strong>Section 17 (Prohibition of Transfer)</strong>
							<br />
							Only the User who has registered with Nihongo no Mori according to the provisions of "Chapter 2. User Registration" and "Chapter 3. Use of Paid Services" of these Terms may use the service.
							<br />
							Users may not, under any circumstances, transfer or sell the rights to receive the services to a third party.
						</p>
						<p>
							<strong>Section 18 (Other Prohibited Activities)</strong>
							<br />
							Nihongo no Mori establishes the following actions as prohibited, and Users shall not engage in them:
							<br />
							Acts that infringe or may infringe the intellectual property rights, such as copyrights and trademarks, of Nihongo no Mori or its employees.
							<br />
							All acts in violation of these Terms.
							<br />
							All acts or statements that are violent, obscene, detrimental, or offensive to other Users or to Nihongo no Mori.
							<br />
							Criminal acts, illegal activities, or acts that may lead to such.
							<br />
							Acts that hinder or may hinder the management and operation of the service.
							<br />
							Acts that damage or may damage the reputation of Nihongo no Mori or the service.
							<br />
							Acts that encourage any of the aforementioned actions.
							<br />
							Other actions deemed inappropriate by Nihongo no Mori.
						</p>
						<p>
							<strong>Section 19 (Restrictions on Use)</strong>
							<br />
							If Nihongo no Mori determines that a User has engaged in any activities prohibited under "Section 17 (Prohibition of Transfer)" and "Section 18 (Other Prohibited Activities)", it may restrict the User's use of the service without the User's consent.
						</p>
					</Col>
				</Row>

				{/* Section 7 */}
				<Row className="mb-5">
					<h5>7.免責</h5>
					<br />
					<br />
					<Col md={6} className="pe-4">
						<div>
							<h6 className="fw-bold mb-1">第1条　（賠償責任）</h6>
							日本語の森は、本サービスの利用により発生したユーザーに損害が発生した場合、一切の賠償責任を負わないものとします。
						</div>
						<br />
						<div>
							<h6 className="fw-bold mb-1">第2条　（システムの不具合による損害）</h6>
							日本語の森は、ユーザーが本サービスを利用する際にシステムに発生した不具合・エラー・障害などにより、<br />
							ユーザーが本サービスを利用できないことによって引き起こされた損害について、一切の賠償責任を負わないものとします。
						</div>
						<br />
					</Col>
					<Col md={6} className="px-3 py-4" style={{ background: "#f4f8f5" }}>
						<div>
							<strong>Chapter 7. Disclaimer</strong>
						</div>
						<br />
						<p>
							<strong>Section 20 (Liability for Damages)</strong>
							<br />
							Nihongo no Mori is not liable for any damages incurred by the User as a result of using the service.
						</p>
						<p>
							<strong>Section 21 (Damage Due to System Malfunctions)</strong>
							<br />
							Nihongo no Mori is not liable for any damages caused by malfunctions, errors, or failures in the system or changes or corrections made to the system that result in the User being unable to use the service.
						</p>
						<p>
							<strong>Section 22 (Damage Due to Device Malfunctions)</strong>
							<br />
							Nihongo no Mori is not liable for any damages caused by malfunctions of the User's device.
						</p>
					</Col>
				</Row>

				{/* Section 8 */}
				<Row className="mb-5">
					<h5>8.本規約の変更</h5>
					<br />
					<br />
					<Col md={6} className="pe-4">
						<div>
							<h6 className="fw-bold mb-1">第1条　（本規約の改正）</h6>
							本規約の内容は、必要に応じて全部または一部を加筆・修正する場合があります。
						</div>
						<br />
						<div>
							<h6 className="fw-bold mb-1">第2条　（ユーザーへの通知）</h6>
							日本語の森が本規約の全部を改訂した場合、<br />
							日本語の森はすべてのユーザーに対して、メールまたは公式サイトおよび公式アプリ上で通知を送信します。
						</div><br /><br />
						日本語の森が本規約の一部を改訂した場合については、都度ユーザーへの通知を行いません。<br />
						サービスを利用する際には、常に最新の利用規約を必ず参照してください。
						<br />
						<div>
							<h6 className="fw-bold mb-1">第3条　（本規約の改訂後の利用について）</h6>
							本規約の変更後、<br />
							ユーザーが無料・有料のすべてのサービスを利用した場合、<br />
							ユーザーが改訂後の本規約の内容に同意したものとみなされます。
						</div>
						<br />
					</Col>
					<Col md={6} className="px-3 py-4" style={{ background: "#f4f8f5" }}>
						<div>
							<strong>Chapter 8. Changes to These Terms</strong>
						</div>
						<br />
						<p>
							<strong>Section 23 (Amendment of These Terms)</strong>
							<br />
							The content of these Terms may be modified or supplemented, in whole or in part, as necessary.
						</p>
						<p>
							<strong>Section 24 (Notification to Users)</strong>
							<br />
							If there was an overall revision of these Terms, Nihongo no Mori will notify all Users via email or through notifications on the Official Website or Official App.
							<br />
							If there was a revision only in a part of these Terms, it does not mean that Nihongo no Mori has to notify Users each time. Users must always check and refer to the latest version of the Terms when using the service.
						</p>
						<p>
							<strong>Section 25 (Use After Amendment of These Terms)</strong>
							<br />
							After changes to these Terms, if a User uses any of the free or paid services, they are deemed to have agreed to the content of the revised Terms.
						</p>
					</Col>
				</Row>

				{/* Section 9 */}
				<Row className="mb-5">
					<h5>9.準拠法・合意管轄</h5>
					<br />
					<br />
					<Col md={6} className="pe-4">
						本規約は、日本の法律に準拠し、日本の法律にしたがって解釈されるものとします。
						<br />
					</Col>
					<Col md={6} className="px-3 py-4" style={{ background: "#f4f8f5" }}>
						<div>
							<strong>Chapter 9. Governing Law</strong>
						</div>
						<br />
						<p>
							<strong>Section 26 (Governing Law of These Terms)</strong>
							<br />
							These Terms are based on the laws of Japan, and construed in accordance with the laws of Japan.
						</p>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Terms;
