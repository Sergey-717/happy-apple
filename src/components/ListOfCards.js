import CardOfProduct from "./CardOfProduct";
import "./style.css";
import RadioGroup from "./RadioGroup";
import Categories from "./Categories";
import { Card } from "antd";

export default function ListOfCards({
  products,
  categories,
  isLoadingProducts,
  setHandleProducts,
  setProducts,
  category,
  setFilterProducts,
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
        <div className="products">
          {[...Array(4)].map((el, i) => (
            <Card
              key={i}
              loading={isLoadingProducts}
              style={{ boxShadow: "1px 1px 2px rgb(116, 116, 116)" }}
            />
          ))}
        </div>
      ) : (
        <div className="products">
          {products.length && (
            <RadioGroup
              setProducts={setProducts}
              setHandleProducts={setHandleProducts}
              products={products}
              setFilterProducts={setFilterProducts}
              category={category}
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
