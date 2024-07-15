"use client";
import React from "react";
import CartList from "../component/CartList";
import { useCart } from "@/src/context/cartContext";


const Page = () => {
   const {CartItem}=useCart()

 return <CartList CartItem={CartItem}/>
};

export default Page;
