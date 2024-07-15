"use client"
import { productList } from "@/src/data/data";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarouselTemplate = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 2024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="container mt-1">
   
<h2 className="text-center mb-5 mt-3 text-decoration-underline">
  Feature Product
</h2>
    <Carousel  ssr={true} swipeable={true} infinite={true} showDots={true} responsive={responsive}>
        {productList.map((item, i) => (
         <>
<div className="card ms-4">
  <img style={{width:"100%",height:"200px"}} className="card-img-top" src={item.image} alt={item.id} />
<div className="card-body">
  <h4 className="card-title">{item.name.substring(0,15)}</h4>
  <p>{item.description}</p>
  <p className="fw-bold">${item.price}</p>
<Link href={`/pDetail/${item.id}`} className="btn btn-primary w-100">Show Detail</Link>
</div>

</div>
         </>
         
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCarouselTemplate;