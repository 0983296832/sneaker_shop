import { data } from "../components/data";

const initialState = {
  product: data.dataProduct,
  search: "",
  filter: "",
  productfilter: [],
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      if (action.payload.text === "") {
        return action.payload.data;
      }
      const searchProduct = action.payload.data.filter((item) =>
        item.productName
          .toLowerCase()
          .includes(action.payload.text.toLowerCase())
      );
      state.productfilter = searchProduct;
      return state.productfilter;
    case "FILTER":
      if (action.payload.text === "All") {
        return action.payload.data;
      } else {
        const filterProduct = action.payload.data.filter(
          (item) => item.productCatalog === action.payload.text
        );
        return filterProduct;
      }
    default:
      return state.product;
  }
};

export default searchReducer;
