"use client"
import React, {useState } from "react";
import Link from "next/link";
import { useCart } from "@/src/context/cartContext";

const Card = (props) => {
  const { handleAddToCart } = useCart(); 


  return (
    <div className="col-md-4 col-sm-6 col-lg-3">
      <div className="card">
        <img className="card-img-top" width={100} height={200} src={props.image} alt="Title" />
        
        <div className="card-body">
       
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.description}</p>
       
        <div className="d-flex justify-content-between ">
          <span className="fw-bold">{props.price}</span>
          <del className="fw-bolder">{props.price+100}</del>
        </div>
        <div className="btn-group mt-2">
          <Link href={`/PrDetail/${props.id}`}>
            <button className="btn btn-info rounded-end-0">Detail</button>
          </Link>
          <Link href="/Product" className="btn btn-primary">
            Show More
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
