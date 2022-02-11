import { data } from "../components/data";

const initialState = {
  product: data.dataProduct,
  searchText: "",
  filterText: "",
  productFilter: [],
  productSearch: [],
  productView: [],
};
const searchReducer = (state = initialState, action) => {
  if (action.type === "SEARCH") {
    if (action.payload.text === "") {
      return {
        ...state,
        productSearch: action.payload.data,
        productView: action.payload.data,
        searchText: action.payload.text,
      };
    } else {
      const searchProduct = action.payload.data.filter((item) =>
        item.productName
          .toLowerCase()
          .includes(action.payload.text.toLowerCase())
      );
      console.log(searchProduct);
      state.productSearch = searchProduct;
      return {
        ...state,
        productSearch: searchProduct,
        productView: searchProduct,
        searchText: action.payload.text,
      };
    }
  }
  if (action.type === "FILTER") {
    if (action.payload.text === "All" || action.payload.text === "") {
      return {
        ...state,
        productFilter: action.payload.data,
        productView: action.payload.data,
        filterText: action.payload.text,
      };
    } else {
      const filterProduct = action.payload.data.filter(
        (item) => item.productCatalog === action.payload.text
      );
      return {
        ...state,
        productFilter: filterProduct,
        productView: filterProduct,
        filterText: action.payload.text,
      };
    }
  }
  return initialState;
};

export default searchReducer;
