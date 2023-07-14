import React, { useState } from "react";
import { Radio } from "antd";

const Categories = ({ categories, setHandleProducts }) => {
  const options = categories.map((x) => ({ label: x, value: x }));
  const [radioCategories, setCategories] = useState();

  const onChangeCategory = ({ target: { value } }) => {
    setHandleProducts(value);
    setCategories(value);
  };

  return (
    <>
      <Radio.Group
        size="large"
        options={options}
        onChange={onChangeCategory}
        value={radioCategories}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default Categories;
