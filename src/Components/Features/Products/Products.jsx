import React from 'react';
import products from '../JSON/json.js'
import Product from './Product.jsx';


const Products = ({handleCartCount, cartProducts}) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-0 gap-y-2 md:gap-y-2 xl:gap-5 place-items-center cartRevel`}>
            {products.map(product => <Product key={product.id} product={product} handleCartCount={handleCartCount} cartProducts={cartProducts}></Product>)}
        </div>
    );
};

export default Products;