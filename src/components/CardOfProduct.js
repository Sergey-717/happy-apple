import "./style.css";

export default function CardOfProduct(product) {
  const { model, memory, color, description, price, unused } = product;

  return (
    <div className="card">
      <span className="card__new-border">{unused && "NEW!"}</span>
      <h3 className="card__name">{model}</h3>
      <hr />
      <span className="card__description">{memory}gb </span>
      <span className="card__description">{color}</span>
      <p className="card__description">{description}</p>
      <p className="card__price">{price}₽</p>
    </div>
  );
}
