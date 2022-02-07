import React, { useState } from "react";
import "./Productcart.css";
import { Link, useParams } from "react-router-dom";
import { useGlobleContext } from "../../hooks/useGlobal";
// import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Productcart() {
  const { product, addToCart } = useGlobleContext();
  const { id } = useParams();
  const [productItem] = useState(
    product.find((item) => item.productId === parseInt(id))
  );

  window.scrollTo(0, 0);

  // const [ bagItem, setBagItem ] = useState(cartItem)
  // const [ amountItem, setAmountItem ] = useState(amount)

  // const onAdd = (prod) =>{
  //     const exist = bagItem.find(item => item.productId === prod.productId)
  //     if(exist) {
  //         setBagItem(bagItem.map(item => item.productId === prod.productId ? {...exist, productQuantity: exist.productQuantity + 1 } : item ))
  //     }else {
  //         setBagItem([...bagItem, {...prod, productQuantity: 1}])
  //         setAmountItem(amountItem+1)
  //     }
  // }
  return (
    <main className="pl-main pbd-grid">
      <div className="phome">
        {/* ===== SNEAKER ===== */}
        <div className="psneaker">
          <div className="psneaker__figure"></div>
          <div>
            <img
              src={productItem.productImage}
              alt=""
              className="psneaker__img pshows"
              color="#A29596"
            />
            <img
              src={productItem.productImage}
              alt=""
              className="psneaker__img"
              color="#111111"
            />
          </div>
          <div className="psneaker__colors">
            <span
              className="psneaker__color psneaker__colors-one pactive"
              primary="#A29596"
              color="#A29596"
            />
            <span
              className="psneaker__color psneaker__colors-two "
              primary="#111111"
              color="#111111"
            />
          </div>
        </div>
        {/* ===== IFORMACION ===== */}
        <div className="pinfo">
          {/* ===== DATA ===== */}
          <div className="pdata">
            <span className="pdata__subtitle">{productItem.productBrands}</span>
            <h1 className="pdata__title">{productItem.productName}</h1>
            <p className="pdata__description">
              Combinan la malla transpirable sin costuras para <br /> un estilo
              tradicional.
            </p>
          </div>
          {/* ===== ACTIONS ===== */}
          <div className="pactions">
            {/* ===== SIZE ===== */}
            {/* <div className="psize">
                    <h3 className="psize__title">Size</h3>
                    <div className="psize__content">
                        <span className="psize__tallas pactive">
                        8.5
                        </span>
                        <span className="psize__tallas">
                        9
                        </span>
                        <span className="psize__tallas">
                        9.5
                        </span>
                    </div>
                    </div> */}
            {/* ===== CANT ===== */}
            {/* <div className="pcant">
                    <h3 className="pcant__title">Cant.</h3>
                    <div className="pcant__content"> 
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    </div> */}
          </div>
          {/* ===== PRECI ===== */}
          <div className="ppreci">
            <span className="ppreci__title">${productItem.productPrice}</span>
            <Link
              className="ppreci__button"
              onClick={() => addToCart(productItem)}
            >
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
