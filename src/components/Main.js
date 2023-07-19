import "./style.css";
import { useState } from "react";

import loadingProd from "../../src/assets/loadingProd.GIF";
import { Button } from "antd";

export default function Main({
  categories,
  isLoadingCategories,
  setHandleProducts,
}) {
  const [categoryLoading, setCategoryLoading] = useState("");
  const handleClick = (elem) => {
    setCategoryLoading(elem);
    setHandleProducts(elem);
  };

  return (
    <div>
      <div className="main__categories">
        {isLoadingCategories ? (
          <img src={loadingProd} className="loadingGif" alt="loading..." />
        ) : (
          categories.map((category) => (
            <Button
              key={category}
              type="link"
              size={"large"}
              onClick={() => handleClick(category)}
              loading={category === categoryLoading}
            >
              {category}
            </Button>
          ))
        )}
      </div>
    </div>
  );
}
