"use client";
import { useCart } from "@/src/context/cartContext";
import Link from "next/link";
import React from "react";
import { delivery_Charge, tax } from "./Constant";

const CartList = ({ CartItem }) => {
  const total =
    localStorage.getItem("CartItem") &&
    JSON.parse(localStorage.getItem("CartItem"));

  const totalPrice = total.reduce((acc, item) => {
    const itemTotalPrice = item.price * item.quantity;
    return acc + itemTotalPrice;
  }, 0);

  const { deleteItem, ClearAll } = useCart();

  if (!CartItem || CartItem.length === 0) {
    return (
      <div className="p-5">
        <h2 className="text-center fw-bold mt-5">No Cart Available</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5 p-3">
      <div className="grid fw-bold">
        <div>image</div>
        <div className="total">Total</div>
        <div>Quantity</div>
        <div>Single Price</div>
        <div>Action</div>
        {CartItem.map((item) => (
          <React.Fragment key={item.id}>
            <div>
              <img
                src={item.image}
                style={{ width: 60, height: 40 }}
                alt="product"
              />
            </div>
            <div className="total">{Math.round(item.price * item.quantity)}</div>
            <div>{item.quantity}</div>
            <div>{item.price}</div>
            <div>
              <i
                className="bi bi-trash p-2 text-danger"
                onClick={() => deleteItem(item.id)}
              ></i>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="d-flex justify-content-between mt-3 mb-3">
        <Link className="btn btn-sm btn-primary rounded-0" href="/Product">
          Continue Shopping
        </Link>
        <Link
          href="#"
          className="btn btn-sm btn-danger rounded-0"
          onClick={() => ClearAll()}
        >
          Clear Cart
        </Link>
      </div>

      <div className="d-flex text-dark justify-content-between">
        <p>Tax:</p>
        <p className="fw-bold">{Math.round((totalPrice * tax) / 100)}</p>
      </div>
      <div className="d-flex text-dark justify-content-between">
        <p>Shipping Fee:</p>
        <p className="fw-bold">{delivery_Charge}</p>
      </div>
      <div className="d-flex text-dark justify-content-between">
        <p>Total:</p>
        <p className="fw-bold">{totalPrice}</p>
      </div>
      <hr className="text-dark mt-0" />
      <div className="d-flex text-dark justify-content-between">
        <p className="fw-bold">Sub Total:</p>
        <p className="fw-bolder">
          {Math.round(totalPrice + delivery_Charge + (totalPrice * tax) / 100)}
        </p>
      </div>
    </div>
  );
};

export default CartList;
