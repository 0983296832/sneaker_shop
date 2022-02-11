import React, { useState, useEffect } from "react";
import "./Filter.css";
import { useDispatch } from "react-redux";
import { searchByType, filter } from "../../redux/searchAction";
import { data } from "../data";

function Filter() {
  const productCatagory = data.dataProduct;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("All");
  const [active, setActive] = useState(0);

  let uniqueCategory = [
    "All",
    ...new Set(
      productCatagory.map((category) => {
        return category.productCatalog;
      })
    ),
  ];

  useEffect(() => {
    dispatch(filter(filterText));
  }, [filterText, dispatch]);

  return (
    <div className="filter">
      <div className="filter_search">
        <form>
          <input
            type="text"
            className="search_input"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            type="submit"
            className="button btn-search"
            onClick={(e) => {
              e.preventDefault();
              dispatch(searchByType(searchText));
              setSearchText("");
              // setFilterText("");
            }}
          >
            Search
          </button>
        </form>
      </div>
      <div className="filter_buttons">
        {uniqueCategory.map((item, index) => {
          return (
            <button
              type="submit"
              className={
                active === index ? `btn-outline filter-active` : `btn-outline`
              }
              key={index}
              onClick={() => {
                setFilterText(item);
                setActive(index);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
