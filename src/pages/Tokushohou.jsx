import SubNav from "../assets/components/SubNav";
import { Container, Table } from "react-bootstrap";

const thStyle = {
	width: "35%",
	verticalAlign: "top",
	whiteSpace: "normal",
	padding: "1rem",
};

const tdStyle = {
	width: "65%",
	verticalAlign: "top",
	padding: "1rem",
};

const rows = [
	["販売事業者名", "日本語の森株式会社"],
	["代表者", "朴 晋 佑"],
	["所在地", "〒160-0023 東京都新宿区西新宿3-7-21 陽輪台西新宿1102号"],
	[
		<>
			カスタマーサポート情報
			<br />
			サポートメールアドレス
			<br />
			サポート対応時間
		</>,
		<>
			<br />
			nihongonomori@gmail.com
			<br />
			10:00 - 18:00（日本時間）
		</>,
	],
	[
		"商品の販売価格",
		"https://nihongonomori.com/内に商品プランとして掲載、 イベント商材については弊社 Facebookにて案内",
	],
	["支払方法", "各種クレジットカード、銀行振込、paypal"],
	[
		"商品の引き渡し時期、期間",
		"クレジット支払いは、購入後からサービスが開始されます、銀行振込、paypalは入金の確認の後、サービスが開始されます。使用期間はhttps://nihongonomori.com/のお客様ページより確認できます。イベントの期間等については、お問合せから確認ください。",
	],
	[
		"商品以外の費用（手数料、送料）",
		<>
			年額サービスに登録を行ったあとに、利用登録の解除をする場合に手数料がかかります。弊社ホームページの「利用規約」第7条に記載してあります
			<br />
			当社ホームページから購入する商品には、送料がかかる商品はありません
		</>,
	],
	[
		"返品キャンセルについての特約事項",
		"弊社側でのサービスの不具合、トラブル、サービスの終了イベントの中止 以外につきましては返品、キャンセルはお受けできません",
	],
];

function Tokushohou() {
	return (
		<>
			<SubNav
				items={[
					{ label: "ホームページ", link: "/" },
					{ label: "特定商取引法に基づく表記" },
				]}
			/>

			<div
				className="text-center"
				style={{ background: "#ddf0de", padding: "1rem 0", fontSize: "1.5rem" }}
			>
				特定商取引法に基づく表記
			</div>

			<Container>
				<Table
					striped
					responsive
					style={{
						maxWidth: "900px",
						margin: "4rem auto 10rem",
						tableLayout: "fixed",
					}}
				>
					<tbody>
						{rows.map(([label, value], i) => (
							<tr key={i}>
								<th style={thStyle}>{label}</th>
								<td style={tdStyle}>{value}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</>
	);
}

export default Tokushohou;