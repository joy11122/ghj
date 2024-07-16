"use client";
import React, { useState } from "react";

import { productList } from "@/src/data/DataList";
import Card from "./Card";


const Category = () => {
  const [categories, setCategories] = useState("All");

  const filterData = () => {
    if (categories==="All") {

      return productList;
    }else{
      
      return productList.filter(elm =>
        elm.category === categories
        );
    }
    
  };

 const c=productList.map((elm)=>{
return elm.category;
 })
 const cate=["All",...new Set(c)];

  return (
    <>
      <div className="container bg-black text-light   cat">
        <div className="">
          <ul className="d-flex flex-wrap u justify-content-center align-items-center">
           {cate.map((cate,i)=>{
             return <li key={i}>
             <a id={cate} value={cate} onClick={(e) => setCategories(e.target.id)}>
               {cate.toUpperCase()}
             </a>
            
           </li>
           })
          }
          
           
          </ul>
        </div>
      </div>
<hr />
      <div className="container ">
      <div className="row g-3">
      {filterData().map(elm => (<Card color={elm.color} name={elm.name} key={elm.id}
      brand={elm.brand} description={elm.description} price={elm.price} preprice={elm.preprice}
      id={elm.id}
      image={elm.image}
      />))}
      </div>
      </div>
    </>
  );
};

export default Category;
