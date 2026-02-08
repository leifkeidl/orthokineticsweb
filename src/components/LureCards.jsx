import "./LureCards.css";
function LureCards({ lures }) {
  return (
    <div className="lure-grid">
      {lures.map((lure, index) => (
        <div className="lure-card" key={index}>
          <img src={lure.image} alt={lure.name} className="lure-image" />

          <h3 className="lure-name">{lure.name}</h3>
          <p className="lure-description">{lure.description}</p>
          <div className="lure-price">{lure.price}</div>
        </div>
      ))}
    </div>
  );
}
export default LureCards;
