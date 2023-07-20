import "./style.css";
import CustomModal from "./CustomModal";

export default function CardOfProduct(product) {
  const { model, memory, color, description, price, unused } = product;

  return (
    <div className="card">
      {unused && <div className="card__new-marker" />}
      <h3 className="card__name">{model}</h3>
      {/* <hr /> */}
      {memory && <span className="card__char">{memory}gb </span>}
      <span className="card__char">{color}</span>
      <p className="card__description">{description}</p>
      <div className="card__price">
        <CustomModal {...product} />
        {price}₽
      </div>
    </div>
  );
}
