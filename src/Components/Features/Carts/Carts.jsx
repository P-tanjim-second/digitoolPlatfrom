import React, { useState } from 'react';
import Cart from './Cart';
import { toast } from 'react-toastify';

const Carts = ({ handleCartCount, cartProducts }) => {
    const [removeCart , setRemoveCart] = useState("")
    const totalPrice = () => {
        const totalPrice = cartProducts.reduce((sum, product) => product.price + sum, 0);
        return totalPrice
    }
    const handleCartRemove = (state) => {
        setRemoveCart(state)
        setTimeout(() => handleCartCount(0, null, "clear", 0), 400)
    }
    return (
        <div className={`shadow-sm rounded-lg p-5 w-[80%] mx-auto text-left space-y-5 cartRevel`}>
            <h3 className='text-xl font-bold'>Your Cart</h3>
            <div className='flex flex-col gap-2.5'>
                {
                    cartProducts.length !== 0? cartProducts.map(product => <Cart key={product.id} handleCartCount={handleCartCount} product={product} removeCart={removeCart}></Cart>) : 
                    <div className='flex flex-col justify-center items-center scaleUp'>
                        <div className='w-50'>
                            <img src={`/assets/noImp.jpg`} className='w-full'/>
                        </div>
                        <h2 className='text-2xl font-medium'>No Product selected</h2>
                    </div>
                }
            </div>

            <div className='flex justify-between'>
                <p className='text-[#627382] text-[14px]'>Total:</p>
                <p className='font-bold text-lg'>${cartProducts.length === 0 ? "0": totalPrice()}</p>
            </div>
            <button className={`btn btn-block bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full ${cartProducts.length === 0 ? "pointer-events-none": ""}`} onClick={() => {
                toast.success( `Cart proceed. Total amount: $${totalPrice()}`, {autoClose: 1500})
                handleCartRemove("clear");
            }}>Proceed to Checkout</button>
        </div> 
    )
};

export default Carts;