import { useState } from "react";
import SubNav from "../assets/components/SubNav";
import { Container } from "react-bootstrap";

const faqs = [
	{
		question: "契約について教えてください。",
		answer: (
			<>
				※ JLPT N1/N2/N3
				<br />
				<br />
				【1年合格PASS / 6か月PASS / 1か月PASS】
				<br /><br />
				1年PASS：1年間、N1・N2・N3のすべての授業動画が見られます。
				<br />
				（日本語会話と日本文化のコースも見ることができます。）
				<br /><br />
				6か月PASS：6か月間、N1・N2・N3のすべての授業動画が見られます。
				<br />
				（日本語会話と日本文化のコースも見ることができます。）
				<br /><br />
				1か月PASS：1か月間、N1・N2・N3のすべての授業動画が見られます。
				<br />
				（日本語会話と日本文化のコースも見ることができます。）
				<br />
				<br />
				1年合格PASS / 6か月PASS / 1か月PASSのプランは自動更新されます。
				<br />
				次の更新をしたくない場合は、契約期限前にキャンセルしてください。
				<br /><br />
				※ JLPT N4
				<br /><br />
				【BASIC JAPANESE JLPT N4 / 基础日语 JLPT N4 / 기초 일본어 JLPT N4】
				<br /><br />
				BASIC JAPANESE JLPT N4：6か月間、BASIC JAPANESE JLPT N4 コースの動画が見られます。
				<br />
				基础日语 JLPT N4：6か月間、基础日语 JLPT N4 コースの動画が見られます。
				<br />
				기초 일본어 JLPT N4：6か月間、기초 일본어 JLPT N4 コースの動画が見られます。
				<br />
				<br />
				このプランは自動更新されません。
				<br /><br />
				※ JLPT N5
				<br /><br />
				【BASIC JAPANESE JLPT N5 / 基础日语 JLPT N5 / 기초 일본어 JLPT N5】
				<br /><br />
				BASIC JAPANESE JLPT N5：6か月間、BASIC JAPANESE JLPT N5 コースの動画が見られます。
				<br />
				基础日语 JLPT N5：6か月間、基础日语 JLPT N5 コースの動画が見られます。
				<br />
				기초 일본어 JLPT N5：6か月間、기초 일본어 JLPT N5 コースの動画が見られます。
				<br /><br />
				このプランは自動更新されません。
			</>
		),
	},
	{
		question: "支払い方法は何がありますか。",
		answer: (
			<>
				1か月PASS：クレジットカードのみ対応しています。
				<br />
				1年合格PASS / 6か月PASS / BASIC JAPANESE N4,N5：クレジットカード、銀行振込（日本またはインドネシアの銀行）、PayPalの3つの方法でお支払いできます。
			</>
		),
	},
	{
		question: "支払い方法を教えてください。",
		answer: (
			<>
				メニューから「プラン」を選び、<br />
				購入したいプランを選択して「しはらう」を押してください。<br />
				その後、表示されるお支払い方法を選んでください。<br /><br />

				⚠️ 各プランに記載されている対応可能なお支払い方法のみご利用いただけます。<br />
				あらかじめご確認ください。
			</>
		),
	},
	{
		question: "契約解除（キャンセル）は、すぐにできますか。",
		answer: (
			<>
				【1年合格PASS / 6か月PASS / 1か月PASS】
				<br /><br />
				こちらの3つのプランはいつでも解約できます。<br />
				購入後すぐに解約しても問題ありません。<br /><br />

				【BASIC JAPANESE / 基础日语 / 기초 일본어】
				<br /><br />
				サブスクリプションではありません。<br />
				6か月後に契約が自動で終了します。
			</>
		),
	},
	{
		question: "契約解除（キャンセル）したあとは、すぐに動画がみられなくなりますか。",
		answer: (
			<>
				解約後も契約期間内は動画が見られます。
				<br /><br />

				【1年合格PASS】<br />
				例： 契約日が2022年8月20日の場合、2022年8月21日に解約しても2023年8月19日まで動画を見られます。
				<br /><br />

				【6か月PASS】<br />
				例： 契約日が2025年3月20日の場合、2025年3月21日に解約しても2025年9月19日まで動画を見られます。
				<br /><br />

				【1か月PASS】<br />
				例:：契約日が4月20日の場合、4月21日に解約しても5月19日まで動画を見られます。
			</>
		),
	},
	{
		question: "支払いがうまくできません。",
		answer: (
			<>
				お支払いがうまくできない場合は、入力したカードの情報が間違っているか、クレジットカードが支払いを拒否してしまっている場合がほとんどです。カードが使えない場合は、別のカードをお試しいただくか、クレジットカードの銀行に直接お問い合わせください。
			</>
		),
	},
	{
		question: "「準備中」の商品はいつ完成しますか。",
		answer: (
			<>
				「準備中」と表示されているものは、現在急いで準備をしているものです。完成の日はまだ未定ですが、商品をみなさまに使っていただける日が決まったらウェブサイトや各SNSでお知らせいたします。もうしばらくお待ちください。
			</>
		),
	},
	{
		question: "日本語の森の本はどこで買えますか？",
		answer: (
			<>
				『JLPT この一冊で合格する / I LOVE KANJI』は、<br />
				日本の書店（紀伊国屋など）で 買うことができます。<br />
				また、Amazonでも 買うことができます。<br /><br />

				本のくわしい内容や買い方については、<br />
				メニューの 「本」 をえらんでください。
			</>
		),
	},
	{
		question: "お問い合わせ",
		answer: (
			<>
				わからないこと、困ったことがある場合、こちらにお問い合わせください😊<br /><br />

				日本語の森の Instagram・Facebook・LINE<br /><br />

				または nihongonomori@gmail.com までご連絡ください。
			</>
		),
	},
	{
		question: "契約解除（キャンセル）方法を教えてください。",
		answer: (
			<>
				①トップメニューの「プラン」をクリックする。<br />
				②自分が契約しているプランを選ぶ。<br />
				③「プランの管理」を選ぶ。<br />
				④「ほんとうにやめる」を選ぶ。<br />
				※アプリでの解約できません。webサイトかモバイルサイトで解約手続きを行なってください。
			</>
		),
	},
	{
		question: "アカウントを削除したい",
		answer: (
			<>
				アカウントを一度削除してしまうと、データを復元することができなくなります。<br /><br />

				削除されたい場合は、<span style={{ textDecoration: "none", color: "#039d5d" }}>こちらのページ</span>からお手続きください。<br /><br />

				もし退学手続きが上手く行えない場合は、その旨と下記4点を添えて日本語の森にメールを送ってください。<br /><br />

				・ご登録名<br />
				・登録頂いたメールアドレス<br />
				・生年月日<br />
				・写真付き身分証明書<br /><br />

				※アカウントを削除しても、プランは自動で解約されません。<br />
				アカウントを削除する前に、プランを解約してください。
			</>
		),
	},
];

function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<>
			<SubNav
				items={[
					{ label: "ホームページ", link: "/" },
					{ label: "よくあるご質問（FAQ）" },
				]}
			/>

			{/* Title */}
			<div style={{ background: "#ddf0de" }}>
				<Container
					style={{
						fontSize: "24px",
						fontWeight: "500",
						borderBottom: "1px solid #039d5d",
						padding: "40px 0 30px",
					}}
				>
					よくあるご質問（FAQ）
				</Container>
			</div>

			{/* FAQ */}
			<Container style={{ maxWidth: "750px", margin: "100px auto" }}>
				{faqs.map((faq, i) => (
					<div
						key={i}
						style={{
							boxShadow: "0 0 4px rgba(0, 0, 0, 0.25)",
							padding: "20px",
							borderRadius: "10px",
							marginBottom: "20px",
						}}
					>
						{/* Question */}
						<div
							onClick={() => toggle(i)}
							style={{
								cursor: "pointer",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								fontWeight: "500",
								background: "#fff",
							}}
						>
							<span className="fs-4">Q. {faq.question}</span>

							<span style={{ fontSize: "26px" }}>
								{openIndex === i ? <svg width="32" height="5" viewBox="0 0 32 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="32" width="5" height="32" rx="2.5" transform="rotate(90 32 0)" fill="#000"></rect></svg> : <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13" width="6" height="32" rx="3" fill="#000"></rect><rect x="32" y="14" width="5" height="32" rx="2.5" transform="rotate(90 32 14)" fill="#000"></rect></svg>}
							</span>
						</div>

						{/* Answer */}
						{openIndex === i && (
							<div
								style={{
									padding: "20px 10px",
									color: "#808285",
									fontWeight: "400",
									fontSize: "18px",
									lineHeight: "27px",
								}}
							>
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</Container>
		</>
	);
}

export default FAQ;