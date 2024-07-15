"use client";
import { useCart } from "@/src/context/cartContext";
import React from "react";

const TopPart = () => {
  const { filterProduct, updateFilterProduct } = useCart();

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between ">
        <div>
          <i>✳️</i>
          <i>🛄</i>
        </div>
        <div> Total <span className="fw-bold">{filterProduct.length}</span> product</div>
        <div>
          <select
            className="bg-black text-light"
            name="sort"
            onClick={(event) => updateFilterProduct(event)}
          >
            <option name="sort" value="a-z">
              A-Z
            </option>
            <option name="sort" value="z-a">
              Z-A
            </option>
            <option name="sort" value="high-to-low">
            high-to-low
            </option>
            <option name="sort" value="low-to-high">
            low-to-high
            </option>
          </select>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TopPart;
