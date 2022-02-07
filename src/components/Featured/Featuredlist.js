import React, { useState } from "react";
import Featured from "./Featured";
import { useGlobleContext } from "../../hooks/useGlobal";

export default function Featuredlist() {
  const { product } = useGlobleContext();
  const newproduct = product.filter(
    (item) => item.productCatalog === "featured"
  );
  const [featuredList] = useState(newproduct.slice(0, 3));

  return (
    <section className="featured section" id="featured">
      <h2 className="section-title">FEATURED</h2>
      <div className="featured__container bd-grid">
        {featuredList.map((featured) => {
          return (
            <Featured
              key={featured.productId}
              featuredId={featured.productId}
              featuredName={featured.productName}
              featuredPrice={featured.productPrice}
              featuredImage={featured.productImage}
              featuredCatalog={featured.producCatalog}
            />
          );
        })}
      </div>
    </section>
  );
}
