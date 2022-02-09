import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Filter from "../../components/Filter/Filter";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Product() {
  const product = useSelector((state) => state.search);
  const [pageNumber, setPageNumber] = useState(0);
  window.scrollTo(0, 0);

  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = product
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item) => {
      return (
        <article className="sneaker" key={item.productId}>
          <img src={item.productImage} alt="" className="sneaker__img" />
          <span className="sneaker__name">{item.productName}</span>
          <span className="sneaker__price">${item.productPrice}</span>
          <Link to={`/product/${item.productId}`} className="button-light">
            {" "}
            Add to cart <BiRightArrowAlt />
          </Link>
        </article>
      );
    });
  const pageCount = Math.ceil(product.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main className="l-main">
      <section className="featured section" id="shop">
        <h2 className="section-title">ALL PRODUCT</h2>
        <Filter />
        <div className="featured__container bd-grid">{displayProducts}</div>
        <div className="sneaker__pages bd-grid">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"sneaker__pages-container"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </section>
    </main>
  );
}
