import React from 'react';
import products from '../JSON/json.js'
import Product from './Product.jsx';


const Products = ({handleCartCount, cartProducts}) => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            {products.map(product => <Product key={product.id} product={product} handleCartCount={handleCartCount} cartProducts={cartProducts}></Product>)}
        </div>
    );
};

export default Products;