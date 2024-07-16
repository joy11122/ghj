import { useCart } from "@/src/context/cartContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { delivery_Charge, tax } from "./Constant";

const CartList = ({ CartItem }) => {
  const { deleteItem, ClearAll } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (typeof window !== 'undefined' && localStorage.getItem("CartItem")) {
        const totalItems = JSON.parse(localStorage.getItem("CartItem"));
        const totalPrice = totalItems.reduce((acc, item) => {
          return acc + (item.price * item.quantity);
        }, 0);
        setTotalPrice(totalPrice);
      }
    };
    calculateTotalPrice();
  }, []);

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
        <div>Image</div>
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
        <Link href="/Product" className="btn btn-sm btn-primary rounded-0">
          Continue Shopping
        </Link>
        <button
          className="btn btn-sm btn-danger rounded-0"
          onClick={() => ClearAll()}
        >
          Clear Cart
        </button>
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
