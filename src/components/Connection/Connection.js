import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Connection({ connectionName, connectionImage }) {
  return (
    <div className="collection__card">
      <div className="collection__data">
        <h3 className="collection__name">{connectionName}</h3>
        <p className="collection__description">New collection 2021</p>
        <Link to="/product" className="button-light">
          Buy now <BiRightArrowAlt />
        </Link>
      </div>
      <img src={connectionImage} alt="" className="collection__img" />
    </div>
  );
}
