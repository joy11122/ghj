"use client";
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount } = action.payload;
      let exitItem = state.CartItem.find((elm) => {
        if (elm) {
          return elm.id == id + color;
        }else{
          return []
        }
       
      });

      if (exitItem) {
        let upDatedCart = state.CartItem.map((elm) => {
          if (elm.id == id + color) {
            let newAmount = elm.quantity + amount;
            if (newAmount >= elm.total) {
              newAmount = elm.total;
            }
            return { ...elm, quantity: newAmount };
          } else {
            return elm;
          }
        });
        return { ...state, CartItem: upDatedCart };
      } else {
        let cartData;
        const cart = state.product?.find((item) => item.id === id);
        cartData = {
          id: cart.id + color,
          name: cart.name,
          price: cart.price,
          image: cart.image,
          color: color,
          quantity: amount,
          description: cart.description,
          category: cart.category,
          brand: cart.brand,
          total: cart.total,
        };
        return { ...state, CartItem: [...state.CartItem, cartData] };
      }

    case "GET_LOCAL_DATA":
      localStorage.setItem("CartItem", JSON.stringify(state.CartItem));

    case "SET_FILTER_PRODUCT":
      return { ...state, filterProduct: state.product };

    case "UPDATE_FILTER_VALUE":
      let { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case "SETMAINARRAY":
      return { ...state, product: action.payload };
    case "CLEAR_FILTER":
      return { ...state, filterProduct: state.product };

    case "INCREMENT":
      const totalProduct = action.payload;
      const i = state.amount <= totalProduct ? state.amount++ : totalProduct;
      return { ...state, amount: i };

    case "DECREMENT":
      const ii = state.amount > 1 ? state.amount-- : 1;
      return { ...state, amount: ii };

    case "FILTER_PRODUCTS":
      const { text, category, brands, colors, range, sort } = state.filters;
      const allData = state.filterProduct;

      if (text) {
        const tempData = state.product.filter((elm) => {
          return elm.name.toLowerCase().includes(text);
        });
        return { ...state, filterProduct: tempData };
      }

      if (category !== "All") {
        const tempData = state.product.filter((elm) => {
          return elm.category === category;
        });
        return { ...state, filterProduct: tempData };
      }
      if (brands !== "All") {
        const tempData = state.product.filter((elm) => {
          return elm.brand == brands;
        });
        return { ...state, filterProduct: tempData };
      }
      if (colors !== "All") {
        const tempData = state.product.filter((elm) => {
          return elm.color.includes(colors);
        });
        return { ...state, filterProduct: tempData };
      }
      if (range) {
        const tempData = state.product.filter((elm) => {
          return elm.price <= range;
        });
        return { ...state, filterProduct: tempData };
      }

      if (sort === "a-z") {
        const tempData = state.product.sort((a, b) => {
          return a.brand.localeCompare(b.brand);
        });
        return { ...state, filterProduct: tempData };
      }

      if (sort === "z-a") {
        const tempData = state.product.sort((a, b) => {
          return b.brand.localeCompare(a.brand);
        });
        return { ...state, filterProduct: tempData };
      }

      if (sort === "low-to-high") {
        const tempData = state.product.sort((a, b) => {
          return a.price - b.price;
        }, 0);
        return { ...state, filterProduct: tempData };
      }

      if (sort === "high-to-low") {
        const tempData = state.product.sort((a, b) => {
          return b.price - a.price;
        }, 0);
        return { ...state, filterProduct: tempData };
      }

    case "CLEAR-ALL":
      return { ...state, CartItem: [] };

    case "DELETEITEM":
      const updatedCart = state.CartItem.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, CartItem: updatedCart };

    case "CATEGORY_FIND":
      return { ...state, categories: action.payload };

    case "SET_BRAND":
      return { ...state, brand: action.payload };

    case "SET-MAX-PRICE":
      return {
        ...state,
        filters: { ...state.filters, maxprice: action.payload },
      };

    case "SET_COLOR":
      return { ...state, color: action.payload };

    default:
      return state;
  }
};
