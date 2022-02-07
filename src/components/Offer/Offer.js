import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

export default function Offer() {
  const [offer] = useState(data.dataOffer);
  return (
    <div className="offer section">
      <div className="offer__container bd-grid">
        <div className="offer__data">
          <h3 className="offer__title">{offer.offerTitle}</h3>
          <p className="offer__description">{offer.offerDescription}</p>
          <Link className="button">Shop Now</Link>
        </div>
        <img src={offer.offerImage} alt="" className="offer__img" />
      </div>
    </div>
  );
}
