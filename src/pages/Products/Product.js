import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useGlobleContext } from "../../hooks/useGlobal";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

export default function Product() {
  const { product } = useGlobleContext();
  // eslint-disable-next-line 
  const [products, setProducts] = useState(product);
  const [pageNumber, setPageNumber] = useState(0);
  window.scrollTo(0, 0);

  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = products
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
  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main className="l-main">
      <section className="featured section" id="shop">
        <h2 className="section-title">ALL PRODUCT</h2>
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
        {/* <div className="sneaker__pages bd-grid">
                <div className="sneaker__pages-container">
                    <span className="sneaker__pag">1</span>
                    <span className="sneaker__pag">2</span>
                    <span className="sneaker__pag">3</span>
                    <span className="sneaker__pag">4</span>
                    <span className="sneaker__pag">→</span>
                </div>
                </div> */}
      </section>
    </main>
  );
}
