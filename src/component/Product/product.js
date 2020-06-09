import React from 'react';
import './product.css';

const Product = (props) => {
    // console.log(props);

    const {img, name} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4>{name}</h4> <br/>
                <p><small>by:(seller)</small></p>
                <p>$<small>(price)</small></p><br/>
                <p><small>Only (stock) left soon oder now</small></p>
                <button 
                className="main-btn"
                onClick={() => props.handleAddProduct(props.product)}
                > add to cart
                </button>
            </div>
          
        </div>
    );
};

export default Product;