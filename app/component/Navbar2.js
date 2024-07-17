"use client";
import { useCart } from "@/src/context/cartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar2 = () => {
  const { CartItem } = useCart();

  return (
    <>
      <nav className="navbar ps-5 pe-5 bg-primary navbar-expand-sm navbar-dark fixed-top">
        <a className="navbar-brand fw-bold" href="/">Daraz.com</a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link text-black" href="/" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" href="/About" passHref>
                <a>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" href="/Contact" passHref>
                <a>Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" href="/Product" passHref>
                <a>Buy-Product</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" href="/Productt" passHref>
                <a>Filter-product</a>
              </Link>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
