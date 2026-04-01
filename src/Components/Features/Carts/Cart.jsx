import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Cart = ({ product, handleCartCount, removeCart}) => {
    const [remove, setRemove] = useState(false)
    return (
        <div className={`bg-[#f9fafc] rounded-lg p-5 flex gap-2 flex-col sm:flex-row justify-center text-center sm:text-left md:justify-baseline items-center cartRevelScroll ${removeCart === "clear" && "remove"} ${remove === true && "remove"}`} style={{ animationRange: `entry ${10 + product.id * 5}% cover 30%`}}>
            <div className='w-13 h-13 bg-white rounded-full p-3'>
                <img className='w-full' src={`/assets/products/${product.icon}`} />
            </div>
            <div className='flex flex-col'>
                <p className='font-bold text-base'>{product.name}</p>
                <p className='text-[15px] text-[#627382]'>${product.price}</p>
            </div>
            <button className='mx-auto sm:mx-0 sm:ml-auto text-[#ff3980] font-bold cursor-pointer' onClick={() => {
                setRemove(true)
                setTimeout(() => handleCartCount(-1, product.id, "cut"), 400)
                toast.success(`You remove ${product.name} feature from you cart`, {autoClose: 1500})
                }}>Remove</button>
        </div>
    );
};

export default Cart;