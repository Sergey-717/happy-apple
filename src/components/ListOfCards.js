import CardOfProduct from "./CardOfProduct";
import "./style.css";
import loadingProd from "../../src/assets/loadingProd.GIF";
import RadioGroup from "./RadioGroup";
import Categories from "./Categories";

export default function ListOfCards({
  products,
  categories,
  isLoadingProducts,
  setHandleProducts,
  setProducts,
  category,
}) {
  return (
    <div>
      <div className="categories">
        <Categories
          categories={categories}
          setHandleProducts={setHandleProducts}
          category={category}
        />
      </div>
      {isLoadingProducts ? (
        <img src={loadingProd} className="loadingGif" alt="loading..." />
      ) : (
        <div className="products">
          {isLoadingProducts && (
            <RadioGroup
              setProducts={setProducts}
              setHandleProducts={setHandleProducts}
              products={products}
            />
          )}

          {products &&
            products.map((product, i) => (
              <CardOfProduct key={i} {...product}></CardOfProduct>
            ))}
        </div>
      )}
    </div>
  );
}
