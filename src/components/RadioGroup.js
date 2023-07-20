import React, { useState } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Radio } from "antd";

const options = [
  {
    label: "New",
    value: true,
  },
  {
    label: "Used",
    value: false,
  },
  {
    label: "All",
    value: "all",
  },
];
const price = [
  {
    label: <CaretUpOutlined />,
    value: "asc",
  },
  {
    label: <CaretDownOutlined />,
    value: "desc",
  },
];

const RadioGroup = ({
  products,
  setProducts,
  setHandleProducts,
  setFilterProducts,
  category,
}) => {
  const [valueNew, setValueNew] = useState();
  const [valueAsc, setValueAsc] = useState();

  const filterByNew = ({ target: { value } }) => {
    if (value === "all") return setHandleProducts(category);
    setValueNew(value);
    setFilterProducts(value);
  };
  const sortByPrice = ({ target: { value } }) => {
    setProducts([
      ...products.sort((a, b) =>
        value === "asc" ? a.price - b.price : b.price - a.price
      ),
    ]);
    setValueAsc(value);
  };

  return (
    <>
      <Radio.Group
        options={options}
        onChange={filterByNew}
        value={valueNew}
        optionType="button"
        buttonStyle="solid"
      />
      <Radio.Group
        options={price}
        onChange={sortByPrice}
        value={valueAsc}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default RadioGroup;
