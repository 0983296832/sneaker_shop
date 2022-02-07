import React from 'react'
import {Link} from 'react-router-dom'
import { BiRightArrowAlt } from "react-icons/bi";

export default function Women({ womenId, womenName, womenPrice, womenImage }) {
    return (
                <article className="sneaker">
                    <img src={womenImage} alt="" className="sneaker__img" />
                    <span className="sneaker__name">{womenName}</span>
                    <span className="sneaker__price">${womenPrice}</span>
                     <Link to={`/product/${womenId}`} className="button-light"> Add to cart <BiRightArrowAlt/></Link>
                </article>
    )
}
