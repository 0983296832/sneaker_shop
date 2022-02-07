// const initialState = {
//     loading : false,
//     total : 0,
//     amount : 0,
//     cartItem : [],
//     productDefault: data.dataProduct
// }
// const [ state, dispatch ] = useReducer( reducer , initialState)

const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const defaultPrice = state.productDefault.find(
      (item) => item.productId === action.payload.productId
    ).productPrice;
    const exist = state.cartItem.find(
      (item) => item.productId === action.payload.productId
    );
    if (exist) {
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item.productId === action.payload.productId
            ? {
                ...exist,
                productQuantity: exist.productQuantity + 1,
                productPrice: exist.productPrice + defaultPrice,
              }
            : item
        ),
      };
    } else {
      return {
        ...state,
        cartItem: [
          ...state.cartItem,
          { ...action.payload, productQuantity: 1 },
        ],
        amount: state.amount + 1,
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cartItem: state.cartItem.filter(
        (item) => item.productId !== action.payload
      ),
      amount: state.amount - 1,
    };
  }

  if (action.type === "INCREASE") {
    const defaultPrice = state.productDefault.find(
      (item) => item.productId === action.payload
    ).productPrice;
    let tempCart = state.cartItem.map((Item) => {
      if (Item.productId === action.payload) {
        return {
          ...Item,
          productQuantity: Item.productQuantity + 1,
          productPrice: Item.productPrice + defaultPrice,
        };
      }
      return Item;
    });
    return { ...state, cartItem: tempCart };
  }

  if (action.type === "DECREASE") {
    const defaultPrice = state.productDefault.find(
      (item) => item.productId === action.payload
    ).productPrice;

    let tempCart = state.cartItem
      .map((Item) => {
        if (Item.productId === action.payload) {
          return {
            ...Item,
            productQuantity: Item.productQuantity - 1,
            productPrice: Item.productPrice - defaultPrice,
          };
        }
        return Item;
      })
      .filter((Item) => Item.productQuantity !== 0);
    return { ...state, cartItem: tempCart, amount: tempCart.length };
  }

  if (action.type === "GET_TOTALS") {
    const totalCart = state.cartItem?.reduce((total, product) => {
      total += product.productPrice;
      return total;
    }, 0);
    return { ...state, total: totalCart };
  }

  if (action.type === "CLEAR") {
    window.alert("You have paid ");
    return { ...state, cartItem: [], amount: 0 };
  }

  // if (action.type === "GET_CART") {
  //   return { ...state, cartItem: action.payload };
  // }
  return state;
};

export default reducer;
