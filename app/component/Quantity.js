"use client";
import { useCart } from "@/src/context/cartContext";
import React from "react";

const Quantity = ({ total }) => {
  const { increment, decrement, amount } = useCart();

  return (
    <>
      <div className="d-flex mb-2">
        <span className="w-25">Quantity:</span>
        <div className="d-flex">
          <i className="bi bi-plus" onClick={() => increment(total)}></i>
          <span className="ps-2 pe-2 fw-bold " name="amount" value={amount}>
            {amount}
          </span>
          <i
            className="bi bi-plus-slash-minus"
            onClick={() => decrement(total)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Quantity;
