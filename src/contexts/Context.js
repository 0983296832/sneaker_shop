import React, { useState, useReducer, useEffect } from "react";
import { data } from "../components/data";
import CartReducer from "../reducers/CartReducer";
import AuthReducer from "../reducers/AuthReducer";
import { auth } from "../config/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const AppContext = React.createContext();

const LOCAL_STORAGE_CART_KEY = "CART";
const LOCAL_STORAGE_USER_KEY = "USER";

const CartState = {
  loading: false,
  total: 0,
  amount: 0,
  cartItem: [],
  productDefault: data.dataProduct,
};

const UserState = {
  displayName: "",
  email: "",
  photoURL: "",
};

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [state, dispatch] = useReducer(CartReducer, CartState, () => {
    const localStorageItem = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
    return localStorageItem ? JSON.parse(localStorageItem) : CartState;
  });
  const [stateUser, dispatchFc] = useReducer(AuthReducer, UserState, () => {
    const localStorageItem = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    return localStorageItem ? JSON.parse(localStorageItem) : UserState;
  });
  const [product] = useState(data.dataProduct);

  const addToCart = (prod) => {
    dispatch({ type: "ADD_TO_CART", payload: prod });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
    toast.success("🦄 You have paid!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(state));
  }, [state.cartItem]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log(localStorage);
    const localStorageItem = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
    if (localStorageItem) {
      const cartItem = JSON.parse(localStorageItem);
      dispatch({ type: "GET_CART", payload: cartItem });
    }
  }, []);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatchFc({ type: "LOG_IN", payload: result.user });
        const storageUser = {
          displayName: result.user?.displayName,
          email: result.user?.email,
          photoURL: result.user?.photoURL,
        };
        localStorage.setItem(
          LOCAL_STORAGE_USER_KEY,
          JSON.stringify(storageUser)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        toast.success("🦄 Logout successfully!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        dispatchFc({ type: "LOG_OUT" });
        const storageUser = {
          displayName: "",
          email: "",
          photoURL: "",
        };
        localStorage.setItem(
          LOCAL_STORAGE_USER_KEY,
          JSON.stringify(storageUser)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
        ...state,
        addToCart,
        product,
        removeItem,
        increase,
        decrease,
        clearCart,
        ...stateUser,
        signInWithGoogle,
        signOutWithGoogle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
