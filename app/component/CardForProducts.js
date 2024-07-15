"use client"
import { useCart } from "@/src/context/cartContext";
import Link from "next/link";

import React from "react";

const CardForProducts = () => {
  const { filterProduct } = useCart();
console.log(filterProduct)
  return (
    <>
      <div className="w-100 card-sec ">

<div className="row g-2 d-flex" >
{filterProduct.map((elm,i)=>{
  return <div className="col-md-4" key={i}>

<Link href={`/Productt/${elm.id}`}>
  <div className="card">
    <img src={elm.image} className="card-img-top w-100" style={{height:300}} alt="hgjg" />
    <div className="card-body">
     <div className=" d-flex justify-content-between ">
      <span className="fw-bold text-decoration-none">{elm.brand}</span>
     <span className="fw-bold text-decoration-none">{elm.price}</span>
     </div>
    </div>
  </div>
  </Link>

  </div>
})}
</div>

       
      </div>
    </>
  );
};

export default CardForProducts;
