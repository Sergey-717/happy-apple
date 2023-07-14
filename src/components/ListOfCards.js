import CardOfProduct from "./CardOfProduct";
import { useEffect, useState } from "react";
import "./style.css";
import loadingProd from "../../src/assets/loadingProd.GIF";
import RadioGroup from "./RadioGroup";
import Categories from "./Categories";
import { Card, Col, Row } from "antd";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwjAQTw20JKJ6uvpTL1otJY6H_fEj_KeaV_1PcsZDpCxjVL8w7m6pSDH6gQoKtUCzE/exec";

export default function ListOfCards(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const categories = await res.json();
        setCategories(categories.sheets);
        // setProducts(categories.products);
      } catch (error) {
        setError(error.message);
      }
      setIsLoadingCategories(false);
    })();
  }, []);

  const setHandleProducts = async (category) => {
    setIsLoadingProducts(true);
    let response = await fetch(API_URL + `?category=${category}`);
    const data = await response.json();
    setProducts(data.products);
    setIsLoadingProducts(false);
    console.log(data);
  };

  if (error) {
    return <h1>ERROR: {error}</h1>;
  }
  return (
    <div>
      <div className="categories">
        {isLoadingCategories ? (
          <h2>LOADING...</h2>
        ) : (
          <Categories
            categories={categories}
            setHandleProducts={setHandleProducts}
          />
        )}
      </div>

      {isLoadingProducts ? (
        <img src={loadingProd} className="loadingGif" alt="loading..." />
      ) : (
        <div className="products">
          <RadioGroup />
          {products &&
            products.map((product, i) => (
              <CardOfProduct key={i} {...product}></CardOfProduct>

              // <Card size="small" title={product.model} bordered={false}>
              //   <span>{product.memory}gb </span>
              //   <span>{product.color}</span>
              //   <p>{product.description}</p>
              //   <p>{product.price}₽</p>
              // </Card>
            ))}
        </div>
      )}
      <div className="footer">footer</div>
    </div>
  );
}
