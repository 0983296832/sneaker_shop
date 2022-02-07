import React from "react";
import { Link } from "react-router-dom";
import { pictures } from "../../assets";
export default function Header() {
  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <div className="home__sneaker">
          <div className="home__shape" />
          <img src={pictures.imghome} alt="" className="home__img" />
        </div>
        <div className="home__data">
          <span className="home__new">New in</span>
          <h1 className="home__title">
            YEEZY BOOST <br /> SPLY - 350
          </h1>
          <p className="home__description">
            Explore the new collection of sneakers
          </p>
          <Link to="/products" className="button">
            Explore now
          </Link>
        </div>
      </div>
    </section>
  );
}
