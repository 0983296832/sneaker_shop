import React, { useState } from "react";
import Women from "./Women";
import { useGlobleContext } from "../../hooks/useGlobal";

export default function Womenlist() {
  const { product } = useGlobleContext();
  const newProduct = product.filter((item) => item.productCatalog === "women");
  const [womenList] = useState(newProduct.slice(0, 4));
  return (
    <section className="women section" id="women">
      <h2 className="section-title">WOMEN SNEAKERS</h2>
      <div className="women__container bd-grid">
        {womenList.map((women) => {
          return (
            <Women
              key={women.productId}
              womenId={women.productId}
              womenName={women.productName}
              womenPrice={women.productPrice}
              womenImage={women.productImage}
              womenCatalog={women.producCatalog}
            />
          );
        })}
      </div>
    </section>
  );
}
