function BuyButton({ text, onClick }) {
  return (
    <button onClick={onClick} className="btn-buy-paper-book">
      {text}
    </button>
  );
}

export default BuyButton;
