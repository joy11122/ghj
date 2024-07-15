"use client";
import { useCart } from "@/src/context/cartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar2 = () => {
  const { CartItem } = useCart();
 
  return (
    <>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-primary fixed-top"
    >
      <a class="navbar-brand fw-bold " href="/" >Daraz.com</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <Link class="nav-link active text-black"  href="/" aria-current="page"
              >Home </Link
            >
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-black"  href="/Product" aria-current="page"
              >Buy Product </Link
            >
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-black" href="/Productt" aria-current="page"
              >Filter-Product </Link
            >
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-black"  href="#" aria-current="page"
              >About </Link
            >
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-black"  href="/Contact" aria-current="page"
              >Contact </Link
            >
          </li>
          <li class="nav-item">
            <Link class="nav-link active text-black" href="#" aria-current="page"
              >Blog </Link
            >
          </li>
          
        </ul>
        <form class="d-flex my-2 my-lg-0">
          <input
            class="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    
    
    </>
  );
};

export default Navbar2;
