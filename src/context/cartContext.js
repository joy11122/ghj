"use client"
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducer/CartReducer";
import { productList } from "../data/data";

const CartContext = createContext();

const getLocalData = () => {
  let localSData =localStorage.getItem("CartItem");
  if (!localSData) {
    return [];
  } else {
    return JSON.parse(localSData);
  }
};

const initialState = {
  state: [],
  amount: 1,
  product: productList,
  filterProduct: [],
  CartItem: getLocalData(),
  filters: {
    text: "",
    category: "All",
    brands: "All",
    colors: "All",
    maxprice: 0,
    minprice: 0,
    price: 0,
    range: 0,
    sort: "a-z",
  },
  categories: [],
  brand: [],
  color: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };
  const updateFilterProduct = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  const handleAddToCart = (id, color, amount, product) => {
    console.log("clicked");
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETEITEM", payload: id });
    localStorage.setItem("Cartarry", JSON.stringify(state.CartItem));
  };

  const ClearAll = () => {
    dispatch({ type: "CLEAR-ALL" });
    localStorage.setItem("Cartarry", JSON.stringify(state.CartItem));
  };

  useEffect(() => {
    dispatch({ type: "GET_LOCAL_DATA" });
    dispatch({ type: "SET_FILTER_PRODUCT" });
  }, [state.CartItem]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);

  useEffect(() => {
    dispatch({ type: "SETMAINARRAY", payload: productList });
  }, []);

  useEffect(() => {
    const categories = productList.map((elm) => elm.category);
    const allcat = ["All", ...new Set(categories)];
    dispatch({ type: "CATEGORY_FIND", payload: allcat });
  }, []);

  useEffect(() => {
    const brand = productList.map((brand) => brand.brand);
    const allBrand = ["All", ...new Set(brand)];
    dispatch({ type: "SET_BRAND", payload: allBrand });
  }, []);

  useEffect(() => {
    const max = productList.map((elm) => elm.price);
    const maxPrice = Math.max(...max);
    dispatch({ type: "SET_MAXPRICE", payload: maxPrice });
  }, []);

  useEffect(() => {
    const color = productList.map((elm) => elm.color);
    const fcolor = color.flat();
    const Allcolor = ["All", ...new Set(fcolor)];
    dispatch({ type: "SET_COLOR", payload: Allcolor });
  }, []);

  const innreament = (total) => {
    dispatch({ type: "INCREAMENT", payload: total });
  };
  const decreament = (total) => {
    dispatch({ type: "DECREAMENT", payload: total });
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        handleAddToCart,
        deleteItem,
        ClearAll,
        updateFilterProduct,
        clearFilter,
        innreament,
        decreament,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
