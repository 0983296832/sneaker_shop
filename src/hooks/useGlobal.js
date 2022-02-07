import { useContext } from "react";
import { AppContext } from "../contexts/Context";
export const useGlobleContext = () => {
  return useContext(AppContext);
};
