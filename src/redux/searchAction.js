import { data } from "../components/data";
export const searchByType = (text) => {
  return {
    type: "SEARCH",
    payload: { text, data: data.dataProduct },
  };
};

export const filter = (text) => {
  return {
    type: "FILTER",
    payload: { text, data: data.dataProduct },
  };
};
