"use client";
import Quantity from "@/app/component/Quantity";
import { useCart } from "@/src/context/cartContext";
import { productList } from "@/src/data/DataList";
import Link from "next/link";

import React, { useState } from "react";

const Page = ({ params }) => {
  const product = productList.find((elm) => elm.id === params.id);
  const [color, setColor] = useState(product.color[0]);
  const { handleAddToCart, amount } = useCart();
  if (!product) {
    return <div>Product not found</div>;
  }

  

  const handleAddToCartClick = () => {
    handleAddToCart(product.id, color, amount);
  };

  return (
    <>
      <div className="container mt-5 p-5 color-section">
        <div className="row g-3">
          <Link href="/" className="fw-bold">
            Home
          </Link>
          <div className="col-md-4">
            <img className="w-100 h-auto" src={`../${product.image}`} alt={product.name} />
          </div>
          <div className="col-md-8">
            <div className="content ms-2 pt-2 pb-2">
              <h3 className="mb-3">{product.name}</h3>
              <div className="d-flex mt-2">
                <h3>{product.price}</h3>
                <del className="ms-2 mt-2">{product.price + 100}</del>
              </div>
              <p>{product.description}</p>
              <h6>
                <span className="text-primary me-2">Prime</span>FREE Delivery by Monday October{" "}
                <span className="fw-bold">24</span>
              </h6>
              <p>
                Only <span className="text-danger fw-bold">{product.total}</span> Left On Stock
              </p>
              {product.color.map((colorOption, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: colorOption }}
                  onClick={() => setColor(colorOption)}
                >
                  {colorOption === color ? "+" : null}
                </button>
              ))}
              <Quantity total={product.total} />
              <Link href="/Cart" className="btn btn-info rounded-0" onClick={handleAddToCartClick}>
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
