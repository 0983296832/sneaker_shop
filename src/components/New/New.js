import React from 'react'
import {Link} from 'react-router-dom'
export default function New( {newImage,newId} ) {
    return (
                    <div className="new__sneaker-card">
                        <img src={newImage} alt="" className="new__sneaker-img" />
                        <div className="new__sneaker-overlay">
                        <Link to={`/product/${newId}`} className="button">Add to Cart</Link>
                        </div>
                    </div>
                    
    )
}
