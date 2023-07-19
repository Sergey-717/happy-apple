import React, { useState } from "react";
import { Radio } from "antd";

const Categories = ({ categories, setHandleProducts, category }) => {
  const options = categories.map((x) => ({ label: x, value: x }));
  const [radioCategories, setCategories] = useState(category);
  const onChangeCategory = ({ target: { value } }) => {
    setHandleProducts(value);
    setCategories(value);
  };

  return (
    <Radio.Group
      size="large"
      options={options}
      onChange={onChangeCategory}
      value={radioCategories}
      optionType="button"
      buttonStyle="solid"
    />
  );
};

export default Categories;
