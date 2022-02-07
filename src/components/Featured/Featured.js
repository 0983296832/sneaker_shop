import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Featured({
  featuredId,
  featuredName,
  featuredPrice,
  featuredImage,
}) {
  return (
    <article className="sneaker" key={featuredId}>
      <div className="sneaker__sale">Sale</div>
      <img src={featuredImage} alt="" className="sneaker__img" />
      <span className="sneaker__name">{featuredName}</span>
      <span className="sneaker__price">${featuredPrice}</span>
      <Link to={`/product/${featuredId}`} className="button-light">
        {" "}
        Add to cart <BiRightArrowAlt />
      </Link>
    </article>
  );
}
