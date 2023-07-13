import Card from "./Card";
import { useEffect, useState } from "react";
import "./style.css";
import loadingProd from "../../src/assets/loadingProd.GIF";
import loadingCat from "../../src/assets/loadingCat.gif";

const API_URL =
  "https://script.google.com/macros/s/AKfycbzbr8nbF1nJQyA8OdFoQeV2JktX_lUKLpNjQwMMdVXjXStE72zwWbAXRIlqF2vJMufS/exec";

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
          categories.map((category, i) => (
            <button
              className="categories__button"
              onClick={() => setHandleProducts(category)}
              key={i}
            >
              {category}
            </button>
          ))
        )}
      </div>

      <hr />
      {isLoadingProducts ? (
        <img src={loadingProd} className="loadingGif" alt="loading..." />
      ) : (
        <div className="products">
          {products &&
            products.map((product, i) => <Card key={i} {...product}></Card>)}
        </div>
      )}
    </div>
  );
}
