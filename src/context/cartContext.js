"use client"
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducer/CartReducer";
import { productList } from "../data/DataList";

const CartContext = createContext();

const getLocalData = () => {
  if (typeof window !== 'undefined') {
    const localSData = localStorage.getItem("CartItem");
    return localSData ? JSON.parse(localSData) : [];
  } else {
    return [];
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
    localStorage.setItem("CartItem", JSON.stringify(state.CartItem));
  };

  const ClearAll = () => {
    dispatch({ type: "CLEAR-ALL" });
    localStorage.setItem("CartItem", JSON.stringify(state.CartItem));
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
    dispatch({ type: "SET-MAX-PRICE", payload: maxPrice });
  }, []);

  useEffect(() => {
    const color = productList.map((elm) => elm.color);
    const fColor = color.flat();
    const Allcolor = ["All", ...new Set(fColor)];
    dispatch({ type: "SET_COLOR", payload: Allcolor });
  }, []);

  const increment = (total) => {
    dispatch({ type: "INCREMENT", payload: total });
  };
  const decrement = (total) => {
    dispatch({ type: "DECREMENT", payload: total });
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
        innreament: increment,
        decreament: decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
