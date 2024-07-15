"use client";
import React from "react";
import { useCart } from "@/src/context/cartContext"; // Assuming this is your correct import path


const SideBar = () => {
  const {
    categories,
    brand,
    color,
    clearFilter,
    updateFilterProduct,
    filters: { text,category,colors,brands, maxprice,
    minprice,price,range},
  } = useCart();

  return (
    <div className="mt-3">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="SEARCH"
          onChange={(event) => updateFilterProduct(event)}
        />
</form>
        <div className="category-sec">
          <h5>Category</h5>
          {categories.map((cat, i) => (
            <button type="btn"  key={i} name="category" value={cat} onClick={(event) => updateFilterProduct(event)}>
              {cat}
            </button>
          ))}
        </div>

        <div>
          <h5>Company</h5>
        </div>
        <div className="company-sec">
          <select className="w-100" name="brands" onClick={(event) => updateFilterProduct(event)}>
            {brand.map((brandName, i) => (
              <option className="text-dark"  key={i} value={brandName} name="brands">
                {brandName}
              </option>
            ))}
          </select>
        </div>

        <div className="color-sec">
          <h3>Color</h3>
          <div className="d-flex justify-content-between align-items-center">
            {color.map((color, i) =>{
             if (color==="All") { return <label key={i}>
                <input type="radio" name="colors" value={color} onClick={(event) => updateFilterProduct(event)} />
                <span className="rounded-0 border-0 outline-none">
                All
                </span>
              </label>
              }else return <label key={i}>
                <input type="radio" name="colors" value={color} onClick={(event) => updateFilterProduct(event)} />
                <span
                  style={{ backgroundColor: color }}
                 
                >
                
                </span>
              </label>
            })}
          </div>
        </div>

        <div className="price-sec">
          <h3>Price</h3>
          <span>{range}</span>
          <input
            type="range"
            name="range"
           
            step={10}
            max={maxprice}
            min={minprice}
            value={range}
            onChange={(event) => updateFilterProduct(event)}
          />
        </div>

        <div className="clear-sec">
          <button className="btn btn-danger rounded-0 w-100"  onClick={() => clearFilter()}>CLEAR FILTER</button>
        </div>
      
    </div>
  );
};

export default SideBar;