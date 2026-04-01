import React from 'react';
import products from './JSON/json.js'
import Cart from './Cart.jsx';


const Carts = ({handleCartCount}) => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            {products.map(product => <Cart key={product.id} product={product} handleCartCount={handleCartCount}></Cart>)}
        </div>
    );
};

export default Carts;