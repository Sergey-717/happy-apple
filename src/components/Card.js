import "./style.css";

export default function Card(product) {
  return (
    <div className={`${product.new ? "card new" : "card"}`}>
      <h3>{product.model}</h3>
      <span>{product.memory}gb </span>
      <span>{product.color}</span>
      <p>{product.description}</p>
      <p>{product.price}₽</p>
    </div>
  );
}
