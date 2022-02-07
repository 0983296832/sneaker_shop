import React, { useState } from "react";
import New from "./New";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { useGlobleContext } from "../../hooks/useGlobal";

export default function Newlist() {
  const { product } = useGlobleContext();
  const newProduct = product.filter((item) => item.productCatalog === "new");
  const [newList] = useState(newProduct.slice(0, 5));

  return (
    <section className="new section" id="new">
      <h2 className="section-title">NEW COLLECTION</h2>
      <div className="new__container bd-grid">
        <div className="new__mens">
          <img src={newList[0].productImage} alt="" className="new__mens-img" />
          <h3 className="new__title">{newList[0].productName}</h3>
          <span className="new__price">From ${newList[0].productPrice}</span>
          <Link to={`/product/${newList[0].productId}`}>
            <Link className="button-light">
              View Collection
              <BiRightArrowAlt />
            </Link>
          </Link>
        </div>
        <div className="new__sneaker">
          {newList
            .filter((item, index) => index > 0)
            .map((newItem) => {
              return (
                <New
                  key={newItem.productId}
                  newId={newItem.productId}
                  newName={newItem.productName}
                  newPrice={newItem.productPrice}
                  newImage={newItem.productImage}
                  newCatalog={newItem.producCatalog}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
