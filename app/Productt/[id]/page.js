"use client"
import Quantity from "@/app/component/Quantity";
import { useCart } from "@/src/context/cartContext";
import Link from "next/link";
import React, { useState } from "react";


const page = ({ params }) => {
  console.log(params)
const { product,handleAddToCart,amount} = useCart();
const s=product.find((elm)=>{
    return elm.id===params.id;
})
 const [color,setColor]=useState(s.color[0])
  return (
    <>
    <div className="container mt-3 color-section">
      <div className="row g-3">
        <div className="col-md-4 col-lg-4 col-sm-4">
          <img className="w-100 " style={{height:350}} src={`../${s.image}`} alt="j" />
        </div>
        <div className="col-md-8 col-sm-8 col-lg-8">
          <div className="content ms-2 pt-2 pb-2">
            <h3 className="mb-3">{s.name}</h3>
            <div className="d-flex mt-2">
              <h2>joy</h2>
              <h3>{s.price}</h3>
              <del className="ms-2 mt-2">{s.price+100}</del>
            </div>
            <p>{s.description}</p>
            <h6>
           
              <span className="text-primary  me-2">Prime</span>FREE Delivery by
              Monday October <span className="fw-bold">24</span>
            </h6>
            <p >Only <span className="text-danger fw-bold">{s.total}</span> Left On Stock</p>
           
           {s.color.map((elm,i)=>{
            return  <button style={{backgroundColor:elm}} key={i} onClick={()=>setColor(elm)}>{elm===color?"+":null}</button>
           })}
            <Quantity total={s.total}/>
            <Link href="/Cart" className="btn btn-info rounded-0" onClick={()=>handleAddToCart(s.id,color,amount,product)}>
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
    </div></>
  );
};
export default page;
