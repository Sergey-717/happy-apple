import { useEffect, useState } from "react";
import "./style.css";
import Main from "./Main";
import ListOfCards from "./ListOfCards";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwzica1594oOB83gFrtT4BOjCmXn_ez8yNF8ethPpOdjgjt5GKGOezSiHu4DvWg0chw/exec";
// "https://script.google.com/macros/s/AKfycbwjAQTw20JKJ6uvpTL1otJY6H_fEj_KeaV_1PcsZDpCxjVL8w7m6pSDH6gQoKtUCzE/exec";

export default function Content(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
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
    setCategory(data.params.category.toString());
    setIsLoadingProducts(false);
    console.log(data);
  };

  const setFilterProducts = async (unused) => {
    setIsLoadingProducts(true);
    let response = await fetch(
      API_URL + `?category=${category}&unused=${unused}`
    );
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
      {!products.length ? (
        <Main
          categories={categories}
          isLoadingCategories={isLoadingCategories}
          setHandleProducts={setHandleProducts}
          isLoadingProducts={isLoadingProducts}
          category={category}
        />
      ) : (
        <ListOfCards
          categories={categories}
          products={products}
          isLoadingProducts={isLoadingProducts}
          setHandleProducts={setHandleProducts}
          setProducts={setProducts}
          category={category}
          setFilterProducts={setFilterProducts}
        />
      )}
    </div>
  );
}
