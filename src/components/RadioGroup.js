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

const RadioGroup = ({ products, setProducts, setHandleProducts }) => {
  const [value1, setValue1] = useState("all");
  const [value2, setValue2] = useState();
  const [localProducts, setLocalProducts] = useState(products);

  const onChange1 = ({ target: { value } }) => {
    setLocalProducts([...products.filter((x) => x.unused === value)]);
    console.log(products);
    setValue1(value);
  };
  const onChange2 = ({ target: { value } }) => {
    console.log("radio2 checked", value);
    setValue2(value);
  };
  return (
    <>
      <Radio.Group
        options={options}
        onChange={onChange1}
        value={value1}
        optionType="button"
        buttonStyle="solid"
      />
      <Radio.Group
        options={price}
        onChange={onChange2}
        value={value2}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default RadioGroup;
