import React, { useState } from "react";
import { Button, Modal } from "antd";

const CustomModal = (product) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        size="small"
        onClick={showModal}
        style={{ borderRadius: "8px" }}
      >
        Купить
      </Button>
      <Modal
        title={`Вы выбрали ${product.model} за ${product.price}₽`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Продолжить"
        cancelText="Отмена"
        centered
      >
        <hr />
        <br />
        <span>{product.memory} </span>
        <span>{product.color}</span>
        <p>{product.description}</p>
        <br />
        <hr />
        <span style={{ fontSize: "12px" }}>
          Для приобретения данного товара вы будете перенаправлены в личную
          переписку с продавцом. Проверьте правильность выбора и нажмите
          "продолжить"
        </span>
      </Modal>
    </>
  );
};

export default CustomModal;
