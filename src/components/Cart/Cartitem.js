import React from "react";
import { BsTrash } from "react-icons/bs";
import { useGlobleContext } from "../../hooks/useGlobal";
import {Link} from 'react-router-dom';

export default function Cartitem({
  productId,
  productName,
  productImage,
  productPrice,
  productQuantity,
}) {
  const { removeItem, increase, decrease } = useGlobleContext();
  return (
    <>
      <article className="ccard">
        <div className="ccard__img">
          <img src={productImage} alt="" />
        </div>
        <div className="ccard__name">
          <p>AIR ZOOM PEGASUS</p>
        </div>
        <div className="ccard__precis">
          <div className="pcant">
            <h3 className="pcant__title">Cant.</h3>
            <div className="pcant__content">
              <div
                className="pcant__content-minus"
                onClick={() => decrease(productId)}
              >
                <span>-</span>
              </div>
              <div>{productQuantity}</div>
              <div
                className="pcant__content-plus"
                onClick={() => increase(productId)}
              >
                <span>+</span>
              </div>
            </div>
          </div>
          <div>
            <span className="ccard__preci ccard__preci--before">
              {productName}
            </span>
            <span className="ccard__preci ccard__preci--now">
              ${productPrice}
            </span>
          </div>
          <Link className="ccard__icon" onClick={() => removeItem(productId)}>
            <BsTrash />
          </Link>
        </div>
      </article>
    </>
  );
}
